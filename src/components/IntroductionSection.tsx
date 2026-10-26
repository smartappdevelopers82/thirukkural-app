import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface IntroductionSectionProps {
  onCopySuccess: (msg: string) => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onCopySuccess }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const olaiImg = "/src/assets/images/olai_chuvadi_scripture_1792846256347.jpg";

  const introText = `திருக்குறள் அறிமுகம் (Introduction)

Thirukkural, authored by the immortal sage Thiruvalluvar, is a masterpiece of moral and philosophical literature. Composing 1,330 couplets across three main books—Aram (Virtue), Porul (Wealth), and Inbam (Love)—it offers timeless guidance on ethics, governance, and daily life.

அறம், பொருள், இன்பம் என்னும் முப்பால் பகுப்பில், மனிதகுலம் முழுமைக்கும் தேவையான உலகப் பொதுவான வாழ்வியல் நெறிகளை வழங்கும் ஒப்பற்ற தமிழ் இலக்கியக் கருவூலம்.`;

  const handleCopyIntro = () => {
    navigator.clipboard.writeText(introText);
    setCopied(true);
    onCopySuccess("அறிமுக உரை நகலெடுக்கப்பட்டது! (Intro copied)");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F7F4] border-b border-[#1B1B1B]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#1B1B1B]/10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Olai Chuvadi Frame */}
            <div className="lg:col-span-5 relative min-h-[320px] bg-stone-900 border-b lg:border-b-0 lg:border-r border-[#1B1B1B]/10">
              <img
                src={olaiImg}
                alt="Ancient Tamil Palm Leaf Manuscript (Olai Chuvadi) with Brass Lamp"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4 right-4 text-white text-[11px] font-space-mono bg-black/60 backdrop-blur-xs px-2.5 py-1.5 flex items-center justify-between">
                <span>ஓலைச்சுவடிப் படிவம்</span>
                <span className="text-[#B8860B]">MANUSCRIPT ARCHIVE</span>
              </div>
            </div>

            {/* Right: Editorial Narrative Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="meta-label text-[#B8860B] font-bold">
                    GOOGLE SITES BLOCK 2 · OVERVIEW
                  </span>
                  <span className="text-stone-300">/</span>
                  <span className="meta-label text-stone-500">
                    முப்பால் அறிமுகம்
                  </span>
                </div>

                <h2 className="font-garamond text-2xl sm:text-4xl text-[#1B1B1B] font-normal leading-tight">
                  திருக்குறள் அறிமுகம் <span className="text-[#B8860B] italic text-xl sm:text-2xl font-light">(Introduction)</span>
                </h2>

                <div className="mt-4 space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base font-light">
                  <p>
                    <strong className="font-medium text-[#1B1B1B]">Thirukkural</strong>, authored by the immortal sage Thiruvalluvar, is a masterpiece of moral and philosophical literature. Composing 1,330 couplets across three main books—<strong className="text-[#1B1B1B]">Aram (Virtue)</strong>, <strong className="text-[#1B1B1B]">Porul (Wealth)</strong>, and <strong className="text-[#1B1B1B]">Inbam (Love)</strong>—it offers timeless guidance on ethics, governance, and daily life.
                  </p>
                  <p className="text-sm text-stone-600 font-tamil-serif leading-relaxed">
                    இரண்டாயிரம் ஆண்டுகளுக்கும் மேலாக தமிழ் மொழியின் மணிமகுடமாகத் திகழும் இந்நூல், எந்த ஒரு மதம், இனம், நாடு ஆகியவற்றுக்கு அப்பாற்பட்டு உலக மாந்தர் அனைவருக்கும் பொதுவான மனிதநேய நெறிகளைப் போதிக்கிறது.
                  </p>
                </div>

                {/* 3 Books overview badges */}
                <div className="mt-6 grid grid-cols-3 gap-3 pt-4 border-t border-[#1B1B1B]/10 text-center">
                  <div className="p-3 border border-[#1B1B1B]/10 bg-[#F8F7F4]">
                    <span className="font-garamond font-bold text-[#1B1B1B] block text-base sm:text-lg">அறத்துப்பால்</span>
                    <span className="font-space-mono text-[10px] text-stone-500">38 அதிகாரங்கள் · VIRTUE</span>
                  </div>
                  <div className="p-3 border border-[#1B1B1B]/10 bg-[#F8F7F4]">
                    <span className="font-garamond font-bold text-[#1B1B1B] block text-base sm:text-lg">பொருட்பால்</span>
                    <span className="font-space-mono text-[10px] text-stone-500">70 அதிகாரங்கள் · WEALTH</span>
                  </div>
                  <div className="p-3 border border-[#1B1B1B]/10 bg-[#F8F7F4]">
                    <span className="font-garamond font-bold text-[#1B1B1B] block text-base sm:text-lg">இன்பத்துப்பால்</span>
                    <span className="font-space-mono text-[10px] text-stone-500">25 அதிகாரங்கள் · LOVE</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#1B1B1B]/10 flex flex-wrap items-center justify-between gap-3">
                <span className="font-space-mono text-[11px] text-stone-500">
                  Google Sites Layout: <code className="bg-stone-100 px-1 py-0.5 text-[#1B1B1B]">Content Block 2</code>
                </span>

                <button
                  onClick={handleCopyIntro}
                  className="px-4 py-2 bg-[#1B1B1B] text-white hover:bg-[#B8860B] font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#B8860B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "நகலெடுக்கப்பட்டது" : "அறிமுக உரையை நகலெடு"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
