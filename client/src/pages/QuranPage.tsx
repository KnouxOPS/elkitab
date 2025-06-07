import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProgress } from "../contexts/ProgressContext";
import { useLanguage } from "../contexts/LanguageContext";

interface Verse {
  number: number;
  arabic: string;
  translation: string;
  tafsir?: string;
}

interface Surah {
  number: number;
  name: string;
  englishName: string;
  verses: Verse[];
  revelation: "Meccan" | "Medinan";
}

export default function QuranPage() {
  const { updateLastVisited } = useProgress();
  const { direction } = useLanguage();
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateLastVisited("/quran");
  }, [updateLastVisited]);

  // Sample Quran data - in production this would come from API
  const surahs: Surah[] = [
    {
      number: 1,
      name: "الفاتحة",
      englishName: "Al-Fatiha",
      revelation: "Meccan",
      verses: [
        {
          number: 1,
          arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          translation: "In the name of Allah, the Beneficent, the Merciful"
        },
        {
          number: 2,
          arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
          translation: "Praise be to Allah, Lord of the Worlds"
        },
        {
          number: 3,
          arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
          translation: "The Beneficent, the Merciful"
        },
        {
          number: 4,
          arabic: "مَالِكِ يَوْمِ الدِّينِ",
          translation: "Master of the Day of Judgment"
        },
        {
          number: 5,
          arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
          translation: "You (alone) we worship; You (alone) we ask for help"
        },
        {
          number: 6,
          arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
          translation: "Guide us on the straight path"
        },
        {
          number: 7,
          arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
          translation: "The path of those You have blessed, not of those who have incurred [Your] wrath, nor of those who have gone astray"
        }
      ]
    },
    {
      number: 2,
      name: "البقرة",
      englishName: "Al-Baqarah",
      revelation: "Medinan",
      verses: [
        {
          number: 1,
          arabic: "الم",
          translation: "Alif, Lam, Meem"
        },
        {
          number: 2,
          arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
          translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah"
        }
      ]
    }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-gray-900 dark:text-white mb-4">
            القرآن الكريم
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
            اقرأ وتدبر كلام الله العزيز مع التفاسير الموثوقة والترجمات المعتمدة
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="material-symbols-outlined text-emerald-600">search</span>
              <span className="font-amiri">البحث في القرآن الكريم</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="ابحث في الآيات أو السور..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 ${direction === "rtl" ? "text-right" : "text-left"}`}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button 
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {isLoading ? (
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                ) : (
                  <span className="material-symbols-outlined">search</span>
                )}
                {isLoading ? "جاري البحث..." : "بحث"}
              </Button>
            </div>
            
            {/* Quick Search Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["الصبر", "الجنة", "الرحمة", "الإيمان", "التوبة"].map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(tag)}
                  className="text-emerald-600 dark:text-emerald-400"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Surahs List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-amiri">فهرس السور</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                  {surahs.map((surah) => (
                    <button
                      key={surah.number}
                      onClick={() => setSelectedSurah(surah)}
                      className={`w-full p-4 text-right border-b border-gray-100 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors ${
                        selectedSurah?.number === surah.number 
                          ? "bg-emerald-100 dark:bg-emerald-900/30" 
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`${direction === "rtl" ? "text-right" : "text-left"}`}>
                          <h3 className="font-amiri font-bold text-gray-900 dark:text-white">
                            {surah.number}. {surah.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                            {surah.englishName} • {surah.verses.length} آية • {surah.revelation === "Meccan" ? "مكية" : "مدنية"}
                          </p>
                        </div>
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center">
                          <span className="text-emerald-600 dark:text-emerald-300 font-bold text-sm">
                            {surah.number}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Verses Display */}
          <div className="lg:col-span-2">
            {selectedSurah ? (
              <Card>
                <CardHeader>
                  <CardTitle className="font-amiri text-center">
                    <div className="mb-4">
                      <h2 className="text-2xl text-emerald-700 dark:text-emerald-400">
                        سورة {selectedSurah.name}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                        {selectedSurah.englishName} • {selectedSurah.verses.length} آية • {selectedSurah.revelation === "Meccan" ? "مكية" : "مدنية"}
                      </p>
                    </div>
                    
                    {/* Bismillah for non-Fatiha and non-Tawbah */}
                    {selectedSurah.number !== 1 && selectedSurah.number !== 9 && (
                      <div className="text-center mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                        <p className="text-xl font-amiri text-emerald-700 dark:text-emerald-400">
                          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                        </p>
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {selectedSurah.verses.map((verse) => (
                      <div key={verse.number} className="border-b border-gray-100 dark:border-gray-700 pb-6 last:border-b-0">
                        {/* Arabic Text */}
                        <div className="text-center mb-4">
                          <p className="text-2xl md:text-3xl font-amiri leading-loose text-gray-900 dark:text-white verse-text">
                            {verse.arabic}
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-bold mx-2">
                              {verse.number}
                            </span>
                          </p>
                        </div>
                        
                        {/* Translation */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                          <p className="text-gray-700 dark:text-gray-300 font-inter leading-relaxed">
                            {verse.translation}
                          </p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          <Button size="sm" variant="outline" className="text-emerald-600">
                            <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">bookmark_add</span>
                            حفظ
                          </Button>
                          <Button size="sm" variant="outline" className="text-gold-600">
                            <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">library_books</span>
                            التفسير
                          </Button>
                          <Button size="sm" variant="outline">
                            <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">volume_up</span>
                            استماع
                          </Button>
                          <Button size="sm" variant="outline">
                            <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">share</span>
                            مشاركة
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">menu_book</span>
                  <h3 className="text-xl font-amiri font-bold text-gray-600 dark:text-gray-400 mb-2">
                    اختر سورة للقراءة
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 font-inter">
                    اختر سورة من القائمة على اليسار لبدء القراءة والتدبر
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
