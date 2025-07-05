export interface HijriDate {
  day: number;
  month: number;
  year: number;
  monthName: string;
  monthNameEn: string;
}

export interface IslamicEvent {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  type: "religious" | "historical" | "celebration" | "fast" | "pilgrimage";
  hijriDate: {
    day: number;
    month: number;
  };
  isRecurring: boolean;
  priority: "high" | "medium" | "low";
}

// Islamic month names in Arabic and English
const ISLAMIC_MONTHS = [
  { ar: "محرم", en: "Muharram" },
  { ar: "صفر", en: "Safar" },
  { ar: "ربيع الأول", en: "Rabi' al-awwal" },
  { ar: "ربيع الثاني", en: "Rabi' al-thani" },
  { ar: "جمادى الأولى", en: "Jumada al-awwal" },
  { ar: "جمادى الثانية", en: "Jumada al-thani" },
  { ar: "رجب", en: "Rajab" },
  { ar: "شعبان", en: "Sha'ban" },
  { ar: "رمضان", en: "Ramadan" },
  { ar: "شوال", en: "Shawwal" },
  { ar: "ذو القعدة", en: "Dhu al-Qi'dah" },
  { ar: "ذو الحجة", en: "Dhu al-Hijjah" },
];

// Islamic events throughout the year
const ISLAMIC_EVENTS: IslamicEvent[] = [
  // Muharram (1st month)
  {
    id: "new-year",
    title: "رأس السنة الهجرية",
    titleEn: "Islamic New Year",
    description: "بداية السنة الهجرية الجديدة",
    type: "historical",
    hijriDate: { day: 1, month: 1 },
    isRecurring: true,
    priority: "medium",
  },
  {
    id: "ashura",
    title: "يوم عاشوراء",
    titleEn: "Day of Ashura",
    description: "يوم صيام وذكرى نجاة موسى عليه السلام من فرعون",
    type: "religious",
    hijriDate: { day: 10, month: 1 },
    isRecurring: true,
    priority: "high",
  },

  // Rabi' al-awwal (3rd month)
  {
    id: "mawlid",
    title: "المولد النبوي الشريف",
    titleEn: "Prophet's Birthday",
    description: "ذكرى ولادة النبي محمد صلى الله عليه وسلم",
    type: "celebration",
    hijriDate: { day: 12, month: 3 },
    isRecurring: true,
    priority: "high",
  },

  // Rajab (7th month)
  {
    id: "isra-miraj",
    title: "الإسراء والمعراج",
    titleEn: "Night Journey and Ascension",
    description: "ذكرى رحلة الإسراء والمعراج",
    type: "religious",
    hijriDate: { day: 27, month: 7 },
    isRecurring: true,
    priority: "high",
  },

  // Sha'ban (8th month)
  {
    id: "shaban-15",
    title: "ليلة النصف من شعبان",
    titleEn: "Mid-Sha'ban Night",
    description: "ليلة مباركة يُستحب فيها الدعاء والقيام",
    type: "religious",
    hijriDate: { day: 15, month: 8 },
    isRecurring: true,
    priority: "medium",
  },

  // Ramadan (9th month)
  {
    id: "ramadan-start",
    title: "بداية شهر رمضان",
    titleEn: "Start of Ramadan",
    description: "بداية شهر الصيام المبارك",
    type: "fast",
    hijriDate: { day: 1, month: 9 },
    isRecurring: true,
    priority: "high",
  },
  {
    id: "laylat-qadr",
    title: "ليلة القدر",
    titleEn: "Night of Decree",
    description: "ليلة خير ��ن ألف شهر، تُطلب في العشر الأواخر من رمضان",
    type: "religious",
    hijriDate: { day: 27, month: 9 }, // Commonly believed to be 27th
    isRecurring: true,
    priority: "high",
  },

  // Shawwal (10th month)
  {
    id: "eid-fitr",
    title: "عيد الفطر المبارك",
    titleEn: "Eid al-Fitr",
    description: "عيد انتهاء شهر رمضان المبارك",
    type: "celebration",
    hijriDate: { day: 1, month: 10 },
    isRecurring: true,
    priority: "high",
  },

  // Dhu al-Hijjah (12th month)
  {
    id: "hajj-start",
    title: "بداية موسم الحج",
    titleEn: "Start of Hajj Season",
    description: "بداية أشهر الحج وموسم الحج إلى بيت الله الحرام",
    type: "pilgrimage",
    hijriDate: { day: 8, month: 12 },
    isRecurring: true,
    priority: "high",
  },
  {
    id: "arafat",
    title: "يوم عرفة",
    titleEn: "Day of Arafat",
    description: "يوم الحج الأكبر ويوم صيام لغير الحجاج",
    type: "religious",
    hijriDate: { day: 9, month: 12 },
    isRecurring: true,
    priority: "high",
  },
  {
    id: "eid-adha",
    title: "عيد الأضحى المبارك",
    titleEn: "Eid al-Adha",
    description: "عيد الحج والأضحية",
    type: "celebration",
    hijriDate: { day: 10, month: 12 },
    isRecurring: true,
    priority: "high",
  },
];

/**
 * Convert Gregorian date to approximate Hijri date
 * This is a simplified conversion for display purposes
 * For accurate dates, use a proper Islamic calendar API
 */
export function getHijriDate(gregorianDate: Date): HijriDate {
  // Simplified conversion (not astronomically accurate)
  // Using epoch: July 16, 622 CE (1 Muharram 1 AH)
  const islamicEpoch = new Date("622-07-16");
  const daysDiff = Math.floor(
    (gregorianDate.getTime() - islamicEpoch.getTime()) / (1000 * 60 * 60 * 24),
  );

  // Average Islamic year is about 354.367 days
  const islamicYearLength = 354.367;
  const year = Math.floor(daysDiff / islamicYearLength) + 1;

  // Calculate month and day (simplified)
  const dayInYear = daysDiff % islamicYearLength;
  const month = Math.floor(dayInYear / 29.5) + 1;
  const day = Math.floor(dayInYear % 29.5) + 1;

  // Ensure valid ranges
  const validMonth = Math.max(1, Math.min(12, month));
  const validDay = Math.max(1, Math.min(30, day));

  return {
    day: validDay,
    month: validMonth,
    year: year,
    monthName: ISLAMIC_MONTHS[validMonth - 1]?.ar || "شهر غير مع��وف",
    monthNameEn: ISLAMIC_MONTHS[validMonth - 1]?.en || "Unknown Month",
  };
}

/**
 * Get Islamic events for a specific Hijri date
 */
export function getIslamicEvents(hijriDate: HijriDate): IslamicEvent[] {
  return ISLAMIC_EVENTS.filter(
    (event) =>
      event.hijriDate.day === hijriDate.day &&
      event.hijriDate.month === hijriDate.month,
  );
}

/**
 * Get all Islamic events for a specific month
 */
export function getMonthEvents(month: number): IslamicEvent[] {
  return ISLAMIC_EVENTS.filter((event) => event.hijriDate.month === month);
}

/**
 * Get upcoming Islamic events (next 30 days)
 */
export function getUpcomingEvents(
  startDate: Date = new Date(),
): IslamicEvent[] {
  const events: IslamicEvent[] = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < 30; i++) {
    const hijri = getHijriDate(currentDate);
    const dayEvents = getIslamicEvents(hijri);
    events.push(...dayEvents);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return events.sort((a, b) => {
    if (a.priority === "high" && b.priority !== "high") return -1;
    if (b.priority === "high" && a.priority !== "high") return 1;
    return 0;
  });
}

/**
 * Check if a date is a special Islamic day
 */
export function isSpecialDay(hijriDate: HijriDate): boolean {
  return getIslamicEvents(hijriDate).length > 0;
}

/**
 * Get the current Hijri date
 */
export function getCurrentHijriDate(): HijriDate {
  return getHijriDate(new Date());
}

/**
 * Format Hijri date as string
 */
export function formatHijriDate(
  hijriDate: HijriDate,
  language: "ar" | "en" = "ar",
): string {
  if (language === "en") {
    return `${hijriDate.day} ${hijriDate.monthNameEn} ${hijriDate.year} AH`;
  }
  return `${hijriDate.day} ${hijriDate.monthName} ${hijriDate.year} هـ`;
}

/**
 * Get Islamic month names
 */
export function getIslamicMonths() {
  return ISLAMIC_MONTHS;
}

/**
 * Get the name of an Islamic month
 */
export function getIslamicMonthName(
  monthNumber: number,
  language: "ar" | "en" = "ar",
): string {
  const month = ISLAMIC_MONTHS[monthNumber - 1];
  if (!month) return "";
  return language === "ar" ? month.ar : month.en;
}

/**
 * Calculate days in Islamic month (simplified)
 */
export function getDaysInIslamicMonth(month: number, year: number): number {
  // Islamic months alternate between 29 and 30 days
  // This is a simplified calculation
  const isLeapYear = (year * 11 + 14) % 30 < 11;

  if (month === 12 && isLeapYear) {
    return 30; // Dhu al-Hijjah in leap year
  }

  return month % 2 === 1 ? 30 : 29;
}
