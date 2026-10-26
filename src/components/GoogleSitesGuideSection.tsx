import React, { useState } from 'react';
import { GOOGLE_SITES_BLUEPRINTS } from '../data/googleSitesGuide';
import { Copy, Check, ExternalLink, Layers, Palette, Code, Info } from 'lucide-react';

interface GoogleSitesGuideSectionProps {
  onCopySuccess: (msg: string) => void;
  onNavigateToEmbed: () => void;
}

export const GoogleSitesGuideSection: React.FC<GoogleSitesGuideSectionProps> = ({
  onCopySuccess,
  onNavigateToEmbed,
}) => {
  const [activeStep, setActiveStep] = useState<string>('step-card-blueprint');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const googleSitesEditUrl = "https://sites.google.com/d/1vxMix1ZI3DOrTgZ9mcIh_fIbG-s-rXlk/p/1ETIzdBCApy0gSJvLsJcY5kmKW7lJLYcU/edit";

  const handleCopy = (id: string, text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onCopySuccess(`${label} நகலெடுக்கப்பட்டது!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentBlueprint = GOOGLE_SITES_BLUEPRINTS.find(b => b.id === activeStep) || GOOGLE_SITES_BLUEPRINTS[0];

  return (
    <section id="guide" className="py-12 sm:py-16 bg-[#F8F7F4] border-b border-[#1B1B1B]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1B1B1B]/10 pb-6">
          <div>
            <span className="meta-label text-[#B8860B] font-bold">
              GOOGLE SITES LAYOUT BLUEPRINT & STEP-BY-STEP SPECIFICATION
            </span>
            <h2 className="font-garamond text-3xl sm:text-4xl font-normal text-[#1B1B1B] mt-1">
              கூகிள் சைட்ஸ் வடிவமைப்பு வழிகாட்டி
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl font-light">
              Follow this step-by-step block hierarchy to build an authentic manuscript aesthetic in your Google Sites editor.
            </p>
          </div>
          <a
            href={googleSitesEditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-space-mono uppercase tracking-wider bg-[#1B1B1B] text-white hover:bg-[#B8860B] transition-colors self-start sm:self-auto shrink-0 cursor-pointer shadow-xs"
          >
            <span>Google Sites-ல் திறக்க</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Visual Schematic Diagram: 6-Block Architecture */}
        <div className="bg-white border border-[#1B1B1B]/10 p-6 shadow-xs mb-10">
          <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-[#1B1B1B]/10">
            <h3 className="font-garamond text-xl font-medium text-[#1B1B1B] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B8860B]" />
              <span>பக்கத்தின் முழுமையான அடுக்கு வடிவமைப்பு (Page Hierarchy & Blocks)</span>
            </h3>
            <span className="font-space-mono text-[10px] text-stone-400">6 BLOCKS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            {GOOGLE_SITES_BLUEPRINTS.map((bp) => {
              const isSelected = activeStep === bp.id;
              return (
                <button
                  key={bp.id}
                  onClick={() => setActiveStep(bp.id)}
                  className={`p-3.5 border text-left transition-all cursor-pointer flex flex-col justify-between h-full ${
                    isSelected
                      ? 'bg-[#1B1B1B] text-white border-[#1B1B1B] shadow-xs'
                      : 'bg-[#F8F7F4] hover:bg-stone-200 text-stone-800 border-[#1B1B1B]/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-space-mono text-[10px] font-bold px-1.5 py-0.5 ${
                        isSelected ? 'bg-[#B8860B] text-white' : 'bg-stone-200 text-stone-700'
                      }`}>
                        #{bp.stepNumber}
                      </span>
                      <span className="font-space-mono text-[9px] opacity-60">{bp.badge}</span>
                    </div>
                    <div className="font-semibold text-xs line-clamp-1">{bp.titleTa}</div>
                  </div>
                  <div className={`mt-2 font-space-mono text-[10px] truncate ${isSelected ? 'text-[#B8860B]' : 'text-stone-500'}`}>
                    {bp.blockType}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Blueprint Detail Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Instructions and Google Sites Drag-and-Drop steps (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#1B1B1B]/10 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#1B1B1B]/10 pb-4 mb-6">
              <div>
                <span className="meta-label text-[#B8860B] font-bold">
                  STEP {currentBlueprint.stepNumber} · {currentBlueprint.badge}
                </span>
                <h3 className="font-garamond text-2xl sm:text-3xl font-medium text-[#1B1B1B] mt-1">
                  {currentBlueprint.titleTa}
                </h3>
                <div className="text-xs text-stone-500 mt-0.5 font-space-mono">{currentBlueprint.titleEn}</div>
              </div>

              <div className="text-right">
                <span className="inline-block bg-[#F8F7F4] text-stone-700 text-xs px-2.5 py-1 border border-[#1B1B1B]/10 font-space-mono font-medium">
                  {currentBlueprint.blockType}
                </span>
              </div>
            </div>

            {/* Overview / Summary */}
            <p className="text-sm text-stone-700 leading-relaxed bg-[#F8F7F4] border-l-2 border-[#B8860B] p-3.5 mb-6">
              {currentBlueprint.summary}
            </p>

            {/* Step-by-Step UI Actions */}
            <h4 className="meta-label text-stone-600 font-bold mb-3">
              Google Sites-ல் செய்ய வேண்டிய வழிமுறைகள் (Action Steps)
            </h4>
            <ol className="space-y-3 mb-8">
              {currentBlueprint.instructions.map((inst, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                  <span className="w-5 h-5 bg-[#1B1B1B] text-[#B8860B] font-space-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-light">{inst}</span>
                </li>
              ))}
            </ol>

            {/* Font & Style Specifications */}
            <div className="bg-[#F8F7F4] p-4 border border-[#1B1B1B]/10 mb-6 text-xs text-stone-600">
              <div className="font-bold text-[#1B1B1B] mb-2 flex items-center gap-1.5 font-space-mono uppercase">
                <Palette className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>எழுத்துரு & வண்ண அமைப்புகள் (Styling specs)</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <span className="text-stone-400">பங்கு (Role): </span>
                  <span className="font-medium text-stone-800">{currentBlueprint.suggestedStyles.fontRole}</span>
                </div>
                <div>
                  <span className="text-stone-400">எழுத்துரு (Font): </span>
                  <span className="font-medium text-stone-800">{currentBlueprint.suggestedStyles.suggestedFont}</span>
                </div>
                <div>
                  <span className="text-stone-400">அளவு (Size): </span>
                  <span className="font-medium text-stone-800">{currentBlueprint.suggestedStyles.fontSize}</span>
                </div>
                <div>
                  <span className="text-stone-400">வண்ணம் (Color): </span>
                  <span className="font-mono text-stone-800">{currentBlueprint.suggestedStyles.textColor}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleCopy(currentBlueprint.id, currentBlueprint.sampleContentPlainText, currentBlueprint.titleTa)}
                className="px-4 py-2.5 bg-[#1B1B1B] text-white hover:bg-[#B8860B] font-space-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                {copiedId === currentBlueprint.id ? <Check className="w-4 h-4 text-[#B8860B]" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === currentBlueprint.id ? "நகலெடுக்கப்பட்டது!" : "இந்த அமைப்பின் உரையை நகலெடு (Copy Text)"}</span>
              </button>

              {currentBlueprint.id === 'step-embed-widget' && (
                <button
                  onClick={onNavigateToEmbed}
                  className="px-4 py-2.5 bg-[#B8860B] text-white hover:bg-[#996515] font-space-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Code className="w-4 h-4" />
                  <span>விட்ஜெட் கோட் பகுதிக்குச் செல்க (Customize Embed)</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Live Visual Card Blueprint Preview (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#1B1B1B]/15 overflow-hidden shadow-xs">
              <div className="bg-[#1B1B1B] text-white px-4 py-3 flex items-center justify-between">
                <span className="font-space-mono text-[11px] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B8860B]" />
                  Google Sites Card Blueprint
                </span>
                <span className="font-space-mono text-[10px] text-[#B8860B]">HEADING 2 + COLLAPSIBLE</span>
              </div>

              {/* Sample Kural Card Preview Matching Prompt Structure */}
              <div className="p-5 bg-[#F8F7F4]">
                <div className="bg-white border border-[#1B1B1B]/10 p-5 shadow-xs">
                  {/* Couplet Header */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1B1B1B]/5">
                    <h4 className="font-garamond font-bold text-lg text-[#1B1B1B]">
                      குறள் 1: கடவுள் வாழ்த்து
                    </h4>
                    <span className="font-space-mono text-[10px] text-[#B8860B] bg-[#1B1B1B] px-2 py-0.5">
                      அறத்துப்பால்
                    </span>
                  </div>

                  {/* Original Tamil Text Box */}
                  <div className="bg-[#F8F7F4] border-l-2 border-[#B8860B] p-3.5 mb-3">
                    <p className="font-garamond text-xl text-[#1B1B1B] leading-snug">
                      அகர முதல எழுத்தெல்லாம் ஆதி<br />
                      பகவன் முதற்றே உலகு.
                    </p>
                    <p className="text-[11px] text-stone-500 italic mt-1 font-serif">
                      Agara mudhala ezhuththellaam aadhi / bagavan mudhatre ulagu.
                    </p>
                  </div>

                  {/* Collapsible Text Group */}
                  <div className="space-y-1.5 text-xs">
                    <details className="border border-stone-200" open>
                      <summary className="bg-stone-50 hover:bg-stone-100 px-3 py-2 font-medium text-[#1B1B1B] cursor-pointer flex justify-between items-center select-none">
                        <span>▼ மு. வரதராசனார் உரை (M. Varadarajan)</span>
                      </summary>
                      <div className="p-3 bg-white text-stone-700 leading-relaxed border-t border-stone-100">
                        எழுத்துக்கள் எல்லாம் 'அ' கரத்தை அடிப்படையாகக் கொண்டு இயங்குகின்றன; அதுபோல, உலகம் ஆதிபகவனை அடிப்படையாகக் கொண்டு இயங்குகிறது.
                      </div>
                    </details>

                    <details className="border border-stone-200">
                      <summary className="bg-stone-50 hover:bg-stone-100 px-3 py-2 font-medium text-[#1B1B1B] cursor-pointer flex justify-between items-center select-none">
                        <span>▼ சாலமன் பாப்பையா உரை (Solomon Pappaiya)</span>
                      </summary>
                      <div className="p-3 bg-white text-stone-700 leading-relaxed border-t border-stone-100">
                        எழுத்துக்கள் எல்லாம் 'அ' என்னும் எழுத்தை முதலாக உடையன; அதுபோல, உலகம் ஆதிபகவனை முதலாக உடையது.
                      </div>
                    </details>

                    <details className="border border-stone-200">
                      <summary className="bg-stone-50 hover:bg-stone-100 px-3 py-2 font-medium text-[#1B1B1B] cursor-pointer flex justify-between items-center select-none">
                        <span>▼ கலைஞர் உரை (Kalaignar M. Karunanidhi)</span>
                      </summary>
                      <div className="p-3 bg-white text-stone-700 leading-relaxed border-t border-stone-100">
                        'அ' எழுத்துக்களுக்குத் தொடக்கம்; அதுபோல் ஆதிபகவன் இந்த உலகத்திற்குத் தொடக்கம்.
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips Box */}
            <div className="bg-white border border-[#1B1B1B]/10 p-5 text-xs text-stone-700 shadow-xs">
              <h4 className="meta-label text-[#1B1B1B] font-bold mb-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Google Sites பயனுள்ள குறிப்புகள் (Pro Tips)</span>
              </h4>
              <ul className="space-y-2 list-disc list-inside text-stone-600 font-light">
                <li>
                  <strong className="font-semibold text-stone-800">Collapsible Text:</strong> Use the Collapsible text widget to present multiple interpretations cleanly without vertical bloat.
                </li>
                <li>
                  <strong className="font-semibold text-stone-800">Section Background:</strong> Alternate section backgrounds between white and pearl gray (#F8F7F4).
                </li>
                <li>
                  <strong className="font-semibold text-stone-800">Interactive Embed:</strong> Drag your embed element to 700px height for optimal desktop reading.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
