import React, { useState } from 'react';
import { AATHICHUDI_DATA, AathichudiItem } from '../data/aathichudiData';
import { Copy, Check, Volume2, Search, BookOpen } from 'lucide-react';

interface AathichudiSectionProps {
  onCopySuccess: (msg: string) => void;
}

export const AathichudiSection: React.FC<AathichudiSectionProps> = ({ onCopySuccess }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'uyir' | 'uyirmei'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);
  const avvaiyarImg = "/src/assets/images/avvaiyar_poetess_1792846257632.jpg";

  const filteredItems = AATHICHUDI_DATA.filter((item) => {
    if (activeCategory === 'uyir' && item.category !== 'உயிர் வருக்கம்') return false;
    if (activeCategory === 'uyirmei' && item.category !== 'உயிர்மெய் வருக்கம்') return false;

    if (!searchQuery.trim()) return true;
    const query = searchQuery.trim().toLowerCase();
    return (
      item.verse.toLowerCase().includes(query) ||
      item.meaningTa.toLowerCase().includes(query) ||
      item.meaningEn.toLowerCase().includes(query) ||
      item.letter.toLowerCase().includes(query)
    );
  });

  const handleCopySingle = (item: AathichudiItem) => {
    const text = `${item.verse} (${item.letter})\nவிளக்கம்: ${item.meaningTa}\nEnglish: ${item.meaningEn}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    onCopySuccess(`"${item.verse}" நகலெடுக்கப்பட்டது!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const text = `ஔவையாரின் ஆத்திச்சூடி — நீதி நூல்கள்\n\n` +
      AATHICHUDI_DATA.map((item, idx) => 
        `${idx + 1}. ${item.verse}\nபொருள்: ${item.meaningTa}\nEnglish: ${item.meaningEn}\n`
      ).join('\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    onCopySuccess("ஆத்திச்சூடி முழுத் தொகுப்பும் நகலெடுக்கப்பட்டது!");
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleSpeak = (verse: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(verse);
      utterance.lang = 'ta-IN';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
      onCopySuccess(`"${verse}" ஒலிக்கிறது...`);
    }
  };

  return (
    <section id="aathichudi" className="py-12 sm:py-16 bg-[#F8F7F4] border-b border-[#1B1B1B]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Avvaiyar Feature Hero Card in Variation 1 Editorial style */}
        <div className="bg-white border border-[#1B1B1B]/10 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Image Column */}
            <div className="lg:col-span-4 relative min-h-[280px] bg-stone-900 border-b lg:border-b-0 lg:border-r border-[#1B1B1B]/10">
              <img
                src={avvaiyarImg}
                alt="Classical painting of Tamil poetess Avvaiyar"
                className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4 right-4 text-white text-[11px] font-space-mono bg-black/60 px-2.5 py-1.5 flex items-center justify-between">
                <span>ஔவையார் (AVVAIYAR)</span>
                <span className="text-[#B8860B]">நீதி நூல்கள்</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="meta-label text-[#B8860B] font-bold">
                    நீதி நூல்கள் · CLASSICAL ETHICS
                  </span>
                  <span className="text-stone-300">/</span>
                  <span className="meta-label text-stone-500">
                    109 அமுத மொழிகள்
                  </span>
                </div>

                <h2 className="font-garamond text-3xl sm:text-4xl font-normal text-[#1B1B1B]">
                  ஆத்திச்சூடி <span className="text-[#B8860B] italic text-xl sm:text-2xl font-light">(Aathichudi)</span>
                </h2>

                <p className="mt-3 text-sm sm:text-base text-stone-700 font-light leading-relaxed">
                  சங்ககாலப் புலவர் ஔவையாரால் இயற்றப்பட்ட அறநூல். 'அகர முதல' உயிர் எழுத்துக்களிலும் உயிர்மெய் எழுத்துக்களிலும் வரிசைக்கிரமமாகத் தொடங்கும் ஒற்றை வரிப் பாடல்களால், மனிதன் பின்பற்ற வேண்டிய அறநெறிகளைச் சுருக்கமாக விளக்குகிறது.
                </p>

                <p className="mt-2 text-xs text-stone-500 font-serif italic">
                  Avvaiyar's timeless collection of 109 single-line moral maxims arranged according to the sequence of the Tamil alphabet.
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-[#1B1B1B]/10 flex flex-wrap items-center justify-between gap-3">
                <span className="font-space-mono text-[11px] text-stone-500">
                  Google Sites Blueprint: Content Cards
                </span>

                <button
                  onClick={handleCopyAll}
                  className="px-4 py-2 bg-[#1B1B1B] text-white hover:bg-[#B8860B] font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  {copiedAll ? <Check className="w-3.5 h-3.5 text-[#B8860B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAll ? "முழுதும் நகலெடுக்கப்பட்டது" : "ஆத்திச்சூடி முழுதும் நகலெடு"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#1B1B1B]/10">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ஆத்திச்சூடி சொல் அல்லது பொருள் தேடுக..."
              className="w-full pl-8 pr-4 py-2 bg-white border border-[#1B1B1B]/15 text-xs text-[#1B1B1B] focus:outline-none focus:border-[#B8860B]"
            />
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-space-mono uppercase transition-colors cursor-pointer border ${
                activeCategory === 'all'
                  ? 'bg-[#1B1B1B] text-white border-[#1B1B1B]'
                  : 'bg-white text-stone-700 border-[#1B1B1B]/10 hover:bg-stone-50'
              }`}
            >
              அனைத்தும் ({AATHICHUDI_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('uyir')}
              className={`px-3 py-1.5 text-xs font-space-mono uppercase transition-colors cursor-pointer border ${
                activeCategory === 'uyir'
                  ? 'bg-[#1B1B1B] text-white border-[#1B1B1B]'
                  : 'bg-white text-stone-700 border-[#1B1B1B]/10 hover:bg-stone-50'
              }`}
            >
              உயிர் (அ - ஔ)
            </button>
            <button
              onClick={() => setActiveCategory('uyirmei')}
              className={`px-3 py-1.5 text-xs font-space-mono uppercase transition-colors cursor-pointer border ${
                activeCategory === 'uyirmei'
                  ? 'bg-[#1B1B1B] text-white border-[#1B1B1B]'
                  : 'bg-white text-stone-700 border-[#1B1B1B]/10 hover:bg-stone-50'
              }`}
            >
              உயிர்மெய் (க - ப)
            </button>
          </div>
        </div>

        {/* Grid of Aathichudi Cards matching Variation 1 card styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const isCopied = copiedId === item.id;
            const formattedId = String(item.id).padStart(3, '0');

            return (
              <div
                key={item.id}
                className="bg-white border border-[#1B1B1B]/10 p-6 flex flex-col justify-between hover:border-[#1B1B1B]/25 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1B1B1B]/5">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 bg-[#1B1B1B] text-[#B8860B] font-space-mono text-xs font-bold flex items-center justify-center">
                        {item.letter}
                      </span>
                      <span className="meta-label text-[#B8860B] font-bold">
                        #{formattedId}
                      </span>
                    </div>
                    <span className="font-space-mono text-[10px] text-stone-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-garamond text-2xl text-[#1B1B1B] leading-tight mb-2">
                    {item.verse}
                  </h3>

                  <p className="text-sm text-stone-800 leading-snug font-medium mb-1">
                    {item.meaningTa}
                  </p>

                  <p className="text-xs text-stone-500 font-serif italic mb-3">
                    {item.meaningEn}
                  </p>

                  <p className="text-xs text-stone-600 bg-[#F8F7F4] p-2.5 border-l-2 border-[#B8860B] leading-relaxed">
                    {item.detailedTa}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1B1B1B]/10 flex items-center justify-between">
                  <button
                    onClick={() => handleSpeak(item.verse)}
                    className="font-space-mono text-[11px] uppercase text-stone-500 hover:text-[#1B1B1B] flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>ஒலிக்க</span>
                  </button>

                  <button
                    onClick={() => handleCopySingle(item)}
                    className="font-space-mono text-[11px] uppercase text-[#1B1B1B] hover:text-[#B8860B] flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? "நகலானது" : "நகலெடு"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
