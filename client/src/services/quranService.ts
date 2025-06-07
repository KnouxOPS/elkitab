export interface QuranChapter {
  number: number;
  name: string;
  arabicName: string;
  englishName: string;
  ayahCount: number;
  revelationType: "meccan" | "medinan";
}

export interface QuranVerse {
  surah: number;
  ayah: number;
  arabic: string;
  translation: string;
  transliteration?: string;
  tafsir?: string;
  surahName: string;
}

export interface SearchResult {
  surah: number;
  ayah: number;
  arabic: string;
  translation: string;
  surahName: string;
}

export interface DailyVerse {
  surah: number;
  ayah: number;
  arabic: string;
  translation: string;
  surahName: string;
}

// Authentic Quran chapter data based on the actual Quran
const quranChapters: QuranChapter[] = [
  { number: 1, name: "الفاتحة", arabicName: "الفاتحة", englishName: "Al-Fatihah", ayahCount: 7, revelationType: "meccan" },
  { number: 2, name: "البقرة", arabicName: "البقرة", englishName: "Al-Baqarah", ayahCount: 286, revelationType: "medinan" },
  { number: 3, name: "آل عمران", arabicName: "آل عمران", englishName: "Ali 'Imran", ayahCount: 200, revelationType: "medinan" },
  { number: 4, name: "النساء", arabicName: "النساء", englishName: "An-Nisa", ayahCount: 176, revelationType: "medinan" },
  { number: 5, name: "المائدة", arabicName: "المائدة", englishName: "Al-Ma'idah", ayahCount: 120, revelationType: "medinan" },
  { number: 6, name: "الأنعام", arabicName: "الأنعام", englishName: "Al-An'am", ayahCount: 165, revelationType: "meccan" },
  { number: 7, name: "الأعراف", arabicName: "الأعراف", englishName: "Al-A'raf", ayahCount: 206, revelationType: "meccan" },
  { number: 8, name: "الأنفال", arabicName: "الأنفال", englishName: "Al-Anfal", ayahCount: 75, revelationType: "medinan" },
  { number: 9, name: "التوبة", arabicName: "التوبة", englishName: "At-Tawbah", ayahCount: 129, revelationType: "medinan" },
  { number: 10, name: "يونس", arabicName: "يونس", englishName: "Yunus", ayahCount: 109, revelationType: "meccan" },
  { number: 11, name: "هود", arabicName: "هود", englishName: "Hud", ayahCount: 123, revelationType: "meccan" },
  { number: 12, name: "يوسف", arabicName: "يوسف", englishName: "Yusuf", ayahCount: 111, revelationType: "meccan" },
  { number: 13, name: "الرعد", arabicName: "الرعد", englishName: "Ar-Ra'd", ayahCount: 43, revelationType: "medinan" },
  { number: 14, name: "إبراهيم", arabicName: "إبراهيم", englishName: "Ibrahim", ayahCount: 52, revelationType: "meccan" },
  { number: 15, name: "الحجر", arabicName: "الحجر", englishName: "Al-Hijr", ayahCount: 99, revelationType: "meccan" },
  { number: 16, name: "النحل", arabicName: "النحل", englishName: "An-Nahl", ayahCount: 128, revelationType: "meccan" },
  { number: 17, name: "الإسراء", arabicName: "الإسراء", englishName: "Al-Isra", ayahCount: 111, revelationType: "meccan" },
  { number: 18, name: "الكهف", arabicName: "الكهف", englishName: "Al-Kahf", ayahCount: 110, revelationType: "meccan" },
  { number: 19, name: "مريم", arabicName: "مريم", englishName: "Maryam", ayahCount: 98, revelationType: "meccan" },
  { number: 20, name: "طه", arabicName: "طه", englishName: "Taha", ayahCount: 135, revelationType: "meccan" },
  { number: 21, name: "الأنبياء", arabicName: "الأنبياء", englishName: "Al-Anbya", ayahCount: 112, revelationType: "meccan" },
  { number: 22, name: "الحج", arabicName: "الحج", englishName: "Al-Hajj", ayahCount: 78, revelationType: "medinan" },
  { number: 23, name: "المؤمنون", arabicName: "المؤمنون", englishName: "Al-Mu'minun", ayahCount: 118, revelationType: "meccan" },
  { number: 24, name: "النور", arabicName: "النور", englishName: "An-Nur", ayahCount: 64, revelationType: "medinan" },
  { number: 25, name: "الفرقان", arabicName: "الفرقان", englishName: "Al-Furqan", ayahCount: 77, revelationType: "meccan" },
  { number: 26, name: "الشعراء", arabicName: "الشعراء", englishName: "Ash-Shu'ara", ayahCount: 227, revelationType: "meccan" },
  { number: 27, name: "النمل", arabicName: "النمل", englishName: "An-Naml", ayahCount: 93, revelationType: "meccan" },
  { number: 28, name: "القصص", arabicName: "القصص", englishName: "Al-Qasas", ayahCount: 88, revelationType: "meccan" },
  { number: 29, name: "العنكبوت", arabicName: "العنكبوت", englishName: "Al-'Ankabut", ayahCount: 69, revelationType: "meccan" },
  { number: 30, name: "الروم", arabicName: "الروم", englishName: "Ar-Rum", ayahCount: 60, revelationType: "meccan" },
  { number: 31, name: "لقمان", arabicName: "لقمان", englishName: "Luqman", ayahCount: 34, revelationType: "meccan" },
  { number: 32, name: "السجدة", arabicName: "السجدة", englishName: "As-Sajdah", ayahCount: 30, revelationType: "meccan" },
  { number: 33, name: "الأحزاب", arabicName: "الأحزاب", englishName: "Al-Ahzab", ayahCount: 73, revelationType: "medinan" },
  { number: 34, name: "سبأ", arabicName: "سبأ", englishName: "Saba", ayahCount: 54, revelationType: "meccan" },
  { number: 35, name: "فاطر", arabicName: "فاطر", englishName: "Fatir", ayahCount: 45, revelationType: "meccan" },
  { number: 36, name: "يس", arabicName: "يس", englishName: "Ya-Sin", ayahCount: 83, revelationType: "meccan" },
  { number: 37, name: "الصافات", arabicName: "الصافات", englishName: "As-Saffat", ayahCount: 182, revelationType: "meccan" },
  { number: 38, name: "ص", arabicName: "ص", englishName: "Sad", ayahCount: 88, revelationType: "meccan" },
  { number: 39, name: "الزمر", arabicName: "الزمر", englishName: "Az-Zumar", ayahCount: 75, revelationType: "meccan" },
  { number: 40, name: "غافر", arabicName: "غافر", englishName: "Ghafir", ayahCount: 85, revelationType: "meccan" },
  // Continue with remaining surahs... (truncated for brevity but would include all 114)
];

// Sample authentic verses for demonstration
const sampleVerses: Record<string, QuranVerse> = {
  "1-1": {
    surah: 1,
    ayah: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    transliteration: "Bismillahir Rahmanir Raheem",
    tafsir: "This is the Basmalah, the opening formula that begins every chapter of the Quran except At-Tawbah. It represents the seeking of Allah's blessing and mercy.",
    surahName: "الفاتحة"
  },
  "1-2": {
    surah: 1,
    ayah: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    translation: "All praise is due to Allah, Lord of the worlds.",
    transliteration: "Alhamdu lillahi rabbil alameen",
    tafsir: "This verse establishes Allah as the sole recipient of all praise and as the Lord and Sustainer of all creation.",
    surahName: "الفاتحة"
  },
  "2-255": {
    surah: 2,
    ayah: 255,
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
    translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.",
    transliteration: "Allahu la ilaha illa huwal hayyul qayyum...",
    tafsir: "This is Ayat al-Kursi, one of the most powerful verses in the Quran describing Allah's absolute sovereignty and power.",
    surahName: "البقرة"
  }
};

export async function getQuranChapters(): Promise<QuranChapter[]> {
  // In a real implementation, this would fetch from a proper Quran API
  // For now, returning the authentic chapter data
  return Promise.resolve(quranChapters);
}

export async function getQuranVerse(surah: number, ayah: number): Promise<QuranVerse | null> {
  // In a real implementation, this would fetch from a proper Quran API
  const key = `${surah}-${ayah}`;
  const verse = sampleVerses[key];
  
  if (verse) {
    return Promise.resolve(verse);
  }
  
  // Fallback for verses not in sample data
  const chapter = quranChapters.find(c => c.number === surah);
  if (chapter && ayah <= chapter.ayahCount) {
    return Promise.resolve({
      surah,
      ayah,
      arabic: "نص الآية غير متوفر حالياً",
      translation: "Verse text not available at the moment",
      surahName: chapter.arabicName
    });
  }
  
  return Promise.resolve(null);
}

export async function searchQuran(query: string): Promise<SearchResult[]> {
  if (query.length < 2) return [];
  
  // In a real implementation, this would search through a complete Quran database
  // For now, searching through sample verses
  const results: SearchResult[] = [];
  
  Object.values(sampleVerses).forEach(verse => {
    if (verse.arabic.includes(query) || 
        verse.translation.toLowerCase().includes(query.toLowerCase()) ||
        (verse.transliteration && verse.transliteration.toLowerCase().includes(query.toLowerCase()))) {
      results.push({
        surah: verse.surah,
        ayah: verse.ayah,
        arabic: verse.arabic,
        translation: verse.translation,
        surahName: verse.surahName
      });
    }
  });
  
  return Promise.resolve(results);
}

export async function getDailyVerse(): Promise<DailyVerse> {
  // Get a different verse based on the current day of year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const verseKeys = Object.keys(sampleVerses);
  const selectedKey = verseKeys[dayOfYear % verseKeys.length];
  const verse = sampleVerses[selectedKey];
  
  return Promise.resolve({
    surah: verse.surah,
    ayah: verse.ayah,
    arabic: verse.arabic,
    translation: verse.translation,
    surahName: verse.surahName
  });
}

export async function getVersesByTopic(topic: string): Promise<SearchResult[]> {
  // In a real implementation, this would search by topic/theme
  const topicKeywords: Record<string, string[]> = {
    "patience": ["صبر", "patience", "sabr"],
    "forgiveness": ["غفر", "forgiveness", "maghfir"],
    "prayer": ["صلاة", "prayer", "salah"],
    "charity": ["زكاة", "charity", "zakat"],
    "faith": ["إيمان", "faith", "iman"],
    "paradise": ["جنة", "paradise", "jannah"]
  };
  
  const keywords = topicKeywords[topic.toLowerCase()] || [topic];
  const results: SearchResult[] = [];
  
  for (const keyword of keywords) {
    const searchResults = await searchQuran(keyword);
    results.push(...searchResults);
  }
  
  // Remove duplicates
  const uniqueResults = results.filter((verse, index, self) => 
    index === self.findIndex(v => v.surah === verse.surah && v.ayah === verse.ayah)
  );
  
  return uniqueResults;
}

export async function getTafsir(surah: number, ayah: number, scholar: string = "ibn-kathir"): Promise<string | null> {
  // In a real implementation, this would fetch authentic tafsir from scholars
  const verse = await getQuranVerse(surah, ayah);
  return verse?.tafsir || null;
}
