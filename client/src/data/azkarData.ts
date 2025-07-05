export interface AzkarItem {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reward: string;
  count: number;
  category: "morning" | "evening" | "general" | "sleep" | "food";
}

export const AZKAR_DATA: AzkarItem[] = [
  // Morning Azkar (أذكار الصباح)
  {
    id: "morning-1",
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Asbahnaa wa asbahal-mulku lillaahi, walhamdu lillaahi, laa ilaaha illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer",
    translation:
      "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    reward: "من قال هذا الذكر في الصباح حُفظ من كل سوء حتى المساء",
    count: 1,
    category: "morning",
  },
  {
    id: "morning-2",
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    transliteration:
      "Allaahumma bika asbahnaa, wa bika amsaynaa, wa bika nahyaa, wa bika namootu, wa ilaykan-nushoor",
    translation:
      "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور",
    reward: "ذكر يجعل المؤمن في حفظ الله ورعايته طوال اليوم",
    count: 1,
    category: "morning",
  },
  {
    id: "morning-3",
    arabic:
      "أَعُوذُ بِاللَ��هِ مِنَ الشَّيْطَانِ الرَّجِيمِ، اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration:
      "A'oodhu billaahi minash-shaytaanir-rajeem, Allaahu laa ilaaha illaa huwal-hayyul-qayyoom",
    translation: "أعوذ بالله من الشيطان الرجيم، الله لا إله إلا هو الحي القيوم",
    reward: "آية الكرسي - من قرأها في الصباح حُفظ من الجن حتى المساء",
    count: 1,
    category: "morning",
  },

  // Evening Azkar (أذكار المساء)
  {
    id: "evening-1",
    arabic:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Amsaynaa wa amsal-mulku lillaahi, walhamdu lillaahi, laa ilaaha illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer",
    translation:
      "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    reward: "من قال هذا الذكر في المساء حُفظ من كل سوء حتى الصباح",
    count: 1,
    category: "evening",
  },
  {
    id: "evening-2",
    arabic:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Allaahumma bika amsaynaa, wa bika asbahnaa, wa bika nahyaa, wa bika namootu, wa ilaykal-maseer",
    translation:
      "اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير",
    reward: "ذكر يجعل المؤمن في حفظ الله ورعايته طوال الليل",
    count: 1,
    category: "evening",
  },

  // General Azkar (أذكار عامة)
  {
    id: "general-1",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhaanallaahi wa bihamdihi",
    translation: "سبحان الله وبحمده",
    reward: "من قال هذا مائة مرة في يوم حُطت خطاياه وإن كانت مثل زبد البحر",
    count: 100,
    category: "general",
  },
  {
    id: "general-2",
    arabic:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Laa ilaaha illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer",
    translation:
      "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    reward: "من قالها عشر مرات كان كمن أعتق أربعة أنفس من ولد إسماعيل",
    count: 10,
    category: "general",
  },
  {
    id: "general-3",
    arabic:
      "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
    transliteration:
      "Subhaanallaahi, walhamdu lillaahi, wa laa ilaaha illallaahu, wallaahu akbar",
    translation: "سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر",
    reward: "هؤلاء الكلمات أحب إلى الله مما طلعت عليه الشمس",
    count: 33,
    category: "general",
  },

  // Sleep Azkar (أذكار النوم)
  {
    id: "sleep-1",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allaahumma amootu wa ahyaa",
    translation: "باسمك اللهم أموت وأحيا",
    reward: "من قال هذا عند النوم حُفظ من كل سوء في منامه",
    count: 1,
    category: "sleep",
  },
  {
    id: "sleep-2",
    arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    transliteration: "Allaahumma qinee 'azaabaka yawma tab'athu 'ibaadak",
    translation: "اللهم قني عذابك يوم تبعث عبادك",
    reward: "دعاء للحماية من عذاب يوم القيامة",
    count: 3,
    category: "sleep",
  },

  // Food Azkar (أذكار الطعام)
  {
    id: "food-1",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillaah",
    translation: "بسم الله",
    reward: "من قال بسم الله قبل الطعام بارك الله له فيه",
    count: 1,
    category: "food",
  },
  {
    id: "food-2",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    transliteration:
      "Alhamdu lillaahil-ladhee at'amanee haathaa wa razaqaneehi min ghayri hawlin minnee wa laa quwwah",
    translation: "الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني ولا قوة",
    reward: "من قال هذا بعد الطعام غُفر له ما تقدم من ذنبه",
    count: 1,
    category: "food",
  },
];
