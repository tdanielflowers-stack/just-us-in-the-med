// ============================================================
// JUST US IN THE MED — Trip Data
// This is the one file you edit to update the whole app.
// ============================================================

export const tripMeta = {
  title: "Just Us in the Med",
  tagline: "September 2026 — the whole crew, the Mediterranean, and a lot of gelato.",
  departureDate: "2026-09-03T15:40:00", // Group B departure — first person leaving Raleigh
  embarkDate: "2026-09-06T17:00:00",    // Norwegian Gem sails
  returnDate: "2026-09-14T23:59:00",    // Last flight home
  ship: "Norwegian Gem",
  cruiseLine: "Norwegian Cruise Line",
};

export const crew = [
  { id: 1,  name: "Daniel",   role: "Trip coordinator 🗺️",  stateroom: "9570", deck: 9,  confirmation: "64263416", color: "terra" },
  { id: 2,  name: "Becca",    role: "",               stateroom: "9570", deck: 9,  confirmation: "64263416", color: "terra" },
  { id: 3,  name: "Tom",      role: "",        stateroom: "8556", deck: 8,  confirmation: "64263370", color: "navy" },
  { id: 4,  name: "Joannie",  role: "Chief planner 📋",      stateroom: "8556", deck: 8,  confirmation: "64263370", color: "navy" },
  { id: 5,  name: "Nicholas", role: "",                         stateroom: "8064", deck: 8,  confirmation: "64263297", color: "aegean" },
  { id: 6,  name: "Tonya",    role: "",             stateroom: "8064", deck: 8,  confirmation: "64263297", color: "aegean" },
  { id: 7,  name: "Ryan",     role: "",                         stateroom: "8080", deck: 8,  confirmation: "64263307", color: "gold" },
  { id: 8,  name: "Candace",  role: "",           stateroom: "8080", deck: 8,  confirmation: "64263307", color: "gold" },
  { id: 9,  name: "Kimberly", role: "",     stateroom: "9650", deck: 9,  confirmation: "64263379", color: "green" },
  { id: 10, name: "Lora",     role: "",                      stateroom: "9650", deck: 9,  confirmation: "64263379", color: "green" },
  { id: 11, name: "Brandon",  role: "",                      stateroom: "9650", deck: 9,  confirmation: "64263379", color: "green" },
];

export const staterooms = [
  { room: "9570", deck: 9, occupants: ["Daniel", "Becca"],             confirmation: "64263416" },
  { room: "8556", deck: 8, occupants: ["Tom", "Joannie"],              confirmation: "64263370" },
  { room: "8064", deck: 8, occupants: ["Nicholas", "Tonya"],           confirmation: "64263297" },
  { room: "8080", deck: 8, occupants: ["Ryan", "Candace"],             confirmation: "64263307" },
  { room: "9650", deck: 9, occupants: ["Kimberly", "Lora", "Brandon"], confirmation: "64263379" },
];

// ============================================================
// TRAVEL — Flights, trains, hotels
// ============================================================

export const travelGroups = [
  {
    id: "group-b",
    label: "Group B",
    who: "Tom, Joannie, Nicholas, Tonya, Ryan, Candace, Kimberly, Lora & Brandon",
    color: "terra",
    legs: [
      {
        type: "flight",
        label: "Raleigh → Frankfurt",
        carrier: "Lufthansa (UA9505)",
        from: "RDU", to: "FRA",
        departs: "Thu Sep 3, 3:40 PM",
        arrives: "Fri Sep 4, 5:55 AM CEST",
        note: "Check in at the Lufthansa ticket counter at RDU",
      },
      {
        type: "flight",
        label: "Frankfurt → Rome",
        carrier: "United (UA8800)",
        from: "FRA", to: "FCO",
        departs: "Fri Sep 4, 7:15 AM",
        arrives: "Fri Sep 4, 9:05 AM CEST",
        note: "1h 20min layover in Frankfurt",
      },
      {
        type: "hotel",
        label: "Rome · Best Western Artdeco",
        address: "Via Palestro 19, Rome",
        checkin: "Fri Sep 4 (flexible — luggage storage available)",
        checkout: "Sun Sep 6, morning",
        phone: "+39 06 4457588",
      },
    ],
  },
  {
    id: "group-a",
    label: "Daniel & Becca",
    who: "Daniel & Becca",
    color: "aegean",
    legs: [
      {
        type: "flight",
        label: "Raleigh → Boston",
        carrier: "JetBlue 1484",
        from: "RDU", to: "BOS",
        departs: "Fri Sep 4, 6:00 AM",
        arrives: "Fri Sep 4, 7:59 AM EDT",
        note: "Terminal 2",
      },
      {
        type: "flight",
        label: "Boston → Rome",
        carrier: "ITA Airways 615",
        from: "BOS", to: "FCO",
        departs: "Fri Sep 4, 5:05 PM EDT",
        arrives: "Sat Sep 5, 7:05 AM CEST",
        note: "Overnight flight",
      },
      {
        type: "hotel",
        label: "Rome · Best Western Artdeco",
        address: "Via Palestro 19, Rome",
        checkin: "Sat Sep 5, 2:00 PM",
        checkout: "Sun Sep 6, morning",
        phone: "+39 06 4457588",
      },
    ],
  },
  {
    id: "rome-to-ship",
    label: "Everyone · Rome → Ship",
    who: "All 11 travelers",
    color: "ship",
    legs: [
      {
        type: "train",
        label: "Roma Termini → Civitavecchia",
        carrier: "Regionale Veloce 4132",
        from: "Roma Termini", to: "Civitavecchia",
        departs: "Sun Sep 6, 12:12 PM",
        arrives: "Sun Sep 6, 1:13 PM",
        note: "All 11 travelers — be at Termini by 11:45 AM",
      },
      {
        type: "bus",
        label: "Civitavecchia → Port",
        carrier: "Bus CV062",
        from: "Civitavecchia", to: "Porto",
        departs: "Sun Sep 6, 1:20 PM",
        arrives: "Sun Sep 6, 1:35 PM",
        note: "Connects directly to Norwegian Gem boarding",
      },
      {
        type: "ship",
        label: "Norwegian Gem sails",
        carrier: "Norwegian Cruise Line",
        from: "Civitavecchia", to: "Mediterranean",
        departs: "Sun Sep 6, 5:00 PM",
        arrives: "",
        note: "Be on board by 4:00 PM — the ship waits for no one",
      },
    ],
  },
  {
    id: "disembark",
    label: "Everyone · Ravenna → Venice",
    who: "All 11 travelers",
    color: "ship",
    legs: [
      {
        type: "ship",
        label: "Disembark Norwegian Gem",
        carrier: "Norwegian Cruise Line",
        from: "Ravenna", to: "",
        departs: "Sun Sep 13, 6:00 AM",
        arrives: "",
        note: "Have bags outside your stateroom door the night before",
      },
      {
        type: "train",
        label: "Ravenna → Ferrara",
        carrier: "Trenitalia",
        from: "Ravenna", to: "Ferrara",
        departs: "Sun Sep 13, 11:47 AM",
        arrives: "Sun Sep 13, 1:01 PM",
        note: "",
      },
      {
        type: "train",
        label: "Ferrara → Venezia Mestre",
        carrier: "Trenitalia",
        from: "Ferrara", to: "Venezia Mestre",
        departs: "Sun Sep 13, 1:29 PM",
        arrives: "Sun Sep 13, 2:23 PM",
        note: "28 min connection in Ferrara — stay together",
      },
      {
        type: "hotel",
        label: "Venice · Hotel Plaza Venice",
        address: "Viale Stazione 36, Mestre, Venice",
        checkin: "Sun Sep 13, 3:00 PM",
        checkout: "Mon Sep 14, 12:00 PM",
        phone: "+39 041 929388",
      },
    ],
  },
  {
    id: "home-a",
    label: "Daniel & Becca · Home",
    who: "Daniel & Becca",
    color: "aegean",
    legs: [
      {
        type: "flight",
        label: "Venice → Newark",
        carrier: "United Airlines 169",
        from: "VCE", to: "EWR",
        departs: "Mon Sep 14, 11:05 AM CEST",
        arrives: "Mon Sep 14, 2:45 PM EDT",
        note: "",
      },
      {
        type: "flight",
        label: "Newark → Raleigh",
        carrier: "United Airlines 1975",
        from: "EWR", to: "RDU",
        departs: "Mon Sep 14, 4:55 PM EDT",
        arrives: "Mon Sep 14, 6:37 PM EDT",
        note: "Terminal C",
      },
    ],
  },
  {
    id: "home-b",
    label: "Group B · Home",
    who: "Tom, Joannie, Nicholas, Tonya, Ryan, Candace, Kimberly, Lora & Brandon",
    color: "terra",
    legs: [
      {
        type: "flight",
        label: "Venice → Dublin",
        carrier: "Aer Lingus EI 0423",
        from: "VCE", to: "DUB",
        departs: "Mon Sep 14, 12:15 PM",
        arrives: "Mon Sep 14, 2:10 PM",
        note: "2h 55m flight",
      },
      {
        type: "flight",
        label: "Dublin → Raleigh",
        carrier: "Aer Lingus EI 0085",
        from: "DUB", to: "RDU",
        departs: "Mon Sep 14, 3:30 PM",
        arrives: "Mon Sep 14, 6:55 PM EDT",
        note: "1h 20min layover in Dublin · 8h 25m flight",
      },
    ],
  },
];

// ============================================================
// PRE-CRUISE ROME DAYS
// ============================================================

export const romeDays = [
  {
    date: "Friday, September 4",
    label: "Rome Day 1",
    who: "Group B only",
    whoDetail: "Tom, Joannie, Nicholas, Tonya, Ryan, Candace, Kimberly, Lora & Brandon",
    status: "coming-soon",
    coordinator: "Joannie",
    coordinatorNote: "Joannie is on it 📋 — she's coordinating Day 1 plans for the crew. Some tickets (like the Colosseum) aren't on sale yet, so check back soon for the full rundown.",
    knownItems: [
      "Group B arrives FCO at 9:05 AM — expect to clear customs and reach the hotel by midday",
      "Best Western Artdeco is your home base: Via Palestro 19, Rome",
      "Daniel & Becca are en route — they join you tomorrow morning",
    ],
    plans: [],
  },
  {
    date: "Saturday, September 5",
    label: "Rome Day 2 — All 11 Together",
    who: "All 11",
    whoDetail: "The whole crew, together for the first time",
    status: "coming-soon",
    coordinator: null,
    coordinatorNote: null,
    knownItems: [
      "Daniel & Becca arrive FCO at 7:05 AM — at the hotel by early afternoon",
      "First time all 11 are in the same place 🎉",
      "Tomorrow's train departs Roma Termini at 12:12 PM — plan bags and checkout accordingly",
    ],
    plans: [],
  },
];

// ============================================================
// CRUISE PORTS
// ============================================================

export const ports = [
  {
    id: "salerno",
    name: "Salerno",
    country: "Italy",
    flag: "🇮🇹",
    date: "Monday, Sep 7",
    isoDate: "2026-09-07",
    arrives: "7:00 AM",
    departs: "6:00 PM",
    hoursAshore: "~11 hours",
    heroImage: "https://images.pexels.com/photos/18771862/pexels-photo-18771862.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Salerno",
    tagline: "Gateway to Pompeii and the Amalfi Coast",
    intro: "The most activity-rich port of the cruise. The key decision: Pompeii by train is the easiest no-car option and one of Europe's most astonishing sites. The Amalfi Coast is a shore excursion away.",
    transport: ["🚆 Train to Pompeii (~1 hr, ~€4pp)", "🚌 Shore excursion to Amalfi Coast", "🦶 Salerno old town on foot"],
    activities: [
      {
        icon: "🌋",
        name: "Pompeii ruins",
        desc: "Preserved Roman city frozen by Vesuvius in 79 AD. Train from Salerno walks directly into the ruins. Book timed tickets at pompeiipark.org in advance.",
        tags: ["Historical", "On foot"],
      },
      {
        icon: "🌊",
        name: "Amalfi Coast shore excursion",
        desc: "Positano, Amalfi, and Ravello via guided tour — the only stress-free way to do the winding coast roads. Book through NCL or Viator.",
        tags: ["City", "Tour included"],
      },
      {
        icon: "⛪",
        name: "Salerno city walk",
        desc: "Medieval cathedral, the Arechi castle on the hillside, and a lively waterfront promenade. Zero transport needed — steps from the ship.",
        tags: ["City", "Historical", "On foot"],
      },
    ],
    tip: "Pompeii by train + Salerno city walk in the afternoon is the ideal no-stress combo. Leave early, Pompeii in the morning before the heat builds, waterfront lunch, old town afternoon. Back on ship well before 6 PM. Tom and Joannie may prefer the flat city walk while others tackle the full Pompeii site — both paths reunite easily for lunch.",
  },
  {
    id: "catania",
    name: "Catania",
    country: "Sicily, Italy",
    flag: "🇮🇹",
    date: "Tuesday, Sep 8",
    isoDate: "2026-09-08",
    arrives: "7:00 AM",
    departs: "4:00 PM",
    hoursAshore: "~9 hours",
    heroImage: "https://images.pexels.com/photos/31300373/pexels-photo-31300373.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Catania",
    tagline: "Baroque city in the shadow of Mt. Etna",
    intro: "Sicily's second city sits in the shadow of Europe's largest active volcano. The port is steps from the city center — an ornate Baroque old town built from black lava stone.",
    transport: ["🦶 Port is walkable to old town", "🌋 Guided tour to Mt. Etna", "🚆 Train to Siracusa (1 hr)"],
    activities: [
      {
        icon: "🐟",
        name: "La Pescheria fish market",
        desc: "Catania's legendary morning market — most alive 7:30–11 AM. Theatrical, loud, and unforgettable. Great street food stalls nearby. Steps from the port.",
        tags: ["City", "On foot"],
      },
      {
        icon: "🏛",
        name: "Baroque old town & Piazza del Duomo",
        desc: "Lava-stone elephant fountain, Cathedral of Sant'Agata, and UNESCO-listed Baroque piazzas. Stunning and completely walkable from port.",
        tags: ["City", "Historical", "On foot"],
      },
      {
        icon: "🌋",
        name: "Mt. Etna guided tour",
        desc: "Europe's largest active volcano. Cable car to ~2,500m then guided crater walk. Only practical as a half-day tour with transport — returns to port by early afternoon.",
        tags: ["Active", "Tour included"],
      },
    ],
    tip: "With a 4 PM departure, the market + old town fills a great 9-hour day without transport stress. If Etna is on the list, book a morning tour that guarantees return to port by 2:30 PM — those preferring a flatter day can enjoy the city while the hikers head up the volcano.",
  },
  {
    id: "corfu",
    name: "Corfu",
    country: "Greece",
    flag: "🇬🇷",
    date: "Wednesday, Sep 9",
    isoDate: "2026-09-09",
    arrives: "10:00 AM",
    departs: "7:30 PM",
    hoursAshore: "~9.5 hours",
    heroImage: "https://images.pexels.com/photos/33909968/pexels-photo-33909968.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Corfu",
    tagline: "The Ionian jewel",
    intro: "A UNESCO old town with Venetian alleyways, two massive fortresses, and the beautiful Liston promenade. Later arrival means a relaxed morning start — take your time.",
    transport: ["🦶 Old town 10 min walk from tender", "🚌 KTEL bus to Paleokastritsa (€2pp)", "🚢 Island highlights shore excursion"],
    activities: [
      {
        icon: "🏰",
        name: "Old Town & dual fortresses",
        desc: "Venetian-era walled city with narrow lanes, the elegant Liston promenade, and two imposing fortresses with panoramic sea views. Walkable from the tender landing.",
        tags: ["Historical", "City", "On foot"],
      },
      {
        icon: "🛶",
        name: "Paleokastritsa cove & sea caves",
        desc: "Greece's most beautiful cove — crystal water and sea caves by small local boat. KTEL bus from Corfu Town (€2pp each way) — cheap and easy.",
        tags: ["Water", "City"],
      },
      {
        icon: "🏛",
        name: "Achilleion Palace",
        desc: "Empress Sisi of Austria's neoclassical hilltop palace — lush gardens, mythological statues, and great island views. Best as part of an island highlights tour.",
        tags: ["Historical", "Tour included"],
      },
    ],
    tip: "The old town alone — fortresses, alleyways, lunch at the Liston — is a genuinely excellent full day with zero transport decisions. A leisurely option that works beautifully for the whole group. For anyone wanting to see the island, the KTEL bus to Paleokastritsa is cheap and straightforward.",
  },
  {
    id: "kotor",
    name: "Kotor",
    country: "Montenegro",
    flag: "🇲🇪",
    date: "Thursday, Sep 10",
    isoDate: "2026-09-10",
    arrives: "8:00 AM",
    departs: "6:00 PM",
    hoursAshore: "~10 hours",
    heroImage: "https://images.pexels.com/photos/4514115/pexels-photo-4514115.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Kotor",
    tagline: "Medieval magic inside a dramatic fjord",
    intro: "Many people's single favorite port on any Adriatic cruise. A perfectly preserved medieval city tucked inside a dramatic fjord — the ship docks steps from the old town gate.",
    transport: ["🦶 Ship docks 2 min walk from old town", "🛶 Local boat taxis on the bay", "🚢 Bay of Kotor boat excursion"],
    activities: [
      {
        icon: "🏰",
        name: "St. John's Fortress climb",
        desc: "1,350 steps up the ancient city walls to a ruined hilltop castle. Strenuous but unforgettable — views of the bay are jaw-dropping. ~1.5–2 hrs up. €8pp. Start early.",
        tags: ["Active", "Historical"],
      },
      {
        icon: "⛪",
        name: "Kotor Old Town",
        desc: "Cathedral of Saint Tryphon (1166 AD), the Maritime Museum, marble-paved squares, and the famous Kotor cats. Compact, beautiful, right off the gangway.",
        tags: ["City", "Historical", "On foot"],
      },
      {
        icon: "🛶",
        name: "Bay of Kotor boat tour",
        desc: "Sail to Our Lady of the Rocks (a church on a man-made island), Perast village, and the Blue Cave. Charter a local boat at the pier — book in advance.",
        tags: ["Water", "Historical"],
      },
    ],
    tip: "Fortress climb in the early morning before the heat (September can hit 30°C), old town mid-morning, bay boat tour in the afternoon. The fortress is genuinely steep — great for those up for it, while others enjoy the town below. Book the bay tour in advance as boats fill up fast.",
  },
  {
    id: "split",
    name: "Split",
    country: "Croatia",
    flag: "🇭🇷",
    date: "Friday, Sep 11",
    isoDate: "2026-09-11",
    arrives: "7:00 AM",
    departs: "5:00 PM",
    hoursAshore: "~10 hours",
    heroImage: "https://images.pexels.com/photos/18759978/pexels-photo-18759978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Split",
    tagline: "Living inside a Roman emperor's palace",
    intro: "One of the most unique urban environments in the world — people actually live and work inside a 1,700-year-old Roman emperor's retirement palace. The cruise terminal is inside the palace walls.",
    transport: ["🦶 Terminal is inside the palace", "⛴ Public ferry to Brač island", "🚤 Speed boat to Hvar & Blue Cave"],
    activities: [
      {
        icon: "🏛",
        name: "Diocletian's Palace",
        desc: "Built in 305 AD — the basement halls, Jupiter's Temple, and Peristyle square. Step off the gangway and you're inside 1,700 years of history.",
        tags: ["Historical", "On foot"],
      },
      {
        icon: "⛰",
        name: "Marjan Hill hike",
        desc: "Forested peninsula above Split — trails to the Telegrin viewpoint (178m) with Dalmatian island views. 2–3 hrs for a full loop from old town.",
        tags: ["Active", "On foot"],
      },
      {
        icon: "🚤",
        name: "Hvar & Blue Cave speed boat",
        desc: "The glowing Blue Cave on Biševo island + glamorous Hvar old town. One of the Adriatic's iconic experiences. Book ahead through harbor kiosks.",
        tags: ["Water", "Tour included"],
      },
    ],
    tip: "Split is the friendliest port of the whole trip for a no-car group. Palace exploration + Marjan Hill hike fills a fantastic 10-hour day with zero transport logistics. The Hvar boat trip is great if the group wants a water day instead.",
  },
  {
    id: "trieste",
    name: "Trieste",
    country: "Italy",
    flag: "🇮🇹",
    date: "Saturday, Sep 12",
    isoDate: "2026-09-12",
    arrives: "8:00 AM",
    departs: "7:00 PM",
    hoursAshore: "~11 hours",
    heroImage: "https://images.pexels.com/photos/30471260/pexels-photo-30471260.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Trieste",
    tagline: "Austro-Hungarian grandeur on the Adriatic",
    intro: "The most underrated port on this itinerary. Trieste was the third city of the Austro-Hungarian Empire — sweeping neoclassical architecture, a working Grand Canal, and cliffside castles. A beautiful surprise.",
    transport: ["🦶 City center walkable from port", "🚌 Bus to Miramare Castle (30 min)", "🚋 Historic tram to Opicina"],
    activities: [
      {
        icon: "🏛",
        name: "Piazza Unità d'Italia & Grand Canal",
        desc: "One of the largest seaside squares in Europe — flanked by imperial palaces opening onto the sea. The city's Grand Canal runs through the center. Stunning and walkable.",
        tags: ["City", "Historical", "On foot"],
      },
      {
        icon: "🏰",
        name: "Miramare Castle",
        desc: "Fairy-tale white castle on a rocky promontory above the Adriatic — built for Austrian Archduke Maximilian in the 1850s. Bus 36 from city center, 30 min.",
        tags: ["Historical", "On foot"],
      },
      {
        icon: "☕",
        name: "Trieste coffee culture",
        desc: "Trieste has its own unique coffee culture — more cafes per capita than anywhere in Italy and its own local coffee vocabulary. Caffè degli Specchi on the main piazza is iconic.",
        tags: ["City", "On foot"],
      },
      {
        icon: "🚋",
        name: "Opicina historic tramway",
        desc: "A funicular-tram hybrid built in 1902 that climbs the limestone plateau above the city. Spectacular views over the bay — a quirky piece of living history.",
        tags: ["Active", "City"],
      },
    ],
    tip: "Trieste rewards wanderers. Start at Piazza Unità for a coffee, walk the Grand Canal, explore the Roman theater ruins, then take Bus 36 to Miramare Castle for the afternoon. With 11 hours there's no rush. A great day for the group to spread out — Trieste is compact, safe, and easy to navigate.",
  },
];

// ============================================================
// POST-CRUISE VENICE
// ============================================================

export const venice = {
  date: "Sunday, Sep 13",
  hotel: "Hotel Plaza Venice",
  address: "Viale Stazione 36, Mestre, Venice",
  checkin: "3:00 PM",
  checkout: "Mon Sep 14, 12:00 PM",
  phone: "+39 041 929388",
  note: "One night in Venice before flying home. Dinner, rest, and play it by ear. Daniel & Becca have a private gondola tour booked for the evening.",
  suggestions: [
    "Walk across the bridge into Venice proper — Mestre is on the mainland, Venice island is 10 min away",
    "Piazza San Marco at dusk is worth the trip even for a short evening visit",
    "Rialto Bridge and the Grand Canal are must-sees if energy allows",
    "Plenty of great restaurants in Mestre itself — less crowded and more local than Venice island",
  ],
};

// ============================================================
// PACKING LIST
// ============================================================

export const packingList = {
  categories: [
    {
      name: "Documents & Money",
      icon: "📄",
      items: [
        "Passport (valid for 6+ months past Sep 14, 2026)",
        "Printed copies of all flight confirmations",
        "NCL cruise confirmation number",
        "Travel insurance info (Chase Sapphire Preferred)",
        "Credit/debit cards — notify your bank before traveling",
        "€100–150 cash for markets, tips, and small vendors",
        "Emergency contact card (Daniel: trip coordinator)",
      ],
    },
    {
      name: "Clothing",
      icon: "👕",
      items: [
        "Lightweight tops (7–8 — it will be 26–30°C / 80–86°F)",
        "Comfortable walking shorts or pants",
        "One nicer dinner outfit for evenings on the ship",
        "Light jacket or layer for cool evenings and A/C",
        "Swimsuit (pool on ship, beach days)",
        "Scarf or sarong (for church entry — covers shoulders & knees)",
        "Comfortable walking shoes — cobblestones are everywhere",
        "Sandals for ship and beach days",
        "Pajamas / sleepwear",
      ],
    },
    {
      name: "Toiletries & Health",
      icon: "🧴",
      items: [
        "Sunscreen SPF 50+ (reapply daily — Mediterranean sun is strong)",
        "Sunglasses",
        "Hat or cap",
        "Prescription medications (carry-on only — never checked bag)",
        "Motion sickness remedies if needed (sea patches or tablets)",
        "Basic first aid: pain reliever, antacids, blister pads",
        "Hand sanitizer",
        "Insect repellent",
      ],
    },
    {
      name: "Tech & Connectivity",
      icon: "📱",
      items: [
        "Phone charger + travel adapter (EU plug Type C/F)",
        "Portable battery bank (long port days away from outlets)",
        "Download the NCL app before you fly",
        "Headphones for flights",
        "Camera or make sure phone storage is cleared",
        "Consider an eSIM or international plan for port days",
      ],
    },
    {
      name: "Cruise Specifics",
      icon: "🛳",
      items: [
        "NCL luggage tags (print and attach before arrival at port)",
        "Small day bag or backpack for port excursions",
        "Refillable water bottle",
        "Lanyard for your cruise card (room key + onboard payment)",
        "Power strip (no surge protector — NCL allows plain strips)",
        "Ziploc bags (for wet swimsuits, sandy shoes)",
      ],
    },
    {
      name: "Day-by-Day Suggestions",
      icon: "📍",
      items: [
        "Salerno/Pompeii: sturdy shoes, sun hat, plenty of water",
        "Catania: comfortable shoes — lava stone streets are uneven",
        "Corfu: light layers — tender ride can be breezy",
        "Kotor: your best walking shoes — 1,350 steps up the fortress",
        "Split: same as Kotor — cobblestones and stairs",
        "Trieste: relaxed day — smart casual works perfectly",
      ],
    },
  ],
};

// ============================================================
// NEED TO KNOW
// ============================================================

export const needToKnow = [
  {
    icon: "✈️",
    title: "Customs & clearing Frankfurt (Group B)",
    priority: "high",
    content: `Group B has a 1h 20min connection in Frankfurt (FRA). Here's how to make it smooth:

• You do NOT clear customs in Frankfurt — as an EU transit passenger flying onward to Rome, you stay airside and go directly to your next gate.
• Follow signs for "Transfer / Gates" immediately after deplaning. Do not follow "Arrivals / Baggage Claim."
• Frankfurt is a large airport — allow the full connection time and move quickly off the plane.
• Your bags are checked through to Rome (FCO) — you don't collect them in Frankfurt.
• At Rome FCO, you clear Italian/EU customs. Have passports ready. Use the "Non-EU Citizens" lane.

Pro tip: Download the Lufthansa app and turn on notifications before you fly — it'll show your gate assignment in real time.`,
  },
  {
    icon: "📱",
    title: "Mobile Passport & faster customs",
    priority: "high",
    content: `When returning to the US through Newark (EWR) or any major US airport:

• Download the "Mobile Passport Control" app (free, official US CBP app) before you travel.
• Fill in your passport info and trip details on the plane before landing.
• At customs, use the Mobile Passport lane — it's dramatically shorter than the standard line.
• Works for US citizens and permanent residents.
• All of Group B connecting through Dublin: Aer Lingus pre-clears US customs IN Dublin — you land in Raleigh as a domestic arrival. No customs line at RDU at all. This is a huge time saver.`,
  },
  {
    icon: "🛳",
    title: "The ship waits for no one",
    priority: "high",
    content: `This is the #1 rule of cruising. The ship departs on schedule — not when everyone is back aboard.

• Build in a 30-minute buffer before every listed departure time.
• If you're on an NCL-booked shore excursion and it runs late, the ship will wait. If you arranged your own transportation, it will not.
• Your cruise card shows your ship and sail date — if you're ever unsure which port a ship is in, check the card.
• The NCL app shows ship departure times for each port — check it every morning.`,
  },
  {
    icon: "⛪",
    title: "Dress code for churches",
    priority: "medium",
    content: `Many of the most stunning sites on this trip — Corfu's Old Fortress, Kotor's Cathedral, Split's palace churches, Catania's Duomo — require covered shoulders and knees to enter.

• A light scarf or sarong in your day bag solves this in 30 seconds.
• This applies to everyone, regardless of the heat.
• You will be turned away at the door without appropriate cover — don't miss a UNESCO site over this.`,
  },
  {
    icon: "💳",
    title: "Money & cards in port",
    priority: "medium",
    content: `• Cards are accepted at most port city restaurants and shops.
• Carry €20–40 cash per person for markets, street food, small vendors, and tips.
• Montenegro uses the Euro despite not being in the EU. Croatia uses the Euro (switched in 2023). Greece and Italy are Euro. Slovenia is Euro.
• ATMs are available in every port city — use bank ATMs, not standalone machines, for better rates.
• Notify your bank and credit card companies before you travel to avoid fraud blocks.`,
  },
  {
    icon: "☀️",
    title: "September weather & health",
    priority: "medium",
    content: `• Expect 26–30°C (80–86°F) across all ports. Humidity varies but it will feel warm.
• Sunscreen, a hat, and sunglasses are non-negotiable — Mediterranean sun is intense even in September.
• The Kotor fortress climb and Pompeii are both best done in the morning before the heat peaks.
• Drink water consistently throughout port days — it's easy to get dehydrated without noticing.
• Motion sickness: if you're prone to it, bring patches or tablets. The Med in September is generally calm but weather can vary.`,
  },
  {
    icon: "🌐",
    title: "Staying connected",
    priority: "medium",
    content: `• On the ship: NCL offers WiFi packages. The NCL app works free on ship WiFi for messaging within the group and checking schedules.
• In port: your regular international plan may work — check with your carrier. T-Mobile customers get free international data (slow) in most of these countries.
• Consider an eSIM (Airalo app) for cheap data in port without swapping your SIM card.
• WhatsApp works everywhere with WiFi or data and is the easiest way to coordinate as a group in port.`,
  },
  {
    icon: "🧳",
    title: "Baggage on disembarkation day",
    priority: "medium",
    content: `On the night of Saturday Sep 12 (last night on the ship):

• Place your tagged bags outside your stateroom door by 11 PM.
• NCL staff collects them overnight and they'll be waiting in the terminal in Ravenna.
• Keep a small carry-on with overnight essentials, meds, and valuables — you won't see your checked bags until Ravenna.
• In Ravenna, collect your bags, then make your way to the train station for the 11:47 AM departure.`,
  },
];

// ============================================================
// HERO SLIDER IMAGES (Unsplash)
// ============================================================

export const heroSlides = [
  {
    url: "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1920",
    label: "The Mediterranean awaits",
    sublabel: "Positano, Amalfi Coast",
  },
  {
    url: "https://images.pexels.com/photos/18573229/pexels-photo-18573229.jpeg?auto=compress&cs=tinysrgb&w=1920",
    label: "Our home for eight nights",
    sublabel: "Cruise ship in Kotor Bay",
  },
  {
    url: "https://images.pexels.com/photos/33909968/pexels-photo-33909968.jpeg?auto=compress&cs=tinysrgb&w=1920",
    label: "Crystal waters ahead",
    sublabel: "Corfu, Greece",
  },
  {
    url: "https://images.pexels.com/photos/18759978/pexels-photo-18759978.jpeg?auto=compress&cs=tinysrgb&w=1920",
    label: "Old town, new memories",
    sublabel: "Split, Croatia",
  },
];