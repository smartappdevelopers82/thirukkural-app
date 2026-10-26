import React from 'react';
import { Copy, Check, ArrowRight, Code } from 'lucide-react';

interface HeroBannerProps {
  onSelectTab: (tabId: string) => void;
  onCopySuccess: (message: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectTab, onCopySuccess }) => {
  const [copied, setCopied] = React.useState(false);
  const heroImage = "/src/assets/images/thiruvalluvar_manuscript_1792846256777.jpg";

  const handleCopyHeaderContent = () => {
    const text = `தமிழ் திருக்குறள் (Tamil Thirukkural)\n"உலகப் பொதுமறை — தெளிவுரைகளுடன்" (The Universal Veda — With Detailed Interpretations)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    onCopySuccess("தலைப்பு உரை நகலெடுக்கப்பட்டது! (Header copied)");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative bg-[#F8F7F4] text-[#1B1B1B] border-b border-[#1B1B1B]/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="meta-label text-[#B8860B] font-bold">
                Google Sites வடிவமைப்பு வழிகாட்டி · ARCHIVAL EDITION
              </span>
              <span className="text-[#1B1B1B]/30">/</span>
              <span className="meta-label text-[#1B1B1B]/60">
                1,330 குறட்பாக்கள்
              </span>
            </div>

            <h1 className="font-garamond text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1B1B1B] tracking-tight leading-[1.1] text-balance">
              தமிழ் திருக்குறள்
            </h1>

            <p className="mt-4 font-garamond text-xl sm:text-2xl text-[#B8860B] italic tracking-wide">
              "உலகப் பொதுமறை — தெளிவுரைகளுடன்"
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#1B1B1B]/75 leading-relaxed max-w-2xl font-light">
              The immortal moral treatise by sage Thiruvalluvar. Structured across Virtue (அறம்), Wealth (பொருள்), and Love (இன்பம்) with three authoritative Tamil commentaries by <strong>மு. வரதராசனார்</strong>, <strong>சாலமன் பாப்பையா</strong>, and <strong>கலைஞர் மு. கருணாநிதி</strong>.
            </p>

            {/* Action Buttons adhering to Variation 1 .btn-cta styling */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectTab('guide')}
                className="px-5 py-3 bg-[#1B1B1B] text-white hover:bg-[#B8860B] font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <span>வடிவமைப்பு வழிகாட்டி (Layout Guide)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onSelectTab('embed')}
                className="px-5 py-3 bg-white hover:bg-[#F0EEEA] text-[#1B1B1B] border border-[#1B1B1B]/20 font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
              >
                <Code className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>விட்ஜெட் கோட் (Get Embed)</span>
              </button>

              <button
                onClick={handleCopyHeaderContent}
                className="px-4 py-3 bg-transparent hover:bg-black/5 text-[#1B1B1B]/80 font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border border-transparent hover:border-[#1B1B1B]/15"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#B8860B]" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? "நகலெடுக்கப்பட்டது" : "தலைப்பை நகலெடு"}</span>
              </button>
            </div>

            {/* Editorial Metadata Strip */}
            <div className="mt-10 pt-6 border-t border-[#1B1B1B]/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs">
              <div>
                <span className="font-space-mono text-[#B8860B] font-bold text-sm">133</span>
                <span className="text-[#1B1B1B]/60 ml-2 uppercase font-space-mono text-[10px]">அதிகாரங்கள்</span>
              </div>
              <span className="text-[#1B1B1B]/20">·</span>
              <div>
                <span className="font-space-mono text-[#B8860B] font-bold text-sm">1,330</span>
                <span className="text-[#1B1B1B]/60 ml-2 uppercase font-space-mono text-[10px]">குறட்பாக்கள்</span>
              </div>
              <span className="text-[#1B1B1B]/20">·</span>
              <div>
                <span className="font-space-mono text-[#B8860B] font-bold text-sm">3</span>
                <span className="text-[#1B1B1B]/60 ml-2 uppercase font-space-mono text-[10px]">புகழ்பெற்ற உரைகள்</span>
              </div>
              <span className="text-[#1B1B1B]/20">·</span>
              <div>
                <span className="font-space-mono text-[#B8860B] font-bold text-sm">109</span>
                <span className="text-[#1B1B1B]/60 ml-2 uppercase font-space-mono text-[10px]">ஆத்திச்சூடி அமுத மொழிகள்</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sage Thiruvalluvar Manuscript Frame */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#1B1B1B]/15 p-2 bg-white shadow-sm">
              <div className="overflow-hidden aspect-[4/3] bg-stone-900 relative">
                <img
                  src={heroImage}
                  alt="Classical portrait of Tamil sage Thiruvalluvar writing on Palm Leaf Scripture"
                  className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-space-mono text-[#1B1B1B]/60">
                <span>திருவள்ளுவர் (THIRUVALLUVAR)</span>
                <span className="text-[#B8860B]">ஓலைச்சுவடி மரபு</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
