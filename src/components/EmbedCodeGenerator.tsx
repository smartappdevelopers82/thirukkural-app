import React, { useState, useMemo } from 'react';
import { generateGoogleSitesEmbedCode, DEFAULT_EMBED_CONFIG, EmbedConfig } from '../utils/embedGenerator';
import { Code, Copy, Check, Sliders, ExternalLink, RefreshCw, Smartphone, Monitor } from 'lucide-react';

interface EmbedCodeGeneratorProps {
  onCopySuccess: (msg: string) => void;
}

export const EmbedCodeGenerator: React.FC<EmbedCodeGeneratorProps> = ({ onCopySuccess }) => {
  const [config, setConfig] = useState<EmbedConfig>(DEFAULT_EMBED_CONFIG);
  const [copied, setCopied] = useState<boolean>(false);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [showRawCode, setShowRawCode] = useState<boolean>(false);

  const googleSitesEditUrl = "https://sites.google.com/d/1vxMix1ZI3DOrTgZ9mcIh_fIbG-s-rXlk/p/1ETIzdBCApy0gSJvLsJcY5kmKW7lJLYcU/edit";

  const generatedCode = useMemo(() => {
    return generateGoogleSitesEmbedCode(config);
  }, [config]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    onCopySuccess("கூகிள் சைட்ஸ் விட்ஜெட் குறியீடு நகலெடுக்கப்பட்டது!");
    setTimeout(() => setCopied(false), 2200);
  };

  const handleReset = () => {
    setConfig(DEFAULT_EMBED_CONFIG);
    onCopySuccess("இயல்புநிலைக்கு மாற்றப்பட்டது");
  };

  return (
    <section id="embed" className="py-12 sm:py-16 bg-[#F8F7F4] border-b border-[#1B1B1B]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#1B1B1B]/10">
          <div>
            <span className="meta-label text-[#B8860B] font-bold">
              STANDALONE HTML/CSS/JS WIDGET ARCHITECTURE
            </span>
            <h2 className="font-garamond text-3xl sm:text-4xl font-normal text-[#1B1B1B] mt-1">
              Google Sites உட்பொதிவு குறியீடு (Embed Code Generator)
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 font-light max-w-3xl">
              Generate self-contained HTML/CSS/JS code that works smoothly inside Google Sites iframe with zero external server dependencies.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="px-4 py-2 bg-[#1B1B1B] text-white hover:bg-[#B8860B] font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#B8860B]" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
              <span>{copied ? "நகலெடுக்கப்பட்டது" : "குறியீட்டை நகலெடு"}</span>
            </button>

            <a
              href={googleSitesEditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-[#B8860B] text-white hover:bg-[#996515] font-space-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
            >
              <span>Google Sites</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* How-To-Paste Steps Banner */}
        <div className="bg-white border border-[#1B1B1B]/10 p-6 mb-8 shadow-xs">
          <div className="font-space-mono text-xs uppercase font-bold text-[#B8860B] mb-3 flex items-center gap-2">
            <Code className="w-4 h-4" />
            <span>Google Sites-ல் இதை எவ்வாறு இணைப்பது? (How to Embed in 3 Simple Steps)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-[#F8F7F4] p-4 border border-[#1B1B1B]/5">
              <span className="font-space-mono text-[#1B1B1B] font-bold block mb-1">01. INSERT &gt; EMBED</span>
              Google Sites வலது பக்கப்பலகையில் <code className="bg-white px-1 py-0.5 border border-stone-200 text-[#1B1B1B]">Insert &gt; Embed</code> என்பதைத் தேர்ந்தெடுக்கவும்.
            </div>
            <div className="bg-[#F8F7F4] p-4 border border-[#1B1B1B]/5">
              <span className="font-space-mono text-[#1B1B1B] font-bold block mb-1">02. EMBED CODE TAB</span>
              <code className="bg-white px-1 py-0.5 border border-stone-200 text-[#1B1B1B]">Embed code</code> டேபைத் திறந்து, கீழே உள்ள குறியீட்டை ஒட்டி <code className="bg-white px-1 py-0.5 border border-stone-200 text-[#1B1B1B]">Next &gt; Insert</code> கொடுக்கவும்.
            </div>
            <div className="bg-[#F8F7F4] p-4 border border-[#1B1B1B]/5">
              <span className="font-space-mono text-[#1B1B1B] font-bold block mb-1">03. RESIZE CONTAINER</span>
              தோன்றும் விட்ஜெட்டின் முனைகளை இழுத்து முழு அகலத்திற்கும் (700px உயரம்) பொருந்துமாறு வைக்கவும்.
            </div>
          </div>
        </div>

        {/* 2-Column: Customizer Controls (Left) & Live Sandbox Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Settings Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-white border border-[#1B1B1B]/10 p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#1B1B1B]/10 pb-3 mb-4">
              <span className="meta-label text-[#1B1B1B] font-bold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>விட்ஜெட் விருப்பங்கள்</span>
              </span>
              <button
                onClick={handleReset}
                className="font-space-mono text-[10px] text-stone-500 hover:text-[#1B1B1B] flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>மீட்டமை</span>
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Colors */}
              <div>
                <label className="meta-label text-stone-500 block mb-1.5">தள வண்ணங்கள் (Colors)</label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-[#F8F7F4] p-2.5 border border-[#1B1B1B]/5">
                    <span className="text-stone-700">முதன்மை நிறம் (Primary)</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={config.primaryColor}
                        onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                        className="w-5 h-5 cursor-pointer border-0"
                      />
                      <span className="font-space-mono text-[10px] text-stone-800">{config.primaryColor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#F8F7F4] p-2.5 border border-[#1B1B1B]/5">
                    <span className="text-stone-700">பொன் நிறம் (Accent Gold)</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={config.accentColor}
                        onChange={(e) => setConfig({ ...config, accentColor: e.target.value })}
                        className="w-5 h-5 cursor-pointer border-0"
                      />
                      <span className="font-space-mono text-[10px] text-stone-800">{config.accentColor}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commentaries Checklist */}
              <div className="pt-2 border-t border-[#1B1B1B]/10">
                <label className="meta-label text-stone-500 block mb-1.5">காட்ட வேண்டிய உரைகள்</label>
                <div className="space-y-1.5 bg-[#F8F7F4] p-3 border border-[#1B1B1B]/5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showMuVa}
                      onChange={(e) => setConfig({ ...config, showMuVa: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>மு. வரதராசனார் உரை</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showSolomon}
                      onChange={(e) => setConfig({ ...config, showSolomon: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>சாலமன் பாப்பையா உரை</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showKalaignar}
                      onChange={(e) => setConfig({ ...config, showKalaignar: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>கலைஞர் உரை</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showEnglish}
                      onChange={(e) => setConfig({ ...config, showEnglish: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>English Translation & Meaning</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.showTransliteration}
                      onChange={(e) => setConfig({ ...config, showTransliteration: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>ஒலிபெயர்ப்பு (Transliteration)</span>
                  </label>
                </div>
              </div>

              {/* Functional Features */}
              <div className="pt-2 border-t border-[#1B1B1B]/10">
                <label className="meta-label text-stone-500 block mb-1.5">ஊடாடும் வசதிகள்</label>
                <div className="space-y-1.5 bg-[#F8F7F4] p-3 border border-[#1B1B1B]/5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enableAudio}
                      onChange={(e) => setConfig({ ...config, enableAudio: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>தமிழ் குரல் ஒலிப்பான் (Audio TTS)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enableSearch}
                      onChange={(e) => setConfig({ ...config, enableSearch: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>தேடல் பட்டை & வடிகட்டி (Search Bar)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.includeAathichudi}
                      onChange={(e) => setConfig({ ...config, includeAathichudi: e.target.checked })}
                      className="text-[#1B1B1B]"
                    />
                    <span>ஆத்திச்சூடி பக்கம் (Aathichudi Tab)</span>
                  </label>
                </div>
              </div>

              {/* Toggle Raw Code / Live View */}
              <div className="pt-3">
                <button
                  onClick={() => setShowRawCode(!showRawCode)}
                  className="w-full py-2 bg-stone-100 hover:bg-stone-200 text-[#1B1B1B] font-space-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors border border-stone-200"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{showRawCode ? "நேரலை மாதிரி" : "மூலக் குறியீடு (View HTML)"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Sandbox & Code Display (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-[#1B1B1B]/10 shadow-xs flex flex-col">
            {/* Viewport Control Bar */}
            <div className="bg-[#1B1B1B] px-4 py-3 flex items-center justify-between text-white border-b border-stone-800">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-[#B8860B]" />
                <span className="font-space-mono uppercase text-[11px] tracking-wider">
                  {showRawCode ? "HTML/CSS/JS SOURCE" : "Google Sites Sandbox"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {!showRawCode && (
                  <div className="flex items-center bg-stone-800 p-0.5 rounded text-xs">
                    <button
                      onClick={() => setPreviewDevice('desktop')}
                      className={`px-2 py-1 font-space-mono text-[10px] uppercase flex items-center gap-1 cursor-pointer ${
                        previewDevice === 'desktop' ? 'bg-[#B8860B] text-white font-bold' : 'text-stone-300'
                      }`}
                    >
                      <Monitor className="w-3 h-3" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setPreviewDevice('mobile')}
                      className={`px-2 py-1 font-space-mono text-[10px] uppercase flex items-center gap-1 cursor-pointer ${
                        previewDevice === 'mobile' ? 'bg-[#B8860B] text-white font-bold' : 'text-stone-300'
                      }`}
                    >
                      <Smartphone className="w-3 h-3" />
                      <span>Mobile</span>
                    </button>
                  </div>
                )}

                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 bg-[#B8860B] text-white hover:bg-[#996515] font-space-mono text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Sandbox Container */}
            <div className="p-4 bg-stone-100 flex items-center justify-center min-h-[580px]">
              {showRawCode ? (
                <div className="w-full h-[540px] overflow-auto bg-[#1B1B1B] text-stone-200 p-4 font-space-mono text-xs leading-relaxed border border-stone-800">
                  <pre>{generatedCode}</pre>
                </div>
              ) : (
                <div
                  className={`transition-all duration-300 bg-white shadow-md overflow-hidden ${
                    previewDevice === 'mobile' ? 'w-[375px] h-[600px] border-4 border-[#1B1B1B]' : 'w-full h-[580px] border border-stone-200'
                  }`}
                >
                  <iframe
                    title="Google Sites Thirukkural Embed Sandbox"
                    srcDoc={generatedCode}
                    sandbox="allow-scripts allow-same-origin"
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
