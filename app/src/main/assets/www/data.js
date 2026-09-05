/* A2Z Master - course data
   Mirrors content from /0000 source folder exactly. */
const COURSE = [
  {
    id: "b1",
    title: "लर्निंग टेबल",
    subtitle: "हिंदी-इंग्लिश लर्निंग टेबल (कोर्स स्ट्रक्चर)",
    emoji: "🔤",
    chapters: [
      {
        name: "अध्याय 1: वर्णमाला",
        en: "Alphabets",
        pairs: [
          { e: "K", h: "क" }, { e: "KH", h: "ख" }, { e: "G", h: "ग" },
          { e: "GH", h: "घ" }, { e: "CH", h: "च" }, { e: "J", h: "ज" },
          { e: "T", h: "ट" }, { e: "D", h: "ड" }, { e: "N", h: "न" },
          { e: "P", h: "प" }, { e: "B", h: "ब" }, { e: "M", h: "म" },
          { e: "Y", h: "य" }, { e: "R", h: "र" }, { e: "L", h: "ल" },
          { e: "S", h: "स" }, { e: "H", h: "ह" }
        ]
      },
      {
        name: "अध्याय 2: मात्राएँ और ध्वनि",
        en: "Matras & Sounds",
        pairs: [
          { e: "A", h: "ा (आ की मात्रा)" }, { e: "I", h: "ि (इ की मात्रा)" },
          { e: "EE", h: "ी (ई की मात्रा)" }, { e: "U", h: "ु (उ की मात्रा)" },
          { e: "OO", h: "ू (ऊ की मात्रा)" }, { e: "E", h: "े (ए की मात्रा)" },
          { e: "AI", h: "ै (ऐ की मात्रा)" }, { e: "O", h: "ो (ओ की मात्रा)" },
          { e: "AU", h: "ौ (औ की मात्रा)" }
        ]
      },
      {
        name: "अध्याय 3: शब्द बनाना",
        en: "Word Building",
        pairs: [
          { e: "KAR", h: "कर" }, { e: "GHAR", h: "घर" }, { e: "PAR", h: "पर" },
          { e: "NAL", h: "नल" }, { e: "KAMAL", h: "कमल" }, { e: "MAGAR", h: "मगर" },
          { e: "SARAK", h: "सड़क" }, { e: "BACHPAN", h: "बचपन" }
        ]
      },
      {
        name: "अध्याय 4: दैनिक वाक्य",
        en: "Daily Sentences",
        sentence: [
          { e: "AAP KAISE HO?", h: "आप कैसे हो?" },
          { e: "MAIN THIK HOON.", h: "मैं ठीक हूँ।" },
          { e: "KYA KAR RAHE HO?", h: "क्या कर रहे हो?" },
          { e: "KHANA KHA LIYA?", h: "खाना खा लिया?" },
          { e: "DHANYAWAD", h: "धन्यवाद" }
        ]
      }
    ],
    footer: "नियम:\n1. बाएं (Left) वाले इंग्लिश लेटर को देखकर दाएं (Right) वाले हिंदी अक्षर को बोल-बोल कर अपनी कॉपी में 5-5 बार लिखें।\n2. जब तक बाएं वाला देखकर दाएं वाला याद न हो जाए, तब तक आगे न बढ़ें।"
  },

  {
    id: "b2",
    title: "लेवल 2",
    subtitle: "चैटिंग और रीडिंग मास्टर-कोर्स",
    emoji: "🚀",
    chapters: [
      {
        name: "अध्याय 1: संयुक्त अक्षर",
        en: "Mixing Letters",
        pairs: [
          { e: "KYA", h: "क्या" }, { e: "KYUN", h: "क्यों" }, { e: "KAISI", h: "कैसी" },
          { e: "ACHHA", h: "अच्छा" }, { e: "DOST", h: "दोस्त" }, { e: "BAAT", h: "बात" }
        ]
      },
      {
        name: "अध्याय 2: चैट के लिए छोटे वाक्य",
        en: "Chatting Phrases",
        sentence: [
          { e: "KAHAN HO?", h: "कहाँ हो?" },
          { e: "JALDI AAO", h: "जल्दी आओ" },
          { e: "KYA HUA?", h: "क्या हुआ?" },
          { e: "MAIN AA RAHA HOON", h: "मैं आ रहा हूँ" },
          { e: "SAMJH GAYA", h: "समझ गया" },
          { e: "KOI BAAT NAHI", h: "कोई बात नहीं" },
          { e: "BADMEIN BAAT KARTE HAIN", h: "बाद में बात करते हैं" }
        ]
      },
      {
        name: "अध्याय 3: कीबोर्ड 'सजेशन' ट्रिक",
        en: "Keyboard Pro-Tip",
        tips: [
          "ट्रिक: व्हाट्सएप पर पूरा मत लिखें।",
          "उदाहरण: 'K' टाइप करें, कीबोर्ड ऊपर 'क्या', 'कैसे', 'कर' दिखाएगा।",
          "अभ्यास: सिर्फ 2 अक्षर टाइप करें और ऊपर वाली पट्टी (Suggestion Bar) से शब्द चुनें।",
          "यह आपकी चैटिंग की स्पीड 10 गुना बढ़ा देगा।"
        ]
      },
      {
        name: "अध्याय 4: रीडिंग प्रैक्टिस",
        en: "Reading for Speed",
        tips: [
          "तरीका: व्हाट्सएप पर आए किसी भी मैसेज को जोर से पढ़ें।",
          "अगर शब्द बड़ा है, तो उसे 'टुकड़ों' में तोड़ें: जैसे: 'नमस्कार' -> नम + स्कार -> नमस्कार।",
          "अभ्यास: रोज़ अपने दोस्त के मैसेज को 'बोल-बोल कर' पढ़कर ही रिप्लाई करें।"
        ]
      },
      {
        name: "अध्याय 5: चैटिंग का अभ्यास",
        en: "Practice Plan",
        tips: [
          "आज का टास्क: अपने किसी दोस्त को ये 3 वाक्य भेजें:",
          "1. \"नमस्ते, क्या कर रहे हो?\"",
          "2. \"मैं आज पढ़ रहा हूँ।\"",
          "3. \"बाद में बात करते हैं।\""
        ]
      }
    ],
    footer: "चैटिंग नियम:\n1. स्पेलिंग की चिंता न करें, कीबोर्ड 'सजेशन' का इस्तेमाल करें।\n2. हमेशा वॉयस-टू-टेक्स्ट (Mic) और कीबोर्ड सुझाव का मिला-जुला उपयोग करें।\n3. रोज़ाना कम से कम 5 मैसेज हिंदी में टाइप करना अनिवार्य है।"
  },

  {
    id: "b3",
    title: "संपूर्ण मास्टर किताब",
    subtitle: "संपूर्ण हिंदी-इंग्लिश मास्टर लर्निंग किताब",
    emoji: "📚",
    chapters: [
      {
        name: "भाग 1: बेसिक अक्षरों का मिलन",
        en: "Foundation",
        triples: [
          { e: "K", h: "क", w: "KAR" }, { e: "KH", h: "ख", w: "KHAT" },
          { e: "G", h: "ग", w: "GHAR" }, { e: "CH", h: "च", w: "CHAL" },
          { e: "J", h: "ज", w: "JAL" }, { e: "N", h: "न", w: "NAL" },
          { e: "P", h: "प", w: "PAR" }, { e: "B", h: "ब", w: "BS" },
          { e: "M", h: "म", w: "MAN" }, { e: "R", h: "र", w: "RAT" },
          { e: "S", h: "स", w: "SAB" }, { e: "H", h: "ह", w: "HAM" }
        ]
      },
      {
        name: "भाग 2: मात्राओं का जादू",
        en: "The Vowel System",
        triples: [
          { e: "A", h: "ा (aa)", w: "Kaam (काम)" }, { e: "I", h: "ि (i)", w: "Din (दिन)" },
          { e: "EE", h: "ी (ee)", w: "Teen (टीन)" }, { e: "U", h: "ु (u)", w: "Sun (सुन)" },
          { e: "OO", h: "ू (oo)", w: "Phool (फूल)" }, { e: "E", h: "े (e)", w: "Kel (केला)" },
          { e: "AI", h: "ै (ai)", w: "Paisa (पैसा)" }, { e: "O", h: "ो (o)", w: "Mor (मोर)" },
          { e: "AU", h: "ौ (au)", w: "Paudha (पौधा)" }
        ]
      },
      {
        name: "भाग 3: चैटिंग के लिए जरूरी शब्द",
        en: "Chatting Vocabulary",
        pairs: [
          { e: "Namaste", h: "नमस्ते" }, { e: "Kaise", h: "कैसे" }, { e: "Thik", h: "ठीक" },
          { e: "Kya", h: "क्या" }, { e: "Rahe", h: "रहे" }, { e: "Khana", h: "खाना" },
          { e: "Paani", h: "पानी" }, { e: "Dost", h: "दोस्त" }, { e: "Dhanyawad", h: "धन्यवाद" },
          { e: "Batao", h: "बताओ" }
        ]
      },
      {
        name: "भाग 4: वाक्य विन्यास",
        en: "Sentence Building",
        sentence: [
          { e: "Aap kaise ho?", h: "आप कैसे हो?" },
          { e: "Main thik hoon.", h: "मैं ठीक हूँ।" },
          { e: "Kya kar rahe ho?", h: "क्या कर रहे हो?" },
          { e: "Khana kha liya?", h: "खाना खा लिया?" },
          { e: "Main kaam kar raha hoon.", h: "मैं काम कर रहा हूँ।" },
          { e: "Chalo milte hain.", h: "चलो मिलते हैं।" }
        ]
      },
      {
        name: "भाग 5: चैटिंग और रीडिंग का प्रो-फॉर्मूला",
        en: "Master Rules",
        tips: [
          "नियम 1 (टाइपिंग): पूरा शब्द न लिखें। कीबोर्ड पर पहला अक्षर लिखें और ऊपर 'सजेशन' पट्टी (Suggestion Bar) से शब्द चुनें।",
          "नियम 2 (रीडिंग): किसी भी शब्द को देख कर न घबराएं। उसे टुकड़ों में तोड़ें। जैसे: 'नमस्ते' = 'नम' + 'स्ते'।",
          "नियम 3 (अभ्यास): रोज़ाना व्हाट्सएप पर 5 छोटे मैसेज भेजें।",
          "नियम 4 (वॉयस): जब बहुत कठिन शब्द हो, तो माइक (Mic) दबाएं और बोलें। फोन जो लिखेगा, उसे गौर से पढ़ें।"
        ],
        checklist: [
          "[ ] वर्णमाला पहचान ली?",
          "[ ] मात्राओं से शब्द बन रहे हैं?",
          "[ ] व्हाट्सएप पर टाइपिंग शुरू की?",
          "[ ] छोटे वाक्य पढ़ना सीख लिया?"
        ]
      }
    ]
  },

  {
    id: "b4",
    title: "अल्टीमेट लर्निंग OS",
    subtitle: "हिंदी-इंग्लिश-हिंग्लिश: अल्टीमेट लर्निंग सिस्टम (OS)",
    emoji: "🧠",
    chapters: [
      {
        name: "भाग 1: वर्णमाला और उच्चारण",
        en: "Letters & Phonetics",
        triples: [
          { e: "A", h: "अ", w: "A" }, { e: "KA", h: "क", w: "K" },
          { e: "KHA", h: "ख", w: "Kh" }, { e: "GA", h: "ग", w: "G" },
          { e: "CHA", h: "च", w: "Ch" }, { e: "JA", h: "ज", w: "J" },
          { e: "TA", h: "ट", w: "T" }, { e: "PA", h: "प", w: "P" },
          { e: "MA", h: "म", w: "M" }, { e: "SA", h: "स", w: "S" },
          { e: "HA", h: "ह", w: "H" }
        ]
      },
      {
        name: "भाग 2: मात्रा और शब्द जोड़",
        en: "Matra & Word Synthesis",
        triples: [
          { e: "House", h: "घर", w: "Ghar" }, { e: "Work", h: "काम", w: "Kaam" },
          { e: "Time", h: "समय", w: "Samay" }, { e: "Friend", h: "दोस्त", w: "Dost" },
          { e: "Good", h: "अच्छा", w: "Achha" }, { e: "Knowledge", h: "ज्ञान", w: "Gyan" }
        ]
      },
      {
        name: "भाग 3: प्रोफेशनल वाक्य",
        en: "Professional Sentences",
        sentence: [
          { e: "I am learning.", g: "Main seekh raha hoon.", h: "मैं सीख रहा हूँ।" },
          { e: "How are you?", g: "Aap kaise ho?", h: "आप कैसे हो?" },
          { e: "What is this?", g: "Yeh kya hai?", h: "यह क्या है?" },
          { e: "Please help me.", g: "Kripya madad karo.", h: "कृपया मदद करो।" },
          { e: "I understand.", g: "Main samajh gaya.", h: "मैं समझ गया।" }
        ]
      },
      {
        name: "भाग 4: चैटिंग का प्रो-फॉर्मूला",
        en: "Chatting Formula",
        tips: [
          "1. VOICE-TO-TEXT: बोलें (English), टाइप करें (Hindi)।",
          "2. KEYBOARD SUGGESTION: 'K' टाइप करें -> 'क्या' चुनें -> 'Ka' सीखें।",
          "3. DICTIONARY: हर कठिन हिंदी शब्द को इंग्लिश में ढूंढें।"
        ],
        table: ["उच्चारण (Sounds) पहचानें -> बेसिक पढ़ना", "शब्दों को जोड़ें -> शब्द बनाना", "वाक्यों को देखें -> बातचीत करना", "इंग्लिश-हिंदी तुलना -> दोनों में निपुणता"]
      }
    ]
  },

  {
    id: "b5",
    title: "बाइलिंगुअल मास्टर",
    subtitle: "अल्टीमेट बाइलिंगुअल मास्टर कोर्स (हिंदी + इंग्लिश)",
    emoji: "🗣️",
    chapters: [
      {
        name: "भाग 1: वर्णमाला",
        en: "A to Z Sound Logic",
        triples: [
          { e: "A", h: "अ", w: "A" }, { e: "K", h: "क", w: "Ka" },
          { e: "KH", h: "ख", w: "Kha" }, { e: "G", h: "ग", w: "Ga" },
          { e: "CH", h: "च", w: "Cha" }, { e: "J", h: "ज", w: "Ja" },
          { e: "T", h: "ट", w: "Ta" }, { e: "N", h: "न", w: "Na" },
          { e: "P", h: "प", w: "Pa" }, { e: "B", h: "ब", w: "Ba" },
          { e: "M", h: "म", w: "Ma" }, { e: "Y", h: "य", w: "Ya" },
          { e: "R", h: "र", w: "Ra" }, { e: "L", h: "ल", w: "La" },
          { e: "S", h: "स", w: "Sa" }, { e: "H", h: "ह", w: "Ha" }
        ]
      },
      {
        name: "भाग 2: मात्रा और जोड़",
        en: "The Sound Bridge",
        triples: [
          { e: "AA (Matra)", h: "ा", w: "Aa" }, { e: "I (Matra)", h: "ि", w: "I" },
          { e: "EE (Matra)", h: "ी", w: "Ee" }, { e: "U (Matra)", h: "ु", w: "U" },
          { e: "OO (Matra)", h: "ू", w: "Oo" }, { e: "E (Matra)", h: "े", w: "E" },
          { e: "AI (Matra)", h: "ै", w: "Ai" }, { e: "O (Matra)", h: "ो", w: "O" },
          { e: "AU (Matra)", h: "ौ", w: "Au" }
        ]
      },
      {
        name: "भाग 3: प्रोफेशनल शब्दावली",
        en: "Professional Vocabulary",
        triples: [
          { e: "Newspaper", h: "अखबार", w: "Akhbaar" }, { e: "Book", h: "किताब", w: "Kitaab" },
          { e: "Education", h: "शिक्षा", w: "Shiksha" }, { e: "Trust", h: "विश्वास", w: "Vishwaas" },
          { e: "Success", h: "सफलता", w: "Safalta" }, { e: "Information", h: "सूचना", w: "Soochna" }
        ]
      },
      {
        name: "भाग 4: दैनिक वाक्य",
        en: "Daily Reading & Typing",
        sentence: [
          { e: "Read the newspaper.", g: "Akhbaar padho.", h: "अखबार पढ़ो।" },
          { e: "Open the book.", g: "Kitaab kholo.", h: "किताब खोलो।" },
          { e: "What is your name?", g: "Aapka naam kya hai?", h: "आपका नाम क्या है?" },
          { e: "I am working hard.", g: "Main mehnat kar raha hoon.", h: "मैं मेहनत कर रहा हूँ।" },
          { e: "God is great.", g: "Ishwar mahan hai.", h: "ईश्वर महान है।" }
        ]
      },
      {
        name: "भाग 5: प्रो-रीडिंग नियम",
        en: "The Reading Rule",
        tips: [
          "नियम: किसी भी बड़े शब्द को पढ़ें तो 3 स्टेप अपनाएं:",
          "1. तोड़ें: 'अखबार' -> 'अख' + 'बार'",
          "2. जोड़ें: 'अखबार' (Akh-baar)",
          "3. अर्थ: अखबार = Newspaper"
        ]
      }
    ]
  },

  {
    id: "b6",
    title: "अखबार-किताब चार्ट",
    subtitle: "अखबार और किताब पढ़ने का मास्टर चार्ट",
    emoji: "📰",
    chapters: [
      {
        name: "मास्टर शब्द-चार्ट",
        en: "Master Vocabulary Chart",
        triples: [
          { e: "Newspaper", h: "अखबार", w: "Akhbaar" }, { e: "Book", h: "किताब", w: "Kitaab" },
          { e: "Read", h: "पढ़ना", w: "Padhna" }, { e: "News", h: "खबर", w: "Khabar" },
          { e: "Today", h: "आज", w: "Aaj" }, { e: "Important", h: "महत्वपूर्ण", w: "Mahatvapurn" },
          { e: "Government", h: "सरकार", w: "Sarkar" }, { e: "Country", h: "देश", w: "Desh" },
          { e: "Development", h: "विकास", w: "Vikas" }, { e: "Work", h: "काम", w: "Kaam" },
          { e: "Attention", h: "ध्यान", w: "Dhyan" }, { e: "Education", h: "शिक्षा", w: "Shiksha" },
          { e: "Success", h: "सफलता", w: "Safalta" }, { e: "World", h: "दुनिया", w: "Duniya" },
          { e: "Truth", h: "सच", w: "Sach" }
        ]
      },
      {
        name: "पढ़ने का नियम",
        en: "Three Steps",
        tips: [
          "1. बाएं (English) को देखें।",
          "2. दाएं (Hindi) को देखें।",
          "3. बीच वाले (Hinglish) को जोर से बोलें।"
        ]
      },
      {
        name: "प्रोफेशनल वाक्य अभ्यास",
        en: "Professional Sentence Practice",
        sentence: [
          { e: "Read the newspaper.", h: "अखबार पढ़ो।" },
          { e: "I read the book.", h: "मैं किताब पढ़ता हूँ।" },
          { e: "Today's news is good.", h: "आज की खबर अच्छी है।" },
          { e: "Focus on your work.", h: "अपने काम पर ध्यान दो।" },
          { e: "Education is important.", h: "शिक्षा महत्वपूर्ण है।" }
        ]
      }
    ],
    footer: "नोट: जब भी अखबार में कोई शब्द न समझ आए, उसे इस चार्ट के साथ मिलाएँ।"
  },

  {
    id: "b7",
    title: "मास्टर चार्ट 2",
    subtitle: "अखबार और किताब पढ़ने का मास्टर चार्ट",
    emoji: "📖",
    chapters: [
      {
        name: "मास्टर शब्द-चार्ट",
        en: "Master Vocabulary Chart",
        triples: [
          { e: "Newspaper", h: "अखबार", w: "Akhbaar" }, { e: "Book", h: "किताब", w: "Kitaab" },
          { e: "Read", h: "पढ़ना", w: "Padhna" }, { e: "News", h: "खबर", w: "Khabar" },
          { e: "Today", h: "आज", w: "Aaj" }, { e: "Important", h: "महत्वपूर्ण", w: "Mahatvapurn" },
          { e: "Government", h: "सरकार", w: "Sarkar" }, { e: "Country", h: "देश", w: "Desh" },
          { e: "Development", h: "विकास", w: "Vikas" }, { e: "Work", h: "काम", w: "Kaam" },
          { e: "Attention", h: "ध्यान", w: "Dhyan" }, { e: "Education", h: "शिक्षा", w: "Shiksha" },
          { e: "Success", h: "सफलता", w: "Safalta" }, { e: "World", h: "दुनिया", w: "Duniya" },
          { e: "Truth", h: "सच", w: "Sach" }
        ]
      }
    ],
    footer: "नियम: बाएं (Left) देखें, दाएं (Right) का मतलब समझें, बीच में बोलें।"
  },

  {
    id: "b8",
    title: "अल्टीमेट चार्ट",
    subtitle: "अल्टीमेट रीडिंग और चैटिंग मास्टर चार्ट",
    emoji: "🏆",
    chapters: [
      {
        name: "मास्टर शब्द-चार्ट (25)",
        en: "Ultimate Vocabulary Chart",
        triples: [
          { e: "Newspaper", h: "अखबार", w: "Akhbaar" }, { e: "Book", h: "किताब", w: "Kitaab" },
          { e: "Today", h: "आज", w: "Aaj" }, { e: "Time", h: "समय", w: "Samay" },
          { e: "People", h: "लोग", w: "Log" }, { e: "Government", h: "सरकार", w: "Sarkar" },
          { e: "Country", h: "देश", w: "Desh" }, { e: "Work", h: "काम", w: "Kaam" },
          { e: "Important", h: "महत्वपूर्ण", w: "Mahatvapurn" }, { e: "Problem", h: "समस्या", w: "Samasya" },
          { e: "Education", h: "शिक्षा", w: "Shiksha" }, { e: "Development", h: "विकास", w: "Vikas" },
          { e: "Money", h: "पैसा", w: "Paisa" }, { e: "Success", h: "सफलता", w: "Safalta" },
          { e: "World", h: "दुनिया", w: "Duniya" }, { e: "Health", h: "स्वास्थ्य", w: "Swasthya" },
          { e: "News", h: "खबर", w: "Khabar" }, { e: "Family", h: "परिवार", w: "Parivar" },
          { e: "Truth", h: "सच", w: "Sach" }, { e: "Life", h: "जीवन", w: "Jeevan" },
          { e: "Decision", h: "फैसला", w: "Faisla" }, { e: "Help", h: "मदद", w: "Madad" },
          { e: "Good", h: "अच्छा", w: "Achha" }, { e: "Understand", h: "समझना", w: "Samajhna" },
          { e: "Because", h: "क्योंकि", w: "Kyunki" }
        ]
      }
    ],
    footer: "रीडिंग का गोल्ड-नियम: बाएं (Left) देखें, दाएं (Right) का मतलब जानें।"
  }
];