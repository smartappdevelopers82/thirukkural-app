export interface GoogleSitesSectionGuide {
  id: string;
  stepNumber: number;
  titleTa: string;
  titleEn: string;
  blockType: string;
  icon: string;
  badge: string;
  summary: string;
  instructions: string[];
  suggestedStyles: {
    fontRole: string;
    suggestedFont: string;
    fontSize: string;
    textColor: string;
    bgColor: string;
  };
  sampleContentHtml: string;
  sampleContentPlainText: string;
}

export const THEME_PALETTE = {
  primary: {
    hex: "#2C3E50",
    name: "Deep Slate / Navy",
    nameTa: "அடர் நீல வண்ணப் பாறை",
    usage: "Site Header, Navigation, Major Titles, Dominant Elements",
    meaning: "Represents depth, cosmic wisdom, and enduring authority of classic Tamil scriptures."
  },
  accent: {
    hex: "#D4AC0D",
    name: "Warm Gold",
    nameTa: "செழும் பொன் நிறம்",
    usage: "Buttons, Focus rings, Kural highlights, Chapter markers, Embellishments",
    meaning: "Evokes ancient Indian palm leaf manuscript illumination, temple brass lamps, and sacred verses."
  },
  background: {
    hex: "#FAFAFA",
    name: "Soft Pearl Off-White",
    nameTa: "முத்து வெண்மைப் பின்னணி",
    usage: "Body background, page canvas, reading area",
    meaning: "Delivers effortless, high-contrast readability without eye strain across mobile and desktop."
  },
  cardSurface: {
    hex: "#FFFFFF",
    name: "Crisp Card Surface",
    nameTa: "தூய வெண்மை அட்டை",
    usage: "Couplet cards, collapsible containers, explanation boxes",
    meaning: "Ensures clean separation with subtle 1px border or soft shadow."
  },
  textPrimary: {
    hex: "#1A252F",
    name: "Midnight Slate Ink",
    nameTa: "மைக்கருப்பு உரை",
    usage: "Primary Tamil poetry lines, headings, essential text",
    meaning: "Deep contrast adhering to WCAG AAA legibility."
  },
  textMuted: {
    hex: "#566573",
    name: "Subdued Charcoal",
    nameTa: "சாம்பல் குறிப்பு உரை",
    usage: "Transliteration, commentary author labels, chapter metadata",
    meaning: "Secondary guidance that keeps the reader focused on original couplets."
  }
};

export const TYPOGRAPHY_GUIDE = [
  {
    role: "Google Sites Heading 1 (Title)",
    tamilFont: "Noto Serif Tamil or Gidugu",
    englishFont: "Cinzel or Georgia",
    weight: "Bold (700)",
    size: "32px – 44px",
    color: "#FFFFFF (on Hero) / #2C3E50 (on Light)",
    appliedTo: "Hero Banner, Page Title (தமிழ் திருக்குறள் & ஆத்திச்சூடி)"
  },
  {
    role: "Google Sites Heading 2 (Section Title)",
    tamilFont: "Noto Serif Tamil",
    englishFont: "Playfair Display or Merriweather",
    weight: "SemiBold / Bold (600–700)",
    size: "24px – 28px",
    color: "#2C3E50",
    appliedTo: "Chapter Headers (குறள் 1: கடவுள் வாழ்த்து, ஆத்திச்சூடி வரிசை)"
  },
  {
    role: "Google Sites Heading 3 (Couplet Verse)",
    tamilFont: "Noto Serif Tamil or Mukta Malalar",
    englishFont: "Source Serif 4",
    weight: "SemiBold (600)",
    size: "18px – 22px",
    color: "#1A252F",
    appliedTo: "Two-line Kural couplets, Aathichudi aphorisms with generous leading (1.7)"
  },
  {
    role: "Google Sites Normal Text (Body & Interpretations)",
    tamilFont: "Noto Sans Tamil or Mukta Malalar",
    englishFont: "Plus Jakarta Sans or DM Sans",
    weight: "Regular (400–500)",
    size: "15px – 16px",
    color: "#2C3E50 / #334155",
    appliedTo: "Collapsible interpretations (மு.வ, சாலமன் பாப்பையா, கலைஞர்) and English translations"
  },
  {
    role: "Google Sites Small Text (Caption / Meta)",
    tamilFont: "Noto Sans Tamil",
    englishFont: "Inter / Roboto",
    weight: "Medium (500)",
    size: "12px – 13px",
    color: "#566573",
    appliedTo: "Author badges, chapter numbers, audio indicators, copy timestamps"
  }
];

export const GOOGLE_SITES_BLUEPRINTS: GoogleSitesSectionGuide[] = [
  {
    id: "step-theme",
    stepNumber: 1,
    titleTa: "Google Sites தள தீம் & எழுத்துருக்கள் அமைப்பு",
    titleEn: "Step 1: Set Site-Wide Custom Theme & Palette",
    blockType: "Themes > Custom Theme",
    icon: "Palette",
    badge: "Prerequisite",
    summary: "Set up the site-wide color palette, fonts, and brand colors before placing content blocks.",
    instructions: [
      "Open your Google Site editor (e.g., sites.google.com).",
      "In the right sidebar, click on 'Themes'.",
      "Under 'Custom', click the '+' (Create theme) button.",
      "Name your theme: 'Thirukkural Classic' or 'தமிழ் மரபு'.",
      "Upload or pick your site logo (optional).",
      "In the Color Palette screen, choose 'Custom colors':",
      "  • Primary color: Enter #2C3E50 (Deep Slate / Navy)",
      "  • Accent color: Enter #D4AC0D (Warm Gold)",
      "  • Background color: Enter #FAFAFA (Soft Pearl Off-White)",
      "In the Fonts step, set:",
      "  • Title & Headings Font: Select 'Noto Serif Tamil' (or 'Gidugu' / 'Noto Serif')",
      "  • Body Font: Select 'Noto Sans Tamil' (or 'Mukta Malalar' / 'Noto Sans')",
      "Click 'Create Theme' to apply across all existing and new pages."
    ],
    suggestedStyles: {
      fontRole: "Site-Wide Theme",
      suggestedFont: "Noto Serif Tamil + Noto Sans Tamil",
      fontSize: "Inherited globally",
      textColor: "#2C3E50 / #1A252F",
      bgColor: "#FAFAFA"
    },
    sampleContentHtml: `<!-- Theme Settings Reference -->
Primary: #2C3E50
Accent: #D4AC0D
Background: #FAFAFA
Title Font: Noto Serif Tamil
Body Font: Noto Sans Tamil`,
    sampleContentPlainText: `Theme Name: Thirukkural Classic
Primary Color: #2C3E50
Accent Color: #D4AC0D
Background: #FAFAFA
Header Font: Noto Serif Tamil
Body Font: Noto Sans Tamil`
  },
  {
    id: "step-hero",
    stepNumber: 2,
    titleTa: "தலைப்புப் பகுதி (Hero Banner)",
    titleEn: "Step 2: Header Section (Hero Banner)",
    blockType: "Banner (Large Banner / Header type)",
    icon: "Image",
    badge: "Hero Section",
    summary: "Establish strong visual presence and intellectual weight with sage Thiruvalluvar banner and golden subtitle.",
    instructions: [
      "Hover over the default header at the top of your Google Sites page.",
      "Click 'Header type' and select 'Large Banner' (or 'Banner').",
      "Click 'Image' > 'Upload' and select the Thiruvalluvar Manuscript banner asset.",
      "Set 'Anchor image' to center to focus on the sage in contemplation.",
      "Click into the Title text box: Enter 'தமிழ் திருக்குறள் (Tamil Thirukkural)'.",
      "Set text styling to 'Title' (or 'Heading 1'), aligned Center, with font color #FFFFFF or #FDFEFE.",
      "Below the title, add a Subtitle box: '\"உலகப் பொதுமறை — தெளிவுரைகளுடன்\" (The Universal Veda — With Detailed Interpretations)'.",
      "Style subtitle with color #D4AC0D (Warm Gold) for an authentic palm-leaf manuscript aesthetic."
    ],
    suggestedStyles: {
      fontRole: "Title + Subtitle",
      suggestedFont: "Noto Serif Tamil (Bold 700)",
      fontSize: "36px - 44px (Title), 18px (Subtitle)",
      textColor: "#FFFFFF (Title), #D4AC0D (Subtitle)",
      bgColor: "#2C3E50"
    },
    sampleContentHtml: `<div style="text-align: center; padding: 40px 20px; background-color: #2C3E50; color: #FFFFFF; font-family: 'Noto Serif Tamil', Georgia, serif;">
  <h1 style="font-size: 38px; margin: 0 0 10px; color: #FFFFFF; letter-spacing: 0.5px;">தமிழ் திருக்குறள்</h1>
  <p style="font-size: 18px; color: #D4AC0D; margin: 0; font-weight: 500;">"உலகப் பொதுமறை — தெளிவுரைகளுடன்"</p>
  <p style="font-size: 14px; color: #D5D8DC; margin-top: 8px;">The Universal Veda — With Three Authoritative Interpretations</p>
</div>`,
    sampleContentPlainText: `Title: தமிழ் திருக்குறள் (Tamil Thirukkural)
Subtitle: "உலகப் பொதுமறை — தெளிவுரைகளுடன்" (The Universal Veda — With Detailed Interpretations)`
  },
  {
    id: "step-intro",
    stepNumber: 3,
    titleTa: "அறிமுகப் பகுதி (Introduction Section)",
    titleEn: "Step 3: Introduction Section (Hero Card / Overview)",
    blockType: "Insert > Content Blocks (2-Column Image + Text)",
    icon: "BookOpen",
    badge: "Context & History",
    summary: "Provide cultural context and reverence with palm-leaf scripture photo and foundational overview.",
    instructions: [
      "In the right sidebar, click 'Insert'.",
      "Under 'Content blocks', click the 2nd layout (Image on left + Text on right) or 1-Column Text & Image.",
      "In the Image box on the left, upload the Olai Chuvadi (palm leaf scripture) image.",
      "In the Text box on the right:",
      "  • Heading 2: திருக்குறள் அறிமுகம் (Introduction to Thirukkural)",
      "  • Normal Text paragraph 1: 'Thirukkural, authored by the immortal sage Thiruvalluvar, is a masterpiece of moral and philosophical literature. Composing 1,330 couplets across three main books—Aram (Virtue), Porul (Wealth), and Inbam (Love)—it offers timeless guidance on ethics, governance, and daily life.'",
      "  • Normal Text paragraph 2 (Tamil): 'அறம், பொருள், இன்பம் என்னும் முப்பால் அமைப்பில் 133 அதிகாரங்களையும் 1330 குறட்பாக்களையும் கொண்ட உலகப் பொதுமறை. மனித வாழ்வின் அனைத்து நிலைகளுக்கும் பொருந்தும் பொதுவான அறநெறிகளை வழங்குகிறது.'",
      "Click the section background painter palette icon on the left edge: Choose 'Style 2' (soft gray / pearl background) to separate it visually."
    ],
    suggestedStyles: {
      fontRole: "Heading 2 + Body Text",
      suggestedFont: "Noto Serif Tamil (Heading) + Noto Sans Tamil (Body)",
      fontSize: "24px (Heading), 15px (Body)",
      textColor: "#2C3E50 (Heading), #34495E (Body)",
      bgColor: "#F2F4F4 / #FAFAFA"
    },
    sampleContentHtml: `<div style="max-width: 800px; margin: auto; padding: 24px; font-family: 'Noto Sans Tamil', sans-serif; color: #2C3E50;">
  <h2 style="font-family: 'Noto Serif Tamil', serif; font-size: 26px; color: #2C3E50; margin-bottom: 12px; border-bottom: 2px solid #D4AC0D; padding-bottom: 8px;">திருக்குறள் அறிமுகம் (Introduction)</h2>
  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 14px;">Thirukkural, authored by the immortal sage Thiruvalluvar, is a masterpiece of moral and philosophical literature. Composing 1,330 couplets across three main books—<strong>Aram (Virtue)</strong>, <strong>Porul (Wealth)</strong>, and <strong>Inbam (Love)</strong>—it offers timeless guidance on ethics, governance, and daily life.</p>
  <p style="font-size: 15px; line-height: 1.7; color: #4A5568;">அறம், பொருள், இன்பம் என்னும் முப்பால் பகுப்பில், ஒவ்வொரு அதிகாரத்திற்கும் பத்து பாடல்கள் வீதம் 133 அதிகாரங்களில் 1,330 அருட்பாக்களால் உலக மானுடத்திற்கு நல்வழி காட்டும் அரும்பெரும் கருவூலம்.</p>
</div>`,
    sampleContentPlainText: `திருக்குறள் அறிமுகம் (Introduction)
Thirukkural, authored by the immortal sage Thiruvalluvar, is a masterpiece of moral and philosophical literature. Composing 1,330 couplets across three main books—Aram (Virtue), Porul (Wealth), and Inbam (Love)—it offers timeless guidance on ethics, governance, and daily life.`
  },
  {
    id: "step-card-blueprint",
    stepNumber: 4,
    titleTa: "குறள் அட்டை கட்டமைப்பு (Couplet Card Blueprint)",
    titleEn: "Step 4: Thirukkural Couplet Card Blueprint (Native Google Sites Blocks)",
    blockType: "Heading + Text Box + Collapsible Group",
    icon: "Layers",
    badge: "Core Blueprint",
    summary: "Native Google Sites layout using Collapsible Text for clean, uncluttered, mobile-friendly multi-commentary display.",
    instructions: [
      "In the right sidebar, click 'Insert' > 'Text box'.",
      "Format as Heading 2: 'குறள் 1: கடவுள் வாழ்த்து (Kural 1: The Praise of God)'.",
      "Set text color to #2C3E50 (Deep Slate).",
      "Directly below, insert another Text box formatted as Heading 3 (or Subheading):",
      "Line 1: அகர முதல எழுத்தெல்லாம் ஆதி",
      "Line 2: பகவன் முதற்றே உலகு.",
      "Select font: 'Noto Serif Tamil', Bold, Size 18-20px.",
      "Now, in the right sidebar under 'Insert', click 'Collapsible group' (Collapsible text).",
      "In the first Collapsible item title: 'மு. வரதராசனார் உரை (M. Varadarajan)'",
      "In the expandable body: 'எழுத்துக்கள் எல்லாம் 'அ' கரத்தை அடிப்படையாகக் கொண்டு இயங்குகின்றன; அதுபோல, உலகம் ஆதிபகவனை அடிப்படையாகக் கொண்டு இயங்குகிறது.'",
      "Click '+' to add second Collapsible item title: 'சாலமன் பாப்பையா உரை (Solomon Pappaiya)'",
      "In the expandable body: 'எழுத்துக்கள் எல்லாம் 'அ' என்னும் எழுத்தை முதலாக உடையன; அதுபோல, உலகம் ஆதிபகவனை முதலாக உடையது.'",
      "Click '+' to add third Collapsible item title: 'கலைஞர் உரை (Kalaignar M. Karunanidhi)'",
      "In the expandable body: ''அ' எழுத்துக்களுக்குத் தொடக்கம்; அதுபோல் ஆதிபகவன் இந்த உலகத்திற்குத் தொடக்கம்.'",
      "Optional 4th item: 'ஆங்கில உரை (English Translation & Meaning)'"
    ],
    suggestedStyles: {
      fontRole: "Heading 2 + Heading 3 + Collapsible Group",
      suggestedFont: "Noto Serif Tamil (Verse) + Noto Sans Tamil (Comments)",
      fontSize: "22px (Heading 2), 19px (Verse), 15px (Comments)",
      textColor: "#2C3E50 (Heading 2), #1A252F (Verse), #34495E (Comments)",
      bgColor: "#FFFFFF card inside #FAFAFA section"
    },
    sampleContentHtml: `<!-- Blueprint Card for Google Sites Native Display -->
<div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 20px; margin: 16px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
  <div style="font-size: 13px; font-weight: 600; color: #D4AC0D; text-transform: uppercase; letter-spacing: 0.5px;">அறத்துப்பால் · கடவுள் வாழ்த்து</div>
  <h3 style="font-family: 'Noto Serif Tamil', serif; font-size: 20px; color: #2C3E50; margin: 6px 0 12px;">குறள் 1 (Kural 1)</h3>
  <div style="background: #F8FAFC; border-left: 4px solid #D4AC0D; padding: 14px 18px; margin-bottom: 16px;">
    <p style="font-family: 'Noto Serif Tamil', serif; font-size: 18px; line-height: 1.6; color: #1E293B; margin: 0; font-weight: 600;">அகர முதல எழுத்தெல்லாம் ஆதி<br>பகவன் முதற்றே உலகு.</p>
  </div>
  <details style="margin-bottom: 8px; border: 1px solid #E2E8F0; border-radius: 6px; padding: 8px 12px; background: #FFFFFF;">
    <summary style="font-weight: 600; color: #2C3E50; cursor: pointer;">மு. வரதராசனார் உரை (M. Varadarajan)</summary>
    <p style="font-size: 14px; color: #475569; margin: 8px 0 4px; line-height: 1.6;">எழுத்துக்கள் எல்லாம் 'அ' கரத்தை அடிப்படையாகக் கொண்டு இயங்குகின்றன; அதுபோல, உலகம் ஆதிபகவனை அடிப்படையாகக் கொண்டு இயங்குகிறது.</p>
  </details>
  <details style="margin-bottom: 8px; border: 1px solid #E2E8F0; border-radius: 6px; padding: 8px 12px; background: #FFFFFF;">
    <summary style="font-weight: 600; color: #2C3E50; cursor: pointer;">சாலமன் பாப்பையா உரை (Solomon Pappaiya)</summary>
    <p style="font-size: 14px; color: #475569; margin: 8px 0 4px; line-height: 1.6;">எழுத்துக்கள் எல்லாம் 'அ' என்னும் எழுத்தை முதலாக உடையன; அதுபோல, உலகம் ஆதிபகவனை முதலாக உடையது.</p>
  </details>
  <details style="border: 1px solid #E2E8F0; border-radius: 6px; padding: 8px 12px; background: #FFFFFF;">
    <summary style="font-weight: 600; color: #2C3E50; cursor: pointer;">கலைஞர் உரை (Kalaignar M. Karunanidhi)</summary>
    <p style="font-size: 14px; color: #475569; margin: 8px 0 4px; line-height: 1.6;">'அ' எழுத்துக்களுக்குத் தொடக்கம்; அதுபோல் ஆதிபகவன் இந்த உலகத்திற்குத் தொடக்கம்.</p>
  </details>
</div>`,
    sampleContentPlainText: `[குறள் 1: கடவுள் வாழ்த்து]
அகர முதல எழுத்தெல்லாம் ஆதி
பகவன் முதற்றே உலகு.

▼ மு. வரதராசனார் உரை (M. Varadarajan):
எழுத்துக்கள் எல்லாம் 'அ' கரத்தை அடிப்படையாகக் கொண்டு இயங்குகின்றன; அதுபோல, உலகம் ஆதிபகவனை அடிப்படையாகக் கொண்டு இயங்குகிறது.

▼ சாலமன் பாப்பையா உரை (Solomon Pappaiya):
எழுத்துக்கள் எல்லாம் 'அ' என்னும் எழுத்தை முதலாக உடையன; அதுபோல, உலகம் ஆதிபகவனை முதலாக உடையது.

▼ கலைஞர் உரை (Kalaignar M. Karunanidhi):
'அ' எழுத்துக்களுக்குத் தொடக்கம்; அதுபோல் ஆதிபகவன் இந்த உலகத்திற்குத் தொடக்கம்.`
  },
  {
    id: "step-embed-widget",
    stepNumber: 5,
    titleTa: "ஊடாடும் விட்ஜெட் (Interactive Google Sites Embed Block)",
    titleEn: "Step 5: Google Sites Embed Code Block (Insert > Embed > Embed Code)",
    blockType: "Insert > Embed > Embed code",
    icon: "Code",
    badge: "Interactive Embed",
    summary: "Single copy-paste HTML/CSS/JS block with live search, audio speech reader, commentary tabs, and copy buttons.",
    instructions: [
      "In the right sidebar of Google Sites, click 'Insert'.",
      "Click the 'Embed' icon (the icon with '< / >').",
      "In the popup dialog, choose the second tab: 'Embed code' (DO NOT use 'By URL').",
      "Paste the ready-to-use Standalone Thirukkural & Aathichudi Embed Code generated from our tool.",
      "Click 'Next', check the live preview, then click 'Insert'.",
      "Drag the corners of the embed box to make it full width and tall enough (e.g. 650px - 750px height) so it doesn't show inner scrollbars.",
      "Preview in Google Sites desktop and mobile views: the widget will automatically adapt with responsive layout, Tamil voice speech synthesizer, and collapsible commentary!"
    ],
    suggestedStyles: {
      fontRole: "Self-Contained Responsive HTML/CSS/JS Widget",
      suggestedFont: "Noto Serif Tamil & Noto Sans Tamil (loaded via Google Fonts CDN inside iframe)",
      fontSize: "Auto-responsive",
      textColor: "Self-styled using #2C3E50 and #D4AC0D",
      bgColor: "Self-contained container"
    },
    sampleContentHtml: `<!-- See Embed Generator Tab for the full copy-pasteable script -->`,
    sampleContentPlainText: `Google Sites Steps:
1. Click Insert > Embed
2. Select 'Embed code' tab
3. Paste the generated Standalone HTML block
4. Click Next > Insert
5. Resize the widget box to desired dimensions`
  },
  {
    id: "step-aathichudi",
    stepNumber: 6,
    titleTa: "ஆத்திச்சூடி - நீதி நூல்கள் பகுதி",
    titleEn: "Step 6: Aathichudi (Avvaiyar's Neethi Noolgal) Section",
    blockType: "Content Blocks (3 or 4-Column Cards / Collapsible List)",
    icon: "Award",
    badge: "Neethi Noolgal",
    summary: "Dedicated alphabetical virtue aphorisms by saint Avvaiyar with moral lessons for children, students, and seekers.",
    instructions: [
      "Insert a Divider block to cleanly separate Thirukkural from Aathichudi.",
      "Add a Text box formatted as Heading 1: 'ஔவையாரின் ஆத்திச்சூடி — நீதி நூல்கள்'.",
      "Subtitle: 'அகர வரிசையில் அமைந்த வாழ்வியல் அறநெறி அமுத மொழிகள்'.",
      "Add an introduction card featuring the Avvaiyar portrait asset.",
      "Use 'Collapsible group' or 2-column cards grouped by Alphabetical Vowels (உயிர் வருக்கம்: அ முதல் ஔ) and Consonants (உயிர்மெய் வருக்கம்: க, ங, ச, ஞ...).",
      "Each item contains: Aphorism line (Heading 3), Simple Tamil Meaning (Normal Text), and English Wisdom translation."
    ],
    suggestedStyles: {
      fontRole: "Heading 1 + Cards + Collapsible Group",
      suggestedFont: "Noto Serif Tamil (Heading) + Noto Sans Tamil (Body)",
      fontSize: "28px (Section Title), 18px (Aphorism), 14px (Meaning)",
      textColor: "#2C3E50 (Title), #D4AC0D (Letter mark), #1A252F (Verse)",
      bgColor: "#FAFAFA"
    },
    sampleContentHtml: `<div style="padding: 20px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px;">
  <span style="display: inline-block; width: 32px; height: 32px; line-height: 32px; text-align: center; background: #2C3E50; color: #D4AC0D; font-weight: bold; border-radius: 4px; margin-right: 8px;">அ</span>
  <strong style="font-family: 'Noto Serif Tamil', serif; font-size: 18px; color: #1E293B;">அறஞ்செய விரும்பு</strong>
  <p style="margin: 8px 0 0 40px; font-size: 14px; color: #475569;">நற்செயல்களை என்றும் விரும்பிச் செய். (Desire always to perform righteous deeds.)</p>
</div>`,
    sampleContentPlainText: `ஔவையாரின் ஆத்திச்சூடி — நீதி நூல்கள்
1. அறஞ்செய விரும்பு - நற்செயல்களை என்றும் விரும்பிச் செய். (Desire always to perform righteous deeds)
2. ஆறுவது சினம் - கோபத்தை உடனே தணித்துக் கொள். (Anger should be cooled down immediately)
3. இயல்வது கரவேல் - உன்னால் கொடுக்க முடிந்ததை மறைக்காமல் கொடு.`
  }
];
