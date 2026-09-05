/* =====================================================================
   A2Z MASTER — "Basic to Ultra" ISOLATED SECTION
   CONTENT: actual learning lessons only (Hindi, English, Hinglish,
   Real-world text, Programming basics & tracks).
   Self-contained: own data + own renderer + own isolated CSS.
   Reuses only the global helpers speak() / sel() / esc() / toast().
   ===================================================================== */

var ULTRA_TITLE = "Basic to Ultra";
var ULTRA_SUBTITLE = "Absolute Zero से Programming Ultra तक — Reading फिर Programming";

/* ---------------- MASTER PATH (curriculum stages) ---------------- */
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
  { name: "C++", focus: "Classes, references, STL, templates, streams।" },
  { name: "WEB (HTML · CSS · JS)", focus: "Structure, styling, interactivity — real pages।" },
  { name: "DATABASES", focus: "Tables, keys, queries, transactions।" },
  { name: "GIT/GITHUB", focus: "Commits, branches, pull/push, PRs।" },
  { name: "DATA STRUCTURES & ALGORITHMS", focus: "Arrays, stacks, trees, sorting, recursion।" },
  { name: "SOFTWARE ENGINEERING", focus: "Clean code, modularity, testing, review।" },
  { name: "ADVANCED PROJECTS", focus: "Calculator से लेकर full applications तक।" },
  { name: "SPECIALIZATION", focus: "Web / App / Data में आगे की दिशा चुनें।" },
  { name: "PROGRAMMING ULTRA", focus: "Complex systems, architecture, independence।" },
  { name: "FINAL INDEPENDENCE", focus: "कुछ भी नया → पढ़ो, समझो, खुद सीखो, सॉल्व करो।" }
];

/* ---------------- HINDI FOUNDATION (स्वर · व्यंजन · मात्रा · बारहखड़ी) ---------------- */
var ULTRA_SYSTEM = [
  {
    emoji: "🔤", title: "स्वर (Vowels)",
    lines: [
      "अ (a) — अनार",
      "आ (aa) — आम",
      "इ (i) — इमली",
      "ई (ee) — ईख",
      "उ (u) — उल्लू",
      "ऊ (oo) — ऊन",
      "ए (e) — एक, एड़ी",
      "ऐ (ai) — ऐनक",
      "ओ (o) — ओखली",
      "औ (au) — औरत",
      "अं (an) — अंगूर",
      "अः (ah) — दुःख, प्रातः"
    ]
  },
  {
    emoji: "🗣️", title: "व्यंजन (Consonants)",
    lines: [
      "क वर्ग: क, ख, ग, घ, ङ",
      "च वर्ग: च, छ, ज, झ, ञ",
      "ट वर्ग: ट, ठ, ड, ढ, ण",
      "त वर्ग: त, थ, द, ध, न",
      "प वर्ग: प, फ, ब, भ, म",
      "अंतिम: य, र, ल, व, श, ष, स, ह",
      "संयुक्त: क्ष, त्र, ज्ञ",
      "र varients: र्, रेफ (प्र), हलंत रखो।"
    ]
  },
  {
    emoji: "〰️", title: "मात्रा (Matras)",
    lines: [
      "ा (कार) — का, रा, मा — काम",
      "ि (िकार) — कि, मि — मिल",
      "ी (ीकार) — की, खी — खीर",
      "ु (ुकार) — कु, गु — गुलाब",
      "ू (ूकार) — कू, दू — दूध",
      "े (ेकार) — के, से — केला",
      "ै (ैकार) — कै, भै — कैसा",
      "ो (ोकार) — को, मो — मोर",
      "ौ (ौकार) — कौ, गौ — कौआ",
      "् (हलंत) — क् हटाता है आवाज़",
      "ं (अनुस्वार) — और ँ (चंद्रबिंदु)",
      "ः (विसर्ग) — दुःख, नमः"
    ]
  },
  {
    emoji: "📏", title: "बारहखड़ी (Barakhadi)",
    lines: [
      "क — कलम",
      "का — काम",
      "कि — किसान",
      "की — कीमत",
      "कु — कुर्सी",
      "कू — कूदना",
      "के — केला",
      "कै — कैसा",
      "को — कोयला",
      "कौ — कौआ",
      "कं — कंघी",
      "कः — दुःख में"
    ]
  },
  {
    emoji: "✏️", title: "सरल शब्द पढ़ना (Reading)",
    lines: [
      "कमल — फूल का नाम",
      "जल — पानी",
      "फल — खाने को",
      "गमला — पौधे का घर",
      "मछली — तैरती है",
      "तितली — उड़ती है",
      "बंदर — कूदता है",
      "खरगोश — दौड़ता है",
      "रात — दिन के बाद",
      "शाम — सूरज ढलने का समय"
    ]
  }
];

/* ---------------- ENGLISH + HINGLISH + REAL-WORLD ---------------- */
var ULTRA_READING = [
  {
    emoji: "🔠", title: "PHONICS — Letter Sounds (A–Z)",
    lines: [
      "A — अ — Apple",
      "B — ब — Ball",
      "C — क — Cat",
      "D — द — Dog",
      "E — ए — Egg",
      "F — फ — Fish",
      "G — ग — Goat",
      "H — ह — Hat",
      "I — इ — Ink",
      "J — ज — Jug",
      "K — क — Kite",
      "L — ल — Lion",
      "M — म — Monkey",
      "N — न — Nest",
      "O — ओ — Orange",
      "P — प — Pen",
      "Q — क्व — Queen",
      "R — र — Rabbit",
      "S — स — Sun",
      "T — ट — Tiger",
      "U — अ — Umbrella",
      "V — व — Van",
      "W — व — Watch",
      "X — क्स — Box",
      "Y — य — Yoyo",
      "Z — ज़ — Zebra"
    ]
  },
  {
    emoji: "🧩", title: "3-LETTER DECODING (C–A–T = CAT)",
    lines: [
      "C-A-T = CAT — बिल्ली",
      "D-O-G = DOG — कुत्ता",
      "S-U-N = SUN — सूरज",
      "B-U-S = BUS — बस",
      "C-U-P = CUP — कप",
      "P-I-G = PIG — सुअर",
      "H-E-N = HEN — मुर्गी",
      "B-O-X = BOX — डिब्बा",
      "F-O-X = FOX — लोमड़ी",
      "J-A-R = JAR — जार",
      "R-U-N = RUN — दौड़ना",
      "S-I-T = SIT — बैठना",
      "T-O-P = TOP — ऊपर",
      "B-E-D = BED — बिस्तर",
      "M-A-P = MAP — नक्शा"
    ]
  },
  {
    emoji: "🔊", title: "Vowels & Consonants",
    lines: [
      "Vowels: A, E, I, O, U",
      "Consonants: B C D F G H J K L M N P Q R S T V W X Y Z",
      "CAT में: C और T consonants, A vowel",
      "DOG में: D और G consonants, O vowel",
      "हर शब्द में कम से कम एक vowel होता है",
      "शब्द को टुकड़ों में तोड़ो: C-AT, D-OG"
    ]
  },
  {
    emoji: "💬", title: "ROMAN HINDI / HINGLISH",
    lines: [
      "kya / kia = क्या",
      "hai / h = है",
      "nahi / nhi / nai = नहीं",
      "main / mai = मैं",
      "raha / rha = रहा",
      "hoon / hu = हूँ",
      "kyun / kyu = क्यों",
      "kahan / kaha = कहाँ",
      "mujhe / muje = मुझे",
      "chalo / chelo = चलो"
    ]
  },
  {
    emoji: "🗨️", title: "हिंग्लिश वाक्य (Real Hinglish)",
    lines: [
      "Main kal market jaa raha hoon",
      "Tum kya khana pasand karte ho?",
      "Yeh kitne ka hai?",
      "Mujhe thoda paani chahiye",
      "Hum sab school chalte hain",
      "Aap kahan se aaye hain?",
      "Bas ek minute, main aa raha hoon",
      "Bahut accha laga milke tumse",
      "Subah jaldi uthta hoon",
      "Raat ko jaldi so jata hoon"
    ]
  },
  {
    emoji: "🌍", title: "REAL-WORLD READING (दुनिया का पढ़ना)",
    lines: [
      "Sign: STOP — रुको",
      "Sign: EXIT — बाहर निकलो",
      "Sign: PUSH — धकेलो",
      "Sign: PULL — खींचो",
      "Notice: NO PARKING — गाड़ी मत लगाओ",
      "Menu: Chai ₹10, Samosa ₹15, Poha ₹20",
      "Notice: School closed on Friday",
      "WhatsApp: kal milte hain",
      "WhatsApp: ok bhai, done",
      "Label: Use before expiry date",
      "किराना: दाल ₹120/kg, चावल ₹45/kg",
      "Timetable: 6 AM उठो, 7 AM पढ़ो"
    ]
  }
];

/* ---------------- PROGRAMMING (Logic · Python · C++ · Web) ---------------- */
var ULTRA_PROGRAMMING = [
  {
    emoji: "🧱", title: "PROGRAMMING LOGIC — आधार",
    lines: [
      "Computer: input → processing → output",
      "Algorithm: कदम-दर-कदम योजना",
      "Pseudocode: आसान भाषा में plan",
      "Variable: data रखने का नाम वाला बॉक्स",
      "Condition: if / else — अगर, वरना",
      "Loop: for / while — दोहराना",
      "Function: बार-बार इस्तेमाल करने वाला block",
      "Debugging: error ढूंढ़ना और ठीक करना"
    ]
  },
  {
    emoji: "🐍", title: "PYTHON TRACK",
    lines: [
      "print('Hello') — screen पर लिखो",
      "name = 'A2Z' — variable बनाओ",
      "x = 5 + 3 — calculation",
      "if x > 3: — condition",
      "for i in range(5): — loop",
      "def add(a, b): return a + b — function",
      "list1 = [1, 2, 3] — collection",
      "print(name + x) — जोड़ो और दिखाओ"
    ]
  },
  {
    emoji: "➕➕", title: "C++ TRACK",
    lines: [
      "#include <iostream> — library",
      "int main() { } — शुरुआत की जगह",
      "cout << 'Hello'; — print",
      "int x = 5; — variable",
      "if (x > 3) { } — condition",
      "for (int i = 0; i < 5; i++) — loop",
      "void greet() { } — function",
      "return 0; — सफल खत्म होना"
    ]
  },
  {
    emoji: "🌐", title: "WEB TRACK (HTML · CSS · JS)",
    lines: [
      "HTML — हड्डी: <h1>, <p>, <button>",
      "CSS — सजावट: रंग, size, layout",
      "JavaScript — हरकत: click, interact",
      "<h1>Hello</h1> — बड़ा शीर्षक",
      "<p>Yeh paragraph hai</p> — अनुच्छेद",
      "<button>Click</button> — बटन",
      "जोड़ो: heading → text → button → click करो",
      "असली page बनाकर सीखो"
    ]
  },
  {
    emoji: "🗺️", title: "PROGRAMMING ROADMAP",
    lines: [
      "Step 1: Computer + Logic",
      "Step 2: Python",
      "Step 3: C++",
      "Step 4: Web (HTML, CSS, JS)",
      "Step 5: Databases + Git/GitHub",
      "Step 6: Algorithms + Projects",
      "ट्रैक चुनो: Web Dev / App Dev / Data",
      "हर दिन एक छोटा program लिखो"
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
      '<span class="u-hint">🔊 किसी भी अक्षर, शब्द या topic पर टैप करें — आवाज़ सुनें।</span>' +
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
    "सिर्फ 2–6 छोटी चीज़ें — बड़ा Lesson नहीं।",
    "मिल गया तो: अगले चरण पर जाओ; नहीं मिला तो: वही दोहराओ।"
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

  /* HINDI FOUNDATION */
  wrap.appendChild(uSectionLabel("🔤 हिंदी फाउंडेशन — स्वर · व्यंजन · मात्रा · बारहखड़ी"));
  ULTRA_SYSTEM.forEach(function (g) {
    wrap.appendChild(uCard(g.title, g.emoji, g.lines));
  });

  /* ENGLISH + HINGLISH + REAL-WORLD */
  wrap.appendChild(uSectionLabel("🇬🇧 इंग्लिश फाउंडेशन — Phonics · Letter Sounds · 3-Letter Decoding"));
  ULTRA_READING.forEach(function (g) {
    wrap.appendChild(uCard(g.title, g.emoji, g.lines));
  });

  /* PROGRAMMING */
  wrap.appendChild(uSectionLabel("💻 प्रोग्रामिंग — Logic · Python · C++ · Web"));
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
  fin.textContent = "अगला कदम: आज का target पूरा करो → SAVE POINT → CONTINUE। धीरे-धीरे, हर दिन छोटा अभ्यास — बड़ी प्रगति।";
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
      '<div style="font-size:12px;color:#f3e7ff;margin-top:3px">Reading फिर Programming — Zero से Ultra तक</div>' +
    '</div>' +
    '<div style="flex:0 0 auto;background:rgba(255,255,255,.2);border-radius:30px;padding:6px 12px;font-size:13px;color:#fff">खोलें ▶</div>';
  d.addEventListener("click", renderUltra);
  return d;
}