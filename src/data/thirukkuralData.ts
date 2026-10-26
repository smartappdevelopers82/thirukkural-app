export interface KuralItem {
  number: number;
  paal: string; // 'அறத்துப்பால்' | 'பொருட்பால்' | 'காமத்துப்பால்'
  paalEn: string;
  iyal: string;
  athigaram: string;
  athigaramEn: string;
  athigaramNo: number;
  line1: string;
  line2: string;
  meaning: string; // Kural Theni style clear, direct, simple meaning
  commentaryMuVa: string;
  commentarySolomon: string;
  commentaryKalaignar: string;
  englishCouplet: string;
  englishExplanation: string;
  transliteration: string;
}

export interface AthigaramMeta {
  no: number;
  name: string;
  nameEn: string;
}

export interface IyalMeta {
  name: string;
  athigarams: AthigaramMeta[];
}

export interface PaalMeta {
  name: string;
  nameEn: string;
  totalChapters: number;
  iyals: IyalMeta[];
}

export const IYAL_ATHIGARAM_TREE: PaalMeta[] = [
  {
    name: "அறத்துப்பால்",
    nameEn: "Virtue",
    totalChapters: 38,
    iyals: [
      {
        name: "பாயிரவியல்",
        athigarams: [
          { no: 1, name: "கடவுள் வாழ்த்து", nameEn: "The Praise of God" },
          { no: 2, name: "வான்சிறப்பு", nameEn: "The Blessing of Rain" },
          { no: 3, name: "நீத்தார் பெருமை", nameEn: "The Greatness of Ascetics" },
          { no: 4, name: "அறன் வலியுறுத்தல்", nameEn: "Assertion of Virtue" }
        ]
      },
      {
        name: "இல்லறவியல்",
        athigarams: [
          { no: 5, name: "இல்வாழ்க்கை", nameEn: "Domestic Life" },
          { no: 6, name: "வாழ்க்கைத் துணைநலம்", nameEn: "Worth of a Wife" },
          { no: 7, name: "புதல்வரைப் பெறுதல்", nameEn: "The Wealth of Children" },
          { no: 8, name: "அன்புடைமை", nameEn: "Possession of Love" },
          { no: 9, name: "விருந்தோம்பல்", nameEn: "Hospitality" },
          { no: 10, name: "இனியவை கூறல்", nameEn: "Pleasant Speech" },
          { no: 11, name: "செய்ந்நன்றி அறிதல்", nameEn: "Gratitude" },
          { no: 12, name: "நடுவுநிலைமை", nameEn: "Impartiality" },
          { no: 13, name: "அடக்கமுடைமை", nameEn: "Self-Control" },
          { no: 14, name: "ஒழுக்கமுடைமை", nameEn: "Right Conduct" },
          { no: 15, name: "பிறனில் விழையாமை", nameEn: "Not Coveting Another's Wife" },
          { no: 16, name: "பொறையுடைமை", nameEn: "Forgiveness" },
          { no: 17, name: "அழுக்காறாமை", nameEn: "Freedom from Envy" },
          { no: 18, name: "வெஃகாமை", nameEn: "Not Coveting" },
          { no: 19, name: "புறங்கூறாமை", nameEn: "Not Backbiting" },
          { no: 20, name: "பயனில சொல்லாமை", nameEn: "Against Vain Speech" },
          { no: 21, name: "தீவினையச்சம்", nameEn: "Fear of Sin" },
          { no: 22, name: "ஒப்புரவறிதல்", nameEn: "Duty to Society" },
          { no: 23, name: "ஈகை", nameEn: "Giving / Charity" },
          { no: 24, name: "புகழ்", nameEn: "Renown / Fame" }
        ]
      },
      {
        name: "துறவறவியல்",
        athigarams: [
          { no: 25, name: "அருளுடைமை", nameEn: "Compassion" },
          { no: 26, name: "புலால் மறுத்தல்", nameEn: "Abstinence from Flesh" },
          { no: 27, name: "தவம்", nameEn: "Penance" },
          { no: 28, name: "கூடாவொழுக்கம்", nameEn: "Inconsistent Conduct" },
          { no: 29, name: "கள்ளாமை", nameEn: "Absence of Fraud" },
          { no: 30, name: "வாய்மை", nameEn: "Truthfulness" },
          { no: 31, name: "வெகுளாமை", nameEn: "Restraining Anger" },
          { no: 32, name: "இன்னா செய்யாமை", nameEn: "Not Doing Evil" },
          { no: 33, name: "கொல்லாமை", nameEn: "Not Killing" },
          { no: 34, name: "நிலையாமை", nameEn: "Impermanence" },
          { no: 35, name: "துறவு", nameEn: "Renunciation" },
          { no: 36, name: "மெய்யுணர்தல்", nameEn: "Knowledge of Truth" },
          { no: 37, name: "அவா அறுத்தல்", nameEn: "Extirpation of Desire" }
        ]
      },
      {
        name: "ஊழியல்",
        athigarams: [
          { no: 38, name: "ஊழ்", nameEn: "Fate / Destiny" }
        ]
      }
    ]
  },
  {
    name: "பொருட்பால்",
    nameEn: "Wealth",
    totalChapters: 70,
    iyals: [
      {
        name: "அரசியல்",
        athigarams: [
          { no: 39, name: "இறைமாட்சி", nameEn: "The Greatness of a King" },
          { no: 40, name: "கல்வி", nameEn: "Learning" },
          { no: 41, name: "கல்லாமை", nameEn: "Ignorance" },
          { no: 42, name: "கேள்வி", nameEn: "Hearing Wisdom" },
          { no: 43, name: "அறிவுடைமை", nameEn: "Wisdom" },
          { no: 44, name: "குற்றங்கடிதல்", nameEn: "Correction of Faults" },
          { no: 45, name: "பெரியாரைத் துணைக்கோடல்", nameEn: "Seeking the Aid of the Great" },
          { no: 46, name: "சிற்றினஞ்சேராமை", nameEn: "Avoiding Mean Company" },
          { no: 47, name: "தெரிந்து செயல்வகை", nameEn: "Acting after Deliberation" },
          { no: 48, name: "வலியறிதல்", nameEn: "Judging Power" },
          { no: 49, name: "காலமறிதல்", nameEn: "Knowing the Fitting Time" },
          { no: 50, name: "இடனறிதல்", nameEn: "Knowing the Place" },
          { no: 51, name: "தெரிந்து தெளிதல்", nameEn: "Testing and Entrusting" },
          { no: 52, name: "தெரிந்து வினையாடல்", nameEn: "Testing and Employing" },
          { no: 53, name: "சுற்றந்தழால்", nameEn: "Cherishing Kin" },
          { no: 54, name: "பொள்ளாமை", nameEn: "Against Forgetfulness" },
          { no: 55, name: "செங்கோன்மை", nameEn: "Right Sceptre / Justice" },
          { no: 56, name: "கொடுங்கோன்மை", nameEn: "Cruel Sceptre / Tyranny" },
          { no: 57, name: "வெருவந்த செய்யாமை", nameEn: "Absence of Terrorism" },
          { no: 58, name: "கண்ணோட்டம்", nameEn: "Benignity" },
          { no: 59, name: "ஒற்றாடல்", nameEn: "Espionage" },
          { no: 60, name: "ஊக்கமுடைமை", nameEn: "Energy / Zeal" },
          { no: 61, name: "மடியின்மை", nameEn: "Unsluggishness" },
          { no: 62, name: "ஆள்வினையுடைமை", nameEn: "Manly Effort" },
          { no: 63, name: "இடுக்கணழியாமை", nameEn: "Hopefulness in Trouble" }
        ]
      },
      {
        name: "அங்கவியல்",
        athigarams: [
          { no: 64, name: "அமைச்சு", nameEn: "The Ministry" },
          { no: 65, name: "சொல்வன்மை", nameEn: "Power of Speech" },
          { no: 66, name: "வினைத்தூய்மை", nameEn: "Purity of Action" },
          { no: 67, name: "வினைத்திட்பம்", nameEn: "Resolution in Action" },
          { no: 68, name: "வினைசெயல்வகை", nameEn: "Modes of Action" },
          { no: 69, name: "தூது", nameEn: "The Envoy" },
          { no: 70, name: "மன்னரைச் சேர்ந்தொழுகல்", nameEn: "Conduct in the Presence of the King" },
          { no: 71, name: "குறிப்பறிதல்", nameEn: "Reading Signs" },
          { no: 72, name: "அவையறிதல்", nameEn: "Judging the Assembly" },
          { no: 73, name: "அவையஞ்சாமை", nameEn: "Courage in the Assembly" },
          { no: 74, name: "நாடு", nameEn: "The Country" },
          { no: 75, name: "அரண்", nameEn: "The Fort" },
          { no: 76, name: "பொருள்செயல்வகை", nameEn: "Ways of Acquiring Wealth" },
          { no: 77, name: "படைமாட்சி", nameEn: "Excellence of an Army" },
          { no: 78, name: "படைச்செருக்கு", nameEn: "Military Pride" },
          { no: 79, name: "நட்பு", nameEn: "Friendship" },
          { no: 80, name: "நட்பாராய்தல்", nameEn: "Investigating Friendship" },
          { no: 81, name: "பழைமை", nameEn: "Familiarity" },
          { no: 82, name: "தீநட்பு", nameEn: "Bad Friendship" },
          { no: 83, name: "கூடாநட்பு", nameEn: "False Friendship" }
        ]
      },
      {
        name: "ஒழிபியல்",
        athigarams: [
          { no: 96, name: "குடிமை", nameEn: "Nobility" },
          { no: 97, name: "மானம்", nameEn: "Honor" },
          { no: 98, name: "பெருமை", nameEn: "Greatness" },
          { no: 99, name: "சான்றாண்மை", nameEn: "Perfect Goodness" },
          { no: 100, name: "பண்புடைமை", nameEn: "Courtesy" },
          { no: 103, name: "உழவு", nameEn: "Farming / Agriculture" },
          { no: 107, name: "இரவச்சம்", nameEn: "Dread of Mendicity" }
        ]
      }
    ]
  },
  {
    name: "காமத்துப்பால்",
    nameEn: "Love",
    totalChapters: 25,
    iyals: [
      {
        name: "களவியல்",
        athigarams: [
          { no: 109, name: "தகையணங்குறுத்தல்", nameEn: "Beauty of Beloved" },
          { no: 110, name: "குறிப்பறிதல்", nameEn: "Signs of the Heart" },
          { no: 111, name: "புணர்ச்சி மகிழ்தல்", nameEn: "Joy of Embrace" },
          { no: 112, name: "நலம்புனைந்துரைத்தல்", nameEn: "Praising Her Beauty" },
          { no: 113, name: "காதற்சிறப்புரைத்தல்", nameEn: "Declaration of Love" },
          { no: 114, name: "நாணுத்துறவுரைத்தல்", nameEn: "Abandonment of Reserve" },
          { no: 115, name: "அலரறிவுறுத்தல்", nameEn: "Public Talk of Love" }
        ]
      },
      {
        name: "கற்பியல்",
        athigarams: [
          { no: 116, name: "பிரிவாற்றாமை", nameEn: "Separation Pain" },
          { no: 117, name: "படர்மெலிந்திரங்கல்", nameEn: "Pining in Absence" },
          { no: 118, name: "கண்விதுப்பழிதல்", nameEn: "Eyes Yearning" },
          { no: 119, name: "பசப்புறுபருவரல்", nameEn: "Pallor of Heartache" },
          { no: 120, name: "தனிப்படர் மிகுதி", nameEn: "Solitary Longing" },
          { no: 121, name: "நினைந்தவர் புலம்பல்", nameEn: "Sad Musings" },
          { no: 131, name: "புல்லறிவாண்மை", nameEn: "Petty Misunderstandings" },
          { no: 133, name: "ஊடலுவகை", nameEn: "The Feigned Anger Joy" }
        ]
      }
    ]
  }
];

export const THIRUKKURAL_DATA: KuralItem[] = [
  {
    number: 1,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "அகர முதல எழுத்தெல்லாம் ஆதி",
    line2: "பகவன் முதற்றே உலகு.",
    meaning: "எழுத்துக்கள் எல்லாம் 'அ' என்னும் எழுத்தை முதலாக உடையன; அதுபோல, உலகம் ஆதிபகவனை முதலாக உடையது.",
    commentaryMuVa: "எழுத்துக்கள் எல்லாம் 'அ' கரத்தை அடிப்படையாகக் கொண்டு இயங்குகின்றன; அதுபோல, உலகம் ஆதிபகவனை அடிப்படையாகக் கொண்டு இயங்குகிறது.",
    commentarySolomon: "எழுத்துக்கள் எல்லாம் 'அ' என்னும் எழுத்தை முதலாக உடையன; அதுபோல, உலகம் ஆதிபகவனை முதலாக உடையது.",
    commentaryKalaignar: "'அ' எழுத்துக்களுக்குத் தொடக்கம்; அதுபோல் ஆதிபகவன் இந்த உலகத்திற்குத் தொடக்கம்.",
    englishCouplet: "As the letter A is the first of all letters, so the eternal God is first in the world.",
    englishExplanation: "Just as vowel 'A' is the origin and foundation of all letters, the Primordial Divine Being is the primary origin of the entire universe.",
    transliteration: "Agara mudhala ezhuththellaam aadhi / bagavan mudhatre ulagu."
  },
  {
    number: 2,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "கற்றதனா லாய பயனென்கொல் வாலறிவன்",
    line2: "நற்றாள் தொழாஅர் எனின்.",
    meaning: "தூய அறிவு வடிவமாக விளங்கும் இறைவனின் நல்ல திருவடிகளைத் தொழாமல் இருப்பாரானால், அவர் கற்ற கல்வியினால் என்ன பயன்?",
    commentaryMuVa: "தூய அறிவு வடிவாக விளங்கும் இறைவனுடைய நல்ல திருவடிகளை தொழாமல் இருப்பாரானால், அவர் கற்ற கல்வியினால் ஆகிய பயன் என்ன?",
    commentarySolomon: "தூய அறிவு வடிவானவனின் திருவடிகளை வணங்காதவர், கற்றுத்தான் என்ன பயன்?",
    commentaryKalaignar: "தூய அறிவின் வடிவமாக விளங்கும் இறைவனின் நற்றாள்களை வணங்கி வழிபடாதவர் கற்ற கல்வியினால் என்ன பயன்? ஒன்றுமில்லை.",
    englishCouplet: "What fruit has learning yielded him who will not adore the good feet of Him who is possessed of pure knowledge?",
    englishExplanation: "What is the benefit of higher learning if one does not humbly revere the path of supreme wisdom and purity of character?",
    transliteration: "Katradhanaal aaya payanenkol vaalarivan / natraal thozhaar enin."
  },
  {
    number: 3,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்",
    line2: "நிலமிசை நீடுவாழ் வார்.",
    meaning: "அன்பரின் உள்ளமாகிய மலரில் வீற்றிருக்கும் கடவுளின் சிறந்த திருவடிகளை எப்போதும் நினைப்பவர், இப்பூமியில் நீடு வாழ்வார்.",
    commentaryMuVa: "அன்பரின் மனமாகிய மலரின் மீது வீற்றிருக்கும் இறைவனின் பெருமை பொருந்திய திருவடிகளை எப்போதும் நினைப்பவர், இப்பூமியில் நீடு வாழ்வார்.",
    commentarySolomon: "மனமாகிய மலர்மீது சென்று இருப்பவனாகிய கடவுளின் சிறந்த திருவடிகளை எப்போதும் நினைப்பவர், இப்பூமியில் நீண்ட காலம் வாழ்வர்.",
    commentaryKalaignar: "மலரின் மீது நடந்த இறைவனின் திருவடிகளை வணங்குகிறவர்கள், மண்ணுலகில் நீண்ட புகழுடன் வாழ்வார்கள்.",
    englishCouplet: "They who are united to the glorious feet of Him who passes swiftly over the flower of the mind, shall flourish long on earth.",
    englishExplanation: "Those who connect deeply with the divine presence dwelling in the heart's bloom will attain enduring honor and life on earth.",
    transliteration: "Malarmisai eginaan maanadi serndhaar / nilamisai needuvaazh vaar."
  },
  {
    number: 4,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு",
    line2: "யாண்டும் இடும்பை இல.",
    meaning: "விருப்பு வெறுப்பு இல்லாத கடவுளின் திருவடிகளைப் பொருந்தி நினைக்கின்றவர்க்கு எப்போதுமே எவ்வித துன்பமும் இல்லை.",
    commentaryMuVa: "விருப்பு வெறுப்பு இல்லாத இறைவனின் திருவடிகளை அடைந்தவர்களுக்கு, எக்காலத்திலும் எவ்வித துன்பமும் இல்லை.",
    commentarySolomon: "விருப்பு வெறுப்பு இல்லாத கடவுளின் திருவடிகளைப் பொருந்தி நினைக்கின்றவர்க்கு எப்போதுமே துன்பம் இல்லை.",
    commentaryKalaignar: "விருப்பு வெறுப்பற்ற தூயவனின் காலடிகளைப் பற்றி நிற்பவர்களுக்கு எப்போதுமே எத்தகைய துன்பமும் ஏற்படுவதில்லை.",
    englishCouplet: "To those who cling to the feet of Him who has neither desire nor aversion, miseries will never come.",
    englishExplanation: "Suffering ceases to afflict those who anchor their conduct in impartiality, free from selfish craving and baseless hatred.",
    transliteration: "Vendudhal vendaamai ilaandi serndhaarkku / yaandum idumbai ila."
  },
  {
    number: 5,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "இருள்சேர் இருவினையும் சேரா இறைவன்",
    line2: "பொருள்சேர் புகழ்புரிந்தார் மாட்டு.",
    meaning: "இறைவனின் மெய்ப்புகழை விரும்பிப் போற்றுகின்றவரிடம் அறியாமையால் விளையும் நல்வினை, தீவினை ஆகிய இரண்டும் சேரா.",
    commentaryMuVa: "இறைவனுடைய மெய்ப்பொருளான புகழை விரும்பிப் போற்றுகின்றவரிடம் அறியாமையால் விளையும் நல்வினை, தீவினை ஆகிய இருவகை வினைகளும் சேர்வதில்லை.",
    commentarySolomon: "இறைவனின் உண்மைப் புகழையே விரும்புகின்றவரிடம் அறியாமை தரும் நல்வினை தீவினை இரண்டும் சேரா.",
    commentaryKalaignar: "இறைவனின் மெய்ப்புகழை விரும்பிப் போற்றுபவர்களுக்கு அறியாமை என்னும் இருளில் மூழ்கிச் செய்கிற நல்வினை, தீவினைப் பயன்கள் வந்து சேர்வதில்லை.",
    englishCouplet: "The two-fold deeds of darkness shall never attach to those who delight in the praise of Him who is the Truth.",
    englishExplanation: "The blinding bonds of ignorance and attachment do not cling to those whose reverence is aligned with righteous universal truth.",
    transliteration: "Irulser iruvinaiyum sera iraivan / porulser pugazhpurindhaar maattu."
  },
  {
    number: 6,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க",
    line2: "நெறிநின்றார் நீடுவாழ் வார்.",
    meaning: "ஐம்பொறி ஆசைகளையும் அறுத்த இறைவனின் பொய்யற்ற ஒழுக்க நெறியில் நின்றவர் நெடுங்காலம் வாழ்வர்.",
    commentaryMuVa: "மெய், வாய், கண், மூக்கு, செவி ஆகிய ஐம்பொறிகளின் வழியே பிறக்கும் ஆசைகளை அறுத்த இறைவனின் பொய்யற்ற ஒழுக்க நெறியில் நின்றவர் நெடுங்காலம் வாழ்வர்.",
    commentarySolomon: "ஐம்பொறி ஆசைகளையும் அறுத்த இறைவனின் பொய்யற்ற ஒழுக்க வழியில் நின்றவர் நெடுங்காலம் வாழ்வர்.",
    commentaryKalaignar: "ஐம்பொறிகளின் வழியே எழும் ஆசைகளை அடக்கிய இறைவனின் பொய்யற்ற ஒழுக்க நெறியைப் பின்பற்றி நடப்பவர்கள் நெடுங்காலம் வாழ்வார்கள்.",
    englishCouplet: "Those who tread the path of His faultless law, who has quenched the desires of the five senses, shall flourish forever.",
    englishExplanation: "Those who practice upright discipline by mastering the impulses of the five senses achieve noble longevity and peace.",
    transliteration: "Porivaayil aindhaviththaan poydheer ozhukka / nerinindraar needuvaazh vaar."
  },
  {
    number: 7,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்",
    line2: "மனக்கவலை மாற்றல் அரிது.",
    meaning: "தனக்கு இணையில்லாத கடவுளின் திருவடிகளைச் சேர்ந்தவர்க்கே அன்றி, மற்றவருக்கு மனக்கவலையை நீக்குவது கடினம்.",
    commentaryMuVa: "தனக்கு நிகர் இல்லாத இறைவனின் திருவடிகளைப் பற்றிக் கொண்டவர்க்கே அன்றி, மற்றவர்க்கு மனக்கவலையை மாற்றுவது இயலாத செயலாகும்.",
    commentarySolomon: "தனக்கு இணையில்லாத கடவுளின் திருவடிகளைச் சேர்ந்தவர்க்கே அன்றி, மற்றவருக்கு மனக்கவலையை நீக்குவது கடினம்.",
    commentaryKalaignar: "தனக்கு ஒப்புமை இல்லாதவரின் திருவடிகளை வணங்குவோர்க்கு அன்றி, மற்றவர்களுக்கு மனத்துன்பத்தை போக்குவது அரிது.",
    englishCouplet: "Unless one clings to the feet of Him who has no equal, it is difficult to dispel mental anguish.",
    englishExplanation: "Mental anxieties find lasting remedy only when one submits one's heart to the incomparable, transcendent truth.",
    transliteration: "Thanakkuvamai illaahaan thaalserndhaark kallaal / manakkavalai maartral aridhu."
  },
  {
    number: 8,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்",
    line2: "பிறவாழி நீந்தல் அரிது.",
    meaning: "அறக்கடலாக இருக்கும் கடவுளின் திருவடிகளை வணங்கியவர்க்கே அன்றி, மற்றவருக்குப் பிறவியாகிய பிற கடல்களைக் கடப்பது கடினம்.",
    commentaryMuVa: "அறக்கடலாக விளங்கும் அந்தணனின் திருவடிகளைச் சேர்ந்தவர்க்கு அல்லாமல், மற்றவர்க்கு பிறவியாகிய மற்றக் கடல்களைக் கடப்பது அரிது.",
    commentarySolomon: "அறக்கடலாக இருக்கும் கடவுளின் திருவடிகளை வணங்கியவர்க்கே அன்றி, மற்றவருக்குப் பிறவியாகிய பிற கடல்களைக் கடப்பது கடினம்.",
    commentaryKalaignar: "அறக்கடலாக விளங்கும் இறைவனின் திருப்பாதங்களை வணங்கி நிற்பவர்களே பிறவிக் கடலை நீந்திக் கடக்க முடியும்; மற்றவர்கள் கடப்பது அரிது.",
    englishCouplet: "Except by reaching the feet of the righteous Lord, the ocean of virtue, it is impossible to cross the other ocean of births.",
    englishExplanation: "Without anchoring in the ocean of cosmic virtue, navigating the turbulent storms of worldly existence remains impossible.",
    transliteration: "Aravaazhi andhanan thaalserndhaark kallaal / piravaazhi neendhal aridhu."
  },
  {
    number: 9,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "கோளில் பொறியின் குணமிலவே எண்குணத்தான்",
    line2: "தாளை வணங்காத் தலை.",
    meaning: "உணர்வறியாத கண் காது போன்ற பொறிகளைப் போல, எட்டுக் குணங்களை உடைய இறைவனை வணங்காத தலை பயனற்றது.",
    commentaryMuVa: "கேட்காத செவி, பார்க்காத கண் போன்ற தன்மையற்ற உறுப்புகளைப் போல், பேரருள் கொண்ட இறைவனின் திருவடிகளை வணங்காதவரின் தலைகள் பயனில்லாதவை.",
    commentarySolomon: "இயற்கை அமைப்பில் கண் முதலான பொறிகள் நுகரும் உணர்வை இழந்து போனால் எப்படிப் பயனற்றதோ, அதுபோல் இறைவனை வணங்காத தலை பயனற்றது.",
    commentaryKalaignar: "எட்டுக் குணங்களை உடைய இறைவனின் காலடிகளை வணங்காத மனிதனின் தலை, நுகர்ச்சி இல்லாத கண், காது, மூக்கு போல பயனற்றதாகும்.",
    englishCouplet: "The head that bows not to the feet of the Possessor of Eight Attributes is as useless as a senseless organ.",
    englishExplanation: "A mind that refuses to revere supreme moral excellence is as barren as sensory faculties that have lost perception.",
    transliteration: "Kohlil poriyin kunamilavey engunaththaan / thaalai vanangaath thalai."
  },
  {
    number: 10,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "கடவுள் வாழ்த்து",
    athigaramEn: "The Praise of God",
    athigaramNo: 1,
    line1: "பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்",
    line2: "இறைவன் அடிசேரா தார்.",
    meaning: "கடவுளின் திருவடிகளைச் சேர்ந்தவரே பிறவியாகிய பெருங்கடலை நீந்திக் கடப்பார்கள்; சேராதவர் கடக்க மாட்டார்கள்.",
    commentaryMuVa: "இறைவனுடைய திருவடிகளைப் பொருந்தி நினைப்பவர் பிறவியாகிய பெரிய கடலை நீந்திக் கடப்பர்; சேராதவர் நீந்த முடியாமல் தவிப்பர்.",
    commentarySolomon: "கடவுளின் திருவடிகளைச் சேர்ந்தவரே பிறவியாகிய பெருங்கடலை நீந்திக் கடப்பார்கள்; சேராதவர் கடக்க மாட்டார்.",
    commentaryKalaignar: "இறைவனின் திருவடிகளைத் தொழுகின்றவர்கள் பிறவிப் பெருங்கடலைக் கடப்பார்கள்; தொழாதவர்கள் கடக்க மாட்டார்கள்.",
    englishCouplet: "They will swim the wide ocean of births who cling to the feet of the Lord; others cannot.",
    englishExplanation: "Those devoted to divine virtue traverse the deep ocean of worldly transience; those indifferent remain stranded.",
    transliteration: "Piravip perunkadal neendhuvar neendhaar / iraivan adiseraa dhaar."
  },
  {
    number: 11,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "பாயிரவியல்",
    athigaram: "வான்சிறப்பு",
    athigaramEn: "The Blessing of Rain",
    athigaramNo: 2,
    line1: "வான்நின்று உலகம் வழங்கி வருதலால்",
    line2: "தான்அமிழ்தம் என்றுணரற் பாற்று.",
    meaning: "மழை பொழிந்து உலகத்தைக் காப்பாற்றி வருவதால், மழையே உலகத்து உயிர்களுக்கு அமிழ்தம் என்று போற்றத்தக்கதாகும்.",
    commentaryMuVa: "மழை பெய்து உலகத்தைக் காப்பாற்றி வருவதால், மழையே உலகத்து உயிர்களுக்கு அமிழ்தம் என்று உணரத்தக்கதாகும்.",
    commentarySolomon: "மழை பொழிந்து உலக உயிர்களைக் காத்து வருவதால், மழையே அமிழ்தம் எனத் தக்கதாகும்.",
    commentaryKalaignar: "மழை தவறாமல் பொழிந்து உலகைக் காப்பதனால், அதுவே உயிர்களுக்கு அமிர்தமாக விளங்குகிறது.",
    englishCouplet: "By the continuance of rain the world is preserved in existence; it is therefore worthy to be called ambrosia.",
    englishExplanation: "Since precipitation nourishes and sustains all planetary life, pristine rainwater is rightly deemed celestial nectar.",
    transliteration: "Vaannindru ulagam vazhangi varudhalaal / thaanamizhdham endrunarat paatru."
  },
  {
    number: 71,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "இல்லறவியல்",
    athigaram: "அன்புடைமை",
    athigaramEn: "Possession of Love",
    athigaramNo: 8,
    line1: "அன்பிற்கும் உண்டோ அடைக்குந்தாழ் ஆர்வலர்",
    line2: "புன்கணீர் பூசல் தரும்.",
    meaning: "அன்பைப் பூட்டி வைக்கத் தாழ்ப்பாள் உண்டோ? அன்புடையவரின் சிறு கண்ணீரே உள்ளிருக்கும் அன்பை வெளிப்படுத்திவிடும்.",
    commentaryMuVa: "அன்புக்கும் அடைத்து வைக்கும் தாழ்ப்பாள் உண்டோ? அன்புக்கு உரியவரின் துன்பத்தைக் கண்டபோது அன்புடையோரின் கண்ணீர் அதை வெளிப்படுத்திவிடும்.",
    commentarySolomon: "அன்பைப் பூட்டி வைக்கத் தாழ்ப்பாள் உண்டோ? அன்பிற்குரியவரின் துன்பத்தைக் காணும்போது பொழியும் கண்ணீரே அன்பைக் காட்டிவிடும்.",
    commentaryKalaignar: "அன்பை அடைத்து வைக்கக் கதவு ஏது? அன்பிற்குரியவர் துன்பத்தில் உழலும்போது, அன்புடையவர் கண்ணீரே அதை அறிவித்துவிடும்.",
    englishCouplet: "Is there any bolt that can shut in love? The tiny tear of those who love will soon publish it aloud.",
    englishExplanation: "Love cannot be concealed by locks; the compassionate tear shed for another's distress immediately proclaims its presence.",
    transliteration: "Anbirkum undo adaikkundhaazh aarvalar / punkanneer poosal tharum."
  },
  {
    number: 131,
    paal: "அறத்துப்பால்",
    paalEn: "Virtue",
    iyal: "இல்லறவியல்",
    athigaram: "ஒழுக்கமுடைமை",
    athigaramEn: "Right Conduct",
    athigaramNo: 14,
    line1: "ஒழுக்கம் விழுப்பம் தரலான் ஒழுக்கம்",
    line2: "உயிரினும் ஓம்பப் படும்.",
    meaning: "ஒழுக்கமே மனிதருக்கு உயர்வைத் தருவதால், அந்த ஒழுக்கத்தை உயிரைவிட மேலானதாகக் கருதிப் பாதுகாக்க வேண்டும்.",
    commentaryMuVa: "ஒழுக்கமே எல்லோர்க்கும் மேன்மையைத் தருவதாக இருப்பதால், அந்த ஒழுக்கத்தை உயிரைவிடச் சிறந்ததாகக் கருதிப் பாதுகாக்க வேண்டும்.",
    commentarySolomon: "ஒழுக்கம் மனிதர்க்கு உயர்வைத் தருவதால், அந்த ஒழுக்கத்தை உயிரைவிட மேலானதாகக் காக்க வேண்டும்.",
    commentaryKalaignar: "ஒழுக்கமே உயர்வைத் தருவதால், ஒழுக்கத்தை உயிரைவிட மேலானதாகக் கருதிப் போற்ற வேண்டும்.",
    englishCouplet: "Right conduct yields excellence, therefore should right conduct be preserved more than life itself.",
    englishExplanation: "Moral integrity confers lasting nobility; hence an ethical life must be safeguarded with greater care than breath itself.",
    transliteration: "Ozhukkam vizhuppam tharalaan ozhukkam / uyirinum ombap padum."
  },
  {
    number: 391,
    paal: "பொருட்பால்",
    paalEn: "Wealth",
    iyal: "அரசியல்",
    athigaram: "கல்வி",
    athigaramEn: "Learning",
    athigaramNo: 40,
    line1: "கற்க கசடறக் கற்பவை கற்றபின்",
    line2: "நிற்க அதற்குத் தக.",
    meaning: "கற்க வேண்டிய நூல்களைப் பிழையறக் கற்க வேண்டும்; கற்ற பிறகு, கற்ற கல்வியின் வழி நின்று வாழ வேண்டும்.",
    commentaryMuVa: "கற்கத் தகுந்த நூல்களைக் குற்றமறக் கற்க வேண்டும்; அவ்வாறு கற்ற பிறகு, கற்ற கல்விக்கு ஏற்றவாறு நெறியில் நடக்க வேண்டும்.",
    commentarySolomon: "கற்க வேண்டிய நூல்களைப் பிழையின்றிப் படிக்க வேண்டும்; படித்த பிறகு, படித்ததன் படி வாழ வேண்டும்.",
    commentaryKalaignar: "படிக்க வேண்டியவைகளை குறையறக் கற்க வேண்டும்; கற்ற பிறகு அதன்படி வாழ்க்கையை அமைத்துக் கொள்ள வேண்டும்.",
    englishCouplet: "Let a man learn thoroughly whatever he may learn, and let his conduct be worthy of his learning.",
    englishExplanation: "Master worthy knowledge without flaw or ambiguity; having mastered it, let daily actions impeccably mirror that wisdom.",
    transliteration: "Karka kasadarak karpavai katrapin / nirka adharkuth thaga."
  },
  {
    number: 484,
    paal: "பொருட்பால்",
    paalEn: "Wealth",
    iyal: "அரசியல்",
    athigaram: "காலமறிதல்",
    athigaramEn: "Knowing the Fitting Time",
    athigaramNo: 49,
    line1: "ஞாலம் கருதினுங் கைகூடும் காலம்",
    line2: "கருதி இடத்தாற் செயின்.",
    meaning: "தகுந்த காலத்தை அறிந்து, அதற்குரிய இடத்தையும் உணர்ந்து செயலாற்றினால் உலகத்தையே வெல்லக் கருதினாலும் கைகூடும்.",
    commentaryMuVa: "பொருத்தமான காலத்தை அறிந்து இடத்தோடு பொருந்தச் செய்தால், உலகத்தையே ஆளக் கருதினாலும் அது கைகூடும்.",
    commentarySolomon: "செயலை முடிப்பதற்கு ஏற்ற காலத்தை அறிந்து, அதற்குப் பொருத்தமான இடத்தையும் தேர்ந்தெடுத்துச் செய்தால் உலகமே எளிதில் வசப்படும்.",
    commentaryKalaignar: "தகுந்த காலத்தை அறிந்து, அதற்குரிய இடத்தையும் உணர்ந்து செயலாற்றினால் உலகையே ஆள நினைத்தாலும் அது கைகூடும்.",
    englishCouplet: "Even the world itself may be won, if one acts choosing the proper season and the fitting place.",
    englishExplanation: "One can achieve dominion over the grandest enterprises when strategic timing is married to the ideal operating terrain.",
    transliteration: "Gnaalam karudhinung kaigoodum kaalam / karudhi idaththaar seyin."
  },
  {
    number: 781,
    paal: "பொருட்பால்",
    paalEn: "Wealth",
    iyal: "அங்கவியல்",
    athigaram: "நட்பு",
    athigaramEn: "Friendship",
    athigaramNo: 79,
    line1: "செயற்கரிய யாவுள நட்பின் அதுபோல்",
    line2: "வினைக்கரிய யாவுள காப்பு.",
    meaning: "நல்ல நட்பைப் போல பெறுவதற்கு அரியது வேறு எதுவுமில்லை; தொழில் செய்வதற்கு அதுபோல சிறந்த அரண் வேறு எதுவுமில்லை.",
    commentaryMuVa: "நட்பைப் போல செய்து கொள்வதற்கு அரிய பொருள் என்ன இருக்கிறது? நற்பண்புடைய நட்பைப் போல தற்காப்பாக அமைவது எது?",
    commentarySolomon: "நல்ல நட்பைப் போல பெறுவதற்கு அரியது வேறு எதுவுமில்லை; தொழில் செய்வதற்கு அதுபோல சிறந்த அரண் வேறு எதுவுமில்லை.",
    commentaryKalaignar: "நட்புக் கொள்வது போல் அரிய செயல் வேறு இல்லை; எதிர்ப்புகளிலிருந்து ஒருவரைப் பாதுகாத்துக் கொள்ளவும் நட்பைப் போன்ற சிறந்த காவலும் இல்லை.",
    englishCouplet: "What so hard for a man to acquire as true friendship? What so secure a fortress against enemies?",
    englishExplanation: "What asset is as rare and precious as authentic friendship? What shield affords greater resilience against hardship?",
    transliteration: "Seyarkariya yaavula natpin adhupol / vinaikkariya yaavula kaappu."
  },
  {
    number: 1101,
    paal: "காமத்துப்பால்",
    paalEn: "Love",
    iyal: "களவியல்",
    athigaram: "தகையணங்குறுத்தல்",
    athigaramEn: "Beauty of Beloved",
    athigaramNo: 109,
    line1: "கண்டுகேட்டு உண்டுயிர்த்த உற்றறியும் ஐம்புலனும்",
    line2: "ஒண்டொடி கண்ணே யுள.",
    meaning: "கண்ணால் கண்டு, காதால் கேட்டு, வாயால் சுவைத்து, மூக்கால் நுகர்ந்து, உடலால் தொட்டு உணரும் ஐந்து இன்பங்களும் என் காதலியிடம் மட்டுமே உள்ளன.",
    commentaryMuVa: "பார்த்தல், கேட்டல், சுவைத்தல், நுகர்தல், தீண்டுதல் ஆகிய ஐம்புலன்களின் இன்பங்களும் ஒளிபொருந்திய வளையல்களை அணிந்த என் காதலியிடம் ஒருங்கே உள்ளன.",
    commentarySolomon: "கண்ணால் கண்டு, காதால் கேட்டு, வாயால் உண்டு, மூக்கால் நுகர்ந்து, உடலால் தொட்டு உணரும் ஐந்து இன்பங்களும் என் காதலியிடம் உள்ளன.",
    commentaryKalaignar: "கண்ணால் கண்டு, காதால் கேட்டு, நாவினால் சுவைத்து, மூக்கினால் நுகர்ந்து, உடலால் தொட்டு மகிழும் ஐம்புலன் இன்பங்களும் என் அன்பிற்குரியவளிடம் நிறைந்துள்ளன.",
    englishCouplet: "The five senses of sight, hearing, taste, smell, and touch are all concentrated in this radiant jewel-wearing beloved.",
    englishExplanation: "The five sensory joys of vision, melody, savour, fragrance, and tender touch find unison in the beloved companion.",
    transliteration: "Kandukettu unduyirththa utrariyum aimbulanum / ondodi kanney yula."
  }
];

export const PAAL_CATEGORIES = [
  {
    id: 'all',
    nameTa: 'அனைத்து அதிகாரங்களும்',
    nameEn: 'All Chapters',
    count: 1330
  },
  {
    id: 'aram',
    nameTa: 'அறத்துப்பால்',
    nameEn: 'Virtue (Aram)',
    chapters: 38,
    couplets: 380,
    desc: 'Ethics, morality, asceticism, and household nobility.'
  },
  {
    id: 'porul',
    nameTa: 'பொருட்பால்',
    nameEn: 'Wealth (Porul)',
    chapters: 70,
    couplets: 700,
    desc: 'Statecraft, politics, justice, friendship, and economic wisdom.'
  },
  {
    id: 'inbam',
    nameTa: 'காமத்துப்பால்',
    nameEn: 'Love (Kamathupal / Inbam)',
    chapters: 25,
    couplets: 250,
    desc: 'Poetic psychology of love, courtship, romance, and companionship.'
  }
];

