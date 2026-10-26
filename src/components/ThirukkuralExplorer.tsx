import React, { useState } from 'react';
import { THIRUKKURAL_DATA, PAAL_CATEGORIES, KuralItem } from '../data/thirukkuralData';
import { Search, Volume2, Copy, Check, Shuffle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface ThirukkuralExplorerProps {
  onCopySuccess: (msg: string) => void;
}

export const ThirukkuralExplorer: React.FC<ThirukkuralExplorerProps> = ({ onCopySuccess }) => {
  const [selectedPaal, setSelectedPaal] = useState<string>('all');
  const [selectedAthigaram, setSelectedAthigaram] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedKuralNo, setCopiedKuralNo] = useState<number | null>(null);
  const [playingKuralNo, setPlayingKuralNo] = useState<number | null>(null);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    1: true,
    391: true,
  });

  // Unique Athigarams list for the Table of Contents sidebar
  const athigaramList = Array.from(
    new Set(THIRUKKURAL_DATA.map(k => k.athigaram))
  ).map((name) => {
    const item = THIRUKKURAL_DATA.find(k => k.athigaram === name)!;
    return {
      name,
      no: item.athigaramNo,
      paal: item.paal,
      en: item.athigaramEn
    };
  });

  // Filter kurals
  const filteredKurals = THIRUKKURAL_DATA.filter((kural) => {
    const matchesPaal =
      selectedPaal === 'all' ||
      (selectedPaal === 'aram' && kural.paal === 'அறத்துப்பால்') ||
      (selectedPaal === 'porul' && kural.paal === 'பொருட்பால்') ||
      (selectedPaal === 'inbam' && kural.paal === 'இன்பத்துப்பால்');

    if (!matchesPaal) return false;

    if (selectedAthigaram !== 'all' && kural.athigaram !== selectedAthigaram) {
      return false;
    }

    if (!searchQuery.trim()) return true;

    const query = searchQuery.trim().toLowerCase();
    return (
      kural.number.toString() === query ||
      kural.line1.toLowerCase().includes(query) ||
      kural.line2.toLowerCase().includes(query) ||
      kural.athigaram.toLowerCase().includes(query) ||
      kural.commentaryMuVa.toLowerCase().includes(query) ||
      kural.commentarySolomon.toLowerCase().includes(query) ||
      kural.commentaryKalaignar.toLowerCase().includes(query) ||
      kural.englishCouplet.toLowerCase().includes(query)
    );
  });

  const toggleKuralCommentaries = (num: number) => {
    setOpenItems(prev => ({
      ...prev,
      [num]: !prev[num]
    }));
  };

  const handleCopyKuralForGoogleSites = (kural: KuralItem) => {
    const formatted = `குறள் ${kural.number}: ${kural.athigaram} (${kural.paal})

மூலக் குறள்:
${kural.line1}
${kural.line2}

உரைகள்:
▼ மு. வரதராசனார் உரை (M. Varadarajan):
${kural.commentaryMuVa}

▼ சாலமன் பாப்பையா உரை (Solomon Pappaiya):
${kural.commentarySolomon}

▼ கலைஞர் உரை (Kalaignar M. Karunanidhi):
${kural.commentaryKalaignar}

English Translation:
"${kural.englishCouplet}"
${kural.englishExplanation}`;

    navigator.clipboard.writeText(formatted);
    setCopiedKuralNo(kural.number);
    onCopySuccess(`குறள் ${kural.number} உரைகளுடன் நகலெடுக்கப்பட்டது!`);
    setTimeout(() => setCopiedKuralNo(null), 2000);
  };

  const handleSpeak = (kural: KuralItem) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = `${kural.line1}. ${kural.line2}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'ta-IN';
      utterance.rate = 0.85;

      utterance.onstart = () => setPlayingKuralNo(kural.number);
      utterance.onend = () => setPlayingKuralNo(null);
      utterance.onerror = () => setPlayingKuralNo(null);

      window.speechSynthesis.speak(utterance);
      onCopySuccess(`குறள் ${kural.number} ஒலிக்கிறது... (Playing audio)`);
    } else {
      onCopySuccess("ஒலி வசதி இந்த உலாவியில் ஆதரிக்கப்படவில்லை");
    }
  };

  const handleRandomKural = () => {
    const random = THIRUKKURAL_DATA[Math.floor(Math.random() * THIRUKKURAL_DATA.length)];
    setSelectedAthigaram('all');
    setSelectedPaal('all');
    setSearchQuery(random.number.toString());
    setOpenItems(prev => ({ ...prev, [random.number]: true }));
    onCopySuccess(`குறள் #${random.number} தேர்வு செய்யப்பட்டது!`);
  };

  return (
    <section id="kural" className="py-12 sm:py-16 bg-[#F8F7F4] border-b border-[#1B1B1B]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Heading Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#1B1B1B]/10">
          <div>
            <span className="meta-label text-[#B8860B]">
              FORMATTED CONTENT & 3 AUTHORITATIVE INTERPRETATIONS
            </span>
            <h2 className="font-garamond text-3xl sm:text-4xl font-normal text-[#1B1B1B] mt-1">
              திருக்குறள் களஞ்சியம்
            </h2>
            <p className="text-xs sm:text-sm text-[#1B1B1B]/70 font-light mt-1">
              மு. வரதராசனார், சாலமன் பாப்பையா மற்றும் கலைஞர் மு. கருணாநிதி ஆகிய மூவரின் அங்கீகரிக்கப்பட்ட உரைகள்.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRandomKural}
              className="px-3.5 py-2 text-xs font-space-mono uppercase tracking-wider bg-white hover:bg-stone-100 text-[#1B1B1B] border border-[#1B1B1B]/15 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>இன்றைய குறள்</span>
            </button>
          </div>
        </div>

        {/* Asymmetric 2-Column Grid matching Variation 1 Specification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Aside Sidebar: பொருளடக்கம் (Table of Contents) (4 Cols on lg, 300px approx) */}
          <aside className="lg:col-span-4 bg-white border border-[#1B1B1B]/10 p-6 shadow-xs sticky top-24">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1B1B1B]/10">
              <span className="meta-label text-[#1B1B1B] font-bold">பொருளடக்கம்</span>
              <span className="font-space-mono text-[10px] text-[#B8860B]">INDEX</span>
            </div>

            {/* Paal Filter Buttons */}
            <div className="mb-5 flex flex-col gap-1">
              <span className="font-space-mono text-[10px] uppercase text-[#1B1B1B]/50 mb-1">பால் வடிகட்டி:</span>
              <div className="grid grid-cols-2 gap-1.5">
                {PAAL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedPaal(cat.id);
                      setSelectedAthigaram('all');
                    }}
                    className={`px-2.5 py-1.5 text-xs text-left transition-colors cursor-pointer border ${
                      selectedPaal === cat.id
                        ? 'bg-[#1B1B1B] text-white border-[#1B1B1B] font-semibold'
                        : 'bg-[#F8F7F4] text-[#1B1B1B]/80 hover:bg-stone-200 border-transparent'
                    }`}
                  >
                    {cat.id === 'all' ? 'அனைத்தும்' : cat.nameTa}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="mb-5">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="எண் அல்லது சொல் தேடுக..."
                  className="w-full pl-8 pr-3 py-2 bg-[#F8F7F4] border border-[#1B1B1B]/15 text-xs text-[#1B1B1B] focus:outline-none focus:border-[#B8860B]"
                />
              </div>
            </div>

            {/* Chapters (அதிகாரங்கள்) List matching sidebar-item style */}
            <div className="space-y-1 max-h-[360px] overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedAthigaram('all')}
                className={`w-full text-left py-2 px-2.5 text-xs border-b border-[#1B1B1B]/5 flex items-center justify-between cursor-pointer transition-colors ${
                  selectedAthigaram === 'all'
                    ? 'font-bold text-[#B8860B] bg-stone-50'
                    : 'text-[#1B1B1B]/75 hover:text-[#1B1B1B]'
                }`}
              >
                <span>அனைத்து அதிகாரங்களும்</span>
                <span className="font-space-mono text-[10px] text-stone-400">133</span>
              </button>

              {athigaramList.map((ath, idx) => {
                const isSelected = selectedAthigaram === ath.name;
                return (
                  <button
                    key={ath.name}
                    onClick={() => setSelectedAthigaram(ath.name)}
                    className={`w-full text-left py-2 px-2.5 text-xs border-b border-[#1B1B1B]/5 flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? 'font-bold text-[#B8860B] bg-stone-50'
                        : 'text-[#1B1B1B]/85 hover:text-[#1B1B1B]'
                    }`}
                  >
                    <span className="truncate">
                      {ath.no}. {ath.name}
                    </span>
                    <span className="font-space-mono text-[10px] text-[#B8860B] ml-2 shrink-0">
                      {ath.paal.slice(0, 3)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[#1B1B1B]/10 text-[11px] font-space-mono text-[#1B1B1B]/50 flex items-center justify-between">
              <span>Google Sites Blueprint</span>
              <span className="text-[#B8860B]">Ready</span>
            </div>
          </aside>

          {/* Right Content Section: Cards matching Variation 1 Specification (8 Cols) */}
          <section className="lg:col-span-8 space-y-6">
            {filteredKurals.length === 0 ? (
              <div className="bg-white border border-[#1B1B1B]/10 p-12 text-center">
                <BookOpen className="w-8 h-8 text-[#B8860B] mx-auto mb-2" />
                <h3 className="font-garamond text-xl text-[#1B1B1B]">பொருத்தமான குறள்கள் காணப்படவில்லை</h3>
                <p className="text-xs text-stone-500 mt-1">தயவுசெய்து வேறு எண் அல்லது சொல்லைத் தேடவும்.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedAthigaram('all'); setSelectedPaal('all'); }}
                  className="mt-4 px-4 py-2 bg-[#1B1B1B] text-white font-space-mono text-xs uppercase cursor-pointer"
                >
                  மீட்டமை (Reset)
                </button>
              </div>
            ) : (
              filteredKurals.map((kural) => {
                const isOpen = !!openItems[kural.number];
                const isCopied = copiedKuralNo === kural.number;
                const isPlaying = playingKuralNo === kural.number;
                const formattedNum = String(kural.number).padStart(3, '0');

                return (
                  <div
                    key={kural.number}
                    className="bg-white border border-[#1B1B1B]/10 p-6 sm:p-8 transition-all hover:border-[#1B1B1B]/25 shadow-xs"
                  >
                    {/* Header: Meta Label matching Variation 1 */}
                    <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#1B1B1B]/10">
                      <div className="flex items-center gap-2">
                        <span className="meta-label text-[#B8860B] font-bold">
                          குறள் {formattedNum}
                        </span>
                        <span className="text-stone-300">/</span>
                        <span className="meta-label text-[#1B1B1B]/60">
                          {kural.paal} · {kural.athigaram}
                        </span>
                      </div>

                      <span className="font-space-mono text-[10px] text-stone-400 uppercase hidden sm:inline">
                        {kural.athigaramEn}
                      </span>
                    </div>

                    {/* Verse: Large Serif Typography matching Variation 1 */}
                    <div className="font-garamond text-2xl sm:text-3xl text-[#1B1B1B] leading-[1.3] mb-4">
                      {kural.line1}<br />
                      {kural.line2}
                    </div>

                    {/* Transliteration */}
                    <div className="text-xs text-stone-500 font-serif italic mb-6">
                      {kural.transliteration}
                    </div>

                    {/* Action Buttons: .btn-cta styling from Variation 1 */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-[#1B1B1B]/10">
                      <button
                        onClick={() => toggleKuralCommentaries(kural.number)}
                        className={`px-4 py-2 font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                          isOpen
                            ? 'bg-[#B8860B] text-white'
                            : 'bg-[#1B1B1B] text-white hover:bg-[#B8860B]'
                        }`}
                      >
                        <span>{isOpen ? "உரை சுருக்கு" : "உரை விரிவு"}</span>
                        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => handleSpeak(kural)}
                        className={`px-3 py-2 font-space-mono text-xs uppercase tracking-wider border transition-colors cursor-pointer flex items-center gap-1.5 ${
                          isPlaying
                            ? 'bg-amber-100 border-[#B8860B] text-[#B8860B]'
                            : 'bg-white border-[#1B1B1B]/15 text-[#1B1B1B] hover:bg-stone-50'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5 text-[#B8860B]" />
                        <span>{isPlaying ? "ஒலிக்கிறது" : "ஒலிக்க"}</span>
                      </button>

                      <button
                        onClick={() => handleCopyKuralForGoogleSites(kural)}
                        className="px-3.5 py-2 font-space-mono text-xs uppercase tracking-wider bg-transparent hover:bg-stone-100 text-[#1B1B1B] border border-[#1B1B1B]/15 transition-colors cursor-pointer flex items-center gap-1.5 ml-auto"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                        <span>{isCopied ? "நகலெடுக்கப்பட்டது" : "Google Sites-க்கு நகலெடு"}</span>
                      </button>
                    </div>

                    {/* Expandable Commentaries Tray (All 3 Authoritative Commentaries + English) */}
                    {isOpen && (
                      <div className="mt-6 pt-5 border-t border-dashed border-[#1B1B1B]/15 space-y-4 text-xs sm:text-sm">
                        {/* Mu. Varadarajan */}
                        <div className="bg-[#F8F7F4] p-4 border-l-2 border-[#B8860B]">
                          <span className="meta-label text-[#B8860B] block mb-1">
                            மு. வரதராசனார் உரை (M. Varadarajan)
                          </span>
                          <p className="text-[#1B1B1B] leading-relaxed">
                            {kural.commentaryMuVa}
                          </p>
                        </div>

                        {/* Solomon Pappaiya */}
                        <div className="bg-[#F8F7F4] p-4 border-l-2 border-[#1B1B1B]">
                          <span className="meta-label text-[#1B1B1B] block mb-1">
                            சாலமன் பாப்பையா உரை (Solomon Pappaiya)
                          </span>
                          <p className="text-[#1B1B1B] leading-relaxed">
                            {kural.commentarySolomon}
                          </p>
                        </div>

                        {/* Kalaignar */}
                        <div className="bg-[#F8F7F4] p-4 border-l-2 border-stone-500">
                          <span className="meta-label text-stone-600 block mb-1">
                            கலைஞர் உரை (Kalaignar M. Karunanidhi)
                          </span>
                          <p className="text-[#1B1B1B] leading-relaxed">
                            {kural.commentaryKalaignar}
                          </p>
                        </div>

                        {/* English Translation */}
                        <div className="bg-white p-4 border border-stone-200">
                          <span className="meta-label text-stone-500 block mb-1">
                            English Translation (G.U. Pope & Modern)
                          </span>
                          <p className="font-garamond text-base italic text-[#1B1B1B]">
                            "{kural.englishCouplet}"
                          </p>
                          <p className="mt-1 text-xs text-stone-600">
                            {kural.englishExplanation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </section>
        </div>
      </div>
    </section>
  );
};
