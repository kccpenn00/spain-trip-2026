let days = [
  {
    city: "Transit",
    date: "Sun, May 31",
    title: "Depart SF",
    summary: "Start the trip with the long-haul United Polaris flight to Barcelona.",
    anchors: [
      ["6:00 PM", "United UA 672 departs SFO, seats 9D and 9G"]
    ]
  },
  {
    city: "Barcelona",
    date: "Mon, Jun 1",
    title: "Land in Barcelona",
    summary: "Arrive mid-afternoon and settle into Seventy Barcelona for the first stay.",
    anchors: [
      ["2:20 PM", "United UA 672 arrives BCN"],
      ["3:00 PM", "Seventy Barcelona check-in"]
    ]
  },
  {
    city: "Barcelona",
    date: "Tue, Jun 2",
    title: "Barcelona with Enigma",
    summary: "A flexible Barcelona day with a serious dinner anchor in the evening.",
    anchors: [
      ["8:30 PM", "Enigma reservation for 2; maximum punctuality requested"]
    ]
  },
  {
    city: "Madrid",
    date: "Wed, Jun 3",
    title: "Move to Madrid",
    summary: "Take ILSA iryo 06110 from Barcelona Sants to Madrid Atocha, check in at Gran Hotel Ingles, then dinner and flamenco at Corral de la Moreria.",
    anchors: [
      ["Before 10:45 AM", "Seventy Barcelona check-out"],
      ["10:45 AM", "ILSA iryo 06110 departs Barcelona Sants"],
      ["1:49 PM", "ILSA iryo 06110 arrives Madrid Atocha"],
      ["3:00 PM", "Gran Hotel Ingles check-in"],
      ["9:15 PM", "Corral de la Moreria, reservation W03062026081142"]
    ]
  },
  {
    city: "Madrid",
    date: "Thu, Jun 4",
    title: "Open Madrid Day",
    summary: "Keep this day deliberately flexible until museums, neighborhoods, or lunch plans are chosen.",
    anchors: [
      ["TBD", "Breakfast, lunch, and afternoon plan"]
    ]
  },
  {
    city: "Madrid",
    date: "Fri, Jun 5",
    title: "Madrid and Deessa",
    summary: "A second Madrid day with the Deessa reservation as the evening anchor.",
    anchors: [
      ["8:15 PM", "Deessa reservation for 2, booked through The Fork"]
    ]
  },
  {
    city: "Seville",
    date: "Sat, Jun 6",
    title: "Arrive in Seville",
    summary: "Take Renfe AVE 02082 to Cordoba, continue to Seville on Renfe AVE 02130, then head to the Paella Legacy cooking experience.",
    anchors: [
      ["12:00 PM", "Gran Hotel Ingles check-out"],
      ["8:30 AM", "Renfe AVE 02082 departs Madrid Atocha"],
      ["10:14 AM", "Renfe AVE 02082 arrives Cordoba"],
      ["2:46 PM", "Renfe AVE 02130 departs Cordoba"],
      ["3:39 PM", "Renfe AVE 02130 arrives Seville"],
      ["3:00 PM", "Hotel Alfonso XIII check-in"],
      ["7:15 PM", "Arrive for Paella Legacy"],
      ["7:30 PM", "Paella Legacy starts, booking 2559605193836248"]
    ]
  },
  {
    city: "Seville",
    date: "Sun, Jun 7",
    title: "Alcazar and Dinner",
    summary: "A timed Alcazar tour in the afternoon and La Barra de Canabota late in the evening.",
    anchors: [
      ["12:55 PM", "Arrive for Alcazar tour meeting point"],
      ["1:00 PM", "Alcazar tour, booking GYG2Q9L2BXX5"],
      ["9:15 PM", "La Barra de Canabota dinner"]
    ]
  },
  {
    city: "Barcelona",
    date: "Mon, Jun 8",
    title: "Return to Barcelona",
    summary: "Fly SVQ to BCN on Iberia 5065 operated by Vueling, then return to Seventy Barcelona.",
    anchors: [
      ["12:00 PM", "Hotel Alfonso XIII check-out"],
      ["1:20 PM", "Iberia 5065 / Vueling departs SVQ"],
      ["3:05 PM", "Arrive BCN"],
      ["3:00 PM", "Seventy Barcelona return stay check-in"]
    ]
  },
  {
    city: "Barcelona",
    date: "Tue, Jun 9",
    title: "Final Barcelona Day",
    summary: "A final flexible day before the transatlantic return flight.",
    anchors: [
      ["TBD", "Breakfast, lunch, dinner, and last-day logistics"]
    ]
  },
  {
    city: "Transit",
    date: "Wed, Jun 10",
    title: "Fly Home",
    summary: "Check out and return to SF on United Polaris.",
    anchors: [
      ["11:00 AM", "Seventy Barcelona return stay check-out"],
      ["4:10 PM", "United UA 673 departs BCN, seats 2D and 2G"],
      ["7:20 PM", "Arrive SFO"]
    ]
  }
];

let transport = [
  {
    id: "travel-united-ua-672",
    type: "Flight",
    route: "SFO -> Barcelona",
    carrier: "United UA 672",
    date: "Sun, May 31 / Mon, Jun 1",
    depart: "6:00 PM",
    arrive: "2:20 PM",
    details: "United Polaris business (C), Boeing 777-200. Seats 9D and 9G. Confirmation PWCZC5.",
    source: "United.com or United app"
  },
  {
    id: "travel-iryo-06110",
    type: "Train",
    route: "Barcelona Sants -> Madrid Atocha",
    carrier: "ILSA iryo 06110",
    date: "Wed, Jun 3",
    depart: "10:45 AM",
    arrive: "1:49 PM",
    details: "PNR IGSIJ0. Infinita Bistro fare. Carriage 1, seats 5A and 5B. Includes 2x Spanish breakfast. Bring accepted ID.",
    source: "Trainline screenshot; Trainline and Iryo emails in Hotmail"
  },
  {
    id: "travel-renfe-ave-02082",
    type: "Train",
    route: "Madrid Atocha -> Cordoba",
    carrier: "Renfe AVE 02082",
    date: "Sat, Jun 6",
    depart: "8:30 AM",
    arrive: "10:14 AM",
    details: "PNR DNCNJ3. Elige Confort fare. Carriage 2, seats 15B and 15C. 0 changes.",
    source: "Trainline screenshot; Trainline emails in Hotmail and Gmail"
  },
  {
    id: "travel-renfe-ave-02130",
    type: "Train",
    route: "Cordoba -> Seville",
    carrier: "Renfe AVE 02130",
    date: "Sat, Jun 6",
    depart: "2:46 PM",
    arrive: "3:39 PM",
    details: "PNR ZL9XPL. Elige Confort fare. Carriage 2, seats 6B and 6C. 0 changes. Bring accepted ID.",
    source: "Trainline screenshot; Trainline emails in Hotmail and Gmail"
  },
  {
    id: "travel-iberia-vueling-5065",
    type: "Flight",
    route: "Seville -> Barcelona",
    carrier: "Iberia 5065 / Vueling",
    date: "Mon, Jun 8",
    depart: "1:20 PM",
    arrive: "3:05 PM",
    details: "Operated by Vueling Airlines. Booking confirmation 7443-6841; airline confirmation AYWXRC.",
    source: "Amex Travel and Hotmail confirmation email"
  },
  {
    id: "travel-united-ua-673",
    type: "Flight",
    route: "Barcelona -> SFO",
    carrier: "United UA 673",
    date: "Wed, Jun 10",
    depart: "4:10 PM",
    arrive: "7:20 PM",
    details: "United Polaris business (Z), Boeing 777-200. Seats 2D and 2G. Confirmation PWCZC5.",
    source: "United.com or United app"
  }
];

let hotels = [
  {
    id: "hotel-seventy-barcelona-first",
    city: "Barcelona",
    name: "Seventy Barcelona",
    details: "May 31 to Jun 3. Lounge Terrace Room. Confirmation 1054492598.",
    note: "Open issue: reservation starts before arrival.",
    address: "carrer Còrsega, 344-352, Barcelona, Barcelona 08037, ES",
    website: "https://www.seventybarcelona.com/en/",
    tripadvisor: "https://www.tripadvisor.com/Hotel_Review-g187497-d19092478-Reviews-Seventy_Barcelona-Barcelona_Catalonia.html"
  },
  {
    id: "hotel-gran-hotel-ingles",
    city: "Madrid",
    name: "Gran Hotel Ingles",
    details: "Jun 3 to Jun 6. Executive Room. Hotel confirmation 9085900789952.",
    note: "Still needed: total amount and cancellation policy.",
    address: "Calle Echegaray, 8, Madrid, Spain, 28014",
    website: "https://www.granhotelingles.com/",
    tripadvisor: "https://www.tripadvisor.com/Search?q=Gran%20Hotel%20Ingl%C3%A9s%20Madrid"
  },
  {
    id: "hotel-alfonso-xiii",
    city: "Seville",
    name: "Hotel Alfonso XIII",
    details: "Jun 6 to Jun 8. Check-in 3:00 PM; check-out 12:00 PM. Deluxe Room, 1 King Bed, Courtyard View. Hotel confirmation 9086737942450.",
    note: "Refundable; 1-night fee applies if cancelled between Jun 5 6:00 PM and Jun 6 6:00 PM local time.",
    address: "San Fernando 2, Seville, Spain, 41004",
    website: "https://www.marriott.com/en-us/hotels/svqlc-hotel-alfonso-xiii-a-luxury-collection-hotel-seville/overview/",
    tripadvisor: "https://www.tripadvisor.com/Hotel_Review-g187443-d191205-Reviews-Hotel_Alfonso_Xiii_A_Luxury_Collection_Hotel_Seville-Seville_Province_of_Seville_Andalu.html"
  },
  {
    id: "hotel-seventy-barcelona-return",
    city: "Barcelona",
    name: "Seventy Barcelona",
    details: "Jun 8 to Jun 10. Lounge Terrace Room. Confirmation 1054494483.",
    note: "Amount captured: 715.08 EUR.",
    address: "carrer Còrsega, 344-352, Barcelona, Barcelona 08037, ES",
    website: "https://www.seventybarcelona.com/en/",
    tripadvisor: "https://www.tripadvisor.com/Hotel_Review-g187497-d19092478-Reviews-Seventy_Barcelona-Barcelona_Catalonia.html"
  }
];

let restaurants = [
  {
    id: "restaurant-enigma",
    city: "Barcelona",
    name: "Enigma",
    date: "Tue, Jun 2",
    start: "8:30 PM",
    end: "TBD",
    sortDate: "2026-06-02T20:30:00",
    details: "Reservation for 2, booked directly through Enigma.",
    address: "Sepúlveda 38-40, 08015 Barcelona",
    website: "https://enigmaconcept.es/",
    tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g187497-d12359883-Reviews-Enigma_Concept-Barcelona_Catalonia.html"
  },
  {
    id: "restaurant-deessa",
    city: "Madrid",
    name: "Deessa",
    date: "Fri, Jun 5",
    start: "8:15 PM",
    end: "TBD",
    sortDate: "2026-06-05T20:15:00",
    details: "Reservation for 2, booked through The Fork.",
    address: "Pl. de la Lealtad, 5, 28014 Madrid",
    website: "https://www.mandarinoriental.com/en/madrid/hotel-ritz/dine/deessa",
    tripadvisor: "https://www.tripadvisor.com/Search?q=Deessa%20Madrid"
  },
  {
    id: "restaurant-la-barra-de-canabota",
    city: "Seville",
    name: "La Barra de Cañabota",
    date: "Sun, Jun 7",
    start: "9:15 PM",
    end: "TBD",
    sortDate: "2026-06-07T21:15:00",
    details: "Dinner reservation for 2.",
    address: "C. Orfila, 5, Casco Antiguo, 41003 Sevilla, Spain",
    website: "https://canabota.es/la-barra/",
    tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g187443-d17733825-Reviews-La_Barra_de_Canabota-Seville_Province_of_Seville_Andalucia.html"
  }
];

let activities = [
  {
    id: "activity-corral-de-la-moreria",
    city: "Madrid",
    name: "Corral de la Morería",
    date: "Wed, Jun 3",
    start: "9:15 PM",
    end: "TBD",
    sortDate: "2026-06-03T21:15:00",
    details: "Dinner and flamenco show for 2. Reservation W03062026081142.",
    address: "Calle de la Morería, 17, 28005 Madrid",
    website: "https://www.corraldelamoreria.com/en/",
    tripadvisor: "https://www.tripadvisor.com/Search?q=Corral%20de%20la%20Moreria%20Madrid"
  },
  {
    id: "activity-paella-legacy",
    city: "Seville",
    name: "Paella Legacy",
    date: "Sat, Jun 6",
    start: "7:30 PM",
    end: "9:00 PM",
    sortDate: "2026-06-06T19:30:00",
    details: "Group Standard Experience for 2. Arrive by 7:15 PM. Booking 2559605193836248.",
    address: "Columnas Romanas, C. Mármoles, 2, Casco Antiguo, 41004 Sevilla, Spain",
    website: "https://paellalegacy.com/",
    tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g187443-d17679314-Reviews-Paella_Legacy_Top_Rated_Paella_Cooking_Class_in_Seville-Seville_Province_of_Sevi.html"
  },
  {
    id: "activity-alcazar-guided-tour",
    city: "Seville",
    name: "Alcazar Guided Tour",
    date: "Sun, Jun 7",
    start: "1:00 PM",
    end: "TBD",
    sortDate: "2026-06-07T13:00:00",
    details: "Small-group Alcazar tour for 2. Arrive by 12:55 PM. Booking GYG2Q9L2BXX5.",
    address: "Plaza del Triunfo, Seville",
    mapUrl: "https://maps.app.goo.gl/rodMC5drgNKA9fBSA",
    website: "https://sevilleuniqueexperiences.com/",
    tripadvisor: "https://www.tripadvisor.com/AttractionProductReview-g187443-d23536201-Small_Group_Alcazar_of_Seville_Guided_Tour_with_entry_ticket-Seville_Province_of_S.html"
  }
];

const SHEET_ID = "1sNllJGDcu2K-AIwFi2fbK785n-THs529jsNFj_L3L5I";
const SHEET_TABS = {
  timeline: "Timeline",
  travel: "Travel",
  lodging: "Lodging",
  restaurants: "Restaurants",
  activities: "Activities",
  dailyPlans: "Daily Plans"
};

const fallbackData = {
  days,
  transport,
  hotels,
  restaurants,
  activities
};

const timelineLinkLabels = new Map([
  ["United UA 672", "travel-united-ua-672"],
  ["ILSA iryo 06110", "travel-iryo-06110"],
  ["Renfe AVE 02082", "travel-renfe-ave-02082"],
  ["Renfe AVE 02130", "travel-renfe-ave-02130"],
  ["Barcelona -> Madrid", "travel-iryo-06110"],
  ["Barcelona Sants", "travel-iryo-06110"],
  ["Madrid Atocha", "travel-iryo-06110"],
  ["Madrid -> Cordoba", "travel-renfe-ave-02082"],
  ["Cordoba -> Seville", "travel-renfe-ave-02130"],
  ["Iberia 5065", "travel-iberia-vueling-5065"],
  ["United UA 673", "travel-united-ua-673"],
  ["Seventy Barcelona check-in", "hotel-seventy-barcelona-first"],
  ["Seventy Barcelona check-out", "hotel-seventy-barcelona-first"],
  ["Gran Hotel Ingles check-in", "hotel-gran-hotel-ingles"],
  ["Gran Hotel Ingles check-out", "hotel-gran-hotel-ingles"],
  ["Hotel Alfonso XIII check-in", "hotel-alfonso-xiii"],
  ["Hotel Alfonso XIII check-out", "hotel-alfonso-xiii"],
  ["Hotel Alfonso XIII", "hotel-alfonso-xiii"],
  ["Seventy Barcelona return stay check-in", "hotel-seventy-barcelona-return"],
  ["Seventy Barcelona return stay check-out", "hotel-seventy-barcelona-return"],
  ["Enigma reservation", "restaurant-enigma"],
  ["Deessa reservation", "restaurant-deessa"],
  ["La Barra de Canabota", "restaurant-la-barra-de-canabota"],
  ["Corral de la Moreria", "activity-corral-de-la-moreria"],
  ["Paella Legacy", "activity-paella-legacy"],
  ["Alcazar tour", "activity-alcazar-guided-tour"]
]);

const summaryLinkReplacements = [
  ["ILSA iryo 06110", '<a class="jumpLink" href="#travel-iryo-06110">ILSA iryo 06110</a>'],
  ["Renfe AVE 02082", '<a class="jumpLink" href="#travel-renfe-ave-02082">Renfe AVE 02082</a>'],
  ["Renfe AVE 02130", '<a class="jumpLink" href="#travel-renfe-ave-02130">Renfe AVE 02130</a>'],
  ["Seventy Barcelona for the first stay", '<a class="jumpLink" href="#hotel-seventy-barcelona-first">Seventy Barcelona</a> for the first stay'],
  ["Gran Hotel Ingles", '<a class="jumpLink" href="#hotel-gran-hotel-ingles">Gran Hotel Ingles</a>'],
  ["Corral de la Moreria", '<a class="jumpLink" href="#activity-corral-de-la-moreria">Corral de la Moreria</a>'],
  ["Deessa reservation", '<a class="jumpLink" href="#restaurant-deessa">Deessa reservation</a>'],
  ["Hotel Alfonso XIII", '<a class="jumpLink" href="#hotel-alfonso-xiii">Hotel Alfonso XIII</a>'],
  ["Paella Legacy", '<a class="jumpLink" href="#activity-paella-legacy">Paella Legacy</a>'],
  ["Alcazar tour", '<a class="jumpLink" href="#activity-alcazar-guided-tour">Alcazar tour</a>'],
  ["La Barra de Canabota", '<a class="jumpLink" href="#restaurant-la-barra-de-canabota">La Barra de Canabota</a>'],
  ["return to Seventy Barcelona", 'return to <a class="jumpLink" href="#hotel-seventy-barcelona-return">Seventy Barcelona</a>']
];

const timeline = document.querySelector(".timeline");
const transportGrid = document.querySelector(".transportGrid");
const stayGrid = document.querySelector(".stayGrid");
const restaurantGrid = document.querySelector(".restaurantGrid");
const activityGrid = document.querySelector(".activityGrid");
const dataStatus = document.querySelector(".dataStatus");
const timelineFilterButtons = document.querySelectorAll('[data-filter-group="timeline"] button');

function setDataStatus(message, state = "loading") {
  if (!dataStatus) return;

  dataStatus.textContent = message;
  dataStatus.dataset.state = state;
}

function normalizeHeader(label = "") {
  return String(label)
    .trim()
    .replace(/[/()]+/g, " ")
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, letter) => letter.toUpperCase())
    .replace(/^[A-Z]/, (letter) => letter.toLowerCase());
}

function cellText(cell) {
  if (!cell) return "";
  if (cell.f !== null && cell.f !== undefined) return String(cell.f).trim();
  if (cell.v === null || cell.v === undefined) return "";
  return String(cell.v).trim();
}

function tableToRows(table) {
  const hasColumnLabels = table.cols.some((column) => column.label);
  const headerCells = hasColumnLabels ? null : table.rows[0]?.c || [];
  const headers = hasColumnLabels
    ? table.cols.map((column, index) => normalizeHeader(column.label || column.id || `Column ${index + 1}`))
    : headerCells.map((cell, index) => normalizeHeader(cellText(cell) || `Column ${index + 1}`));
  const dataRows = hasColumnLabels ? table.rows : table.rows.slice(1);

  return dataRows
    .map((row) => row.c.reduce((record, cell, index) => {
      record[headers[index]] = cellText(cell);
      return record;
    }, {}))
    .filter((row) => Object.values(row).some(Boolean));
}

function readSheetTab(tabName) {
  return new Promise((resolve, reject) => {
    const previousGoogle = window.google;
    const previousSetResponse = previousGoogle?.visualization?.Query?.setResponse;
    const script = document.createElement("script");
    let settled = false;
    let timeout;

    window.google = window.google || {};
    window.google.visualization = window.google.visualization || {};
    window.google.visualization.Query = window.google.visualization.Query || {};

    function cleanup() {
      window.clearTimeout(timeout);
      script.remove();
      if (previousSetResponse) {
        window.google.visualization.Query.setResponse = previousSetResponse;
      } else if (window.google?.visualization?.Query) {
        delete window.google.visualization.Query.setResponse;
      }
    }

    window.google.visualization.Query.setResponse = (response) => {
      if (settled) return;
      settled = true;
      cleanup();

      if (response.status === "error") {
        reject(new Error(response.errors?.[0]?.detailed_message || `Could not load ${tabName}`));
        return;
      }

      resolve(tableToRows(response.table));
    };

    script.onerror = () => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error(`Could not load ${tabName}`));
    };

    timeout = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error(`Timed out loading ${tabName}`));
    }, 8000);

    script.src = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
    document.head.appendChild(script);
  });
}

async function readTripSheet() {
  const rowsByTab = {};

  for (const [key, tabName] of Object.entries(SHEET_TABS)) {
    try {
      rowsByTab[key] = await readSheetTab(tabName);
    } catch (error) {
      rowsByTab[key] = [];
      console.warn(error);
    }
  }

  const hasSheetData = Object.values(rowsByTab).some((rows) => rows.length > 0);
  if (!hasSheetData) throw new Error("No readable Google Sheet tabs found.");

  return rowsByTab;
}

function getValue(row, keys) {
  return keys.map((key) => row[key]).find(Boolean) || "";
}

function slugify(value, fallback) {
  const slug = String(value || fallback || "item")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || fallback;
}

function parseSheetDate(value) {
  const text = String(value || "").trim();
  const gvizDate = text.match(/^Date\((\d+),(\d+),(\d+)/);
  if (gvizDate) return new Date(Number(gvizDate[1]), Number(gvizDate[2]), Number(gvizDate[3]));

  const parsed = Date.parse(text);
  return Number.isNaN(parsed) ? null : new Date(parsed);
}

function displayDate(value) {
  const date = parseSheetDate(value);
  if (!date) return value || "TBD";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(date);
}

function sortDateTime(dateValue, timeValue) {
  const date = parseSheetDate(dateValue);
  if (!date) return 0;

  const normalizedTime = String(timeValue || "12:00 AM").replace(/^(before|by)\s+/i, "");
  const parsedTime = Date.parse(`${date.toDateString()} ${normalizedTime}`);
  return Number.isNaN(parsedTime) ? date.getTime() : parsedTime;
}

function usefulText(value) {
  const text = String(value || "").trim();
  return text && text.toUpperCase() !== "TBD" ? text : "";
}

function urlValue(value) {
  const text = usefulText(value);
  return /^https?:\/\//i.test(text) ? text : "";
}

function matchingFallback(items, name) {
  const normalizedName = slugify(name);
  return items.find((item) => slugify(item.name || item.route) === normalizedName)
    || items.find((item) => normalizedName.includes(slugify(item.name || item.route)) || slugify(item.name || item.route).includes(normalizedName));
}

function fallbackUrl(fallbackItem, key) {
  return fallbackItem?.[key] || "";
}

function compactTripText(value) {
  return String(value || "").replace(/\bSan Francisco\b/g, "SF");
}

function sameCalendarDate(a, b) {
  const first = parseSheetDate(a);
  const second = parseSheetDate(b);
  return !!first && !!second
    && first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate();
}

function checkoutDeadlineFromText(value) {
  return String(value || "").match(/check-?out\s+(\d{1,2}:\d{2}\s*[AP]M)/i)?.[1] || "";
}

function addOrReplaceAnchor(day, time, label, meta = {}) {
  const normalizedLabel = slugify(label);
  const targetId = meta.targetId || "";
  const existingIndex = day.anchors.findIndex((anchor) => (
    (targetId && anchor[2]?.targetId === targetId && includesLoose(anchor[1], label))
    || slugify(anchor[1]) === normalizedLabel
  ));
  const anchor = [time, label, meta];

  if (existingIndex >= 0) {
    day.anchors[existingIndex] = anchor;
    return;
  }

  day.anchors.push(anchor);
}

function normalizeCheckoutAnchors(day) {
  day.anchors = day.anchors.map(([time, label, meta = {}]) => {
    if (!/check-?out|check out/i.test(label)) return [time, label, meta];

    const normalizedTime = String(time || "").replace(/^before\s+/i, "by ");
    return [
      /^by\s+/i.test(normalizedTime) ? normalizedTime : `by ${normalizedTime}`,
      label,
      { ...meta, priority: -1 }
    ];
  });
}

function sortDayAnchors(day) {
  normalizeCheckoutAnchors(day);
  return day.anchors.sort((a, b) => {
    const priorityA = a[2]?.priority ?? 0;
    const priorityB = b[2]?.priority ?? 0;
    if (priorityA !== priorityB) return priorityA - priorityB;

    return sortDateTime(day.rawDate, a[0]) - sortDateTime(day.rawDate, b[0]);
  });
}

function cityNameFromRoutePart(routePart) {
  const text = String(routePart || "").trim();
  return text.split(/\s+/)[0] || text;
}

function addTravelArrivalsToDays(dayList, travelItems) {
  travelItems.forEach((item) => {
    const existingArrival = dayList.some((day) => day.anchors.some((anchor) => (
      anchor[2]?.targetId === item.id && /\b(arrive|arrival)\b/i.test(anchor[1])
    )));
    if (existingArrival) return;

    const arrivalTime = usefulText(item.arrive);
    if (!arrivalTime) return;

    const departureDay = dayList.find((day) => day.anchors.some((anchor) => (
      anchor[2]?.targetId === item.id || travelLabelMatchesItem(anchor[1], item)
    )));
    const rawArrivalDate = item.rawArriveDate || item.rawDepartDate;
    const day = departureDay || dayList.find((candidate) => sameCalendarDate(candidate.rawDate, rawArrivalDate));

    if (!day) return;

    const destination = item.arriveTo || item.route.split(/\s*->\s*/)[1] || item.route;
    const label = `${item.type} arrives ${destination}`;
    addOrReplaceAnchor(day, arrivalTime, label, { targetId: item.id });
  });
}

function linkExistingTravelAnchors(dayList, travelItems) {
  dayList.forEach((day) => {
    day.anchors = day.anchors.map(([time, label, meta = {}]) => {
      if (meta.targetId) return [time, label, meta];

      const travelItem = travelItems.find((item) => travelLabelMatchesItem(label, item));
      return travelItem ? [time, label, { ...meta, targetId: travelItem.id }] : [time, label, meta];
    });
  });
}

function updateCheckoutDeadlines(dayList, hotelItems) {
  dayList.forEach((day) => {
    day.anchors = day.anchors.map(([time, label, meta = {}]) => {
      if (!/check-?out|check out/i.test(label)) return [time, label, meta];

      const targetId = meta.targetId || findCurrentCardId(label);
      const hotel = hotelItems.find((item) => item.id === targetId);
      const deadline = usefulText(hotel?.checkOutTime) || checkoutDeadlineFromText(hotel?.details) || String(time || "").replace(/^(before|by)\s+/i, "");

      return [
        `by ${deadline || "12:00 PM"}`,
        label,
        { ...meta, targetId, priority: -1 }
      ];
    });
  });
}

function dataHasId(id) {
  return [...transport, ...hotels, ...restaurants, ...activities].some((item) => item.id === id);
}

function includesLoose(haystack, needle) {
  const normalizedHaystack = slugify(haystack);
  const normalizedNeedle = slugify(needle);
  return normalizedHaystack && normalizedNeedle && (
    normalizedHaystack.includes(normalizedNeedle) || normalizedNeedle.includes(normalizedHaystack)
  );
}

function routeAliases(route) {
  const text = String(route || "").trim();
  if (!text) return [];

  const arrowParts = text.split(/\s*->\s*/).filter(Boolean);
  return [
    text,
    text.replace(/\s*->\s*/g, " to "),
    arrowParts.length === 2 ? `${arrowParts[1]} from ${arrowParts[0]}` : "",
    arrowParts.length === 2 ? `Train ${arrowParts[0]} to ${arrowParts[1]}` : "",
    arrowParts.length === 2 ? `Fly ${arrowParts[0]} to ${arrowParts[1]}` : ""
  ].filter(Boolean);
}

function locationKeywords(value) {
  return String(value || "")
    .split(/[^a-zA-Z0-9]+/)
    .map((part) => part.trim().toLowerCase())
    .filter((part) => part.length >= 3);
}

function travelLabelMatchesItem(label, item) {
  const normalizedLabel = slugify(label);
  if (!normalizedLabel) return false;

  if (item.carrier && includesLoose(label, item.carrier)) return true;
  if (routeAliases(item.route).some((alias) => includesLoose(label, alias))) return true;

  const routeParts = String(item.route || "").split(/\s*->\s*/);
  const originKeywords = locationKeywords(item.departFrom || routeParts[0]);
  const destinationKeywords = locationKeywords(item.arriveTo || routeParts[1]);
  const hasTravelWord = /\b(train|fly|flight|depart|arrive|arrival)\b/i.test(label);
  const originIndex = originKeywords
    .map((keyword) => normalizedLabel.indexOf(keyword))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0];
  const destinationIndex = destinationKeywords
    .map((keyword) => normalizedLabel.indexOf(keyword))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0];
  const hasOrigin = originIndex !== undefined;
  const hasDestination = destinationIndex !== undefined;
  const routeDirectionMatches = normalizedLabel.includes("from")
    ? destinationIndex < originIndex
    : originIndex < destinationIndex;

  return hasTravelWord && hasOrigin && hasDestination && routeDirectionMatches;
}

function fallbackHotelFor(property, checkInDate) {
  const matchingHotels = fallbackData.hotels.filter((hotel) => includesLoose(hotel.name, property));
  if (matchingHotels.length <= 1) return matchingHotels[0];

  const parsedCheckIn = parseSheetDate(checkInDate);
  const monthDay = parsedCheckIn
    ? `${parsedCheckIn.getMonth() + 1}/${parsedCheckIn.getDate()}`
    : String(checkInDate || "");

  if (/6\/8|jun 8/i.test(monthDay)) {
    return matchingHotels.find((hotel) => /return/i.test(hotel.id)) || matchingHotels[1];
  }

  return matchingHotels.find((hotel) => !/return/i.test(hotel.id)) || matchingHotels[0];
}

function findCurrentCardId(label, targetId = "") {
  if (targetId && dataHasId(targetId)) return targetId;

  const transportByLabel = transport.find((item) => travelLabelMatchesItem(label, item));

  if (transportByLabel) return transportByLabel.id;

  const candidates = [
    ...transport.map((item) => ({
      id: item.id,
      aliases: [item.carrier, item.route, item.details]
    })),
    ...hotels.map((item) => ({
      id: item.id,
      aliases: [item.name, item.details, item.note]
    })),
    ...restaurants.map((item) => ({
      id: item.id,
      aliases: [item.name, item.details, item.address]
    })),
    ...activities.map((item) => ({
      id: item.id,
      aliases: [item.name, item.details, item.address]
    }))
  ];

  if (/seventy barcelona/i.test(label)) {
    const seventyHotels = hotels.filter((hotel) => includesLoose(hotel.name, "Seventy Barcelona"));
    if (/return/i.test(label)) {
      return seventyHotels.find((hotel) => /return|jun 8/i.test(`${hotel.id} ${hotel.details}`))?.id || seventyHotels[1]?.id || "";
    }
    return seventyHotels.find((hotel) => !/return|jun 8/i.test(`${hotel.id} ${hotel.details}`))?.id || seventyHotels[0]?.id || "";
  }

  return candidates.find((candidate) => (
    candidate.aliases.some((alias) => alias && includesLoose(label, alias))
  ))?.id || "";
}

function buildDays(timelineRows, dailyPlanRows) {
  if (!timelineRows.length && !dailyPlanRows.length) return fallbackData.days;

  const plansByDate = new Map(dailyPlanRows.map((row) => [getValue(row, ["date"]), row]));
  const grouped = new Map();

  dailyPlanRows.forEach((plan) => {
    const date = getValue(plan, ["date"]);
    if (!date) return;

    const city = getValue(plan, ["city"]) || "Trip";
    const planSummary = [plan.morning, plan.afternoon, plan.evening].filter(usefulText).join(" ");
    grouped.set(date, {
      city,
      date: displayDate(date),
      rawDate: date,
      title: `${city} plan`,
      summary: planSummary || getValue(plan, ["notes"]) || "Flexible planning day.",
      anchors: []
    });
  });

  timelineRows.forEach((row) => {
    const date = getValue(row, ["date"]);
    const plan = plansByDate.get(date) || {};
    const city = getValue(plan, ["city"]) || getValue(row, ["city"]) || "Trip";
    const summary = getValue(row, ["summary", "relatedItem", "activity", "tripLeg"]);
    if (!date || !summary) return;

    const key = date;
    if (!grouped.has(key)) {
      const planSummary = [plan.morning, plan.afternoon, plan.evening].filter(usefulText).join(" ");
      grouped.set(key, {
        city,
        date: displayDate(date),
        rawDate: date,
        title: usefulText(planSummary) ? `${city} plan` : `${city} operating day`,
        summary: planSummary || "Scheduled anchors from the master itinerary.",
        anchors: []
      });
    }

    grouped.get(key).anchors.push([
      getValue(row, ["localTime", "time", "startTime"]) || "TBD",
      summary
    ]);
  });

  return [...grouped.values()]
    .map((day) => ({
      ...day,
      anchors: sortDayAnchors(day)
    }))
    .sort((a, b) => parseSheetDate(a.rawDate) - parseSheetDate(b.rawDate));
}

function buildTransport(travelRows) {
  if (!travelRows.length) return fallbackData.transport;

  return travelRows.map((row, index) => {
    const tripLeg = getValue(row, ["tripLeg"]);
    const carrier = getValue(row, ["carrier"]);
    const flightTrain = getValue(row, ["flightTrain", "flight", "train"]);
    const departFrom = getValue(row, ["departFrom"]);
    const arriveTo = getValue(row, ["arriveTo"]);
    const departDate = getValue(row, ["departDate"]);
    const arriveDate = getValue(row, ["arriveDate"]) || departDate;
    const confirmation = getValue(row, ["confirmation", "ticketRecordLocator"]);
    const notes = getValue(row, ["notesSourceOfTruth", "source", "notes"]);
    const fallbackTrip = matchingFallback(fallbackData.transport, tripLeg || `${departFrom} -> ${arriveTo}`);

    return {
      id: fallbackTrip?.id || `travel-${slugify(tripLeg || flightTrain || index, index)}`,
      type: /flight|air|iberia|united|vueling/i.test(`${carrier} ${flightTrain}`) ? "Flight" : "Train",
      route: tripLeg || `${departFrom} -> ${arriveTo}`,
      carrier: [carrier, flightTrain].filter(Boolean).join(" "),
      date: displayDate(departDate),
      depart: getValue(row, ["departTime"]) || "TBD",
      arrive: getValue(row, ["arriveTime"]) || "TBD",
      rawDepartDate: departDate,
      rawArriveDate: arriveDate,
      departFrom,
      arriveTo,
      details: [
        getValue(row, ["aircraftEquipment", "cabinFare"]),
        getValue(row, ["seats"]),
        confirmation && `Confirmation ${confirmation}`,
        getValue(row, ["status"])
      ].filter(Boolean).join(". "),
      source: notes
    };
  });
}

function buildHotels(lodgingRows) {
  if (!lodgingRows.length) return fallbackData.hotels;

  return lodgingRows.map((row, index) => {
    const property = getValue(row, ["property", "name"]);
    const checkInDate = getValue(row, ["checkInDate"]);
    const checkOutDate = getValue(row, ["checkOutDate"]);
    const checkOutTime = getValue(row, ["checkOutTime", "checkoutTime", "checkOut", "checkout"]);
    const fallbackHotel = fallbackHotelFor(property, checkInDate);
    return {
      id: fallbackHotel?.id || `hotel-${slugify(`${property}-${checkInDate}`, index)}`,
      city: getValue(row, ["city"]) || "Trip",
      name: property || "Lodging",
      details: [
        displayDate(checkInDate),
        "to",
        displayDate(checkOutDate),
        getValue(row, ["confirmation"]) && `Confirmation ${getValue(row, ["confirmation"])}`,
        getValue(row, ["room"])
      ].filter(Boolean).join(" "),
      rawCheckInDate: checkInDate,
      rawCheckOutDate: checkOutDate,
      checkOutTime,
      note: getValue(row, ["notes", "cancellationNotes", "status"]),
      address: getValue(row, ["address"]),
      mapUrl: urlValue(getValue(row, ["mapLink"])),
      website: urlValue(getValue(row, ["website"])) || fallbackUrl(fallbackHotel, "website"),
      tripadvisor: urlValue(getValue(row, ["tripadvisorReviews", "tripadvisor"])) || fallbackUrl(fallbackHotel, "tripadvisor")
    };
  });
}

function buildTimedItems(rows, options) {
  if (!rows.length) return options.fallback;

  return rows.map((row, index) => {
    const name = getValue(row, options.nameKeys);
    const date = getValue(row, ["date"]);
    const start = getValue(row, options.startKeys);
    const confirmation = getValue(row, ["confirmation", "bookingReference"]);
    const guests = getValue(row, ["diners", "guests"]);
    const fallbackItem = matchingFallback(options.fallback, name);

    return {
      id: fallbackItem?.id || `${options.idPrefix}-${slugify(`${name}-${date}`, index)}`,
      city: getValue(row, ["city"]) || "Trip",
      name: name || options.fallbackName,
      date: displayDate(date),
      start: start || "TBD",
      end: getValue(row, ["end", "endTime"]) || "TBD",
      sortDate: sortDateTime(date, start),
      details: [
        guests && `${guests} ${options.guestLabel}`,
        confirmation && `Confirmation ${confirmation}`,
        getValue(row, ["notes", "provider", "status"])
      ].filter(Boolean).join(". "),
      address: getValue(row, ["address", "meetingPoint"]),
      mapUrl: urlValue(getValue(row, ["mapLink"])),
      website: urlValue(getValue(row, ["website"])) || fallbackUrl(fallbackItem, "website"),
      tripadvisor: urlValue(getValue(row, ["tripadvisorReviews", "tripadvisor"])) || fallbackUrl(fallbackItem, "tripadvisor")
    };
  });
}

function applySheetRows(rowsByTab) {
  transport = buildTransport(rowsByTab.travel);
  hotels = buildHotels(rowsByTab.lodging);
  days = buildDays(rowsByTab.timeline, rowsByTab.dailyPlans);
  linkExistingTravelAnchors(days, transport);
  updateCheckoutDeadlines(days, hotels);
  addTravelArrivalsToDays(days, transport);
  days.forEach((day) => {
    day.anchors = sortDayAnchors(day);
  });
  restaurants = buildTimedItems(rowsByTab.restaurants, {
    fallback: fallbackData.restaurants,
    fallbackName: "Restaurant",
    guestLabel: "diners",
    idPrefix: "restaurant",
    nameKeys: ["restaurant", "name"],
    startKeys: ["time", "startTime"]
  });
  activities = buildTimedItems(rowsByTab.activities, {
    fallback: fallbackData.activities,
    fallbackName: "Activity",
    guestLabel: "guests",
    idPrefix: "activity",
    nameKeys: ["activity", "name"],
    startKeys: ["startTime", "time"]
  });
}

function mapUrlFor(item) {
  return item.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address || item.name)}`;
}

function renderLinks(item) {
  const links = [
    item.website && `<a href="${item.website}">Website</a>`,
    item.tripadvisor && `<a href="${item.tripadvisor}">Tripadvisor</a>`,
    (item.mapUrl || item.address) && `<a href="${mapUrlFor(item)}">Google Maps</a>`
  ].filter(Boolean).join("");

  return links ? `<p class="links">${links}</p>` : "";
}

function linkToKnownCard(label, targetId = "") {
  const match = [...timelineLinkLabels].find(([text]) => label.includes(text));
  const resolvedTargetId = findCurrentCardId(label, targetId || match?.[1]);
  if (!resolvedTargetId) return label;

  return `<a class="jumpLink" href="#${resolvedTargetId}">${label}</a>`;
}

function linkSummaryTerms(summary) {
  return summaryLinkReplacements.reduce((linked, [phrase, replacement]) => {
    const legacyTarget = replacement.match(/href="#([^"]+)"/)?.[1] || "";
    const targetId = findCurrentCardId(phrase, legacyTarget);
    const dynamicReplacement = targetId
      ? replacement.replace(/href="#[^"]+"/, `href="#${targetId}"`)
      : phrase;

    return linked.replace(phrase, dynamicReplacement);
  }, summary);
}

function renderDays(city = "All") {
  const visible = city === "All" ? days : days.filter((day) => day.city.includes(city));
  timeline.innerHTML = visible.map((day) => `
    <article class="dayCard">
      <div class="dayTop">
        <div class="dateBlock">
          <span>${compactTripText(day.city)}</span>
          <strong>${compactTripText(day.date)}</strong>
        </div>
        <span class="badge ${day.city}">${compactTripText(day.city)}</span>
      </div>
      <h3>${compactTripText(day.title)}</h3>
      <p>${linkSummaryTerms(compactTripText(day.summary))}</p>
      <div class="anchors">
        ${day.anchors.map(([time, label, meta = {}]) => `
          <div class="anchor">
            <time>${compactTripText(time)}</time>
            <span>${linkToKnownCard(compactTripText(label), meta.targetId)}</span>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderHotels() {
  stayGrid.innerHTML = hotels.map((hotel) => `
    <article id="${hotel.id}">
      <span class="city">${compactTripText(hotel.city)}</span>
      <h3>${compactTripText(hotel.name)}</h3>
      <p>${compactTripText(hotel.details)}</p>
      ${hotel.address ? `<p class="address">${compactTripText(hotel.address)}</p>` : ""}
      ${renderLinks(hotel)}
      ${hotel.note ? `<small>${compactTripText(hotel.note)}</small>` : ""}
    </article>
  `).join("");
  externalLinksInNewWindow();
}

function renderTransport() {
  transportGrid.innerHTML = transport.map((item) => `
    <article id="${item.id}">
      <span>${compactTripText(item.type)}</span>
      <h3>${compactTripText(item.route)}</h3>
      <dl class="timeMeta">
        <div><dt>Date</dt><dd>${compactTripText(item.date)}</dd></div>
        <div><dt>Depart</dt><dd>${compactTripText(item.depart)}</dd></div>
        <div><dt>Arrive</dt><dd>${compactTripText(item.arrive)}</dd></div>
      </dl>
      <p class="address">${compactTripText(item.carrier)}</p>
      <p>${compactTripText(item.details)}</p>
      ${item.source ? `<small>${compactTripText(item.source)}</small>` : ""}
    </article>
  `).join("");
}

function renderTimedCards(items, grid, city = "All") {
  const visible = [...items]
    .filter((item) => city === "All" || item.city === city)
    .sort((a, b) => new Date(a.sortDate) - new Date(b.sortDate));

  grid.innerHTML = visible.map((item) => `
    <article id="${item.id}">
      <span class="city">${compactTripText(item.city)}</span>
      <h3>${compactTripText(item.name)}</h3>
      <dl class="timeMeta">
        <div><dt>Date</dt><dd>${compactTripText(item.date)}</dd></div>
        <div><dt>Start</dt><dd>${compactTripText(item.start)}</dd></div>
        <div><dt>End</dt><dd>${compactTripText(item.end)}</dd></div>
      </dl>
      ${item.details ? `<p>${compactTripText(item.details)}</p>` : ""}
      ${item.address ? `<p class="address">${compactTripText(item.address)}</p>` : ""}
      ${renderLinks(item)}
    </article>
  `).join("");
  externalLinksInNewWindow();
}

function externalLinksInNewWindow() {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function setActiveFilter(group, city) {
  document.querySelectorAll(`[data-filter-group="${group}"] button`).forEach((button) => {
    button.classList.toggle("active", button.dataset.city === city);
  });
}

function wireFilterButtons(group, render) {
  document.querySelectorAll(`[data-filter-group="${group}"] button`).forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(group, button.dataset.city);
      render(button.dataset.city);
    });
  });
}

timelineFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timelineFilterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderDays(button.dataset.city);
  });
});

wireFilterButtons("restaurants", (city) => renderTimedCards(restaurants, restaurantGrid, city));
wireFilterButtons("activities", (city) => renderTimedCards(activities, activityGrid, city));

timeline.addEventListener("click", (event) => {
  const link = event.target.closest('a.jumpLink[href^="#"]');
  if (!link) return;

  const targetId = decodeURIComponent(link.getAttribute("href").slice(1));
  const restaurant = restaurants.find((item) => item.id === targetId);
  const activity = activities.find((item) => item.id === targetId);

  if (restaurant && !document.getElementById(targetId)) {
    setActiveFilter("restaurants", "All");
    renderTimedCards(restaurants, restaurantGrid, "All");
  }

  if (activity && !document.getElementById(targetId)) {
    setActiveFilter("activities", "All");
    renderTimedCards(activities, activityGrid, "All");
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  event.preventDefault();
  history.pushState(null, "", `#${targetId}`);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

function renderAll() {
  const activeTimelineCity = document.querySelector('[data-filter-group="timeline"] button.active')?.dataset.city || "All";
  const activeRestaurantCity = document.querySelector('[data-filter-group="restaurants"] button.active')?.dataset.city || "All";
  const activeActivityCity = document.querySelector('[data-filter-group="activities"] button.active')?.dataset.city || "All";

  renderDays(activeTimelineCity);
  renderTransport();
  renderHotels();
  renderTimedCards(restaurants, restaurantGrid, activeRestaurantCity);
  renderTimedCards(activities, activityGrid, activeActivityCity);
  externalLinksInNewWindow();
}

async function initializeApp() {
  renderAll();
  setDataStatus("Loading live itinerary from Google Sheets...");

  try {
    const rowsByTab = await readTripSheet();
    applySheetRows(rowsByTab);
    renderAll();
    setDataStatus("Live from Google Sheets. Refresh after editing the master itinerary.", "live");
  } catch (error) {
    console.warn(error);
    setDataStatus("Using embedded itinerary data. Make the Google Sheet publicly viewable to enable live loading.", "fallback");
  }
}

initializeApp();
