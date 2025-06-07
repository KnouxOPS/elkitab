import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ar" | "en" | "fr" | "ur";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: "ltr" | "rtl";
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.quran": "القرآن الكريم",
    "nav.seerah": "السيرة النبوية",
    "nav.knowledge": "المعرفة الإسلامية",
    "nav.prayerGuide": "دليل الصلاة",
    "nav.reminders": "التذكيرات اليومية",
    "nav.calendar": "التقويم الإسلامي",
    "nav.kids": "قسم الأطفال",
    "nav.assistant": "المساعد الذكي",
    
    // Prayer Times
    "prayer.fajr": "الفجر",
    "prayer.sunrise": "الشروق",
    "prayer.dhuhr": "الظهر",
    "prayer.asr": "العصر",
    "prayer.maghrib": "المغرب",
    "prayer.isha": "العشاء",
    "prayer.current": "الصلاة الحالية",
    "prayer.next": "الصلاة القادمة",
    "prayer.timeRemaining": "الوقت المتبقي",
    
    // Common
    "common.welcome": "أهلاً وسهلاً",
    "common.search": "بحث",
    "common.save": "حفظ",
    "common.share": "مشاركة",
    "common.continue": "متابعة",
    "common.start": "ابدأ",
    "common.read": "اقرأ",
    "common.learn": "تعلم",
    
    // App Name
    "app.name": "الكتاب المبين",
    "app.tagline": "موسوعتك الإسلامية الشاملة",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.quran": "Holy Quran",
    "nav.seerah": "Prophet's Biography",
    "nav.knowledge": "Islamic Knowledge",
    "nav.prayerGuide": "Prayer Guide",
    "nav.reminders": "Daily Reminders",
    "nav.calendar": "Islamic Calendar",
    "nav.kids": "Kids Section",
    "nav.assistant": "AI Assistant",
    
    // Prayer Times
    "prayer.fajr": "Fajr",
    "prayer.sunrise": "Sunrise",
    "prayer.dhuhr": "Dhuhr",
    "prayer.asr": "Asr",
    "prayer.maghrib": "Maghrib",
    "prayer.isha": "Isha",
    "prayer.current": "Current Prayer",
    "prayer.next": "Next Prayer",
    "prayer.timeRemaining": "Time Remaining",
    
    // Common
    "common.welcome": "Welcome",
    "common.search": "Search",
    "common.save": "Save",
    "common.share": "Share",
    "common.continue": "Continue",
    "common.start": "Start",
    "common.read": "Read",
    "common.learn": "Learn",
    
    // App Name
    "app.name": "Al-Kitab Al-Mubeen",
    "app.tagline": "Your Comprehensive Islamic Encyclopedia",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.quran": "Saint Coran",
    "nav.seerah": "Biographie du Prophète",
    "nav.knowledge": "Connaissance Islamique",
    "nav.prayerGuide": "Guide de Prière",
    "nav.reminders": "Rappels Quotidiens",
    "nav.calendar": "Calendrier Islamique",
    "nav.kids": "Section Enfants",
    "nav.assistant": "Assistant IA",
    
    // Prayer Times
    "prayer.fajr": "Fajr",
    "prayer.sunrise": "Lever du Soleil",
    "prayer.dhuhr": "Dhuhr",
    "prayer.asr": "Asr",
    "prayer.maghrib": "Maghrib",
    "prayer.isha": "Isha",
    "prayer.current": "Prière Actuelle",
    "prayer.next": "Prochaine Prière",
    "prayer.timeRemaining": "Temps Restant",
    
    // Common
    "common.welcome": "Bienvenue",
    "common.search": "Rechercher",
    "common.save": "Sauvegarder",
    "common.share": "Partager",
    "common.continue": "Continuer",
    "common.start": "Commencer",
    "common.read": "Lire",
    "common.learn": "Apprendre",
    
    // App Name
    "app.name": "Al-Kitab Al-Mubeen",
    "app.tagline": "Votre Encyclopédie Islamique Complète",
  },
  ur: {
    // Navigation
    "nav.home": "ہوم",
    "nav.quran": "قرآن کریم",
    "nav.seerah": "سیرت النبی",
    "nav.knowledge": "اسلامی علم",
    "nav.prayerGuide": "نماز کی رہنمائی",
    "nav.reminders": "روزانہ یاد دہانی",
    "nav.calendar": "اسلامی کیلنڈر",
    "nav.kids": "بچوں کا سیکشن",
    "nav.assistant": "AI اسسٹنٹ",
    
    // Prayer Times
    "prayer.fajr": "فجر",
    "prayer.sunrise": "طلوع آفتاب",
    "prayer.dhuhr": "ظہر",
    "prayer.asr": "عصر",
    "prayer.maghrib": "مغرب",
    "prayer.isha": "عشاء",
    "prayer.current": "موجودہ نماز",
    "prayer.next": "اگلی نماز",
    "prayer.timeRemaining": "باقی وقت",
    
    // Common
    "common.welcome": "خوش آمدید",
    "common.search": "تلاش",
    "common.save": "محفوظ کریں",
    "common.share": "شیئر کریں",
    "common.continue": "جاری رکھیں",
    "common.start": "شروع کریں",
    "common.read": "پڑھیں",
    "common.learn": "سیکھیں",
    
    // App Name
    "app.name": "الکتاب المبین",
    "app.tagline": "آپ کا جامع اسلامی انسائیکلوپیڈیا",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("alkitab-language");
    return (saved as Language) || "ar";
  });

  const direction = language === "ar" || language === "ur" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("alkitab-language", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
