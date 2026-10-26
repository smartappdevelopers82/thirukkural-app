import React, { useState } from 'react';
import { ALL_133_ATHIGARAMS } from '../data/allAthigarams';

interface MuktaHeaderProps {
  savedCount: number;
  showSavedOnly: boolean;
  onToggleSavedFilter: () => void;
  onSelectAthigaram: (athigaramName: string) => void;
  onSelectPaal: (paalName: string) => void;
  selectedAthigaram: string;
}

export const MuktaHeader: React.FC<MuktaHeaderProps> = ({
  savedCount,
  showSavedOnly,
  onToggleSavedFilter,
  onSelectAthigaram,
  onSelectPaal,
  selectedAthigaram,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerActivePaal, setDrawerActivePaal] = useState<string>("அறத்துப்பால்");

  // Sync drawer tab with the selected chapter's paal when drawer is opened
  React.useEffect(() => {
    if (drawerOpen && selectedAthigaram) {
      const match = ALL_133_ATHIGARAMS.find(c => c.name === selectedAthigaram);
      if (match) {
        setDrawerActivePaal(match.paal);
      }
    }
  }, [drawerOpen, selectedAthigaram]);

  const paals = [
    { name: "அறத்துப்பால்", count: 38 },
    { name: "பொருட்பால்", count: 70 },
    { name: "காமத்துப்பால்", count: 25 },
  ];

  const handleAthigaramClick = (name: string) => {
    onSelectAthigaram(name);
    setDrawerOpen(false);
  };

  // Group chapters by Iyal for active drawer paal
  const getIyalsForPaal = (paalName: string) => {
    const chapters = ALL_133_ATHIGARAMS.filter(c => c.paal === paalName);
    const iyalMap = new Map<string, typeof chapters>();
    chapters.forEach(c => {
      if (!iyalMap.has(c.iyal)) {
        iyalMap.set(c.iyal, []);
      }
      iyalMap.get(c.iyal)!.push(c);
    });
    return Array.from(iyalMap.entries());
  };

  const drawerIyals = getIyalsForPaal(drawerActivePaal);

  return (
    <>
      <header className="bg-[#0f172a] text-white fixed top-0 left-0 right-0 z-50 font-mukta shadow-md">
        {/* Top Header Bar matching image_b6328f29.png */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Brand Container */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-white hover:text-[#f59e0b] p-1 transition-colors cursor-pointer flex items-center justify-center rounded-lg hover:bg-white/10"
              aria-label="Open Navigation Drawer"
            >
              <span className="material-symbols-outlined text-[26px] leading-none select-none">
                menu
              </span>
            </button>

            <button
              onClick={() => {
                onSelectPaal('all');
                onSelectAthigaram('கடவுள் வாழ்த்து');
              }}
              className="text-left cursor-pointer group flex flex-col"
            >
              <div className="text-xl sm:text-2xl font-bold text-[#f59e0b] tracking-wide leading-tight group-hover:text-amber-400 transition-colors">
                திருக்குறள்
              </div>
              <div className="text-xs text-[#94a3b8] tracking-normal font-light">
                உலகப் பொதுமறை
              </div>
            </button>
          </div>

          {/* Right: Saved Count Badge — only numbers (Icon: {savedCount}) */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleSavedFilter}
              title={showSavedOnly ? "அனைத்து குறள்களையும் காட்டு" : "சேமித்த குறள்கள்"}
              className={`bg-[#0f172a] border border-[#f59e0b] text-[#f59e0b] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer hover:bg-[rgba(245,158,11,0.15)] shadow-xs ${
                showSavedOnly ? 'ring-2 ring-[#f59e0b] bg-[rgba(245,158,11,0.2)]' : ''
              }`}
            >
              <span
                className={`material-symbols-outlined text-[18px] sm:text-[20px] leading-none text-[#f59e0b] select-none ${
                  savedCount > 0 || showSavedOnly ? 'filled' : ''
                }`}
                style={{ fontVariationSettings: savedCount > 0 || showSavedOnly ? "'FILL' 1" : "'FILL' 0" }}
              >
                {savedCount > 0 || showSavedOnly ? 'bookmark' : 'bookmark_border'}
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm">{savedCount}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Header Spacer to preserve document layout */}
      <div className="h-[60px] sm:h-[64px] shrink-0" aria-hidden="true" />

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-black/60 z-[250] transition-opacity"
        />
      )}

      {/* Drawer matching image_41968692.png with Material Icons */}
      <div
        className={`fixed top-0 left-0 w-[320px] sm:w-[350px] h-full bg-white z-[300] shadow-2xl transition-transform duration-300 overflow-y-auto font-mukta p-5 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-100 mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] leading-tight">அதிகாரங்கள்</h3>
            <div className="text-xs text-slate-500 font-light mt-0.5">133 அதிகாரங்கள் & முப்பால்</div>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-800 cursor-pointer flex items-center justify-center rounded-lg hover:bg-slate-100"
            aria-label="Close Drawer"
          >
            <span className="material-symbols-outlined text-[22px] leading-none select-none">
              close
            </span>
          </button>
        </div>

        {/* Paal Selector Pill Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg mb-4 text-xs">
          {paals.map((p) => (
            <button
              key={p.name}
              onClick={() => setDrawerActivePaal(p.name)}
              className={`flex-1 py-1.5 px-1 rounded text-center font-bold transition-all cursor-pointer ${
                drawerActivePaal === p.name
                  ? 'bg-[#0f172a] text-[#f59e0b] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {p.name.replace('ப்பால்', '')}
            </button>
          ))}
        </div>

        {/* Selected Paal Card with Dark Header Banner */}
        <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
          <div className="bg-[#0f172a] text-white px-4 py-2.5 flex items-center justify-between font-bold text-sm">
            <span>{drawerActivePaal}</span>
            <span className="text-[#f59e0b] font-mono">
              {paals.find(p => p.name === drawerActivePaal)?.count}
            </span>
          </div>

          <div className="p-3 space-y-4 max-h-[520px] overflow-y-auto">
            {drawerIyals.map(([iyalName, chapters]) => (
              <div key={iyalName}>
                <div className="text-xs font-semibold text-slate-500 mb-1.5 px-1">
                  {iyalName}
                </div>
                <div className="space-y-1">
                  {chapters.map((ath) => {
                    const isSelected = ath.name === selectedAthigaram;
                    return (
                      <button
                        key={ath.no}
                        ref={(el) => {
                          if (isSelected && el && drawerOpen) {
                            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                          }
                        }}
                        onClick={() => handleAthigaramClick(ath.name)}
                        className={`w-full text-left px-2.5 py-1.5 text-xs sm:text-sm rounded-md transition-colors cursor-pointer block truncate ${
                          isSelected
                            ? 'bg-[#fef3c7] text-[#b45309] font-medium shadow-2xs'
                            : 'text-[#1e3a8a] sm:text-[#334155] hover:bg-[#fef3c7]/60 hover:text-[#b45309]'
                        }`}
                      >
                        {ath.no}. {ath.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
