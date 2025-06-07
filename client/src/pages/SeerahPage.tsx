import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProgress } from "../contexts/ProgressContext";
import { useLanguage } from "../contexts/LanguageContext";

interface SeerahTopic {
  id: string;
  title: string;
  description: string;
  content: string;
  category: "early" | "mission" | "hijra" | "medina";
  readTime: number;
  imageDescription: string;
}

export default function SeerahPage() {
  const { updateLastVisited } = useProgress();
  const { direction } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<SeerahTopic | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("early");

  useEffect(() => {
    updateLastVisited("/seerah");
  }, [updateLastVisited]);

  const seerahTopics: SeerahTopic[] = [
    {
      id: "birth",
      title: "مولد النبي ﷺ",
      description: "ولادة خير البشر في مكة المكرمة",
      category: "early",
      readTime: 5,
      imageDescription: "A serene view of ancient Mecca with the holy Kaaba",
      content: `ولد النبي محمد صلى الله عليه وسلم في مكة المكرمة في عام الفيل، الذي يوافق عام 571 ميلادية تقريباً. كان ميلاده في شهر ربيع الأول، وقد اختلف العلماء في تحديد اليوم بالضبط، لكن الراجح أنه في الثاني عشر من ربيع الأول.

ولد النبي ﷺ يتيم الأب، حيث توفي والده عبد الله بن عبد المطلب قبل ولادته. وكانت أمه آمنة بنت وهب من أشراف مكة. وقد رعاه جده عبد المطلب، ثم عمه أبو طالب بعد وفاة جده.

اشتهر النبي ﷺ منذ صغره بالصدق والأمانة، حتى لقبه قومه بـ"الصادق الأمين" قبل البعثة. وقد عمل في التجارة، وتزوج من السيدة خديجة رضي الله عنها وهو في الخامسة والعشرين من عمره.`
    },
    {
      id: "cave-hira",
      title: "غار حراء والتحنث",
      description: "اعتكاف النبي ﷺ في غار حراء والتأمل في الخلق",
      category: "early",
      readTime: 4,
      imageDescription: "The peaceful cave of Hira with soft lighting representing divine inspiration",
      content: `كان النبي محمد ﷺ قبل البعثة يحب الخلوة والتفكر في خلق الله. فكان يأخذ معه الطعام والشراب ويذهب إلى غار حراء في جبل النور، قريباً من مكة، ليعتكف فيه ويتعبد.

في هذا الغار، كان النبي ﷺ يقضي الليالي ذوات العدد يتفكر في عظمة الخالق وفي أحوال قومه الذين يعبدون الأصنام. كان يتساءل عن الحق وعن الطريق المستقيم.

وفي هذا المكان المبارك، في ليلة من ليالي رمضان، نزل عليه الوحي لأول مرة. جاءه جبريل عليه السلام وقال له: "اقرأ"، فكان هذا بداية الرسالة الخاتمة للبشرية جمعاء.`
    },
    {
      id: "first-revelation",
      title: "بداية الوحي",
      description: "نزول الوحي الأول وبداية الرسالة",
      category: "mission",
      readTime: 6,
      imageDescription: "Abstract representation of divine revelation with flowing light",
      content: `في ليلة مباركة من ليالي رمضان، وكان النبي ﷺ في غار حراء، جاءه جبريل عليه السلام في صورته الحقيقية وقال له: "اقرأ".

قال النبي ﷺ: "ما أنا بقارئ". فغطه جبريل حتى بلغ منه الجهد، ثم أرسله فقال: "اقرأ". قال: "ما أنا بقارئ". فغطه الثانية حتى بلغ منه الجهد، ثم أرسله فقال: "اقرأ". قال: "ما أنا بقارئ". فغطه الثالثة، ثم أرسله فقال:

"اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ * خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ * اقْرَأْ وَرَبُّكَ الْأَكْرَمُ * الَّذِي عَلَّمَ بِالْقَلَمِ * عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ"

فرجع النبي ﷺ إلى بيته وهو يرجف، فدخل على خديجة رضي الله عنها وقال: "زملوني زملوني". فزملته حتى ذهب عنه الروع، ثم أخبرها بما حدث. فطمأنته وقالت: "كلا والله، لا يخزيك الله أبداً، إنك لتصل الرحم، وتحمل الكل، وتكسب المعدوم، وتقري الضيف، وتعين على نوائب الحق".`
    },
    {
      id: "hijra",
      title: "الهجرة إلى المدينة",
      description: "الهجرة المباركة من مكة إلى المدينة",
      category: "hijra",
      readTime: 8,
      imageDescription: "The historic migration route through peaceful desert landscapes",
      content: `لما اشتد أذى قريش للنبي ﷺ وأصحابه، وضيقوا عليهم في مكة، أذن الله عز وجل لنبيه بالهجرة إلى المدينة المنورة، حيث استقبله الأنصار بكل حب وترحاب.

خرج النبي ﷺ من مكة مع صاحبه أبي بكر الصديق رضي الله عنه، واختبآ في غار ثور ثلاثة أيام حتى هدأ الطلب. وقد حماهما الله عز وجل، فعندما وصل المشركون إلى الغار ونظروا فيه، صرف الله أبصارهم عنهما.

قال أبو بكر رضي الله عنه: "يا رسول الله، لو أن بعضهم طأطأ بصره رآنا". فقال النبي ﷺ: "يا أبا بكر، ما ظنك باثنين الله ثالثهما". وأنزل الله في ذلك: "إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا".

ووصل النبي ﷺ إلى المدينة في يوم الاثنين الثاني عشر من ربيع الأول، واستقبله أهل المدينة بالفرح والسرور، وهم ينشدون: "طلع البدر علينا من ثنيات الوداع، وجب الشكر علينا ما دعا لله داع".`
    }
  ];

  const categories = [
    { id: "early", name: "الحياة المبكرة", icon: "child_care" },
    { id: "mission", name: "بداية الرسالة", icon: "auto_stories" },
    { id: "hijra", name: "الهجرة", icon: "flight_takeoff" },
    { id: "medina", name: "الحياة في المدينة", icon: "location_city" }
  ];

  const filteredTopics = seerahTopics.filter(topic => topic.category === activeCategory);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold text-gray-900 dark:text-white mb-4">
            السيرة النبوية الشريفة
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
            تعرف على حياة خير البشر محمد صلى الله عليه وسلم من خلال سيرته العطرة المليئة بالدروس والعبر
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 rtl:space-x-reverse ${
                activeCategory === category.id 
                  ? "bg-emerald-600 text-white" 
                  : "text-emerald-600 dark:text-emerald-400"
              }`}
            >
              <span className="material-symbols-outlined">{category.icon}</span>
              <span className="font-amiri">{category.name}</span>
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Topics List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-amiri">
                  {categories.find(cat => cat.id === activeCategory)?.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  {filteredTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className={`w-full p-4 text-right border-b border-gray-100 dark:border-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors ${
                        selectedTopic?.id === topic.id 
                          ? "bg-emerald-100 dark:bg-emerald-900/30" 
                          : ""
                      }`}
                    >
                      <div className={`${direction === "rtl" ? "text-right" : "text-left"}`}>
                        <h3 className="font-amiri font-bold text-gray-900 dark:text-white mb-1">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-inter mb-2">
                          {topic.description}
                        </p>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-emerald-600 dark:text-emerald-400">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          <span className="text-xs font-inter">{topic.readTime} دقائق</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            {selectedTopic ? (
              <Card>
                <CardHeader>
                  <CardTitle className="font-amiri text-center">
                    <div className="mb-4">
                      <div className="h-48 bg-gradient-to-br from-emerald-100 to-gold-100 dark:from-emerald-900/30 dark:to-gold-900/30 rounded-lg mb-6 flex items-center justify-center">
                        <div className="text-center text-emerald-700 dark:text-emerald-400">
                          <span className="material-symbols-outlined text-6xl mb-2">auto_stories</span>
                          <p className="text-sm font-inter">{selectedTopic.imageDescription}</p>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl text-emerald-700 dark:text-emerald-400 mb-2">
                        {selectedTopic.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 font-inter">
                        {selectedTopic.description}
                      </p>
                      
                      <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          <span>{selectedTopic.readTime} دقائق للقراءة</span>
                        </div>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="material-symbols-outlined text-sm">category</span>
                          <span>{categories.find(cat => cat.id === selectedTopic.category)?.name}</span>
                        </div>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <div className="font-amiri text-lg leading-relaxed text-gray-900 dark:text-white whitespace-pre-line">
                      {selectedTopic.content}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <span className="material-symbols-outlined mr-2 rtl:ml-2">bookmark_add</span>
                      حفظ
                    </Button>
                    <Button variant="outline">
                      <span className="material-symbols-outlined mr-2 rtl:ml-2">share</span>
                      مشاركة
                    </Button>
                    <Button variant="outline" className="text-gold-600 border-gold-200">
                      <span className="material-symbols-outlined mr-2 rtl:ml-2">quiz</span>
                      اختبار الفهم
                    </Button>
                    <Button variant="outline">
                      <span className="material-symbols-outlined mr-2 rtl:ml-2">volume_up</span>
                      استماع
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">auto_stories</span>
                  <h3 className="text-xl font-amiri font-bold text-gray-600 dark:text-gray-400 mb-2">
                    اختر موضوعاً من السيرة
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 font-inter">
                    اختر موضوعاً من القائمة على اليسار لتتعلم عن حياة النبي الكريم ﷺ
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
