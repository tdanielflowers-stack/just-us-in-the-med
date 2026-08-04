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
        note: "Check in at the United ticket counter at RDU",
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
// PORT RULES — standing rules for every port day
// ============================================================
export const portRules = [
  "🚢 Be back at the ship or tender dock 1 hour before posted departure — non-negotiable. If a site visit risks that, skip it or adjust.",
  "🍽 Lunches are à la carte all week — same few blocks, no reservations, no table for 11.",
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
    heroImage: "https://images.pexels.com/photos/17257784/pexels-photo-17257784.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Salerno",
    tagline: "Pompeii — frozen in time since 79 AD",
    intro: "We're doing Pompeii the right way — via NCL's 'Pompeii On Your Own' bus excursion. Transport is handled, the ship guarantees it won't leave without us if the tour runs late, and you'll have 2.5–3 hours inside one of the most remarkable sites in the world.",
    transport: ["🚌 NCL 'Pompeii On Your Own' excursion bus", "🚢 Ship guaranteed — won't depart without excursion guests"],
    activities: [
      {
        icon: "🌋",
        name: "Pompeii ruins — the anchor of the day",
        desc: "Meet at 8:45 AM per NCL instructions. Cost: ~$50/person for the NCL bus transfer, plus ~$30–50/person for Pompeii site entry (budget toward the higher end). 2.5–3 hours at the ruins. Wear real walking shoes — the site is entirely on ancient stone with zero shade. Back aboard by 5:30 PM.",
        tags: ["Historical", "On foot", "Tour included"],
      },
    
      {
        icon: "⛪",
        name: "Salerno old town (if time allows)",
        desc: "Salerno's medieval cathedral and the Arechi castle on the hillside are both worth a look if energy allows after Pompeii. Completely flat and walkable from the waterfront.",
        tags: ["City", "Historical", "On foot"],
      },
    ],
    tip: "Pompeii is big — a real archaeological city, not a small ruin. Wear the most comfortable shoes you own, bring water, and apply sunscreen before you go in. There is no shade and September in southern Italy is still very warm. The NCL excursion guarantee means you can relax and explore without watching the clock obsessively.",
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
    heroImage: "https://images.pexels.com/photos/12994279/pexels-photo-12994279.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Catania",
    tagline: "Baroque city, lava stone streets, Sicily's finest street food",
    intro: "Catania's old town is steps from the ship — no transport needed. One consolidated walking route through the city's Baroque heart, with the best street food in Sicily along the way. All aboard by 3:00 PM — one hour before the 4:00 PM departure.",
    transport: ["🦶 Port is walkable to old town — zero transport needed", "⏰ All aboard 3:00 PM (ship departs 4:00 PM)"],
    activities: [
      {
        icon: "🐘",
        name: "The walking route",
        desc: "Piazza del Duomo → Sant'Agata Cathedral → Via Crociferi → San Benedetto Church (the famous Angel staircase, ~€6) → Teatro Massimo Bellini exterior → Porta Garibaldi → Via Etnea for shopping: ceramics, lava jewelry, pistachio sweets. All connected, all walkable, all spectacular.",
        tags: ["City", "Historical", "On foot"],
      },
      {
        icon: "🍋",
        name: "Street food lunch — no sit-down needed",
        desc: "Skip the table-for-11 logistics. Graze as you walk: cannolo from a pasticceria, granita with brioche (the Sicilian breakfast-dessert), arancino (fried rice ball, get it warm), espresso standing at the bar. This is how Sicilians eat and it's perfect.",
        tags: ["City", "On foot"],
      },
      {
        icon: "🛍",
        name: "Via Etnea shopping",
        desc: "Catania's main shopping street leads north from Piazza del Duomo. Great for Sicilian ceramics, volcanic lava jewelry, pistachio products (Bronte pistachios from the slopes of Etna are world-famous), and local sweets to bring home.",
        tags: ["City", "On foot"],
      },
    ],
    tip: "The lava stone streets look smooth but can be uneven underfoot — comfortable shoes matter here too. The San Benedetto Church angel staircase is one of the most photographed spots in Sicily and worth the €6 entry. All aboard is 3:00 PM sharp — earlier than the ship's posted 4:00 PM departure, giving the whole group a comfortable buffer.",
    shoppingTip: "Best for Sicilian specialties — lava stone jewelry, ceramics, pistachio products, and local foods. Via Etnea is your main shopping street.",
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
    heroImage: "https://images.pexels.com/photos/15658161/pexels-photo-15658161.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Corfu",
    tagline: "Paleokastritsa in the morning, old town in the afternoon",
    intro: "Full group day, no split. We start at Paleokastritsa Beach — one of the most beautiful coves in Greece — then spend the afternoon exploring Corfu Old Town. Beach first, so nobody's carrying souvenirs to the water.",
    transport: ["🚌 Booked transfer to Paleokastritsa (time TBD)", "🦶 Old town 10 min walk from tender dock", "⏰ Reconvene at the Liston 5:15–5:30 PM · Back aboard 6:15–6:30 PM"],
    activities: [
      {
        icon: "🏖",
        name: "Paleokastritsa Beach — morning",
        desc: "Booked transfer takes the group to Paleokastritsa — crystal-clear water, dramatic limestone cliffs, and small sea caves accessible by local boat. Spend a couple of hours in the coves. For those who'd rather not swim, the clifftop monastery above the beach has stunning views and is a peaceful alternative.",
        tags: ["Water", "On foot"],
      },
      {
        icon: "🏰",
        name: "Corfu Old Town — afternoon",
        desc: "Spianada Square → the Liston (grab a coffee under the French-built arcades) → St. Spyridon Church (Corfu's beloved patron saint) → the Campiello quarter (Venice-like narrow lanes, genuinely charming). Local tastings: kumquat products (unique to Corfu), Greek coffee, olive oil, sofrito (the local beef dish).",
        tags: ["City", "Historical", "On foot"],
      },
      {
        icon: "🛍",
        name: "Shopping — afternoon",
        desc: "Nikis Street, Agias Sofias, and Evangelistrias are the main shopping lanes. Kumquat liqueur, olive oil, local ceramics, and linens. Browse after the cultural sites — the Liston is the natural regrouping point before heading back to the tender.",
        tags: ["City", "On foot"],
      },
    ],
    tip: "Reconvene near the Liston at 5:15–5:30 PM as a group to ensure everyone makes the tender back together. The tender queue and ride back to the ship takes time — factor that into your afternoon. Paleokastritsa is worth every minute of the morning.",
    shoppingTip: "Best for olive oil products, kumquat liqueur, soaps, and handmade Greek items. The shopping lanes off the Liston are the right place to browse.",
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
    heroImage: "https://images.pexels.com/photos/10785532/pexels-photo-10785532.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Kotor",
    tagline: "Medieval walled city — tender port, relaxed pace",
    intro: "Kotor is a tender port — the ship anchors in the bay and small boats ferry us ashore (~20–30 min each way including queue time). Today is intentionally a lighter day. The anchor plan is Kotor Old Town itself — free, flat, beautiful, and right at the tender dock.",
    transport: ["⛴ Tender port — 20–30 min each way including queue", "🦶 Old town is right at the tender landing — flat, free, cobblestone", "⏰ Be at the tender dock by 3:30 PM — 1 hour buffer before ship departs"],
    activities: [
      {
        icon: "🏰",
        name: "Kotor Old Town — the anchor plan",
        desc: "About 1 hour, free, flat. Cathedral of Saint Tryphon (1166 AD), the Maritime Museum, marble-paved squares, and the famous Kotor cats — the city has an ancient relationship with cats, they're everywhere and beloved. Compact, beautiful, and historically rich.",
        tags: ["City", "Historical", "On foot"],
      },
      {
        icon: "🛶",
        name: "Perast & Our Lady of the Rocks — optional, on your own",
        desc: "For anyone who wants to arrange it independently: local water taxis from the tender dock can take you to Perast village and the tiny island church of Our Lady of the Rocks (built on a man-made island). Not a group booking — arrange at the dock if interested. Build in time to be back at the tender dock by 3:30 PM.",
        tags: ["Water", "Historical"],
      },
      {
        icon: "🐾",
        name: "Afternoon — free time or back to ship",
        desc: "Today is intentionally a lighter day. Explore at your own pace, find a café in the old town, or head back to the ship for a relaxing afternoon on deck. The tender runs continuously so there's flexibility.",
        tags: ["City", "On foot"],
      },
    ],
   tip: "3:30 PM at the tender dock is our firm group time — not 5:00 PM. The tender queue adds meaningful time and we want a full buffer before the 6:00 PM departure. If you're doing the Perast boat independently, plan your return from Perast by 3:00 PM at the latest to make the 3:30 dock time comfortably.",
    shoppingTip: "A few nice local souvenirs, wine, or olive wood pieces — but not a major shopping destination. Browse if something catches your eye, don't make it the mission.",
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
    intro: "The cruise terminal is literally inside the walls of Diocletian's Palace — built in 305 AD. Step off the gangway and you're already inside 1,700 years of history. No transport needed. Everyone does the palace together.",
    transport: ["🦶 Terminal is inside the palace walls — zero transport needed", "⏰ All aboard 4:30 PM (ship departs 5:00 PM)"],
    activities: [
      {
        icon: "🏛",
        name: "Diocletian's Palace — everyone, no split",
        desc: "The palace basement halls (cellars), the Peristyle courtyard, Jupiter's Temple, and the Golden Gate are all free and within a few minutes' walk. The entire neighborhood built inside the ancient walls is the experience — cafés, apartments, shops all coexisting with 4th-century Roman architecture.",
        tags: ["Historical", "On foot"],
      },
      {
        icon: "🐉",
        name: "Game of Thrones fans — look for the cellars",
        desc: "The palace basement halls were used as Daenerys's dragon-holding-cell scenes in Game of Thrones (Meereen's fighting pits arc). The space looks exactly as it did on screen. Worth seeking out if anyone in the group is a fan — it's genuinely cool even for non-fans.",
        tags: ["Historical", "On foot"],
      },
      {
        icon: "🌊",
        name: "After the palace: Riva, market, or Marjan Hill",
        desc: "The Riva waterfront promenade runs along the south side of the palace — great for a coffee or a walk. The morning market just outside the palace walls has local produce and souvenirs. For those with energy, the Marjan Hill trails above town offer great views of the Adriatic and Dalmatian islands (2–3 hrs for a full loop).",
        tags: ["City", "On foot"],
      },
    ],
    tip: "All aboard is 4:30 PM — keep that in mind if anyone heads to Marjan Hill. The palace and Riva easily fill a great day without any transport decisions. Trogir (a UNESCO island town 30–45 min away) is sometimes suggested as an add-on but isn't necessary — save the energy for Trieste tomorrow.",
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
    heroImage: "https://images.pexels.com/photos/5868875/pexels-photo-5868875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    weatherCity: "Trieste",
    tagline: "Austro-Hungarian grandeur, world-class coffee, cliffside castles",
    intro: "Trieste is the hidden gem of this itinerary — one of Italy's most distinctive cities, once the third-largest city of the Austro-Hungarian Empire. The anchor plan is the city center: free, walkable, and stunning. Optional add-ons for those wanting more.",
    transport: ["🦶 City center walkable from port", "🚌 Bus or taxi to Miramare Castle (~20–25 min)"],
    activities: [
      {
        icon: "☕",
        name: "Piazza Unità d'Italia + coffee — anchor plan",
        desc: "One of Europe's largest seafront squares — flanked by imperial palaces that open directly onto the Adriatic. Start here with a coffee. Caffè degli Specchi on the square is the famous tourist choice; Caffè San Marco (a few blocks away) is less touristy and equally beautiful — a grand Central European-style café open since 1914.",
        tags: ["City", "On foot"],
      },
      {
        icon: "🏰",
        name: "Miramare Castle — optional add-on",
        desc: "A fairy-tale white castle on a rocky promontory above the Adriatic, built for Austrian Archduke Maximilian in the 1850s. About 20–25 min from city center by bus or taxi. Allow 1.5–2 hours for the castle and its free surrounding park. Note: no benches inside the castle — plan to rest in the gardens. The Barcola promenade nearby has a local swimming spot (rocky/ladder entry, not sand) on the way back.",
        tags: ["Historical", "On foot"],
      },
      {
        icon: "🚶",
        name: "City wandering",
        desc: "The Grand Canal runs through the city center, the Roman theater ruins are a short walk from the main piazza, and the old Borgo Teresiano quarter is charming. Trieste rewards wandering — compact, safe, and easy to navigate without a map.",
        tags: ["City", "On foot"],
      },
    ],
    tip: "Note: no Venice day trip from Trieste — we're sailing to Ravenna tonight and spending tomorrow night in Venice post-cruise. Save the Venice excitement for then. Today is about Trieste itself, which is plenty.",
    shoppingTip: "Best place on the trip for quality Italian leather goods and Illy coffee — Trieste is Illy's home city. If you're going to splurge on leather, this is the day.",
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

Pro tip: Download the United app and turn on notifications before you fly — it'll show your gate assignment in real time.`,
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