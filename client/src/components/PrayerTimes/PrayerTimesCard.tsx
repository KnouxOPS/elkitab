import { usePrayerTimes } from "../../hooks/usePrayerTimes";
import { useLanguage } from "../../contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function PrayerTimesCard() {
  const { t, isRTL } = useLanguage();
  const { prayerTimes, location, nextPrayer, timeRemaining, isLoading } = usePrayerTimes();

  if (isLoading) {
    return (
      <Card className="bg-white/80 dark:bg-emerald-900/80 backdrop-blur-sm border border-gold-200 dark:border-gold-700 shadow-xl">
        <CardContent className="p-6">
          <Skeleton className="h-6 w-32 mb-4" />
          <Skeleton className="h-20 w-full mb-4" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-8 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!prayerTimes) {
    return (
      <Card className="bg-white/80 dark:bg-emerald-900/80 backdrop-blur-sm border border-red-200 dark:border-red-700 shadow-xl">
        <CardContent className="p-6 text-center">
          <span className="material-symbols-outlined text-red-500 text-4xl mb-4 block">error</span>
          <h3 className="text-lg font-amiri font-bold text-red-700 dark:text-red-400 mb-2">
            {t("prayer_times.error_title")}
          </h3>
          <p className="text-sm text-red-600 dark:text-red-300">
            {t("prayer_times.error_description")}
          </p>
        </CardContent>
      </Card>
    );
  }

  const prayers = [
    { nameAr: "الفجر", nameEn: "Fajr", time: prayerTimes.fajr, color: "emerald" },
    { nameAr: "الشروق", nameEn: "Sunrise", time: prayerTimes.sunrise, color: "gold" },
    { nameAr: "الظهر", nameEn: "Dhuhr", time: prayerTimes.dhuhr, color: "emerald" },
    { nameAr: "العصر", nameEn: "Asr", time: prayerTimes.asr, color: "emerald" },
    { nameAr: "المغرب", nameEn: "Maghrib", time: prayerTimes.maghrib, color: "emerald" },
    { nameAr: "العشاء", nameEn: "Isha", time: prayerTimes.isha, color: "emerald" },
  ];

  return (
    <Card className="bg-white/80 dark:bg-emerald-900/80 backdrop-blur-sm border border-gold-200 dark:border-gold-700 shadow-xl prayer-glow">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-amiri font-bold text-emerald-800 dark:text-emerald-100">
            {t("prayer_times.title")}
          </h3>
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-emerald-600 dark:text-emerald-400">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="text-sm font-medium">{location?.city || t("prayer_times.location_unknown")}</span>
          </div>
        </div>
        
        {/* Current Prayer Highlight */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-xl mb-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">{t("prayer_times.next_prayer")}</p>
              <p className="text-xl font-amiri font-bold">{nextPrayer}</p>
            </div>
            <div className={`${isRTL ? 'text-left' : 'text-right'}`}>
              <p className="text-emerald-100 text-sm">{t("prayer_times.time_remaining")}</p>
              <p className="text-2xl font-bold font-mono">{timeRemaining}</p>
            </div>
          </div>
        </div>
        
        {/* Prayer Times List */}
        <div className="space-y-3">
          {prayers.map((prayer, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-emerald-50 dark:hover:bg-emerald-800/30 rounded-lg px-2 transition-colors"
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className={`w-3 h-3 rounded-full ${
                  prayer.color === 'gold' ? 'bg-gold-500' : 'bg-emerald-500'
                } ${prayer.nameAr === nextPrayer ? 'animate-pulse' : ''}`} />
                <span className="font-amiri text-gray-900 dark:text-white font-medium">
                  {prayer.nameAr}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                  {prayer.nameEn}
                </span>
              </div>
              <span className="font-mono text-gray-600 dark:text-gray-300 font-medium">
                {prayer.time}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-4 border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
        >
          <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">notifications</span>
          {t("prayer_times.enable_notifications")}
        </Button>
      </CardContent>
    </Card>
  );
}
