import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TopNavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ activeSection, onNavigate }) => {
  const googleSitesUrl = "https://sites.google.com/d/1vxMix1ZI3DOrTgZ9mcIh_fIbG-s-rXlk/p/1ETIzdBCApy0gSJvLsJcY5kmKW7lJLYcU/edit";

  const navItems = [
    { id: 'guide', label: 'தள வழிகாட்டி' },
    { id: 'kural', label: 'திருக்குறள்' },
    { id: 'aathichudi', label: 'ஆத்திச்சூடி' },
    { id: 'embed', label: 'விட்ஜெட் கோட்' },
    { id: 'palette', label: 'வண்ணத் தட்டு' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#1B1B1B]/10 text-[#1B1B1B]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Title Group (Serif + Monospace Meta Label) */}
          <div className="flex items-baseline gap-3 shrink-0">
            <button
              onClick={() => onNavigate('hero')}
              className="text-left cursor-pointer group flex items-baseline gap-2.5"
            >
              <h1 className="font-garamond text-2xl sm:text-3xl font-semibold tracking-tight text-[#1B1B1B] group-hover:text-[#B8860B] transition-colors">
                திருக்குறள்
              </h1>
              <span className="meta-label text-[#B8860B] hidden sm:inline">
                தமிழ் இலக்கிய மரபு
              </span>
            </button>
          </div>

          {/* Zone 2: Monospace Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`font-space-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer relative py-2 ${
                    isActive
                      ? 'text-[#B8860B] font-bold border-b-2 border-[#B8860B]'
                      : 'text-[#1B1B1B]/75 hover:text-[#1B1B1B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={googleSitesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-space-mono uppercase tracking-wider bg-[#1B1B1B] text-white hover:bg-[#B8860B] transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Google Sites</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-[#F0EEEA] border-t border-[#1B1B1B]/10 overflow-x-auto scrollbar-none text-xs">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`font-space-mono text-[11px] whitespace-nowrap px-3 py-1 rounded transition-colors ${
              activeSection === item.id
                ? 'bg-[#1B1B1B] text-[#B8860B] font-bold'
                : 'text-[#1B1B1B]/80 hover:text-[#1B1B1B]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
