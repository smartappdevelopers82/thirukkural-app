import React, { useState, useMemo } from 'react';
import { KuralItem } from '../data/thirukkuralData';
import { ALL_133_ATHIGARAMS } from '../data/allAthigarams';
import { getKuralsForAthigaram, getKuralByNumber, searchKurals } from '../data/kuralGenerator';

interface MuktaKuralPortalProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedPaal: string;
  setSelectedPaal: (paal: string) => void;
  selectedAthigaram: string;
  setSelectedAthigaram: (athigaram: string) => void;
  savedKurals: number[];
  onToggleBookmark: (num: number) => void;
  showSavedOnly: boolean;
  onClearFilters: () => void;
  onCopySuccess: (msg: string) => void;
}

export const MuktaKuralPortal: React.FC<MuktaKuralPortalProps> = ({
  searchQuery,
  setSearchQuery,
  selectedPaal,
  setSelectedPaal,
  selectedAthigaram,
  setSelectedAthigaram,
  savedKurals,
  onToggleBookmark,
  showSavedOnly,
  onClearFilters,
  onCopySuccess,
}) => {
  const [copiedNum, setCopiedNum] = useState<number | null>(null);
  const [currentChapterNo, setCurrentChapterNo] = useState<number>(1);
  const [isTodayKuralOpen, setIsTodayKuralOpen] = useState<boolean>(false);
  const [todayKural, setTodayKural] = useState<KuralItem | null>(null);

  // Deterministic Today's Kural based on calendar date
  const getTodayKuralItem = (): KuralItem => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const kuralNo = ((dayOfYear * 17 + now.getFullYear() * 3) % 1330) + 1;
    return getKuralByNumber(kuralNo) || getKuralByNumber(1)!;
  };

  const handleOpenTodayKural = () => {
    if (!todayKural) {
      setTodayKural(getTodayKuralItem());
    }
    setIsTodayKuralOpen(true);
  };


  // Close popup with Escape key & lock scroll when open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsTodayKuralOpen(false);
      }
    };
    if (isTodayKuralOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isTodayKuralOpen]);

  // Sync currentChapterNo when selectedAthigaram changes externally (e.g. from Mega Menu or Drawer)
  React.useEffect(() => {
    if (selectedAthigaram !== 'all') {
      const found = ALL_133_ATHIGARAMS.find(c => c.name === selectedAthigaram);
      if (found) {
        setCurrentChapterNo(found.no);
      }
    }
  }, [selectedAthigaram]);

  // Determine list of Kurals to display
  const displayedKurals = useMemo(() => {
    // 1. Saved Kurals view
    if (showSavedOnly) {
      const allFound: KuralItem[] = [];
      for (const num of savedKurals) {
        const item = getKuralByNumber(num);
        if (item) {
          allFound.push(item);
        }
      }
      return allFound;
    }

    // 2. Search query view across all 1,330 Kurals
    if (searchQuery.trim()) {
      return searchKurals(searchQuery);
    }

    // 3. Paal selection view (if not 'all' and not single athigaram)
    if (selectedPaal !== 'all' && selectedAthigaram === 'all') {
      const chaptersInPaal = ALL_133_ATHIGARAMS.filter(c => c.paal === selectedPaal);
      const activeChapter = chaptersInPaal.find(c => c.no === currentChapterNo) || chaptersInPaal[0];
      return getKuralsForAthigaram(activeChapter.no);
    }

    // 4. Default Chapter View: Load all 10 authentic kurals of current chapter
    return getKuralsForAthigaram(currentChapterNo);
  }, [showSavedOnly, savedKurals, searchQuery, selectedPaal, selectedAthigaram, currentChapterNo]);

  const handleCopyCard = (item: KuralItem) => {
    const formatted = `குறள் #${String(item.number).padStart(4, '0')}: அதிகாரம்: ${item.athigaram} (${item.paal} • ${item.iyal})

${item.line1}
${item.line2}

பொருள்:
${item.meaning}`;

    navigator.clipboard.writeText(formatted);
    setCopiedNum(item.number);
    onCopySuccess(`குறள் #${item.number} நகலெடுக்கப்பட்டது!`);
    setTimeout(() => setCopiedNum(null), 2000);
  };


  return (
    <div className="w-full max-w-[900px] mx-auto px-3 sm:px-4 py-4 sm:py-6 font-mukta overflow-x-hidden box-border">
      {/* 1. Search Box matching image_b6328f29.png */}
      <div className="bg-white border border-[#e2e8f0] rounded-xl p-2 sm:p-2.5 flex items-center justify-between gap-2 sm:gap-3 shadow-xs mb-5 sm:mb-6 w-full box-border">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 pl-2 min-w-0">
          {/* Material Icon: Search */}
          <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-indigo-500 shrink-0 select-none">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="குறள் எண், சொற்கள் அல்லது அதிகாரம் தேடுக..."
            className="border-none outline-none w-full text-xs sm:text-[15px] text-[#1e293b] placeholder-slate-400 bg-transparent font-mukta truncate"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 cursor-pointer shrink-0 flex items-center justify-center"
              aria-label="Clear Search"
            >
              <span className="material-symbols-outlined text-[18px] leading-none select-none">
                close
              </span>
            </button>
          )}
        </div>

        {/* Today Kural button on right */}
        <button
          onClick={handleOpenTodayKural}
          className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-1.5 shrink-0 transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
          title="இன்றைய குறள்"
        >
          <span className="material-symbols-outlined text-[16px] sm:text-[18px] leading-none select-none">
            shuffle
          </span>
          <span>இன்றைய குறள்</span>
        </button>
      </div>

      {/* Kural Cards directly below Search Bar */}
      {displayedKurals.length === 0 ? (
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 sm:p-12 text-center my-6 w-full box-border">
          <div className="text-3xl mb-2">📜</div>
          <div className="text-[#64748b] font-medium text-base">குறள்கள் எதுவும் கிடைக்கவில்லை.</div>
          <p className="text-xs text-slate-400 mt-1">தயவுசெய்து வேறு சொல் அல்லது எண்ணைத் தேடவும்.</p>
          <button
            onClick={() => {
              onClearFilters();
              setCurrentChapterNo(1);
            }}
            className="mt-4 px-4 py-2 bg-[#0f172a] text-[#f59e0b] font-semibold text-xs rounded-lg cursor-pointer"
          >
            அனைத்து குறள்களையும் காட்டு (Reset)
          </button>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6 w-full box-border">
          {displayedKurals.map((item) => {
            const isSaved = savedKurals.includes(item.number);
            const isCopied = copiedNum === item.number;

            return (
              <div
                key={item.number}
                className="bg-white rounded-xl border border-[#e2e8f0] border-l-[5px] border-l-[#f59e0b] p-4 sm:p-6 shadow-xs hover:shadow-sm transition-all w-full box-border overflow-hidden"
              >
                {/* Header Row: Meta & Title on left (min-w-0 flex-1), Badge & Action Icons flush on right */}
                <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3.5 sm:mb-4 w-full box-border">
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs text-slate-500 font-semibold tracking-wide truncate">
                      {item.paal} • {item.iyal}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mt-0.5 leading-snug break-words">
                      அதிகாரம்: {item.athigaram}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 self-start">
                    <span className="bg-[#0f172a] text-[#f59e0b] text-[11px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-md font-mono tracking-wide whitespace-nowrap">
                      குறள் #{String(item.number).padStart(4, '0')}
                    </span>

                    {/* Bookmark Button with Material Icon */}
                    <button
                      onClick={() => onToggleBookmark(item.number)}
                      title={isSaved ? "சேமிப்பிலிருந்து நீக்கு" : "சேமிக்க"}
                      className="p-1 rounded hover:bg-slate-100 transition-colors cursor-pointer shrink-0 flex items-center justify-center text-[#f59e0b]"
                      aria-label="Bookmark Kural"
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] leading-none select-none text-[#f59e0b] ${
                          isSaved ? 'filled' : ''
                        }`}
                        style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        {isSaved ? 'bookmark' : 'bookmark_border'}
                      </span>
                    </button>

                    {/* Copy Button with Material Icon */}
                    <button
                      onClick={() => handleCopyCard(item)}
                      title="நகலெடு (Copy)"
                      className="p-1 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 flex items-center justify-center"
                      aria-label="Copy Kural"
                    >
                      <span className={`material-symbols-outlined text-[19px] leading-none select-none ${isCopied ? 'text-emerald-600' : 'text-slate-500'}`}>
                        {isCopied ? 'check' : 'content_copy'}
                      </span>
                    </button>


                  </div>
                </div>

                {/* Couplet Box matching image_b6328f29.png */}
                <div className="bg-[#f8fafc] rounded-lg p-3.5 sm:p-5 mb-3 sm:mb-4 border border-[#f1f5f9] w-full box-border">
                  <div className="text-base sm:text-[19px] font-bold text-[#0f172a] leading-[1.6] break-words">
                    {item.line1}
                  </div>
                  <div className="text-base sm:text-[19px] font-bold text-[#0f172a] leading-[1.6] mt-0.5 break-words">
                    {item.line2}
                  </div>
                </div>

                {/* Meaning Card matching image_b6328f29.png */}
                <div className="bg-[#fffbeb] border border-[#fde68a] rounded-lg p-3.5 sm:p-4 w-full box-border">
                  <div className="text-xs font-bold text-[#b45309] mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] leading-none select-none">
                      menu_book
                    </span>
                    <span>பொருள்:</span>
                  </div>
                  <div className="text-xs sm:text-sm text-[#78350f] leading-[1.5] break-words">
                    {item.meaning}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}


      {/* Today Kural Dialog / Popup with 50% Black Background and Close Icon */}
      {isTodayKuralOpen && todayKural && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsTodayKuralOpen(false);
          }}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden relative flex flex-col max-h-[90vh] animate-scale-up"
            role="dialog"
            aria-modal="true"
            aria-labelledby="today-kural-title"
          >
            {/* Modal Header */}
            <div className="bg-[#0f172a] text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#f59e0b] text-[22px] select-none">
                  shuffle
                </span>
                <div>
                  <h2 id="today-kural-title" className="text-base sm:text-lg font-bold text-[#f59e0b] leading-tight">
                    இன்றைய குறள்
                  </h2>
                  <p className="text-[11px] text-slate-400 font-light">
                    திருக்குறள் • தினமொரு நல்வழி
                  </p>
                </div>
              </div>

              {/* Close Icon Button */}
              <button
                onClick={() => setIsTodayKuralOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <span className="material-symbols-outlined text-[22px] leading-none select-none">
                  close
                </span>
              </button>
            </div>

            {/* Modal Body: Only One Kural Display */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
              {/* Meta & Header Row */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-500 font-semibold tracking-wide">
                    {todayKural.paal} • {todayKural.iyal}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mt-0.5 leading-snug">
                    அதிகாரம்: {todayKural.athigaram}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="bg-[#0f172a] text-[#f59e0b] text-xs font-bold px-2.5 py-1 rounded-md font-mono">
                    குறள் #{String(todayKural.number).padStart(4, '0')}
                  </span>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleBookmark(todayKural.number)}
                    title={savedKurals.includes(todayKural.number) ? "சேமிப்பிலிருந்து நீக்கு" : "சேமிக்க"}
                    className="p-1 rounded hover:bg-slate-100 transition-colors cursor-pointer text-[#f59e0b]"
                    aria-label="Bookmark Kural"
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] leading-none select-none text-[#f59e0b] ${
                        savedKurals.includes(todayKural.number) ? 'filled' : ''
                      }`}
                      style={{ fontVariationSettings: savedKurals.includes(todayKural.number) ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {savedKurals.includes(todayKural.number) ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyCard(todayKural)}
                    title="நகலெடு (Copy)"
                    className="p-1 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                    aria-label="Copy Kural"
                  >
                    <span className={`material-symbols-outlined text-[19px] leading-none select-none ${copiedNum === todayKural.number ? 'text-emerald-600' : 'text-slate-500'}`}>
                      {copiedNum === todayKural.number ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Couplet Box */}
              <div className="bg-[#f8fafc] rounded-xl p-4 sm:p-5 border border-slate-200">
                <div className="text-base sm:text-[18px] font-bold text-[#0f172a] leading-[1.65]">
                  {todayKural.line1}
                </div>
                <div className="text-base sm:text-[18px] font-bold text-[#0f172a] leading-[1.65] mt-1">
                  {todayKural.line2}
                </div>
              </div>

              {/* Meaning Box */}
              <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-4">
                <div className="text-xs font-bold text-[#b45309] mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] leading-none">menu_book</span>
                  <span>பொருள்:</span>
                </div>
                <div className="text-xs sm:text-sm text-[#78350f] leading-relaxed">
                  {todayKural.meaning}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
