export interface EmbedConfig {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  showMuVa: boolean;
  showSolomon: boolean;
  showKalaignar: boolean;
  showEnglish: boolean;
  showTransliteration: boolean;
  enableAudio: boolean;
  enableSearch: boolean;
  includeAathichudi: boolean;
  defaultExpanded: boolean;
}

export const DEFAULT_EMBED_CONFIG: EmbedConfig = {
  primaryColor: "#2C3E50",
  accentColor: "#D4AC0D",
  backgroundColor: "#FAFAFA",
  showMuVa: true,
  showSolomon: true,
  showKalaignar: true,
  showEnglish: true,
  showTransliteration: true,
  enableAudio: true,
  enableSearch: true,
  includeAathichudi: true,
  defaultExpanded: false,
};

export function generateGoogleSitesEmbedCode(config: EmbedConfig = DEFAULT_EMBED_CONFIG): string {
  return `<!DOCTYPE html>
<html lang="ta">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>தமிழ் திருக்குறள் & ஆத்திச்சூடி</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&family=Noto+Serif+Tamil:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: ${config.primaryColor};
      --accent: ${config.accentColor};
      --bg: ${config.backgroundColor};
      --card-bg: #FFFFFF;
      --text-main: #1A252F;
      --text-muted: #566573;
      --border-color: #E2E8F0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: var(--bg);
      color: var(--text-main);
      font-family: 'Noto Sans Tamil', -apple-system, sans-serif;
      line-height: 1.6;
      padding: 16px;
    }
    .kural-widget {
      max-width: 860px;
      margin: 0 auto;
      background: var(--card-bg);
      border-radius: 12px;
      border: 1px solid var(--border-color);
      box-shadow: 0 4px 16px rgba(44, 62, 80, 0.08);
      overflow: hidden;
    }
    .widget-header {
      background: var(--primary);
      color: #FFFFFF;
      padding: 20px 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      border-bottom: 3px solid var(--accent);
    }
    .widget-title h2 {
      font-family: 'Noto Serif Tamil', Georgia, serif;
      font-size: 22px;
      font-weight: 700;
      color: #FFFFFF;
    }
    .widget-subtitle {
      font-size: 13px;
      color: var(--accent);
      margin-top: 3px;
    }
    .tab-pills {
      display: flex;
      background: rgba(255, 255, 255, 0.12);
      padding: 3px;
      border-radius: 8px;
      gap: 4px;
    }
    .tab-btn {
      background: none;
      border: none;
      color: #E2E8F0;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .tab-btn.active {
      background: var(--accent);
      color: var(--primary);
      box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    }
    .controls-strip {
      padding: 12px 20px;
      background: #F8FAFC;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
    }
    .search-input {
      flex: 1 1 200px;
      padding: 8px 12px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 14px;
      font-family: inherit;
      background: #FFFFFF;
      color: var(--text-main);
    }
    .search-input:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 2px rgba(212, 172, 13, 0.2);
    }
    .action-btn {
      background: #FFFFFF;
      border: 1px solid var(--border-color);
      color: var(--primary);
      font-size: 13px;
      font-weight: 600;
      padding: 8px 14px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .action-btn:hover {
      background: var(--accent);
      color: var(--primary);
      border-color: var(--accent);
    }
    .content-area {
      padding: 24px;
      max-height: 580px;
      overflow-y: auto;
    }
    .kural-card {
      background: #FFFFFF;
      border: 1px solid #EAECEE;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      position: relative;
    }
    .kural-card:last-child {
      margin-bottom: 0;
    }
    .kural-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-size: 12px;
      color: var(--text-muted);
      border-bottom: 1px dashed var(--border-color);
      padding-bottom: 8px;
    }
    .kural-badge {
      font-weight: 700;
      color: var(--primary);
      font-size: 14px;
    }
    .kural-tag {
      color: #9A7D0A;
      font-weight: 600;
    }
    .couplet-box {
      background: #FDFEFE;
      border-left: 4px solid var(--accent);
      padding: 14px 18px;
      margin-bottom: 14px;
      border-radius: 0 8px 8px 0;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.02);
    }
    .couplet-tamil {
      font-family: 'Noto Serif Tamil', Georgia, serif;
      font-size: 19px;
      line-height: 1.7;
      font-weight: 700;
      color: var(--primary);
    }
    .transliteration {
      font-size: 13px;
      font-style: italic;
      color: #707B7C;
      margin-top: 6px;
    }
    .commentaries-group {
      margin-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    details.commentary-item {
      border: 1px solid var(--border-color);
      border-radius: 6px;
      overflow: hidden;
      background: #FFFFFF;
    }
    details.commentary-item summary {
      padding: 10px 14px;
      font-weight: 600;
      font-size: 13px;
      color: var(--primary);
      background: #F9FAFB;
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    details.commentary-item summary:hover {
      background: #F2F4F4;
    }
    details.commentary-item[open] summary {
      border-bottom: 1px solid var(--border-color);
      background: #EBEDEF;
    }
    .commentary-body {
      padding: 12px 14px;
      font-size: 14px;
      line-height: 1.6;
      color: #34495E;
      background: #FFFFFF;
    }
    .card-footer-actions {
      display: flex;
      gap: 8px;
      margin-top: 14px;
      justify-content: flex-end;
    }
    .mini-btn {
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
      background: #FFFFFF;
      color: var(--primary);
      cursor: pointer;
      font-family: inherit;
    }
    .mini-btn:hover {
      background: #EAECEE;
    }
    .aathichudi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 12px;
    }
    .aathichudi-card {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 14px;
      background: #FFFFFF;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .aathichudi-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
      border-color: var(--accent);
    }
    .aathichudi-head {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }
    .letter-marker {
      width: 28px;
      height: 28px;
      border-radius: 4px;
      background: var(--primary);
      color: var(--accent);
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .aathichudi-verse {
      font-family: 'Noto Serif Tamil', Georgia, serif;
      font-size: 16px;
      font-weight: 700;
      color: var(--primary);
    }
    .aathichudi-meaning {
      font-size: 13px;
      color: #4A5568;
      line-height: 1.5;
    }
    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--primary);
      color: #FFFFFF;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      border-left: 3px solid var(--accent);
      display: none;
      z-index: 999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
  </style>
</head>
<body>

<div class="kural-widget">
  <div class="widget-header">
    <div class="widget-title">
      <h2>தமிழ் திருக்குறள் & ஆத்திச்சூடி</h2>
      <div class="widget-subtitle">Google Sites ஊடாடும் பலகை (Universal Tamil Classics)</div>
    </div>
    <div class="tab-pills">
      <button class="tab-btn active" id="btn-tab-kural" onclick="switchTab('kural')">திருக்குறள் (1,330)</button>
      <button class="tab-btn" id="btn-tab-aathichudi" onclick="switchTab('aathichudi')">ஆத்திச்சூடி (நீதி நூல்கள்)</button>
    </div>
  </div>

  <div class="controls-strip">
    <input type="text" id="searchInput" class="search-input" placeholder="குறள் எண் அல்லது சொல் தேடுக... (Search)" oninput="filterContent()">
    <button class="action-btn" onclick="getRandomKural()">🎲 இன்றைய குறள் (Daily Kural)</button>
    <button class="action-btn" onclick="toggleAllDetails()">↕ உரைகளை விரிக்க/மடக்க</button>
  </div>

  <div class="content-area">
    <!-- Thirukkural Container -->
    <div id="kuralContainer"></div>

    <!-- Aathichudi Container -->
    <div id="aathichudiContainer" style="display: none;"></div>
  </div>
</div>

<div id="toast" class="toast">நகலெடுக்கப்பட்டது! (Copied)</div>

<script>
  const KURALS = [
    {
      num: 1,
      paal: "அறத்துப்பால்",
      athigaram: "கடவுள் வாழ்த்து",
      l1: "அகர முதல எழுத்தெல்லாம் ஆதி",
      l2: "பகவன் முதற்றே உலகு.",
      muVa: "எழுத்துக்கள் எல்லாம் 'அ' கரத்தை அடிப்படையாகக் கொண்டு இயங்குகின்றன; அதுபோல, உலகம் ஆதிபகவனை அடிப்படையாகக் கொண்டு இயங்குகிறது.",
      solomon: "எழுத்துக்கள் எல்லாம் 'அ' என்னும் எழுத்தை முதலாக உடையன; அதுபோல, உலகம் ஆதிபகவனை முதலாக உடையது.",
      kalaignar: "'அ' எழுத்துக்களுக்குத் தொடக்கம்; அதுபோல் ஆதிபகவன் இந்த உலகத்திற்குத் தொடக்கம்.",
      enCouplet: "As the letter A is the first of all letters, so the eternal God is first in the world.",
      enMeaning: "Just as vowel 'A' is the foundation of language, the primordial Divine Spirit is the origin of the cosmos.",
      translit: "Agara mudhala ezhuththellaam aadhi / bagavan mudhatre ulagu."
    },
    {
      num: 2,
      paal: "அறத்துப்பால்",
      athigaram: "கடவுள் வாழ்த்து",
      l1: "கற்றதனா லாய பயனென்கொல் வாலறிவன்",
      l2: "நற்றாள் தொழாஅர் எனின்.",
      muVa: "தூய அறிவு வடிவாக விளங்கும் இறைவனுடைய நல்ல திருவடிகளை தொழாமல் இருப்பாரானால், அவர் கற்ற கல்வியினால் ஆகிய பயன் என்ன?",
      solomon: "தூய அறிவு வடிவானவனின் திருவடிகளை வணங்காதவர், கற்றுத்தான் என்ன பயன்?",
      kalaignar: "தூய அறிவின் வடிவமாக விளங்கும் இறைவனின் நற்றாள்களை வணங்கி வழிபடாதவர் கற்ற கல்வியினால் என்ன பயன்? ஒன்றுமில்லை.",
      enCouplet: "What fruit has learning yielded him who will not adore the good feet of Him who is possessed of pure knowledge?",
      enMeaning: "What is the true value of education if one does not humbly reverence the transcendent truth?",
      translit: "Katradhanaal aaya payanenkol vaalarivan / natraal thozhaar enin."
    },
    {
      num: 3,
      paal: "அறத்துப்பால்",
      athigaram: "கடவுள் வாழ்த்து",
      l1: "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்",
      l2: "நிலமிசை நீடுவாழ் வார்.",
      muVa: "அன்பரின் மனமாகிய மலரின் மீது வீற்றிருக்கும் இறைவனின் பெருமை பொருந்திய திருவடிகளை எப்போதும் நினைப்பவர், இப்பூமியில் நீடு வாழ்வார்.",
      solomon: "மனமாகிய மலர்மீது சென்று இருப்பவனாகிய கடவுளின் சிறந்த திருவடிகளை எப்போதும் நினைப்பவர், இப்பூமியில் நீண்ட காலம் வாழ்வர்.",
      kalaignar: "மலரின் மீது நடந்த இறைவனின் திருவடிகளை வணங்குகிறவர்கள், மண்ணுலகில் நீண்ட புகழுடன் வாழ்வார்கள்.",
      enCouplet: "They who are united to the glorious feet of Him who passes swiftly over the flower of the mind, shall flourish long on earth.",
      enMeaning: "Those who meditate upon the divine dwelling in the bloom of their heart attain lasting grace on earth.",
      translit: "Malarmisai eginaan maanadi serndhaar / nilamisai needuvaazh vaar."
    },
    {
      num: 4,
      paal: "அறத்துப்பால்",
      athigaram: "கடவுள் வாழ்த்து",
      l1: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு",
      l2: "யாண்டும் இடும்பை இல.",
      muVa: "விருப்பு வெறுப்பு இல்லாத இறைவனின் திருவடிகளை அடைந்தவர்களுக்கு, எக்காலத்திலும் எவ்வித துன்பமும் இல்லை.",
      solomon: "விருப்பு வெறுப்பு இல்லாத கடவுளின் திருவடிகளைப் பொருந்தி நினைக்கின்றவர்க்கு எப்போதுமே துன்பம் இல்லை.",
      kalaignar: "விருப்பு வெறுப்பற்ற தூயவனின் காலடிகளைப் பற்றி நிற்பவர்களுக்கு எப்போதுமே எத்தகைய துன்பமும் ஏற்படுவதில்லை.",
      enCouplet: "To those who cling to the feet of Him who has neither desire nor aversion, miseries will never come.",
      enMeaning: "Suffering cannot touch those who ground themselves in serene impartiality, devoid of craving and aversion.",
      translit: "Vendudhal vendaamai ilaandi serndhaarkku / yaandum idumbai ila."
    },
    {
      num: 131,
      paal: "அறத்துப்பால்",
      athigaram: "ஒழுக்கமுடைமை",
      l1: "ஒழுக்கம் விழுப்பம் தரலான் ஒழுக்கம்",
      l2: "உயிரினும் ஓம்பப் படும்.",
      muVa: "ஒழுக்கமே எல்லோர்க்கும் மேன்மையைத் தருவதாக இருப்பதால், அந்த ஒழுக்கத்தை உயிரைவிடச் சிறந்ததாகக் கருதிப் பாதுகாக்க வேண்டும்.",
      solomon: "ஒழுக்கம் மனிதர்க்கு உயர்வைத் தருவதால், அந்த ஒழுக்கத்தை உயிரைவிட மேலானதாகக் காக்க வேண்டும்.",
      kalaignar: "ஒழுக்கமே உயர்வைத் தருவதால், ஒழுக்கத்தை உயிரைவிட மேலானதாகக் கருதிப் போற்ற வேண்டும்.",
      enCouplet: "Right conduct yields excellence, therefore should right conduct be preserved more than life itself.",
      enMeaning: "Integrity gives true nobility to human existence; therefore it must be cherished higher than life itself.",
      translit: "Ozhukkam vizhuppam tharalaan ozhukkam / uyirinum ombap padum."
    },
    {
      num: 391,
      paal: "பொருட்பால்",
      athigaram: "கல்வி",
      l1: "கற்க கசடறக் கற்பவை கற்றபின்",
      l2: "நிற்க அதற்குத் தக.",
      muVa: "கற்கத் தகுந்த நூல்களைக் குற்றமறக் கற்க வேண்டும்; அவ்வாறு கற்ற பிறகு, கற்ற கல்விக்கு ஏற்றவாறு நெறியில் நடக்க வேண்டும்.",
      solomon: "கற்க வேண்டிய நூல்களைப் பிழையின்றிப் படிக்க வேண்டும்; படித்த பிறகு, படித்ததன் படி வாழ வேண்டும்.",
      kalaignar: "படிக்க வேண்டியவைகளை குறையறக் கற்க வேண்டும்; கற்ற பிறகு அதன்படி வாழ்க்கையை அமைத்துக் கொள்ள வேண்டும்.",
      enCouplet: "Let a man learn thoroughly whatever he may learn, and let his conduct be worthy of his learning.",
      enMeaning: "Learn faultlessly what is worth learning, and let your daily character reflect what you have learned.",
      translit: "Karka kasadarak karpavai katrapin / nirka adharkuth thaga."
    },
    {
      num: 484,
      paal: "பொருட்பால்",
      athigaram: "காலமறிதல்",
      l1: "ஞாலம் கருதினுங் கைகூடும் காலம்",
      l2: "கருதி இடத்தாற் செயின்.",
      muVa: "பொருத்தமான காலத்தை அறிந்து இடத்தோடு பொருந்தச் செய்தால், உலகத்தையே ஆளக் கருதினாலும் அது கைகூடும்.",
      solomon: "செயலை முடிப்பதற்கு ஏற்ற காலத்தை அறிந்து, அதற்குப் பொருத்தமான இடத்தையும் தேர்ந்தெடுத்துச் செய்தால் உலகமே எளிதில் வசப்படும்.",
      kalaignar: "தகுந்த காலத்தை அறிந்து, அதற்குரிய இடத்தையும் உணர்ந்து செயலாற்றினால் உலகையே ஆள நினைத்தாலும் அது கைகூடும்.",
      enCouplet: "Even the world itself may be won, if one acts choosing the proper season and the fitting place.",
      enMeaning: "Mastery over the grandest endeavor is assured if action aligns with proper timing and place.",
      translit: "Gnaalam karudhinung kaigoodum kaalam / karudhi idaththaar seyin."
    }
  ];

  const AATHICHUDI = [
    { letter: "அ", verse: "அறஞ்செய விரும்பு", meaning: "நற்செயல்களை என்றும் விரும்பிச் செய்.", en: "Desire always to perform righteous deeds." },
    { letter: "ஆ", verse: "ஆறுவது சினம்", meaning: "கோபத்தை உடனே தணித்துக் கொள்.", en: "Anger should be cooled down immediately." },
    { letter: "இ", verse: "இயல்வது கரவேல்", meaning: "உன்னால் கொடுக்க முடிந்ததை மறைக்காமல் கொடு.", en: "Do not conceal what you can give to the needy." },
    { letter: "ஈ", verse: "ஈவது விலக்கேல்", meaning: "பிறர் கொடுக்கும் தானத்தைத் தடுக்காதே.", en: "Never prevent someone from giving alms." },
    { letter: "உ", verse: "உடையது விளம்பேல்", meaning: "உன்னிடம் உள்ள செல்வத்தைப் பற்றி தற்பெருமை பேசாதே.", en: "Do not boast of your possessions." },
    { letter: "ஊ", verse: "ஊக்கமது கைவிடேல்", meaning: "விடாமுயற்சியையும் ஊக்கத்தையும் கைவிடாதே.", en: "Never abandon your courage and perseverance." },
    { letter: "எ", verse: "எண் எழுத்து இகழேல்", meaning: "கணிதத்தையும் மொழியையும் அவமதிக்காமல் படி.", en: "Never neglect mathematics and letters." },
    { letter: "ஏ", verse: "ஏற்பது இகழ்ச்சி", meaning: "உழைக்காமல் பிச்சை எடுப்பது இழிவானது.", en: "Begging without self-reliance is disgrace." },
    { letter: "ஐ", verse: "ஐயமிட்டு உண்", meaning: "பசித்தோருக்கு உணவிட்ட பின் நீ உண்.", en: "Feed the hungry before partaking yourself." },
    { letter: "ஒ", verse: "ஒப்புரவு ஒழுகு", meaning: "உலக நடைமுறைக்கு ஏற்ப இணைந்து வாழ்.", en: "Live harmoniously with society's moral standards." },
    { letter: "ஓ", verse: "ஓதுவது ஒழியேல்", meaning: "தினமும் பயனுள்ள நூல்களைப் படி.", en: "Never cease daily reading and learning." },
    { letter: "ஔ", verse: "ஔவியம் பேசேல்", meaning: "பொறாமை கொண்ட சொற்களைப் பேசாதே.", en: "Never speak words tainted with envy." },
    { letter: "அஃ", verse: "அஃகஞ் சுருக்கேல்", meaning: "தானியங்களை அளவையில் குறைக்காதே.", en: "Do not reduce measurements; trade fairly." }
  ];

  let currentTab = 'kural';
  let detailsOpen = ${config.defaultExpanded ? 'true' : 'false'};

  function renderKurals(list) {
    const container = document.getElementById('kuralContainer');
    if (!list || list.length === 0) {
      container.innerHTML = '<div style="text-align:center; padding: 40px; color: #707B7C;">பொருத்தமான குறள்கள் காணப்படவில்லை (No matching Kurals found)</div>';
      return;
    }
    container.innerHTML = list.map(k => \`
      <div class="kural-card" id="kural-\${k.num}">
        <div class="kural-meta">
          <span class="kural-badge">குறள் \${k.num}</span>
          <span class="kural-tag">\${k.paal} · \${k.athigaram}</span>
        </div>
        <div class="couplet-box">
          <div class="couplet-tamil">\${k.l1}<br>\${k.l2}</div>
          ${config.showTransliteration ? `<div class="transliteration">\${k.translit}</div>` : ''}
        </div>
        <div class="commentaries-group">
          ${config.showMuVa ? `
          <details class="commentary-item" \${detailsOpen ? 'open' : ''}>
            <summary>மு. வரதராசனார் உரை (M. Varadarajan) <span>▼</span></summary>
            <div class="commentary-body">\${k.muVa}</div>
          </details>` : ''}
          ${config.showSolomon ? `
          <details class="commentary-item" \${detailsOpen ? 'open' : ''}>
            <summary>சாலமன் பாப்பையா உரை (Solomon Pappaiya) <span>▼</span></summary>
            <div class="commentary-body">\${k.solomon}</div>
          </details>` : ''}
          ${config.showKalaignar ? `
          <details class="commentary-item" \${detailsOpen ? 'open' : ''}>
            <summary>கலைஞர் உரை (Kalaignar M. Karunanidhi) <span>▼</span></summary>
            <div class="commentary-body">\${k.kalaignar}</div>
          </details>` : ''}
          ${config.showEnglish ? `
          <details class="commentary-item" \${detailsOpen ? 'open' : ''}>
            <summary>English Translation & Meaning <span>▼</span></summary>
            <div class="commentary-body">
              <strong>Couplet:</strong> "\${k.enCouplet}"<br>
              <div style="margin-top: 6px; color: #566573;">\${k.enMeaning}</div>
            </div>
          </details>` : ''}
        </div>
        <div class="card-footer-actions">
          ${config.enableAudio ? `<button class="mini-btn" onclick="speakTamil('\${k.l1} \${k.l2}')">🔊 ஒலிக்க (Listen)</button>` : ''}
          <button class="mini-btn" onclick="copyKural(\${k.num})">📋 நகலெடு (Copy)</button>
        </div>
      </div>
    \`).join('');
  }

  function renderAathichudi(list) {
    const container = document.getElementById('aathichudiContainer');
    container.innerHTML = '<div class="aathichudi-grid">' + list.map(a => \`
      <div class="aathichudi-card">
        <div class="aathichudi-head">
          <span class="letter-marker">\${a.letter}</span>
          <span class="aathichudi-verse">\${a.verse}</span>
        </div>
        <p class="aathichudi-meaning">\${a.meaning}</p>
        <p style="font-size: 11px; color: #88929b; margin-top: 4px; font-style: italic;">\${a.en}</p>
      </div>
    \`).join('') + '</div>';
  }

  function switchTab(tab) {
    currentTab = tab;
    document.getElementById('btn-tab-kural').classList.toggle('active', tab === 'kural');
    document.getElementById('btn-tab-aathichudi').classList.toggle('active', tab === 'aathichudi');
    document.getElementById('kuralContainer').style.display = tab === 'kural' ? 'block' : 'none';
    document.getElementById('aathichudiContainer').style.display = tab === 'aathichudi' ? 'block' : 'none';
  }

  function filterContent() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (currentTab === 'kural') {
      const filtered = KURALS.filter(k => 
        k.num.toString() === query ||
        k.l1.toLowerCase().includes(query) ||
        k.l2.toLowerCase().includes(query) ||
        k.athigaram.toLowerCase().includes(query) ||
        k.muVa.toLowerCase().includes(query) ||
        k.enCouplet.toLowerCase().includes(query)
      );
      renderKurals(filtered);
    } else {
      const filtered = AATHICHUDI.filter(a => 
        a.verse.toLowerCase().includes(query) ||
        a.meaning.toLowerCase().includes(query) ||
        a.en.toLowerCase().includes(query) ||
        a.letter.toLowerCase().includes(query)
      );
      renderAathichudi(filtered);
    }
  }

  function getRandomKural() {
    switchTab('kural');
    const random = KURALS[Math.floor(Math.random() * KURALS.length)];
    renderKurals([random]);
    document.getElementById('searchInput').value = '';
    showToast('குறள் ' + random.num + ' தேர்ந்தெடுக்கப்பட்டது');
  }

  function toggleAllDetails() {
    detailsOpen = !detailsOpen;
    document.querySelectorAll('.commentary-item').forEach(el => {
      el.open = detailsOpen;
    });
  }

  function speakTamil(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ta-IN';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
      showToast('குறள் ஒலிக்கிறது (Playing Audio)');
    } else {
      showToast('Speech API not supported in this browser');
    }
  }

  function copyKural(num) {
    const k = KURALS.find(item => item.num === num);
    if (!k) return;
    const text = \`குறள் \${k.num}: \${k.athigaram}\\n\\n\${k.l1}\\n\${k.l2}\\n\\nமு. வரதராசனார் உரை:\\n\${k.muVa}\\n\\nசாலமன் பாப்பையா உரை:\\n\${k.solomon}\\n\\nகலைஞர் உரை:\\n\${k.kalaignar}\\n\\nEnglish:\\n\${k.enCouplet}\`;
    navigator.clipboard.writeText(text).then(() => {
      showToast('குறள் ' + num + ' நகலெடுக்கப்பட்டது!');
    }).catch(() => {
      showToast('Failed to copy');
    });
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2200);
  }

  // Initialize
  renderKurals(KURALS);
  renderAathichudi(AATHICHUDI);
</script>
</body>
</html>`;
}
