import React, { useState } from 'react';
import { THEME_PALETTE, TYPOGRAPHY_GUIDE } from '../data/googleSitesGuide';
import { Palette, Copy, Check, Type } from 'lucide-react';

interface ThemePaletteSectionProps {
  onCopySuccess: (msg: string) => void;
}

export const ThemePaletteSection: React.FC<ThemePaletteSectionProps> = ({ onCopySuccess }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    onCopySuccess(`${name} (${hex}) நகலெடுக்கப்பட்டது!`);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const paletteCards = [
    {
      key: 'primary',
      data: THEME_PALETTE.primary,
      textColor: 'text-white',
      badge: 'முதன்மை நிறம் (Primary)'
    },
    {
      key: 'accent',
      data: THEME_PALETTE.accent,
      textColor: 'text-[#1B1B1B]',
      badge: 'பொன் நிறம் (Accent)'
    },
    {
      key: 'background',
      data: THEME_PALETTE.background,
      textColor: 'text-[#1B1B1B]',
      badge: 'பின்னணி நிறம் (Canvas)'
    },
    {
      key: 'cardSurface',
      data: THEME_PALETTE.cardSurface,
      textColor: 'text-[#1B1B1B]',
      badge: 'அட்டை மேற்பரப்பு'
    },
    {
      key: 'textPrimary',
      data: THEME_PALETTE.textPrimary,
      textColor: 'text-white',
      badge: 'முக்கிய உரை மை'
    },
    {
      key: 'textMuted',
      data: THEME_PALETTE.textMuted,
      textColor: 'text-white',
      badge: 'சாம்பல் குறிப்பு'
    }
  ];

  return (
    <section id="palette" className="py-12 sm:py-16 bg-[#F8F7F4] border-b border-[#1B1B1B]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left border-b border-[#1B1B1B]/10 pb-4">
          <span className="meta-label text-[#B8860B] font-bold">
            COLOR & TYPOGRAPHY SYSTEM FOR GOOGLE SITES
          </span>
          <h2 className="font-garamond text-3xl sm:text-4xl font-normal text-[#1B1B1B] mt-1">
            தள வண்ணத் தட்டு & எழுத்துரு நெறிகள்
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl font-light">
            Classic Tamil manuscript aesthetics engineered with modern high-contrast readability rules for Google Sites Themes.
          </p>
        </div>

        {/* 60-30-10 Color System Distribution Rule */}
        <div className="bg-white border border-[#1B1B1B]/10 p-6 shadow-xs mb-10">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1B1B1B]/10">
            <span className="meta-label text-[#1B1B1B] font-bold flex items-center gap-2">
              <Palette className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>60-30-10 வண்ணப் பங்கீட்டு விதி (Color Distribution Discipline)</span>
            </span>
            <span className="font-space-mono text-[10px] text-stone-400">WCAG AAA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="border border-[#1B1B1B]/10 p-4 bg-[#F8F7F4]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#1B1B1B] text-sm">60% பின்னணிப் பரப்பு</span>
                <span className="font-space-mono bg-white px-2 py-0.5 border border-stone-200 text-stone-600">#FAFAFA / #F8F7F4</span>
              </div>
              <p className="text-stone-600 leading-relaxed font-light">
                Soft Pearl Off-White. கண் கூசாத இதமான வாசிப்பு அனுபவத்தை மொபைல் மற்றும் கணினிகளில் உறுதி செய்கிறது.
              </p>
            </div>

            <div className="border border-[#1B1B1B]/10 p-4 bg-[#F8F7F4]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#1B1B1B] text-sm">30% கட்டமைப்புக் கூறுகள்</span>
                <span className="font-space-mono bg-white px-2 py-0.5 border border-stone-200 text-stone-600">#2C3E50 / #1B1B1B</span>
              </div>
              <p className="text-stone-600 leading-relaxed font-light">
                Deep Slate & Antique Ink. தத்துவ ஆழம், கம்பீரம் மற்றும் பாரம்பரிய ஓலைச்சுவடி மரபைக் குறிக்கும் முகப்பு மற்றும் தலைப்புகள்.
              </p>
            </div>

            <div className="border border-[#1B1B1B]/10 p-4 bg-[#F8F7F4]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#1B1B1B] text-sm">10% செழும் பொன் (Accent)</span>
                <span className="font-space-mono bg-white px-2 py-0.5 border border-stone-200 text-[#B8860B]">#D4AC0D / #B8860B</span>
              </div>
              <p className="text-stone-600 leading-relaxed font-light">
                Warm Gold. திருக்கோவில் பித்தளை விளக்கு, ஓலைச்சுவடி விளிம்பு மற்றும் முக்கிய குறள் சுட்டிகளை ஒளிரச் செய்ய மட்டுமே.
              </p>
            </div>
          </div>
        </div>

        {/* Color Palette Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {paletteCards.map(({ key, data, textColor, badge }) => {
            const isCopied = copiedHex === data.hex;
            return (
              <div
                key={key}
                className="bg-white border border-[#1B1B1B]/10 overflow-hidden shadow-xs hover:border-[#1B1B1B]/25 transition-all"
              >
                {/* Color Block */}
                <div
                  style={{ backgroundColor: data.hex }}
                  className={`h-24 p-4 flex flex-col justify-between ${textColor} border-b border-black/10 relative`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-space-mono text-[9px] uppercase px-1.5 py-0.5 bg-black/25 text-white">
                      {badge}
                    </span>
                    <button
                      onClick={() => handleCopy(data.hex, data.name)}
                      className="px-2 py-0.5 bg-black/30 hover:bg-black/50 text-[11px] font-space-mono transition-colors cursor-pointer flex items-center gap-1 text-white"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                      <span>{data.hex}</span>
                    </button>
                  </div>

                  <div>
                    <h4 className="font-garamond font-bold text-lg leading-tight">
                      {data.nameTa}
                    </h4>
                    <span className="text-[11px] opacity-90 font-space-mono">{data.name}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 text-xs space-y-2 bg-white">
                  <div>
                    <span className="font-space-mono text-[10px] text-stone-400 uppercase block">பயன்பாடு (Usage)</span>
                    <span className="text-stone-700">{data.usage}</span>
                  </div>
                  <div>
                    <span className="font-space-mono text-[10px] text-stone-400 uppercase block">தத்துவப் பொருள்</span>
                    <span className="text-stone-600 font-light">{data.meaning}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Typography Scale Table */}
        <div className="bg-white border border-[#1B1B1B]/10 shadow-xs">
          <div className="bg-[#1B1B1B] text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-garamond text-lg font-normal flex items-center gap-2">
              <Type className="w-4 h-4 text-[#B8860B]" />
              <span>கூகிள் சைட்ஸ் எழுத்துருப் படிநிலை அட்டவணை (Typography Hierarchy)</span>
            </h3>
            <span className="font-space-mono text-[10px] text-[#B8860B]">NOTO SERIF TAMIL + SPACE MONO</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8F7F4] border-b border-[#1B1B1B]/10 text-stone-600 font-space-mono text-[10px] uppercase">
                <tr>
                  <th className="py-3 px-4">Google Sites Role</th>
                  <th className="py-3 px-4">பரிந்துரைக்கப்பட்ட எழுத்துரு</th>
                  <th className="py-3 px-4">Weight & Size</th>
                  <th className="py-3 px-4">Color</th>
                  <th className="py-3 px-4">எதற்குப் பொருந்தும்?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {TYPOGRAPHY_GUIDE.map((typo, idx) => (
                  <tr key={idx} className="hover:bg-stone-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#1B1B1B]">
                      {typo.role}
                    </td>
                    <td className="py-3.5 px-4 font-garamond text-sm">
                      {typo.tamilFont}
                    </td>
                    <td className="py-3.5 px-4 font-space-mono text-[11px] text-stone-600">
                      {typo.weight} · {typo.size}
                    </td>
                    <td className="py-3.5 px-4 font-space-mono text-[11px] text-stone-800">
                      {typo.color}
                    </td>
                    <td className="py-3.5 px-4 text-stone-600 font-light">
                      {typo.appliedTo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
