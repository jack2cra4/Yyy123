/* Afroz MASTER CLASS - reading levels content */
const MASTER = [
  {
    id: "m1",
    title: "रीडिंग मास्टर चार्ट",
    subtitle: "अक्षर से पूरी किताब तक: रीडिंग मास्टर चार्ट",
    emoji: "📖",
    levels: [
      {
        name: "स्तर 1: दो अक्षरों वाले सबसे आसान शब्द",
        en: "Two-Letter Words (Bina Matra)",
        rule: "नियम: दोनों अक्षरों की आवाज़ को एक साथ मिलाकर बोलें।",
        items: [
          { n: 1, e: "AB", h: "अब" }, { n: 2, e: "GHAR", h: "घर" },
          { n: 3, e: "KAL", h: "कल" }, { n: 4, e: "SACH", h: "सच" },
          { n: 5, e: "MAT", h: "मत" }, { n: 6, e: "JAL", h: "जल" },
          { n: 7, e: "Bas par chadh.", h: "बस पर चढ़।" },
          { n: 8, e: "Ab ghar chal.", h: "अब घर चल।" },
          { n: 9, e: "Sach-sach kah.", h: "सच-सच कह।" },
          { n: 10, e: "Jal mat bhar.", h: "जल मत भर।" }
        ]
      },
      {
        name: "स्तर 2: मात्रा वाले शब्द और 3 अक्षरों के शब्द",
        en: "Matra Words & 3-Letter Words",
        rule: "नियम: मात्रा की आवाज़ को थोड़ा खींचकर बोलें (ा = आ, ी = ई)।",
        items: [
          { n: 11, e: "KAAM", h: "काम" }, { n: 12, e: "NAAM", h: "नाम" },
          { n: 13, e: "PAANI", h: "पानी" }, { n: 14, e: "GAADI", h: "गाड़ी" },
          { n: 15, e: "DIN", h: "दिन" }, { n: 16, e: "KAMAL", h: "कमल" },
          { n: 17, e: "Raman ghar aa gaya.", h: "रमन घर आ गया।" },
          { n: 18, e: "Apna kaam samay par kar.", h: "अपना काम समय पर कर।" },
          { n: 19, e: "Aaj ka din bahut achha hai.", h: "आज का दिन बहुत अच्छा है।" },
          { n: 20, e: "Meetha paani peekar aaram kar.", h: "मीठा पानी पीकर आराम कर।" }
        ]
      },
      {
        name: "स्तर 3: WhatsApp और दैनिक बोलचाल के वाक्य",
        en: "WhatsApp & Daily Talking (Hinglish + Hindi)",
        rule: "नियम: शब्दों को तोड़कर पढ़ें (Aap + Kahan + Ho = Aap Kahan Ho)।",
        items: [
          { n: 21, e: "Aap kahan ho?", h: "आप कहाँ हो?" },
          { n: 22, e: "Kal subah milte hain.", h: "कल सुबह मिलते हैं।" },
          { n: 23, e: "Main abhi raste mein hoon.", h: "मैं अभी रास्ते में हूँ।" },
          { n: 24, e: "Mujhe thoda time lagega.", h: "मुझे थोड़ा टाइम लगेगा।" },
          { n: 25, e: "Kya aapne khana kha liya?", h: "क्या आपने खाना खा लिया?" },
          { n: 26, e: "Aaj office ki chhutti hai.", h: "आज ऑफिस की छुट्टी है।" },
          { n: 27, e: "Message dekh kar reply karna.", h: "मैसेज देख कर रिप्लाई करना।" },
          { n: 28, e: "Kal hum market jayenge.", h: "कल हम मार्केट जाएंगे।" },
          { n: 29, e: "Phone uthao zaroori kaam hai.", h: "फोन उठाओ ज़रूरी काम है।" },
          { n: 30, e: "Sab kuch theek ho jayega.", h: "सब कुछ ठीक हो जाएगा।" }
        ]
      },
      {
        name: "स्तर 4: आधे अक्षर और कठिन शब्द",
        en: "Advanced Hinglish & Hindi",
        rule: "नियम: आधे अक्षर (क्, त्, म्) को अगले अक्षर के साथ तेज़ी से बोलें।",
        items: [
          { n: 31, e: "Namaste", h: "नमस्ते" }, { n: 32, e: "Dhanyawad", h: "धन्यवाद" },
          { n: 33, e: "Pustak", h: "पुस्तक" }, { n: 34, e: "Doctor", h: "डॉक्टर" },
          { n: 35, e: "Important", h: "महत्वपूर्ण" },
          { n: 36, e: "Aapka yeh prayaas bahut achha hai.", h: "आपका यह प्रयास बहुत अच्छा है।" },
          { n: 37, e: "Abhyas karne se kathin kaam bhi aasan hota hai.", h: "अभ्यास करने से कठिन काम भी आसान होता है।" },
          { n: 38, e: "Hamein rozaana nayi baatein seekhne ki koshish karni chahiye.", h: "हमें रोज़ाना नई बातें सीखने की कोशिश करनी चाहिए।" },
          { n: 39, e: "Samay ka sahi upyog hi safalta ki pehli seedhi hai.", h: "समय का सही उपयोग ही सफलता की पहली सीढ़ी है।" },
          { n: 40, e: "Apne lakshya ko paane ke liye lagatar mehnat zaroori hai.", h: "अपने लक्ष्य को पाने के लिए लगातार मेहनत ज़रूरी है।" }
        ]
      },
      {
        name: "स्तर 5: लंबे और गंभीर पैराग्राफ",
        en: "Library Book Paragraphs",
        rule: "नियम: पूर्ण विराम (|) पर थोड़ा रुकें और पूरे वाक्य का अर्थ समझें।",
        items: [
          { n: 41, h: "प्राचीन काल में ज्ञान प्राप्त करने के लिए गुरुकुल जाया जाता था।" },
          { n: 42, h: "पुस्तकें मनुष्य की सबसे सच्ची और मार्गदर्शक मित्र होती हैं।" },
          { n: 43, h: "किसी भी भाषा को सीखने के लिए धैर्य और निरंतरता सबसे आवश्यक है।" },
          { n: 44, h: "जब हम किसी विचार को शब्दों में ढालते हैं, तो वह अमर हो जाता है।" },
          { n: 45, h: "संसार में कोई भी कार्य असंभव नहीं है यदि आपका संकल्प दृढ़ हो।" },
          { n: 46, h: "विज्ञान और तकनीक ने आज मानव जीवन को पूरी तरह बदल दिया है।" },
          { n: 47, h: "पुस्तकालय ज्ञान का वह अथाह सागर है जहाँ हर विषय का उत्तर मिलता है।" },
          { n: 48, h: "कठिनाइयों से घबराए बिना आगे बढ़ने वाला व्यक्ति ही इतिहास रचता है।" },
          { n: 49, h: "स्वाध्याय और निरंतर पठन से मस्तिष्क की सोचने की क्षमता बढ़ती है।" },
          { n: 50, h: "आज से लिया गया यह संकल्प आपके भविष्य को पूरी तरह बदल देगा।" }
        ]
      }
    ]
  },

  {
    id: "m2",
    title: "मास्टर लेवल",
    subtitle: "पूरी किताब और फ्लूएंट रीडिंग",
    emoji: "🎓",
    levels: [
      {
        name: "स्तर 6: बेसिक इंग्लिश रीडिंग",
        en: "A-Z Phonics & Basic Words",
        rule: "नियम: अक्षरों की इंग्लिश आवाज़ को मिलाकर बोलें (C-A-T = कैट, S-U-N = सन)।",
        items: [
          { n: 51, e: "C-A-T = Cat", h: "बिल्ली" },
          { n: 51, e: "B-A-T = Bat", h: "बल्ला" },
          { n: 52, e: "T-H-I-S = This", h: "यह" },
          { n: 52, e: "T-H-A-T = That", h: "वह" },
          { n: 53, e: "This is my book.", h: "यह मेरी किताब है।" },
          { n: 54, e: "The sun is in the sky.", h: "सूरज आसमान में है।" },
          { n: 55, e: "I like to read books.", h: "मुझे किताबें पढ़ना पसंद है।" },
          { n: 56, e: "Water is very important for life.", h: "पानी जीवन के लिए बहुत ज़रूरी है।" },
          { n: 57, e: "Today is a very good day.", h: "आज बहुत अच्छा दिन है।" },
          { n: 58, e: "Knowledge is true power.", h: "ज्ञान ही असली शक्ति है।" },
          { n: 59, e: "Practice makes a person perfect.", h: "अभ्यास इंसान को निपुण बनाता है।" },
          { n: 60, e: "Never stop learning new things.", h: "नई चीजें सीखना कभी बंद मत करो।" }
        ]
      },
      {
        name: "स्तर 7: संयुक्त अक्षर और नुक्ता वाले शब्द",
        en: "Advanced Hindi Phonics",
        rule: "नियम: 'क्ष', 'त्र', 'ज्ञ', 'श्र' और बिंदी (ं) / नुक्ता (ज़, फ़) का सही उच्चारण करें।",
        items: [
          { n: 61, e: "परीक्षा (Pareeksha)", h: "क्षेत्र (Area)" },
          { n: 62, e: "मित्र (Friend)", h: "छात्र (Student)" },
          { n: 63, e: "ज्ञान (Knowledge)", h: "विज्ञान (Science)" },
          { n: 64, e: "परिश्रम (Hard work)", h: "श्रीमान (Mister)" },
          { n: 65, e: "ज़िंदगी और फ़ैसला", h: "ज़ और फ़ में गले से आवाज़ निकालें" },
          { n: 66, e: "पर्यावरण (प+र्+या+व+र+ण) की सुरक्षा हमारा पहला कर्तव्य है।" },
          { n: 67, e: "दृष्टिकोण (नज़रिया) बदलने से संसार की हर परिस्थिति बदल जाती है।" },
          { n: 68, e: "आत्मविश्वास के बिना कोई भी बड़ा लक्ष्य हासिल नहीं किया जा सकता।" },
          { n: 69, e: "संकोच और भय को त्यागकर आगे बढ़ने वाला ही विजयी होता है।" },
          { n: 70, e: "राष्ट्र निर्माण में प्रत्येक नागरिक का योगदान अमूल्य है।" }
        ]
      },
      {
        name: "स्तर 8: दर्शन, विज्ञान और गंभीर साहित्यिक वाक्य",
        en: "Book Level Reading",
        rule: "नियम: लंबे वाक्यों को छोटे-छोटे हिस्सों में तोड़कर सांस लेते हुए पढ़ें।",
        items: [
          { n: 71, e: "मानवीय चेतना का विकास केवल निरंतर अध्ययन और चिंतन से ही संभव है।" },
          { n: 72, e: "किसी भी राष्ट्र की आर्थिक और सामाजिक प्रगति उसकी शिक्षा प्रणाली पर निर्भर करती है।" },
          { n: 73, e: "इतिहास हमें यह सिखाता है कि समय के प्रवाह में वही सभ्यताएं बचती हैं जो परिवर्तनशील हैं।" },
          { n: 74, e: "वैज्ञानिक अनुसंधानों ने ब्रह्मांड के अनेक अनसुलझे रहस्यों से पर्दा उठाया है।" },
          { n: 75, e: "समाज में समानता और न्याय की स्थापना के लिए संविधान का पालन अनिवार्य है।" },
          { n: 76, e: "साहित्य समाज का दर्पण होता है जो मानव जीवन के प्रत्येक पहलू को उजागर करता है।" },
          { n: 77, e: "जब व्यक्ति अपने कर्तव्यों के प्रति सजग होता है, तब अधिकारों की रक्षा स्वतः हो जाती है।" },
          { n: 78, e: "मानसिक शांति और एकाग्रता ही व्यक्ति की कार्यक्षमता को कई गुना बढ़ा देती है।" },
          { n: 79, e: "प्रौद्योगिकी के इस युग में सूचनाओं का सही विश्लेषण करना सबसे बड़ी कुशलता है।" },
          { n: 80, e: "अंततः ज्ञान वही सार्थक है जो जीवन को सरल, उपयोगी और प्रेरणादायी बनाए।" }
        ]
      },
      {
        name: "स्तर 9: कॉम्प्लेक्स इंग्लिश टेक्स्ट",
        en: "Advanced English Reading",
        rule: "नियम: बड़े शब्दों को तोड़कर पढ़ें (In-for-ma-tion, Re-spon-si-bi-li-ty)।",
        items: [
          { n: 81, e: "Reading is essential for those who seek to rise above the ordinary." },
          { n: 82, e: "Education is the most powerful weapon which you can use to change the world." },
          { n: 83, e: "The capacity to learn is a gift; the ability to learn is a skill." },
          { n: 84, e: "Great leaders inspire others to dream more, learn more, and do more." },
          { n: 85, e: "Success is the sum of small efforts, repeated day in and day out." },
          { n: 86, e: "Discipline and consistency are the foundation stones of any achievement." },
          { n: 87, e: "Books allow you to travel through time and understand different minds." },
          { n: 88, e: "Continuous reading expands your imagination and improves your focus." },
          { n: 89, e: "Every expert was once a beginner who refused to give up." },
          { n: 90, e: "Your journey of reading will open endless doors of wisdom and success." }
        ]
      },
      {
        name: "स्तर 10: ग्रैंड मास्टर पैराग्राफ",
        en: "Ultimate Test (Hindi + English)",
        rule: "नियम: बिना रुके, पूरे भाव और ठहराव (विराम चिह्नों) के साथ पढ़ें।",
        items: [
          { n: 91, e: "अध्ययन की शक्ति:", h: "जब आप किसी पुस्तक का पहला पृष्ठ खोलते हैं, तो आप केवल शब्द नहीं पढ़ते, बल्कि उस लेखक के वर्षों के अनुभवों और विचारों से सीधे जुड़ जाते हैं।" },
          { n: 92, e: "The Habit of Excellence:", h: "\"We are what we repeatedly do. Excellence, then, is not an act, but a habit developed through patience and relentless practice.\"" },
          { n: 93, e: "स्वावलंबन और प्रगति:", h: "अक्षर ज्ञान से शुरू होकर गंभीर ग्रंथों के पठन तक की यह यात्रा सिद्ध करती है कि दृढ़ इच्छाशक्ति और निरंतर प्रयास से कोई भी सीमा पार की जा सकती है।" },
          { n: 94, e: "Final Horizon:", h: "From this moment onward, no page in any library is beyond your reach. Read every line with curiosity, speak every word with confidence." }
        ]
      }
    ]
  },

  {
    id: "m3",
    title: "इंग्लिश रीडिंग सीक्रेट",
    subtitle: "इंग्लिश रीडिंग मास्टर सीक्रेट चार्ट (Phonics & Rules)",
    emoji: "🔤",
    levels: [
      {
        name: "नियम 1: इंग्लिश अक्षरों की असली आवाज़",
        en: "Letter Sounds",
        rule: "नियम: स्पेलिंग पढ़ते समय अक्षर का नाम नहीं, उसकी आवाज़ बोलें।",
        items: [
          { e: "A", h: "ऐ / आ", w: "Apple = एप्पल" }, { e: "B", h: "ब", w: "Bat = बैट" },
          { e: "C", h: "क / स", w: "Cat = कैट, City = सिटी" }, { e: "D", h: "ड / द", w: "Dog = डॉग" },
          { e: "E", h: "ए", w: "Egg = एग, Pen = पेन" }, { e: "F", h: "फ़", w: "Fan = फ़ैन" },
          { e: "G", h: "ग", w: "Go = गो, Gun = गन" }, { e: "H", h: "ह", w: "Hat = हैट, Hen = हेन" },
          { e: "I", h: "इ / आई", w: "Ink = इंक, Ice = आइस" }, { e: "J", h: "ज", w: "Jug = जग" },
          { e: "K", h: "क", w: "Kite = काइट" }, { e: "L", h: "ल", w: "Lip = लिप" },
          { e: "M", h: "म", w: "Man = मैन" }, { e: "N", h: "न", w: "Net = नेट" },
          { e: "O", h: "ऑ / ओ", w: "Ox = ऑक्स, Open = ओपन" }, { e: "P", h: "प", w: "Pen = पेन" },
          { e: "Q", h: "क्व", w: "Queen = क्वीन" }, { e: "R", h: "र", w: "Rat = रैट" },
          { e: "S", h: "स", w: "Sun = सन" }, { e: "T", h: "ट / त", w: "Top = टॉप" },
          { e: "U", h: "अ / यु", w: "Up = अप, Sun = सन" }, { e: "V", h: "व", w: "Van = वैन" },
          { e: "W", h: "व", w: "Water = वॉटर" }, { e: "X", h: "क्स", w: "Box = बॉक्स" },
          { e: "Y", h: "य / ई", w: "Yes = यस, Baby = बेबी" }, { e: "Z", h: "ज़", w: "Zoo = ज़ू" }
        ]
      },
      {
        name: "नियम 2: दो अक्षरों को जोड़कर पढ़ना",
        en: "2-Letter Blends",
        rule: "नियम: अक्षरों की आवाज़ों को एक साथ मिलाकर एक सांस में बोलें।",
        items: [
          { e: "AT", h: "ऐट" }, { e: "AN", h: "ऐन" }, { e: "IN", h: "इन" },
          { e: "IT", h: "इट" }, { e: "ON", h: "ऑन" }, { e: "UP", h: "अप" }
        ]
      },
      {
        name: "नियम 3: तीन अक्षरों वाले शब्द",
        en: "CVC Pattern",
        rule: "नियम: शुरू का अक्षर + बीच की मात्रा + आखिरी अक्षर।",
        items: [
          { e: "BAT", h: "बैट" }, { e: "CAT", h: "कैट" }, { e: "RED", h: "रेड" },
          { e: "PIN", h: "पिन" }, { e: "HOT", h: "हॉट" }, { e: "SUN", h: "सन" }
        ]
      },
      {
        name: "नियम 4: दो खास अक्षर जब साथ आएं",
        en: "Special Pair Sounds",
        rule: "नियम: जब ये दो अक्षर साथ दिखें, तो आवाज़ बदल जाती है।",
        items: [
          { e: "SH = श", h: "SHIP (शिप), SHOP (शॉप)" }, { e: "CH = च", h: "CHIN (चिन), CHAT (चैट)" },
          { e: "TH = थ/द", h: "THAT (दैट), THINK (थिंक)" }, { e: "PH = फ़", h: "PHONE (फ़ोन), PHOTO (फ़ोटो)" },
          { e: "WH = व्ह", h: "WHAT (व्हॉट), WHEN (व्हेन)" }, { e: "OO = ऊ", h: "BOOK (बुक), MOON (मून)" },
          { e: "EE = ई", h: "SEE (सी), MEET (मीट)" }, { e: "TION = शन", h: "STA-TION (स्टेशन), AC-TION (एक्शन)" }
        ]
      },
      {
        name: "नियम 5: बड़े शब्दों को तोड़कर पढ़ना",
        en: "Chunking Rule",
        rule: "नियम: बड़े शब्द को 2 या 3 हिस्सों में पेंसिल से बांट लें।",
        items: [
          { e: "HELP", h: "HEL + P = HELP (हेल्प)" }, { e: "MILK", h: "MIL + K = MILK (मिल्क)" },
          { e: "JUMP", h: "JUM + P = JUMP (जम्प)" },
          { e: "INFORMATION", h: "IN (इन) + FOR (फ़ॉर) + MA (मे) + TION (शन)" },
          { e: "COMPUTER", h: "COM (कम) + PU (प्यू) + TER (टर)" },
          { e: "HOSPITAL", h: "HOS (हॉस) + PI (पि) + TAL (टल)" },
          { e: "DOCTOR", h: "DOC (डॉक्) + TOR (टर)" }
        ]
      }
    ]
  }
];