export interface AathichudiItem {
  id: number;
  letter: string;
  verse: string;
  meaningTa: string;
  meaningEn: string;
  detailedTa: string;
  category: 'உயிர் வருக்கம்' | 'உயிர்மெய் வருக்கம்';
}

export const AATHICHUDI_DATA: AathichudiItem[] = [
  {
    id: 1,
    letter: "அ",
    verse: "அறஞ்செய விரும்பு",
    meaningTa: "நற்செயல்களை என்றும் விரும்பிச் செய்.",
    meaningEn: "Desire always to perform righteous and virtuous deeds.",
    detailedTa: "வாழ்க்கையில் அறநெறிகளையும், பிறருக்கு உதவும் நல்ல காரியங்களையும் தள்ளிப்போடாமல் விரும்பிச் செய்ய வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 2,
    letter: "ஆ",
    verse: "ஆறுவது சினம்",
    meaningTa: "கோபத்தை உடனே தணித்துக் கொள்.",
    meaningEn: "Anger should be cooled down immediately before it destroys peace.",
    detailedTa: "கோபம் உண்டான உடனே அதை ஆற்றிக்கொள்ள வேண்டும்; கோபத்தை வளரவிட்டால் அது நமக்கே அழிவைத் தரும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 3,
    letter: "இ",
    verse: "இயல்வது கரவேல்",
    meaningTa: "உன்னால் கொடுக்க முடிந்ததை மறைக்காமல் கொடு.",
    meaningEn: "Do not conceal what you are capable of giving to those in need.",
    detailedTa: "உன்னிடம் உள்ள பொருளை ஏழைகளுக்கும் தேவையானவர்க்கும் இல்லை என்று மறைக்காமல் உதவ வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 4,
    letter: "ஈ",
    verse: "ஈவது விலக்கேல்",
    meaningTa: "பிறர் கொடுக்கும் தானத்தைத் தடுக்காதே.",
    meaningEn: "Never hinder or dissuade another person from giving alms or aid.",
    detailedTa: "ஒருவர் மற்றவருக்கு ஈந்து மகிழும்போது, குறுக்கே நின்று அதைத் தடுத்து கெடுதல் செய்யக் கூடாது.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 5,
    letter: "உ",
    verse: "உடையது விளம்பேல்",
    meaningTa: "உன்னிடம் உள்ள செல்வம், அறிவைப் பற்றி வீண் தற்பெருமை பேசாதே.",
    meaningEn: "Do not boast or brag about your personal wealth and talents.",
    detailedTa: "தன்னிடம் இருக்கும் செல்வம், கல்வி, திறமைகளை ஊரறியப் தம்பட்டம் அடித்துக் கொள்ளாமல் அடக்கத்தோடு வாழ வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 6,
    letter: "ஊ",
    verse: "ஊக்கமது கைவிடேல்",
    meaningTa: "விடாமுயற்சியையும் மன ஊக்கத்தையும் என்றும் கைவிடாதே.",
    meaningEn: "Never abandon your enthusiasm, courage, and perseverance.",
    detailedTa: "எத்தனை தடைகள் வந்தாலும் சோர்ந்து போகாமல், எடுத்த காரியத்தை முடிக்கும் மன ஊக்கத்தை எப்போதும் காக்க வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 7,
    letter: "எ",
    verse: "எண் எழுத்து இகழேல்",
    meaningTa: "கணிதத்தையும் மொழியையும் புறக்கணிக்காமல் படி.",
    meaningEn: "Never despise or neglect mathematics (numbers) and literature (letters).",
    detailedTa: "எண்ணும் எழுத்தும் கண்ணெனத் தகும்; அடிப்படை அறிவான கணிதத்தையும் மொழியறிவையும் அவமதிக்காமல் கற்க வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 8,
    letter: "ஏ",
    verse: "ஏற்பது இகழ்ச்சி",
    meaningTa: "உழைக்காமல் பிறரிடம் கையேந்தி யாசிப்பது இழிவானது.",
    meaningEn: "Begging and dependency on others is dishonourable.",
    detailedTa: "தன் கைகால்கள் திடமாக இருக்கும்போது உழைக்காமல் சோம்பேறியாகப் பிறரிடம் பிச்சை கேட்பது இழிவை உண்டாக்கும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 9,
    letter: "ஐ",
    verse: "ஐயமிட்டு உண்",
    meaningTa: "பசித்தோருக்கு உணவிட்டு, எஞ்சியதை நீ உண்.",
    meaningEn: "Feed the hungry and give alms before partaking in your own meal.",
    detailedTa: "பசியோடு இருக்கும் வறியவர்களுக்கு முதலில் உணவிட்டு, பின்னர் தான் சாப்பிட வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 10,
    letter: "ஒ",
    verse: "ஒப்புரவு ஒழுகு",
    meaningTa: "உலக நடைமுறைக்கு ஏற்ப நல்லோருடன் இணைந்து வாழ்.",
    meaningEn: "Live in harmonious accordance with the community and moral norms.",
    detailedTa: "ஊராரின் நல்வாழ்விற்கும் சமூக நலனுக்கும் பொருந்தும் நற்பண்புகளைப் பின்பற்றி நல்லிணக்கமாக வாழ வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 11,
    letter: "ஓ",
    verse: "ஓதுவது ஒழியேல்",
    meaningTa: "தினமும் நல்ல நூல்களைப் படிப்பதை நிறுத்தாதே.",
    meaningEn: "Never cease the lifelong practice of reading and continuous study.",
    detailedTa: "நாள் தவறாமல் பயனுள்ள நல்லறிவூட்டும் நூல்களைப் படிப்பதை ஒருபோதும் கைவிட்டு விடக்கூடாது.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 12,
    letter: "ஔ",
    verse: "ஔவியம் பேசேல்",
    meaningTa: "பொறாமை கொண்ட சொற்களை ஒருபோதும் பேசாதே.",
    meaningEn: "Never speak words tainted with malice, envy, or jealousy.",
    detailedTa: "பிறர் நல்வாழ்வைக் கண்டு பொறாமைப்பட்டு, அவர்களைப் பற்றி இழிவாகவும் தீயதாகவும் பேசக்கூடாது.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 13,
    letter: "அஃ",
    verse: "அஃகஞ் சுருக்கேல்",
    meaningTa: "தானியங்களை அளவையில் குறைத்து விற்காதே; வணிகத்தில் நேர்மை கா.",
    meaningEn: "Do not reduce measurements or hoard grain; maintain commercial honesty.",
    detailedTa: "வாணிகத்தில் தானியங்களை குறுக்கி அளந்து மோசடி செய்யாமல், நியாயமான வணிக நேர்மையைப் பேண வேண்டும்.",
    category: "உயிர் வருக்கம்"
  },
  {
    id: 14,
    letter: "க",
    verse: "கண்டொன்று சொல்லேல்",
    meaningTa: "கண்ணால் கண்டதற்கு மாறாகப் பொய் சாட்சி சொல்லாதே.",
    meaningEn: "Never utter falsehoods contrary to what your eyes witnessed.",
    detailedTa: "பார்த்த ஒன்றுக்கு மாறாக மற்றொரு பொய்யைப் பேசி ஒருவருக்கு அநீதி இழைக்கக் கூடாது.",
    category: "உயிர்மெய் வருக்கம்"
  },
  {
    id: 15,
    letter: "ங",
    verse: "ஙப் போல் வளை",
    meaningTa: "உன் சுற்றத்தாரை 'ங' எழுத்துப் போல வளைந்து அரவணைத்துக் கொள்.",
    meaningEn: "Bend gracefully to embrace and protect your kith and kin.",
    detailedTa: "குடும்பத்திலும் சுற்றத்தாரிடமும் வீண் பிடிவாதம் கொள்ளாமல், வளைந்து கொடுத்து அனைவரையும் அன்போடு காக்க வேண்டும்.",
    category: "உயிர்மெய் வருக்கம்"
  },
  {
    id: 16,
    letter: "ச",
    verse: "சனி நீராடு",
    meaningTa: "சனிக்கிழமை தோறும் நல்லெண்ணெய் தேய்த்துக் குளித்து உடல்நலம் பேணு.",
    meaningEn: "Bathe regularly with oil massage to maintain constitutional wellness.",
    detailedTa: "உடலில் உள்ள உஷ்ணத்தைத் தணித்து நரம்புகளுக்கு புத்துணர்ச்சி பெற எண்ணெய் தேய்த்து நீராடுவது நலம் பயக்கும்.",
    category: "உயிர்மெய் வருக்கம்"
  },
  {
    id: 17,
    letter: "ஞ",
    verse: "ஞயம்பட உரை",
    meaningTa: "கேட்போருக்கு இனிமை தரும் நயமான சொற்களைப் பேசு.",
    meaningEn: "Speak pleasing, graceful words that bring joy and dignity.",
    detailedTa: "கடுஞ்சொற்களைத் தவிர்த்து, கேட்பவர் மனம் மகிழும் வகையில் நயமான நற்சொற்களைப் பேச வேண்டும்.",
    category: "உயிர்மெய் வருக்கம்"
  },
  {
    id: 18,
    letter: "த",
    verse: "தீவினை அகற்று",
    meaningTa: "பாவச் செயல்களையும் தீய பழக்கங்களையும் உன் வாழ்விலிருந்து நீக்கு.",
    meaningEn: "Purge harmful deeds and unethical vices from your life.",
    detailedTa: "பிறருக்குத் துன்பம் தரும் பாவச் செயல்களை அறவே விலக்கி வாழ வேண்டும்.",
    category: "உயிர்மெய் வருக்கம்"
  },
  {
    id: 19,
    letter: "ந",
    verse: "நன்மை கடைப்பிடி",
    meaningTa: "உயர்ந்த நற்பண்புகளையும் நன்மைகளையும் வாழ்நாள் முழுவதும் விடாமல் பிடி.",
    meaningEn: "Steadfastly practice goodwill and virtuous conduct every day.",
    detailedTa: "எந்தச் சூழ்நிலையிலும் நல்ல காரியங்களை மட்டுமே உறுதியோடு பற்றிப் பிடித்து நடக்க வேண்டும்.",
    category: "உயிர்மெய் வருக்கம்"
  },
  {
    id: 20,
    letter: "ப",
    verse: "பருவத்தே பயிர் செய்",
    meaningTa: "அந்தந்தக் காலத்திற்கு ஏற்ற பணிகளைத் தகுந்த காலத்தில் செய்.",
    meaningEn: "Sow your seeds in the right season; perform duties at the opportune time.",
    detailedTa: "பருவம் தவறிச் செய்யப்படும் செயல் வீணாகும்; தகுந்த பருவத்தில் திட்டமிட்டு உழைக்க வேண்டும்.",
    category: "உயிர்மெய் வருக்கம்"
  }
];
