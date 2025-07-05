export interface PrayerStep {
  id: string;
  title: string;
  description: string;
  arabicText?: string;
  transliteration?: string;
  category: "preparation" | "positions" | "recitations" | "completion";
  order: number;
  isRequired: boolean;
}

export const PRAYER_GUIDE_STEPS: PrayerStep[] = [
  // Preparation and Purification (التحضير والطهارة)
  {
    id: "wudu",
    title: "الوضوء",
    description: "الوضوء شرط من شروط صحة الصلاة، وهو طهارة مائية لأعضاء مخصوصة",
    category: "preparation",
    order: 1,
    isRequired: true,
  },
  {
    id: "clean-place",
    title: "اختيار المكان الطاهر",
    description: "يجب أن يكون مكان الصلاة طاهراً نظيفاً خالياً من النجاسات",
    category: "preparation",
    order: 2,
    isRequired: true,
  },
  {
    id: "qibla-direction",
    title: "استقبال القبلة",
    description: "يجب على المصلي أن يتوجه نحو الكعبة المشرفة في مكة المكرمة",
    category: "preparation",
    order: 3,
    isRequired: true,
  },
  {
    id: "cover-awrah",
    title: "ستر العورة",
    description: "يجب على المصلي ستر عورته بثياب طاهرة مناسبة",
    category: "preparation",
    order: 4,
    isRequired: true,
  },
  {
    id: "intention",
    title: "النية",
    description: "النية محلها القلب، وهي قصد العبادة تقرباً إلى الله تعالى",
    category: "preparation",
    order: 5,
    isRequired: true,
  },

  // Positions and Movements (المواضع والحركات)
  {
    id: "standing",
    title: "القيام",
    description: "الوقوف منتصباً باعتدال مع وضع اليدين على الصدر أو تحت السرة",
    category: "positions",
    order: 1,
    isRequired: true,
  },
  {
    id: "takbeerat-ihram",
    title: "تكبيرة الإحرام",
    description: "رفع اليدين مع قول 'الله أكبر' لبدء الصلاة",
    arabicText: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    category: "positions",
    order: 2,
    isRequired: true,
  },
  {
    id: "hand-placement",
    title: "وضع اليدين",
    description: "وضع اليد اليمنى على اليسرى فوق الصدر أو تحت السرة",
    category: "positions",
    order: 3,
    isRequired: false,
  },
  {
    id: "ruku",
    title: "الركوع",
    description: "الانحناء بحيث تصل اليدان إلى الركبتين مع استقامة الظهر",
    category: "positions",
    order: 4,
    isRequired: true,
  },
  {
    id: "sujud",
    title: "السجود",
    description: "وضع الجبهة والأنف والكفين والركبتين وأطراف القدمين على الأرض",
    category: "positions",
    order: 5,
    isRequired: true,
  },
  {
    id: "sitting",
    title: "الجلوس بين السجدتين",
    description: "الجلوس مطمئناً بين السجدتين مع وضع اليدين على الفخذين",
    category: "positions",
    order: 6,
    isRequired: true,
  },
  {
    id: "tashahhud-sitting",
    title: "جلسة التشهد",
    description: "الجلوس للتشهد مع الإشارة بالسبابة عند ذكر اسم الله",
    category: "positions",
    order: 7,
    isRequired: true,
  },

  // Recitations and Remembrances (القراءات والأذكار)
  {
    id: "opening-dua",
    title: "دعاء الاستفتاح",
    description: "دعاء يُقال بعد تكبيرة الإحرام وقبل قراءة الفاتحة",
    arabicText:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
    transliteration:
      "Subhanakal-lahumma wa bihamdika, wa tabarakasmuka, wa ta'ala jadduka, wa la ilaha ghayruk",
    category: "recitations",
    order: 1,
    isRequired: false,
  },
  {
    id: "seeking-refuge",
    title: "الاستعاذة",
    description: "طلب الحماية من الله من الشيطان الرجيم قبل القراءة",
    arabicText: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'udhu billahi minash-shaytanir-rajeem",
    category: "recitations",
    order: 2,
    isRequired: false,
  },
  {
    id: "bismillah",
    title: "البسملة",
    description: "قراءة 'بسم الله الرحمن الرحيم' قبل الفاتحة",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    transliteration: "Bismillahir-Rahmanir-Raheem",
    category: "recitations",
    order: 3,
    isRequired: true,
  },
  {
    id: "al-fatiha",
    title: "سورة الفاتحة",
    description: "قراءة فاتحة الكتاب وهي ركن من أركان الصلاة",
    arabicText:
      "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration:
      "Alhamdu lillahi rabbil-'alameen. Ar-Rahmanir-Raheem. Maliki yawmid-deen. Iyyaka na'budu wa iyyaka nasta'een. Ihdinash-shiratal-mustaqeem. Shirat-alladhina an'amta 'alayhim ghayril-maghdubi 'alayhim wa lad-dalleen",
    category: "recitations",
    order: 4,
    isRequired: true,
  },
  {
    id: "surah-recitation",
    title: "قراءة سورة",
    description:
      "قراءة سورة أو آيات من القرآن بعد الفاتحة في الركعتين الأوليين",
    category: "recitations",
    order: 5,
    isRequired: true,
  },
  {
    id: "ruku-dhikr",
    title: "ذكر الركوع",
    description: "التسبيح في الركوع",
    arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana rabbiyal-'atheem",
    category: "recitations",
    order: 6,
    isRequired: true,
  },
  {
    id: "rising-from-ruku",
    title: "الذكر عند الرفع من الركوع",
    description: "ما يُقال عند الرفع من الركوع",
    arabicText: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ",
    transliteration: "Sami'allahu liman hamidah, Rabbana wa lakal-hamd",
    category: "recitations",
    order: 7,
    isRequired: true,
  },
  {
    id: "sujud-dhikr",
    title: "ذكر السجود",
    description: "التسبيح في السجود",
    arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: "Subhana rabbiyal-a'la",
    category: "recitations",
    order: 8,
    isRequired: true,
  },
  {
    id: "between-sujud",
    title: "الذكر بين السجدتين",
    description: "ما يُقال بين السجدتين",
    arabicText: "رَبِّ اغْفِرْ لِي",
    transliteration: "Rabbighfir li",
    category: "recitations",
    order: 9,
    isRequired: true,
  },
  {
    id: "tashahhud",
    title: "التشهد",
    description: "الدعاء الذي يُقال في الجلوس الأوسط والأخير",
    arabicText:
      "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "At-tahiyyatu lillahi was-salawatu wat-tayyibatu. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-saliheen. Ash-hadu an la ilaha illallahu wa ash-hadu anna Muhammadan 'abduhu wa rasuluh",
    category: "recitations",
    order: 10,
    isRequired: true,
  },
  {
    id: "salawat",
    title: "الصلاة على النبي",
    description: "الصلاة على النبي في التشهد الأخير",
    arabicText:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration:
      "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahima innaka hameedum majeed",
    category: "recitations",
    order: 11,
    isRequired: true,
  },

  // Completion (إتمام الصلاة)
  {
    id: "final-dua",
    title: "الدعاء قبل السلام",
    description: "دعاء يُستحب قوله قبل السلام",
    arabicText:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbana atina fi'd-dunya hasanatan wa fi'l-akhirati hasanatan wa qina 'adhab an-nar",
    category: "completion",
    order: 1,
    isRequired: false,
  },
  {
    id: "tasleem",
    title: "التسليم",
    description: "إنهاء الصلاة بقول السلام عليكم ورحمة الله يميناً ويساراً",
    arabicText: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    transliteration: "As-salamu 'alaykum wa rahmatullah",
    category: "completion",
    order: 2,
    isRequired: true,
  },
  {
    id: "post-prayer-dhikr",
    title: "أذكار ما بعد الصلاة",
    description: "الأذكار المستحبة بعد انتهاء الصلاة",
    arabicText:
      "أَسْتَغْفِرُ اللَّهَ (ثلاث مرات)، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration:
      "Astaghfirullah (3 times), Allahumma antas-salamu wa minkas-salamu tabarakta ya dhal-jalali wal-ikram",
    category: "completion",
    order: 3,
    isRequired: false,
  },
  {
    id: "dua-completion",
    title: "دعاء ختام الصلاة",
    description: "دعاء شامل لما بعد الصلاة",
    arabicText:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا ��َرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer",
    category: "completion",
    order: 4,
    isRequired: false,
  },
];
