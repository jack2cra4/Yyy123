/* =====================================================================
   A2Z MASTER — "Basic to Ultra" ISOLATED SECTION
   FINAL MASTER LEARNING SYSTEM (Absolute Zero -> Programming Ultra)
   Self-contained: own data + own renderer + own isolated CSS.
   Reuses only the global helpers speak() / sel() / esc() / toast().
   ===================================================================== */

var ULTRA_TITLE = "Basic to Ultra";
var ULTRA_SUBTITLE = "FINAL MASTER LEARNING SYSTEM";

/* ---------------- MASTER PATH (stages) ---------------- */
var ULTRA_PATH = [
  { name: "ABSOLUTE ZERO", focus: "अक्षर, आवाज़, 0 से शुरुआत — कुछ भी नहीं जानने वाले के लिए।" },
  { name: "BASIC FOUNDATION", focus: "A B C D, अ आ क ख, sounds, combinations, पहले शब्द।" },
  { name: "101", focus: "Matra combinations, बारहखड़ी, simple words, short sentences." },
  { name: "202", focus: "दो-भाग शब्द, phonics, spellings, medium sentences." },
  { name: "302", focus: "लंबे शब्द, digraphs, silent letters, paragraphs." },
  { name: "INTERMEDIATE", focus: "Unfamiliar words, stories, दैनिक वाक्य, comprehension." },
  { name: "ADVANCED", focus: "Newspaper, formal Hindi/English, difficult reading." },
  { name: "ULTRA READING", focus: "Technical/academic text, inference, summary." },
  { name: "FINAL READING MASTERY", focus: "Unseen material परीक्षा — Hindi + English + Roman Hindi।" },
  { name: "COMPUTER FUNDAMENTALS", focus: "Computer, hardware, software, OS, files, terminal।" },
  { name: "PROGRAMMING LOGIC", focus: "Algorithms, pseudocode, flowcharts, conditions, loops।" },
  { name: "PYTHON", focus: "Variables, data types, functions, lists, dicts, OOP।" },
  { name: "C", focus: "Pointers, memory, structs, files, compilation।" },
  { name: "C++", focus: "Classes, RAII, STL, templates, smart pointers।" },
  { name: "JAVA", focus: "OOP, interfaces, collections, streams, threads।" },
  { name: "C#", focus: "LINQ, async/await, .NET, APIs.।" },
  { name: "HTML", focus: "Structure, semantic tags, forms, accessibility।" },
  { name: "CSS", focus: "Selectors, box model, flexbox, grid, responsive।" },
  { name: "JAVASCRIPT", focus: "DOM, events, closures, promises, async/await।" },
  { name: "TYPESCRIPT", focus: "Types, interfaces, generics, narrowing।" },
  { name: "SQL", focus: "SELECT, JOIN, GROUP BY, indexes, normalization।" },
  { name: "LINUX/BASH", focus: "Terminal, permissions, pipes, scripts, SSH।" },
  { name: "GIT/GITHUB", focus: "Commits, branches, pull/push, PRs, conflicts।" },
  { name: "APIs", focus: "Requests, responses, HTTP, JSON, auth।" },
  { name: "BACKEND", focus: "Server logic, error handling, testing, deployment।" },
  { name: "DATABASES", focus: "Tables, keys, queries, transactions, optimization।" },
  { name: "DATA STRUCTURES & ALGORITHMS", focus: "Arrays, stacks, trees, graphs, sorting, recursion।" },
  { name: "SOFTWARE ENGINEERING", focus: "Clean code, modularity, testing, review।" },
  { name: "ADVANCED PROJECTS", focus: "Calculator से लेकर full applications तक।" },
  { name: "SPECIALIZATION", focus: "Web / Mobile / Data में आगे की दिशा चुनें।" },
  { name: "PROGRAMMING ULTRA", focus: "Complex systems, architecture, independence।" },
  { name: "FINAL INDEPENDENCE", focus: "कुछ भी नया → पढ़ो, समझो, खुद सीखो, सॉल्व करो।" }
];

/* ---------------- COMMAND SYSTEM (section 55) ---------------- */
var ULTRA_COMMANDS = [
  { cmd: "CONTINUE", meaning: "सबसे नई SAVE POINT से जारी रखो।" },
  { cmd: "MORE", meaning: "और examples / explanation दो।" },
  { cmd: "STOP", meaning: "आज का lesson यहीं रोको।" },
  { cmd: "REVISION", meaning: "पुराने और weak material दोहराओ।" },
  { cmd: "TEST", meaning: "छोटा test लो।" },
  { cmd: "EXAM", meaning: "बड़ा mastery test लो।" },
  { cmd: "EASY", meaning: "Difficulty कम करो।" },
  { cmd: "HARD", meaning: "Difficulty बढ़ाओ।" },
  { cmd: "REPEAT", meaning: "इसे दूसरे तरीके से समझाओ।" },
  { cmd: "WHERE AM I?", meaning: "Current course, level, mastered skills, weak areas, next target।" },
  { cmd: "START PROGRAMMING", meaning: "सिर्फ reading prerequisites मास्टर होने के बाद शुरू हो।" }
];

/* ---------------- LEARNING SYSTEM (sections 1-9, 54-59, 61) ---------------- */
var ULTRA_SYSTEM = [
  {
    emoji: "🎯", title: "UNIVERSAL BEGINNER RULE (सबसे ज़रूरी)",
    lines: [
      "हर foundation skill curriculum में हमेशा मौजूद रहती है।",
      "सिर्फ इसलिए न हटाओ क्योंकि मैं 'मुझे आता है' बोलता हूँ — पहले VERIFY करो।",
      "आता है → VERIFIED, सिर्फ ज़रूरी review दो।",
      "आधा आता है → weak parts मज़बूत करो।",
      "नहीं आता → शुरू से सिखाओ।",
      "उदाहरण: A B C D मालूम हो, पर CAT → C-A-T → CAT ना हो? तो decoding सिखाओ।",
      "जो 0 भी जानता है वही राह: A→B→C→ sounds → combinations → words → sentences → paragraphs → books।",
      "सिस्टम गति बदलती है, curriculum का अस्तित्व नहीं।"
    ]
  },
  {
    emoji: "💡", title: "CORE PHILOSOPHY",
    lines: [
      "UNDERSTANDING > MEMORIZATION (समझ > रटना)",
      "ACCURACY > SPEED (सटीकता > गति)",
      "SKILL > COMPLETION (कौशल > ख़त्म करना)",
      "PRACTICE > PASSIVE READING (अभ्यास > सिर्फ पढ़ना)",
      "UNSEEN APPLICATION > MEMORIZED EXAMPLES",
      "INDEPENDENCE > DEPENDENCE ON TUTOR",
      "\"मैंने देख लिया\" ≠ \"मैंने सीख लिया\"।",
      "Memorization को mastery से कभी मत उलझाओ।"
    ]
  },
  {
    emoji: "🔁", title: "MASTER LEARNING LOOP",
    lines: [
      "EXPLAIN → DEMONSTRATE → SMALL PRACTICE → LEARNER ANSWERS",
      "CORRECT MISTAKES → IDENTIFY WEAKNESS → REPEAT WEAK ITEMS",
      "REVISION → MASTERY TEST → REAL-WORLD APPLICATION → SAVE PROGRESS → NEXT STEP",
      "जो मास्टर नहीं हुआ, उसे मास्टर कहकर मत आगे बढ़ो।"
    ]
  },
  {
    emoji: "🩺", title: "INITIAL DIAGNOSTIC (छोटा test)",
    lines: [
      "HINDI: alphabet, अक्षर, matra, combinations, शब्द, अनजाने शब्द, वाक्य, comprehension।",
      "ENGLISH: alphabet, sounds, phonics, शब्द, अनजाने शब्द, वाक्य, comprehension।",
      "ROMAN HINDI / HINGLISH: पहचान, spelling variations, शब्द, वाक्य।",
      "GENERAL: numbers, punctuation, symbols, short instructions, real-world text।",
      "Diagnostic सिर्फ शुरुआत बताने के लिए — topics हटाने के लिए नहीं।"
    ]
  },
  {
    emoji: "📊", title: "MASTERY SCALE (हर skill ट्रैक करो)",
    lines: [
      "LEVEL 0 — Not Started",
      "LEVEL 1 — Recognizes",
      "LEVEL 2 — Understands With Help",
      "LEVEL 3 — Performs With Guidance",
      "LEVEL 4 — Performs Independently",
      "LEVEL 5 — Applies To Unfamiliar Material",
      "महत्वपूर्ण foundational skills: Level 4+ के बिना 'मास्टर' मत कहो।",
      "🟢 MASTERED · 🟡 NEEDS PRACTICE · 🔴 NOT MASTERED",
      "कभी false में master मत mark करो।"
    ]
  },
  {
    emoji: "🧩", title: "MICRO-LEARNING + TODAY'S TARGET",
    lines: [
      "शुरू में एक lesson में 2–6 items।",
      "अभ्यासी तैयार दिखे तभी मात्रा बढ़ाओ।",
      "हर lesson 'TODAY'S TARGET' से शुरू — \"आज तुम्हें ये 3 चीज़ें सीखनी हैं...\"",
      "Target छोटा और measurable रखो, कभी overwhelm मत करो।"
    ]
  },
  {
    emoji: "📅", title: "DAILY LESSON FORMAT",
    lines: [
      "DAY / LEVEL + TODAY'S TARGET",
      "1. Explanation  2. Examples  3. Small Practice",
      "4. Learner Response  5. Correction  6. Weak-Point Practice",
      "7. Revision  8. Mastery Check  9. Real-World Example  10. Save Point"
    ]
  },
  {
    emoji: "🛠️", title: "ADAPTIVE TEACHING",
    lines: [
      "स्ट्रगल हो तो वही explanation दोबारा मत दो।",
      "कोशिश करो: आसान भाषा, छोटे examples, step-by-step, तुलना, repetition।",
      "आसान exercises से wapas original difficulty तक जाओ।",
      "आगे बढ़ने वाले का: difficulty धीरे-धीरे बढ़ाओ।"
    ]
  },
  {
    emoji: "🙂", title: "NO EMBARRASSMENT RULE",
    lines: [
      "Mistakes normal हैं — कभी shame मत करो, कभी 'बेवकूफ' मत कहो।",
      "बताओ क्या गलत था, क्यों, सही तरीका, और दोबारा मौका दो।"
    ]
  },
  {
    emoji: "🤝", title: "NO FALSE PROMISES",
    lines: [
      "हर किताब/paper/भाषा आउट-ऑफ-द-बॉक्स समझ आ जाएगा — ऐसा वादा नहीं।",
      "सिखाओ: unfamiliar material पढ़ना, terminology पहचानना, context use करना।",
      "Research करना, dictionaries/references use करना, connection बनाना।",
      "मुश्किल हिस्से दोबारा पढ़ना — मज़बूत independent learning।"
    ]
  },
  {
    emoji: "🚀", title: "INDEPENDENCE TRAINING",
    lines: [
      "लक्ष्य नहीं: \"मैंने सब memorize कर लिया\"।",
      "लक्ष्य: \"नई चीज़ मिले → पढ़ूँ, समझूँ, research करूँ, टुकड़ों में तोड़ूँ, सीखूँ, सॉल्व करूँ\"।",
      "सिखाओ HOW TO LEARN — मार्गदर्शन कैसे लेना है।"
    ]
  },
  {
    emoji: "🔒", title: "RESPONSIBLE TECHNOLOGY LEARNING",
    lines: [
      "Security / reverse engineering सिर्फ शिक्षा, research, authorized testing के लिए।",
      "Malware, चोरी, बिना permission protection तोड़ना — कभी नहीं।"
    ]
  }
];

/* ---------------- READING MASTER COURSE (sections 10-29) ---------------- */
var ULTRA_READING = [
  {
    emoji: "ॐ", title: "HINDI / DEVANAGARI — COMPLETE FOUNDATION",
    lines: [
      "स्वर → व्यंजन → मात्रा → मात्रा combinations → बारहखड़ी",
      "अक्षर combinations → syllable-like reading units → simple words",
      "दो-भाग शब्द → multi-part शब्द → लंबे शब्द → अनजाने शब्द",
      "हलंत → अर्धाक्षर → संयुक्त अक्षर",
      "र combinations: र् → रेफ → रु / रू",
      "अनुस्वार → चंद्रबिंदु → विसर्ग → नुक्ता",
      "कठिन conjuncts → कठिन letter combinations → commonly confused letters",
      "सिर्फ words memorize मत कराओ — अनजाना शब्द डिकोड करना सिखाओ।"
    ]
  },
  {
    emoji: "📈", title: "HINDI WORD PROGRESSION",
    lines: [
      "letters → combinations → short words → medium words",
      "long words → difficult words → unfamiliar words → vocabulary",
      "sentences → paragraphs → stories → books",
      "newspapers → formal Hindi → advanced Hindi → technical Hindi",
      "हमेशा नए (unseen) words regularly include करो।"
    ]
  },
  {
    emoji: "🔤", title: "ENGLISH — COMPLETE READING FOUNDATION",
    lines: [
      "A B C D... से शुरुआत, अगर आता हो तो verify करके efficiently आगे।",
      "uppercase → lowercase → letter names → letter sounds",
      "vowels → consonants → phonics → sound combinations → syllables",
      "short words → long words → spelling patterns",
      "digraphs → silent letters → irregular spellings → difficult patterns",
      "उच्चारण patterns → unfamiliar words",
      "words → sentences → paragraphs → stories → books",
      "newspapers → formal → advanced → technical → academic → research-style",
      "नए शब्द को ऐसे approach करना सिखाओ, हर word memorize नहीं।"
    ]
  },
  {
    emoji: "💬", title: "ROMAN HINDI / HINGLISH",
    lines: [
      "kya / kia — hai / h — nahi / nhi / nai — main / mai",
      "raha / rha — hoon / hu",
      "Informal + shortened spelling, mixed Hindi-English",
      "WhatsApp language, casual chat, abbreviations, common slang",
      "Missing vowels, spelling mistakes, inconsistent spelling, mixed scripts",
      "Imperfect Roman Hindi भी समझना सीखो।"
    ]
  },
  {
    emoji: "🔀", title: "THREE-WAY LANGUAGE UNDERSTANDING",
    lines: [
      "Hindi → English · English → Hindi · Roman Hindi → Hindi",
      "Hindi → Roman Hindi · English → Roman Hindi · Roman Hindi → English",
      "शुरू में translation support; बाद में बिना translate किए सीधा समझ।"
    ]
  },
  {
    emoji: "📚", title: "VOCABULARY SYSTEM",
    lines: [
      "WORD → pronunciation → meaning → simple explanation",
      "example → sentence → context → related words → revision",
      "ग्रोइंग vocabulary system बनाए रखो।",
      "Difficult / repeated-missed words track करो, future revision में जोड़ो।"
    ]
  },
  {
    emoji: "🔢", title: "NUMBERS",
    lines: [
      "numbers → counting → dates → years → time → prices",
      "percentages → fractions → decimals → currency → units",
      "addresses → number sequences",
      "Hindi और English दोनों context में useful जहाँ जहाँ।"
    ]
  },
  {
    emoji: "🔣", title: "SYMBOLS AND ABBREVIATIONS",
    lines: [
      "Common symbols, signs, abbreviations, labels, units",
      "Mathematical symbols, headings, common notation",
      "उनका meaning और real-world usage समझाओ।"
    ]
  },
  {
    emoji: "✍️", title: "PUNCTUATION",
    lines: [
      ". , ? ! : ; \" ' — ( ) [ ] / %",
      "Relevant Hindi punctuation (। , ...)",
      "Punctuation कैसे बदलता है: pauses, boundaries, meaning, emphasis, structure।"
    ]
  },
  {
    emoji: "📏", title: "SENTENCE READING",
    lines: [
      "very short → short → medium → long → multi-clause",
      "complex → formal → difficult → technical → academic",
      "लंबे वाक्य छोटे meaningful parts में तोड़ना सिखाओ।"
    ]
  },
  {
    emoji: "📄", title: "PARAGRAPH READING",
    lines: [
      "sentence relationships → main idea → supporting details",
      "context → sequence → cause/effect → comparison → contrast",
      "inference → implied meaning → summary",
      "author's purpose → tone (जहाँ ज़रूरी)",
      "पढ़ने के बाद comprehension questions पूछो।"
    ]
  },
  {
    emoji: "🌍", title: "REAL-WORLD READING",
    lines: [
      "signs, menus, labels, notices, forms, bills",
      "instructions, messages, WhatsApp, websites, app screens",
      "newspapers, stories, books, documents",
      "technical documentation, academic/research-style material"
    ]
  },
  {
    emoji: "🧭", title: "UNKNOWN WORD STRATEGY",
    lines: [
      "1. break it into parts",
      "2. identify familiar letters/sounds",
      "3. identify spelling patterns",
      "4. examine surrounding words",
      "5. use context",
      "6. estimate meaning",
      "7. verify with dictionary/reference",
      "8. continue reading",
      "अंतिम लक्ष्य: independent reading।"
    ]
  },
  {
    emoji: "🎨", title: "DIFFERENT TEXT CONDITIONS",
    lines: [
      "विभिन्न fonts → sizes → bold → italic → uppercase → lowercase",
      "headings → lists → tables → mixed formatting",
      "imperfect text → typo-heavy text",
      "handwriting-like text धीरे-धीरे, शुरुआत में unnecessary hard मत बनाओ।"
    ]
  },
  {
    emoji: "💪", title: "READING STAMINA",
    lines: [
      "1 line → 2 lines → short paragraph → multiple paragraphs",
      "page → multiple pages → chapter → complete book",
      "Track: accuracy + comprehension + stamina + फिर speed",
      "Speed की ख़ातिर comprehension मत गिराओ।"
    ]
  },
  {
    emoji: "🆕", title: "UNSEEN TEXT TESTING",
    lines: [
      "Regularly बिल्कुल नए text दो — पिछले examples रटकर pass नहीं हो सकता।",
      "Test: decoding, word recognition, pronunciation, meaning, comprehension",
      "inference, summary, context",
      "Performance गिरे → underlying weak skill पकड़ो।"
    ]
  },
  {
    emoji: "🗃️", title: "PERSONAL ERROR BANK",
    lines: [
      "Hindi mistakes · English mistakes · Roman Hindi mistakes",
      "vocabulary mistakes · pronunciation confusion · spelling confusion",
      "punctuation mistakes · comprehension mistakes · long-sentence mistakes",
      "recurring confusion pairs",
      "बार-बार के mistakes को extra practice दो।"
    ]
  },
  {
    emoji: "⏳", title: "SPACED REVISION",
    lines: [
      "immediately → same session में → next lesson → कुछ lessons बाद",
      "checkpoints पर → final exams से पहले",
      "weak material ज़्यादा बार return करे।"
    ]
  },
  {
    emoji: "💾", title: "SAVE POINT",
    lines: [
      "DAY: · COURSE: · LEVEL: · CURRENT BLOCK:",
      "MASTERED: · NEEDS PRACTICE: · WEAK ITEMS:",
      "LAST COMPLETED: · NEXT STARTING POINT: · NEXT TARGET:",
      "\"CONTINUE\" → सबसे latest save point से resume, बेकार में restart नहीं।"
    ]
  },
  {
    emoji: "🎓", title: "READING FINAL EXAM",
    lines: [
      "बिल्कुल unseen material पर comprehensive परीक्षा।",
      "Hindi + English + Roman Hindi + Hinglish + WhatsApp-style text",
      "signs + notices + newspaper-style + story + book-style text",
      "difficult sentences + long paragraphs + technical + academic/research text",
      "Test: reading, understanding, context, inference, summary, unknown-word handling",
      "Reading mastery दिखे तभी programming शुरू।"
    ]
  }
];

/* ---------------- PROGRAMMING COURSE (sections 30-53) ---------------- */
var ULTRA_PROGRAMMING = [
  {
    emoji: "🖥️", title: "PROGRAMMING FOUNDATION (reading के बाद!)",
    lines: [
      "Computer → Hardware → Software → Operating System",
      "Files → Folders → Programs → Code → Programming",
      "Programming Languages → Terminal → Commands → Logic",
      "किसी Technical knowledge की assume मत करो, हर नया term आसान भाषा में।"
    ]
  },
  {
    emoji: "🧠", title: "PROGRAMMING LOGIC",
    lines: [
      "logical thinking → breaking problems into steps → algorithms",
      "pseudocode → flowcharts → conditions → loops",
      "variables → functions → decomposition → problem solving → debugging mindset"
    ]
  },
  {
    emoji: "🛣️", title: "PROGRAMMING ROADMAP",
    lines: [
      "COMPUTER FUNDAMENTALS → PROGRAMMING LOGIC → PYTHON",
      "C → C++ → JAVA → C# → HTML → CSS → JAVASCRIPT",
      "TYPESCRIPT → SQL → LINUX/BASH → GIT/GITHUB → APIs",
      "BACKEND → DATABASES → DSA → SOFTWARE ENGINEERING",
      "ADVANCED PROJECTS → SPECIALIZATION → PROGRAMMING ULTRA",
      "मज़बूत कारण हो तो order बदलो, पर foundation कभी मत हटाओ।"
    ]
  },
  {
    emoji: "🐍", title: "PYTHON",
    lines: [
      "variables → data types → input/output → operators → conditions",
      "loops → functions → strings → lists → tuples → sets → dicts",
      "modules → packages → exceptions → files → JSON → environments",
      "OOP → testing → debugging → APIs → databases",
      "async programming → architecture → larger applications"
    ]
  },
  {
    emoji: "©️", title: "C",
    lines: [
      "syntax, types, variables, conditions, loops, functions",
      "arrays, strings, pointers, memory, structs, dynamic memory",
      "files, compilation, linking, debugging",
      "data structures, algorithms, system fundamentals"
    ]
  },
  {
    emoji: "➕➕", title: "C++ (modern)",
    lines: [
      "classes, objects, references, RAII, smart pointers",
      "inheritance, polymorphism, templates, STL, lambdas",
      "exceptions, memory, concurrency, performance",
      "design patterns, architecture"
    ]
  },
  {
    emoji: "☕", title: "JAVA",
    lines: [
      "methods, classes, objects, OOP, interfaces, inheritance",
      "collections, generics, exceptions, streams, lambdas",
      "threads, concurrency, JVM concepts, testing, APIs, architecture"
    ]
  },
  {
    emoji: "🅾️", title: "C#",
    lines: [
      "methods, classes, interfaces, generics, collections, LINQ",
      "exceptions, async/await, .NET, APIs, testing, architecture"
    ]
  },
  {
    emoji: "🌐", title: "HTML",
    lines: [
      "document structure, elements, attributes",
      "semantic HTML, forms, tables, accessibility",
      "असली pages बनाओ।"
    ]
  },
  {
    emoji: "🎨", title: "CSS",
    lines: [
      "selectors, box model, layout, flexbox, grid",
      "responsive design, positioning, typography, animations",
      "असली pages बनाओ।"
    ]
  },
  {
    emoji: "⚡", title: "JAVASCRIPT",
    lines: [
      "variables, data types, functions, arrays, objects",
      "scope, closures, DOM, events, modules",
      "promises, async/await, APIs, Node.js"
    ]
  },
  {
    emoji: "📐", title: "TYPESCRIPT",
    lines: [
      "types, interfaces, type aliases, generics, unions, narrowing",
      "classes, modules, advanced types, Node.js, APIs, architecture"
    ]
  },
  {
    emoji: "🗄️", title: "SQL",
    lines: [
      "databases, tables, rows, columns, keys",
      "SELECT, INSERT, UPDATE, DELETE, WHERE",
      "JOIN, GROUP BY, ORDER BY, aggregation",
      "indexes, transactions, normalization, query optimization"
    ]
  },
  {
    emoji: "🐧", title: "LINUX / BASH",
    lines: [
      "terminal, files, directories, paths, permissions",
      "processes, environment variables, pipes, redirection",
      "shell scripting, packages, logs, SSH fundamentals",
      "Commands हमेशा पहले समझाओ, फिर use करवाओ।"
    ]
  },
  {
    emoji: "🔀", title: "GIT / GITHUB",
    lines: [
      "repositories, commits, branches, merge",
      "clone, pull, push, remotes, pull requests",
      "conflicts, tags, releases, practical workflows"
    ]
  },
  {
    emoji: "🔌", title: "APIs / BACKEND / DATABASES",
    lines: [
      "API क्या है → requests → responses → HTTP basics → JSON",
      "authentication concepts → API integration",
      "backend fundamentals → databases → server-side programming",
      "error handling → testing → deployment concepts"
    ]
  },
  {
    emoji: "🧮", title: "DATA STRUCTURES & ALGORITHMS",
    lines: [
      "arrays, strings, linked lists, stacks, queues, hash tables",
      "trees, heaps, graphs",
      "searching, sorting, recursion, dynamic programming",
      "greedy algorithms, graph algorithms, complexity"
    ]
  },
  {
    emoji: "📖", title: "CODE READING",
    lines: [
      "CODE → READ → EXPLAIN → PREDICT OUTPUT",
      "FIND PROBLEM → MODIFY → TEST",
      "तेज़ी से unfamiliar code दिखाओ — दूसरों का कोड समझना ज़रूरी।"
    ]
  },
  {
    emoji: "🐞", title: "DEBUGGING",
    lines: [
      "ERROR → LOCATION → HYPOTHESIS → TEST → FIX → VERIFY",
      "syntax errors, runtime errors, logic errors",
      "dependency errors, configuration errors, build errors, environment errors"
    ]
  },
  {
    emoji: "🏗️", title: "PROJECT-BASED LEARNING",
    lines: [
      "1. tiny exercises  2. calculator  3. guessing game",
      "4. small text app  5. file app  6. database app",
      "7. API app  8. web app  9. multi-file app",
      "10. full project  11. independent original project",
      "Foundation से पहले complexity मत बनाओ।"
    ]
  },
  {
    emoji: "🧪", title: "PROGRAMMING MASTERY TESTS",
    lines: [
      "हर major stage पर: concepts, code reading, code writing",
      "debugging, problem solving, unfamiliar problems, project work",
      "एक बार copy करने भर से mastery नहीं।"
    ]
  },
  {
    emoji: "💼", title: "PROFESSIONAL SOFTWARE SKILLS",
    lines: [
      "clean code, modularity, architecture, documentation",
      "testing, code review, dependency management, performance",
      "maintainability, security fundamentals, project organization, version control"
    ]
  },
  {
    emoji: "🏁", title: "FINAL PROGRAMMING EXAM",
    lines: [
      "बिल्कुल unfamiliar problems दो।",
      "Test: logic, coding, debugging, code reading",
      "algorithms, databases, APIs, Git, Linux",
      "architecture, software design, project work",
      "लक्ष्य: independent problem solving।"
    ]
  }
];

/* ---------------- isolated CSS ---------------- */
function uCss() {
  if (!document.getElementById("ultra-css")) {
    var s = document.createElement("style");
    s.id = "ultra-css";
    s.textContent = [
      ".ultra-top{display:flex;align-items:center;gap:10px;margin:6px 4px 4px}",
      ".u-back{background:#6a1b9a;color:#fff;border:none;border-radius:12px;padding:10px 16px;font-size:15px;font-weight:600;cursor:pointer}",
      ".u-back:active{transform:scale(.96)}",
      ".u-hero{background:linear-gradient(135deg,#6a1b9a,#9c27b0 55%,#ffb300);color:#fff;border-radius:18px;padding:20px 16px;margin:0 12px 14px;box-shadow:0 6px 18px rgba(106,27,154,.35)}",
      ".u-hero h2{font-size:22px;letter-spacing:.5px}",
      ".u-hero p{font-size:13px;opacity:.95;margin-top:6px}",
      ".u-hero .u-hint{margin-top:12px;font-size:12.5px;background:rgba(255,255,255,.16);border-radius:10px;padding:8px 10px;display:inline-block}",
      ".u-sec{display:flex;align-items:center;gap:8px;font-size:16px;font-weight:700;margin:6px 16px 10px;color:#4a148c}",
      ".u-card{background:#fff;border:1px solid #eadcf7;border-radius:16px;margin:0 12px 12px;overflow:hidden}",
      ".u-card .u-head{padding:13px 14px;background:#faf5ff;border-bottom:1px solid #eadcf7;display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:700;font-size:14.5px;color:#4a148c}",
      ".u-card .u-head .u-arr{flex:0 0 auto;color:#9c27b0}",
      ".u-card .u-body{display:none;padding:6px 6px 8px}",
      ".u-card.open .u-body{display:block}",
      ".u-line{padding:10px 12px;border-radius:10px;cursor:pointer;border-bottom:1px dotted #f0e6fa;font-size:14px;line-height:1.45}",
      ".u-line:last-child{border-bottom:none}",
      ".u-line:active{background:#f3e7ff}",
      ".u-line.sel{background:var(--gold,#FFD54F)}",
      ".u-stage{display:flex;align-items:center;gap:10px;padding:12px 12px;border-bottom:1px solid #eadcf7;cursor:pointer;border-radius:0}",
      ".u-stage:active{background:#f3e7ff}",
      ".u-stage.sel{background:var(--gold,#FFD54F)}",
      ".u-stage .u-sno{flex:0 0 auto;width:30px;height:30px;border-radius:50%;background:#6a1b9a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}",
      ".u-stage .u-stext{min-width:0;flex:1}",
      ".u-stage .u-sname{font-size:15px;font-weight:700;color:#2c1438}",
      ".u-stage .u-sfocus{font-size:12px;color:#7a6a88;margin-top:2px}",
      ".u-chip{display:inline-block;margin:4px;padding:9px 13px;border-radius:30px;background:#f3e7ff;border:1px solid #d9b9f2;font-size:13px;font-weight:600;color:#4a148c;cursor:pointer;user-select:none}",
      ".u-chip:active{background:#e6ccff;transform:scale(.96)}",
      ".u-chip.sel{background:var(--gold,#FFD54F)}",
      ".u-btn{background:#6a1b9a;color:#fff;border:none;border-radius:12px;padding:11px 15px;font-size:14px;font-weight:700;cursor:pointer}",
      ".u-btn:active{transform:scale(.96)}",
      ".u-btn.gold{background:#ffb300;color:#3a2700}",
      ".u-inlineflex{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;padding:10px 12px}",
      ".u-status{flex:0 0 auto;font-size:20px;border:none;background:none;cursor:pointer;padding:2px 6px;border-radius:8px}",
      ".u-status:active{transform:scale(1.2)}",
      ".u-note{margin:0 14px 12px;padding:12px 14px;border-radius:12px;background:#fff8e1;border:1px dashed #e6c35c;font-size:12.5px;color:#6d5a0e;line-height:1.5}",
      ".u-savebox{margin:0 12px 12px;padding:14px;border-radius:14px;background:#263238;color:#cfd8dc;font-size:13px;line-height:1.7;white-space:pre-line;border:1px solid #37474f}",
      ".u-savebox b{color:#ffd54f}",
      ".u-tiny{font-size:11.5px;color:#8a7a99;margin:0 14px 6px}"
    ].join("\n");
    document.head.appendChild(s);
  }
}

/* ---------------- local progress helpers ---------------- */
function uGet(k, d) {
  try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; }
}
function uSet(k, v) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
}
function uStatus(i) { return uGet("ultra_status_" + i, 0); } // 0=🔴 1=🟡 2=🟢
function uSavePoint() { return uGet("ultra_savepoint", { idx: 0, day: 1 }); }

/* ---------------- renderers ---------------- */
function uCard(title, emoji, lines) {
  var card = document.createElement("div");
  card.className = "u-card";
  var head = document.createElement("div");
  head.className = "u-head";
  head.innerHTML = '<span>' + emot(emoji) + ' ' + escUU(title) + '</span><span class="u-arr">▼</span>';
  var body = document.createElement("div");
  body.className = "u-body";
  (lines || []).forEach(function (txt) {
    var l = document.createElement("div");
    l.className = "u-line";
    l.textContent = txt;
    l.addEventListener("click", function () {
      sel(l, txt);
    });
    body.appendChild(l);
  });
  card.appendChild(head);
  card.appendChild(body);
  head.addEventListener("click", function () {
    card.classList.toggle("open");
    head.querySelector(".u-arr").textContent = card.classList.contains("open") ? "▲" : "▼";
    sel(head, title + " — " + emoji);
  });
  return card;
}

function emot(e) { return e || "📌"; }

function escUU(s) {
  return (typeof esc === "function") ? esc(s) : String(s == null ? "" : s);
}

function uStageRow(stage, i) {
  var num = i + 1;
  var sp = uGet("ultra_savepoint", { idx: 0, day: 1 });
  var sty = i === sp.idx ? 2 : uStatus(i);
  var mark = ["🔴", "🟡", "🟢"][sty];
  var row = document.createElement("div");
  row.className = "u-stage" + (sty === 2 ? " done" : "");
  row.innerHTML =
    '<div class="u-sno">' + num + '</div>' +
    '<div class="u-stext">' +
      '<div class="u-sname">' + escUU(stage.name) + (sty === 2 ? ' ✅' : '') + '</div>' +
      '<div class="u-sfocus">' + escUU(stage.focus) + '</div>' +
    '</div>' +
    '<button class="u-status">' + mark + '</button>';
  row.querySelector(".u-sno").style.background = (sty === 2 ? "#2e7d32" : "#6a1b9a");
  row.addEventListener("click", function (ev) {
    if (ev.target.className === "u-status") return;
    sel(row, "चरण " + num + ". " + stage.name + "। " + stage.focus);
  });
  row.querySelector(".u-status").addEventListener("click", function (ev) {
    ev.stopPropagation();
    var next = (uStatus(i) + 1) % 3;
    uSet("ultra_status_" + i, next);
    row.querySelector(".u-status").textContent = ["🔴", "🟡", "🟢"][next];
    row.querySelector(".u-sno").style.background = (next === 2 ? "#2e7d32" : "#6a1b9a");
    var nm = ["NOT MASTERED", "NEEDS PRACTICE", "MASTERED"][next];
    toast("🟡 " + stage.name + " → " + nm);
    if (next === 2) {
      speak(stage.name + " मास्टर्ड!");
    }
  });
  return row;
}

function uSectionLabel(txt) {
  var d = document.createElement("div");
  d.className = "u-sec";
  d.textContent = txt;
  return d;
}

/* ---------------- MAIN VIEW ---------------- */
function renderUltra() {
  uCss();
  window.scrollTo(0, 0);
  var sp = uSavePoint();
  var current = ULTRA_PATH[Math.min(sp.idx, ULTRA_PATH.length - 1)];

  var html =
    '<div class="ultra-top">' +
      '<button class="u-back" id="uBack">← होम</button>' +
      '<span style="flex:1"></span>' +
    '</div>' +
    '<div class="u-hero">' +
      '<h2>🚀 ' + ULTRA_TITLE + '</h2>' +
      '<p>' + ULTRA_SUBTITLE + '</p>' +
      '<p>ABSOLUTE ZERO → BASIC → 101 → 202 → 302 → INTERMEDIATE → ADVANCED → ULTRA → PROGRAMMING</p>' +
      '<span class="u-hint">🔊 किसी भी item पर टैप करें — रंग highlight और आवाज़ दोनों।</span>' +
    '</div>';
  APP.innerHTML = html;

  document.getElementById("uBack").addEventListener("click", renderHome);

  var wrap = document.createElement("div");
  APP.appendChild(wrap);

  /* TODAY'S TARGET */
  var tgt = uCard("आज का TARGET (TODAY'S TARGET)", "🎯", [
    "आज का दिन: DAY " + (sp.day || 1),
    "स्टेज: " + current.name,
    "फोकस: " + current.focus,
    "सिर्फ 2–6 छोटी चीज़ें — बड़ा Lesson नहीं, मापने लायक लक्ष्य।",
    "मिल गया तो: अगले चरण पर जाओ; नहीं मिला तो: यहीं RIVISION करो।"
  ]);
  wrap.appendChild(tgt);

  var tgtBtns = document.createElement("div");
  tgtBtns.className = "u-inlineflex";
  var btnCont = document.createElement("button");
  btnCont.className = "u-btn";
  btnCont.textContent = "▶ CONTINUE";
  btnCont.addEventListener("click", function () {
    var nxt = sp.idx;
    while (nxt < ULTRA_PATH.length && uStatus(nxt) === 2) nxt++;
    var go = ULTRA_PATH[Math.min(nxt, ULTRA_PATH.length - 1)];
    uSet("ultra_savepoint", { idx: nxt, day: (sp.day || 1) });
    toast("▶ CONTINUE → " + go.name);
    speak("TODAY'S TARGET: " + go.name + "। " + go.focus);
    var rows = document.querySelectorAll(".u-stage");
    if (rows[nxt]) rows[nxt].scrollIntoView({ behavior: "smooth", block: "center" });
  });
  var btnSave = document.createElement("button");
  btnSave.className = "u-btn gold";
  btnSave.textContent = "💾 SAVE POINT";
  btnSave.addEventListener("click", function () {
    uSet("ultra_savepoint", { idx: sp.idx, day: (sp.day || 1) + 1 });
    toast("💾 DAY " + (sp.day + 1) + " से Save — CONTINUE से resume करो");
  });
  tgtBtns.appendChild(btnCont);
  tgtBtns.appendChild(btnSave);
  wrap.appendChild(tgtBtns);

  var note = document.createElement("div");
  note.className = "u-note";
  note.textContent = "दिन की शुरुआत CONTINUE से करो, दिन के अंत में SAVE POINT। 🔴=नहीं मास्टर · 🟡=अभ्यास चाहिए · 🟢=मास्टर्ड";
  wrap.appendChild(note);

  /* MASTER PATH */
  wrap.appendChild(uSectionLabel("🧭 MASTER PATH — पूरी यात्रा"));
  var pathCard = document.createElement("div");
  pathCard.className = "u-card";
  var pathBody = document.createElement("div");
  pathBody.className = "u-body";
  pathBody.style.display = "block";
  ULTRA_PATH.forEach(function (st, i) {
    pathBody.appendChild(uStageRow(st, i));
  });
  pathCard.appendChild(pathBody);
  wrap.appendChild(pathCard);

  /* COMMAND SYSTEM */
  wrap.appendChild(uSectionLabel("📣 COMMAND SYSTEM — बोलो और सुने"));
  var cmdCard = document.createElement("div");
  cmdCard.className = "u-card";
  var cmdBody = document.createElement("div");
  cmdBody.className = "u-body";
  cmdBody.style.display = "block";
  var chipRow = document.createElement("div");
  chipRow.className = "u-inlineflex";
  ULTRA_COMMANDS.forEach(function (c) {
    var chip = document.createElement("span");
    chip.className = "u-chip";
    chip.textContent = "⚡ " + c.cmd;
    chip.addEventListener("click", function () {
      sel(chip, c.cmd + "। " + c.meaning);
    });
    chipRow.appendChild(chip);
  });
  cmdBody.appendChild(chipRow);
  cmdCard.appendChild(cmdBody);
  wrap.appendChild(cmdCard);

  /* LEARNING SYSTEM */
  wrap.appendChild(uSectionLabel("🧩 LEARNING SYSTEM — नियम और दायरा"));
  ULTRA_SYSTEM.forEach(function (g) {
    wrap.appendChild(uCard(g.title, g.emoji, g.lines));
  });

  /* READING MASTER COURSE */
  wrap.appendChild(uSectionLabel("📖 READING MASTER COURSE — पढ़ने की पूरी मास्टरी"));
  ULTRA_READING.forEach(function (g) {
    wrap.appendChild(uCard(g.title, g.emoji, g.lines));
  });

  /* PROGRAMMING COURSE */
  wrap.appendChild(uSectionLabel("💻 PROGRAMMING COURSE — reading के बाद"));
  ULTRA_PROGRAMMING.forEach(function (g) {
    wrap.appendChild(uCard(g.title, g.emoji, g.lines));
  });

  /* SAVE POINT visor */
  wrap.appendChild(uSectionLabel("💾 मेरी SAVE POINT"));
  var sv = document.createElement("div");
  sv.className = "u-savebox";
  sv.textContent =
    "DAY: " + (sp.day || 1) +
    "\nCOURSE: Basic to Ultra (Reading → Programming)" +
    "\nLEVEL: " + current.name +
    "\nCURRENT BLOCK: " + num0(sp.idx + 1) + " / " + ULTRA_PATH.length +
    "\nMASTERED (🟢): " + countSt(2) +
    "\nNEEDS PRACTICE (🟡): " + countSt(1) +
    "\nNOT MASTERED (🔴): " + countSt(0) +
    "\nLAST COMPLETED: " + (sp.idx > 0 ? ULTRA_PATH[sp.idx - 1].name : "—") +
    "\nNEXT STARTING POINT: " + current.name +
    "\nNEXT TARGET: " + current.focus;
  wrap.appendChild(sv);

  /* FINAL note */
  var fin = document.createElement("div");
  fin.className = "u-note";
  fin.textContent = "सबसे ज़रूरी नियम: NEVER SKIP A FOUNDATION। VERIFY → REINFORCE → TEACH। जो 0 जानता है और जो ABCD जानता है — दोनों के लिए एक ही curriculum, गति अलग। Reading mastery से पहले PROGRAMMING नहीं।";
  wrap.appendChild(fin);
}

function num0(n) { return n < 10 ? "0" + n : "" + n; }
function countSt(st) {
  var n = 0;
  ULTRA_PATH.forEach(function (_, i) { if (uStatus(i) === st) n++; });
  return n;
}

/* Called from renderHome to add the home entry. */
function uHomeCard() {
  uCss();
  if (!document.getElementById("u-home-css")) {
    var st = document.createElement("style");
    st.id = "u-home-css";
    st.textContent = ".u-home-ultra{display:flex;align-items:center;gap:12px;margin:0 12px 14px;padding:16px;border-radius:16px;background:linear-gradient(135deg,#6a1b9a,#9c27b0 55%,#ffb300);cursor:pointer;box-shadow:0 6px 18px rgba(106,27,154,.3)}.u-home-ultra:active{transform:scale(.98)}";
    document.head.appendChild(st);
  }
  var d = document.createElement("div");
  d.className = "u-home-ultra";
  d.innerHTML =
    '<div style="font-size:26px">🚀</div>' +
    '<div style="flex:1;min-width:0">' +
      '<div style="font-weight:800;font-size:16px;color:#fff">Basic to Ultra</div>' +
      '<div style="font-size:12px;color:#f3e7ff;margin-top:3px">FINAL MASTER SYSTEM — Zero से Programming Ultra तक</div>' +
    '</div>' +
    '<div style="flex:0 0 auto;background:rgba(255,255,255,.2);border-radius:30px;padding:6px 12px;font-size:13px;color:#fff">खोलें ▶</div>';
  d.addEventListener("click", renderUltra);
  return d;
}