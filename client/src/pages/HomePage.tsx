import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrayerTimesCard from "../components/PrayerTimesCard";
import { useLanguage } from "../contexts/LanguageContext";
import { useProgress } from "../contexts/ProgressContext";

export default function HomePage() {
  const { t, direction } = useLanguage();
  const { getResumeSession, updateLastVisited } = useProgress();

  useEffect(() => {
    updateLastVisited("/");
  }, [updateLastVisited]);

  const resumeSession = getResumeSession();

  const features = [
    {
      href: "/quran",
      title: "القرآن الكريم والتفسير",
      description: "المصحف الشريف مع تفاسير معتمدة من ابن كثير والقرطبي والسعدي، مع البحث المتقدم والتلاوة",
      icon: "menu_book",
      gradient: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
      iconBg: "bg-emerald-600",
      badge: "قراءة وتفسير",
      badgeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-800",
    },
    {
      href: "/seerah",
      title: "السيرة النبوية الشريفة",
      description: "رحلة شاملة عبر حياة النبي محمد ﷺ مع أهم المحطات والدروس والعبر من سيرته العطرة",
      icon: "account_circle",
      gradient: "from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20",
      iconBg: "bg-gold-600",
      badge: "سيرة نبوية",
      badgeColor: "text-gold-700 dark:text-gold-400 bg-gold-100 dark:bg-gold-800",
    },
    {
      href: "/prayer-guide",
      title: "دليل الصلاة الشامل",
      description: "تعلم الصلاة خطوة بخطوة مع الأحكام والآداب، بالإضافة إلى الأدعية والأذكار المستحبة",
      icon: "self_improvement",
      gradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      iconBg: "bg-blue-600",
      badge: "دليل تفاعلي",
      badgeColor: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-800",
    },
    {
      href: "/ai-assistant",
      title: "المساعد الإسلامي الذكي",
      description: "احصل على إجابات دقيقة لأسئلتك الإسلامية من مصادر موثوقة باستخدام الذكاء الاصطناعي",
      icon: "psychology",
      gradient: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      iconBg: "bg-purple-600",
      badge: "ذكاء اصطناعي",
      badgeColor: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-800",
    },
    {
      href: "/calendar",
      title: "التقويم الإسلامي",
      description: "تابع التواريخ والمناسبات الإسلامية المهمة مع تذكيرات للأعياد والليالي المباركة",
      icon: "calendar_month",
      gradient: "from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20",
      iconBg: "bg-teal-600",
      badge: "هجري وميلادي",
      badgeColor: "text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-800",
    },
    {
      href: "/kids",
      title: "قسم الأطفال",
      description: "قصص وألعاب تعليمية إسلامية للأطفال لتعلم الآداب والأخلاق والقيم الإسلامية بطريقة ممتعة",
      icon: "child_care",
      gradient: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20",
      iconBg: "bg-pink-600",
      badge: "تعليم ممتع",
      badgeColor: "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-800",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-beige-50 to-emerald-100 dark:from-gray-800 dark:via-gray-900 dark:to-emerald-900/20 islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Welcome Content */}
            <div className={`${direction === "rtl" ? "text-right" : "text-left"} animate-fade-in`}>
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">mosque</span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  مرحباً بك في رحلتك الروحانية
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-amiri font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                بوابتك إلى المعرفة <br />
                <span className="text-emerald-600 dark:text-emerald-400">الإسلامية الشاملة</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-inter">
                اكتشف كنوز التراث الإسلامي من خلال منصة شاملة تجمع القرآن الكريم والتفاسير الموثوقة والسيرة النبوية والمعرفة الإسلامية الأصيلة
              </p>

              <div className="flex flex-wrap gap-4 justify-end rtl:justify-start">
                <Link href="/islamic-knowledge">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl">
                    <span className="material-symbols-outlined mr-2 rtl:ml-2">explore</span>
                    ابدأ الرحلة
                  </Button>
                </Link>
                <Link href="/quran">
                  <Button variant="outline" className="bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700 px-6 py-3 rounded-xl font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                    <span className="material-symbols-outlined mr-2 rtl:ml-2">menu_book</span>
                    تصفح المحتوى
                  </Button>
                </Link>
              </div>
            </div>

            {/* Prayer Times Card */}
            <div className="relative animate-slide-up">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-gold-400/20 rounded-full blur-xl"></div>
              <PrayerTimesCard />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {resumeSession && (
              <Link href={resumeSession.page}>
                <Button className="flex items-center space-x-3 rtl:space-x-reverse gradient-emerald text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all animate-pulse-gold">
                  <span className="material-symbols-outlined">play_circle</span>
                  <span className="font-medium">متابعة: {resumeSession.title}</span>
                </Button>
              </Link>
            )}
            
            <Link href="/quran">
              <Button variant="outline" className="flex items-center space-x-3 rtl:space-x-reverse bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 px-6 py-3 rounded-xl hover:bg-gold-100 dark:hover:bg-gold-900/40 transition-colors border-gold-200 dark:border-gold-700">
                <span className="material-symbols-outlined">search</span>
                <span className="font-medium">البحث في القرآن</span>
              </Button>
            </Link>
            
            <Link href="/daily-reminders">
              <Button variant="outline" className="flex items-center space-x-3 rtl:space-x-reverse bg-beige-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl hover:bg-beige-100 dark:hover:bg-gray-600 transition-colors">
                <span className="material-symbols-outlined">auto_stories</span>
                <span className="font-medium">الأذكار اليومية</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Verse */}
      <section className="py-16 bg-gradient-to-br from-beige-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 gradient-emerald"></div>

            <div className="mb-6">
              <span className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full text-emerald-700 dark:text-emerald-300">
                <span className="material-symbols-outlined">menu_book</span>
                <span className="font-amiri">آية اليوم</span>
              </span>
            </div>

            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-amiri text-gray-900 dark:text-white verse-text mb-4">
                وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-inter mb-2">
                "And whoever fears Allah, He will make for him a way out. And will provide for him from where he does not expect."
              </p>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-amiri">
                سورة الطلاق، الآية 2-3
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">bookmark_add</span>
                حفظ
              </Button>
              <Button variant="outline">
                <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">share</span>
                مشاركة
              </Button>
              <Button variant="outline" className="bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 border-gold-200 dark:border-gold-700">
                <span className="material-symbols-outlined text-sm mr-2 rtl:ml-2">library_books</span>
                التفسير
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-amiri font-bold text-gray-900 dark:text-white mb-4">
              خدمات شاملة للمعرفة الإسلامية
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
              مجموعة متكاملة من الأدوات والمصادر الإسلامية الموثوقة لإثراء رحلتك الروحانية والمعرفية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.href} href={feature.href}>
                <Card className={`group bg-gradient-to-br ${feature.gradient} p-6 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer card-hover`}>
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <div className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <span className="material-symbols-outlined text-white text-2xl">{feature.icon}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-amiri font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 dark:text-gray-300 font-inter mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-inter px-2 py-1 rounded ${feature.badgeColor}`}>
                        {feature.badge}
                      </span>
                      <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                        arrow_back
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Progress */}
      <section className="py-16 bg-gradient-to-br from-beige-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advanced Search */}
            <Card className="bg-white/90 dark:bg-emerald-900/90 backdrop-blur-sm border border-emerald-100 dark:border-emerald-700 p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center justify-between">
                  <h3 className="text-xl font-amiri font-bold text-emerald-800 dark:text-emerald-100">البحث الذكي</h3>
                  <div className="gradient-gold p-2 rounded-lg">
                    <span className="material-symbols-outlined text-white">search</span>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      placeholder="ابحث في القرآن والسنة والمعرفة الإسلامية..."
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-emerald-800 border border-gray-200 dark:border-emerald-600 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-gold-500 ${direction === "rtl" ? "text-right pr-12" : "text-left pl-12"}`}
                    />
                    <span className={`material-symbols-outlined absolute ${direction === "rtl" ? "right-4" : "left-4"} top-1/2 transform -translate-y-1/2 text-gray-400`}>
                      search
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["الصبر", "الجنة", "التوبة", "الإيمان"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-200 rounded-full text-sm font-inter cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            <Card className="bg-white/90 dark:bg-emerald-900/90 backdrop-blur-sm border border-emerald-100 dark:border-emerald-700 p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center justify-between">
                  <h3 className="text-xl font-amiri font-bold text-emerald-800 dark:text-emerald-100">رحلة التعلم</h3>
                  <div className="gradient-emerald p-2 rounded-lg">
                    <span className="material-symbols-outlined text-white">trending_up</span>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <div className="space-y-6">
                  {/* Overall Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-inter text-sm text-gray-600 dark:text-gray-300">التقدم العام</span>
                      <span className="font-inter text-sm font-bold text-emerald-700 dark:text-emerald-300">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-emerald-800 rounded-full h-2">
                      <div className="gradient-emerald h-2 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>

                  {/* Individual Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-inter font-bold text-gold-600">24</div>
                      <div className="text-xs font-inter text-gray-500 dark:text-gray-400">دروس مكتملة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-inter font-bold text-emerald-600">7</div>
                      <div className="text-xs font-inter text-gray-500 dark:text-gray-400">أيام متتالية</div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <Button className="w-full gradient-gold text-white py-3 rounded-lg font-inter font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse">
                    <span>استكمال الجلسة الأخيرة</span>
                    <span className="material-symbols-outlined">play_arrow</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
