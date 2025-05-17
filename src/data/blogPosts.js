
export const examCategoriesForBlog = [
  { id: "all", name: "Tümü" },
  { id: "yks", name: "YKS" },
  { id: "lgs", name: "LGS" },
  { id: "kpss", name: "KPSS" },
  { id: "yds", name: "YDS" },
  { id: "yokdil", name: "YÖKDİL" },
  { id: " genel", name: "Genel" }, // Genel kategorisi için
];

export const blogPostsData = [
  {
    id: 1,
    title: "YKS'ye Hazırlıkta Ustalaşın: Kapsamlı Stratejiler ve TESTGO İpuçları",
    category: "YKS Hazırlık",
    categoryKey: "yks",
    date: "15 Mayıs 2025",
    author: "Dr. Başarı Uzmanı",
    excerpt: "YKS, üniversite hayallerinize açılan kapıdır. Bu zorlu maratonda TESTGO'nun sunduğu deneme sınavları ve konu testleri ile nasıl zirveye oynayabileceğinizi keşfedin. Stratejik planlama ve doğru kaynak kullanımı başarının anahtarıdır.",
    imageSlug: "yks-hazirlik-testgo-ipuclari",
    linkTo: "/test-coz",
    linkText: "YKS Testlerini Çöz"
  },
  {
    id: 2,
    title: "LGS'de Başarının Formülü: Etkili Çalışma Teknikleri ve TESTGO Denemeleri",
    category: "LGS Stratejileri",
    categoryKey: "lgs",
    date: "18 Mayıs 2025",
    author: "Eğitim Koçu Ali",
    excerpt: "LGS'ye hazırlanan genç beyinler için zaman yönetimi ve etkili ders çalışma yöntemleri hayati önem taşır. TESTGO'daki LGS denemeleri ile gerçek sınav deneyimini yaşayın ve eksiklerinizi erkenden görün.",
    imageSlug: "lgs-basari-formulu-etkili-calisma",
    linkTo: "/denemeler",
    linkText: "LGS Denemelerini İncele"
  },
  {
    id: 3,
    title: "KPSS Maratonunda Öne Geçin: TESTGO ile Detaylı Konu Analizi",
    category: "KPSS Taktikleri",
    categoryKey: "kpss",
    date: "20 Mayıs 2025",
    author: "Kariyer Danışmanı Zeynep",
    excerpt: "Kamu personeli olma yolunda KPSS büyük bir engel gibi görünebilir. Ancak TESTGO'nun kapsamlı konu testleri ve performans analizleri ile bu engeli aşabilirsiniz. Hangi konulara odaklanmanız gerektiğini öğrenin.",
    imageSlug: "kpss-maratonu-konu-analizi",
    linkTo: "/test-coz",
    linkText: "KPSS Konu Testleri"
  },
  {
    id: 4,
    title: "YDS ve YÖKDİL'de Kelime Bilginizi TESTGO ile Zirveye Taşıyın",
    category: "Dil Sınavları",
    categoryKey: "yds", // veya "yokdil" ortak olabilir
    date: "22 Mayıs 2025",
    author: "Dil Uzmanı Dr. Elif",
    excerpt: "YDS ve YÖKDİL gibi dil sınavlarında kelime bilgisi ve okuduğunu anlama becerisi kritik rol oynar. TESTGO'daki özel kelime testleri ve okuma parçalarıyla pratik yaparak puanınızı artırın.",
    imageSlug: "yds-yokdil-kelime-bilgisi",
    linkTo: "/konu-calis",
    linkText: "Dil Konularını Çalış"
  },
  {
    id: 5,
    title: "Deneme Sınavlarının Önemi: TESTGO ile Gerçek Sınav Simülasyonu",
    category: "Genel Sınav Stratejisi",
    categoryKey: "genel",
    date: "25 Mayıs 2025",
    author: "Ölçme Değerlendirme Uzmanı",
    excerpt: "Başarıya giden yolda deneme sınavları, performansınızı ölçmek ve eksiklerinizi görmek için en iyi araçtır. TESTGO'nun Türkiye geneli denemeleriyle kendinizi test edin ve sıralamanızı görün.",
    imageSlug: "deneme-sinavlari-onemi-simulasyon",
    linkTo: "/denemeler",
    linkText: "Tüm Denemeleri Gör"
  },
  {
    id: 6,
    title: "Motivasyonunuzu Yüksek Tutun: Sınav Kaygısıyla Başa Çıkma Yolları",
    category: "Genel Motivasyon",
    categoryKey: "genel",
    date: "28 Mayıs 2025",
    author: "Psikolog Dr. Can",
    excerpt: "Sınav hazırlık süreci stresli olabilir. Motivasyonunuzu yüksek tutmak ve sınav kaygısıyla başa çıkmak için pratik yöntemler bu yazıda. Unutmayın, TESTGO yanınızda!",
    imageSlug: "motivasyon-sinav-kaygisi",
    linkTo: "/blog",
    linkText: "Diğer Blog Yazıları"
  },
  {
    id: 7,
    title: "Matematik Korkusunu Yenmek: TESTGO ile Adım Adım Başarı",
    category: "Genel Ders Çalışma İpuçları",
    categoryKey: "genel",
    date: "30 Mayıs 2025",
    author: "Matematik Öğretmeni Ayşe",
    excerpt: "Matematik birçok öğrencinin korkulu rüyası olabilir. TESTGO'daki temel seviyeden ileri seviyeye matematik testleri ve konu anlatımları ile bu korkuyu yenin.",
    imageSlug: "matematik-korkusu-adim-adim-basari",
    linkTo: "/test-coz",
    linkText: "Matematik Testlerini Çöz"
  },
  {
    id: 8,
    title: "Türkçe Paragraf Soruları Nasıl Çözülür? TESTGO'dan Altın Taktikler",
    category: "Genel Ders Çalışma İpuçları",
    categoryKey: "genel",
    date: "2 Haziran 2025",
    author: "Türkçe Öğretmeni Mehmet",
    excerpt: "Uzun paragraf soruları gözünüzü korkutmasın! TESTGO'nun paragraf testleri ve uzmanlarımızın hazırladığı taktiklerle paragraf sorularını hızla ve doğru çözün.",
    imageSlug: "turkce-paragraf-sorulari-taktikler",
    linkTo: "/konu-calis",
    linkText: "Türkçe Konularını Çalış"
  },
  {
    id: 9,
    title: "Fen Bilimleri Deneyleri ve Kavramları: TESTGO ile Eğlenceli Öğrenme",
    category: "Genel Ders Çalışma İpuçları",
    categoryKey: "genel",
    date: "5 Haziran 2025",
    author: "Fen Bilimleri Öğretmeni Zekeriyya",
    excerpt: "Fen Bilimleri dersini ezberlemek yerine anlamak mı istiyorsunuz? TESTGO'daki interaktif içerikler ve kavram haritaları ile Fen Bilimlerini eğlenceli bir şekilde öğrenin.",
    imageSlug: "fen-bilimleri-eglenceli-ogrenme",
    linkTo: "/test-coz",
    linkText: "Fen Bilimleri Testleri"
  },
  {
    id: 10,
    title: "TESTGO Premium Üyelik Avantajları: Başarınızı Katlayın!",
    category: "TESTGO Özellikleri",
    categoryKey: "genel",
    date: "8 Haziran 2025",
    author: "TESTGO Ekibi",
    excerpt: "TESTGO'nun ücretsiz özelliklerinin yanı sıra Premium üyelik ile neler kazanabileceğinizi biliyor musunuz? Detaylı analizler, kişiye özel çalışma planları ve daha fazlası...",
    imageSlug: "testgo-premium-avantajlari",
    linkTo: "/", // Bu link /premium-kayit veya /uye-ol olabilir
    linkText: "Premium'u Keşfet"
  }
];


const blogTemplates = {
  common: [
    { titleTemplate: "{EXAM_NAME} İçin En İyi Çalışma Kaynakları ve TESTGO Önerileri", excerptTemplate: "{EXAM_NAME} sınavına hazırlanırken hangi kaynakları kullanmalısınız? TESTGO'nun {EXAM_NAME} özel içerikleriyle en verimli kaynaklara ulaşın." },
    { titleTemplate: "{EXAM_NAME} Sınavında Zaman Yönetimi Nasıl Yapılır?", excerptTemplate: "Sınav anında zamanı etkili kullanmak, başarının anahtarlarından biridir. {EXAM_NAME} için özel zaman yönetimi tekniklerini ve TESTGO ipuçlarını keşfedin." },
    { titleTemplate: "{EXAM_NAME}'ye Son Ay Kala Yapılması Gerekenler", excerptTemplate: "Sınava bir ay kala stres artabilir. {EXAM_NAME} için son ay stratejileri ve TESTGO'nun son tekrar testleri ile hazırlığınızı tamamlayın." },
    { titleTemplate: "Modern Ders Çalışma Teknikleri: {EXAM_NAME} Odaklı Pomodoro", excerptTemplate: "Pomodoro ve diğer modern ders çalışma tekniklerini {EXAM_NAME} hazırlığınıza nasıl entegre edebilirsiniz? Verimliliğinizi TESTGO ile artırın." },
    { titleTemplate: "{EXAM_NAME} Derecesi Yapanların Altın Değerinde Tavsiyeleri", excerptTemplate: "{EXAM_NAME}'de yüksek başarı elde etmiş öğrencilerden ilham alın. Onların çalışma sırları ve TESTGO'yu nasıl kullandıklarını öğrenin." },
    { titleTemplate: "{EXAM_NAME} Motivasyonunu Artırma Yolları: TESTGO Yanınızda!", excerptTemplate: "Uzun {EXAM_NAME} maratonunda motivasyonunuzu nasıl yüksek tutarsınız? TESTGO'nun motive edici özellikleri ve uzman tavsiyeleri ile hedefinize odaklanın." },
    { titleTemplate: "{EXAM_NAME}'de Sık Yapılan Hatalar ve Çözüm Önerileri", excerptTemplate: "Birçok öğrencinin {EXAM_NAME} hazırlık sürecinde yaptığı yaygın hatalar nelerdir? TESTGO analizleriyle bu hatalardan ders çıkarın." },
    { titleTemplate: "{EXAM_NAME} Konu Tekrarı Nasıl Yapılmalı? TESTGO Stratejileri", excerptTemplate: "Etkili bir konu tekrarı, {EXAM_NAME} başarısı için kritiktir. TESTGO'nun akıllı tekrar sistemleri ve konu özetleriyle bilgilerinizi tazeleyin." },
    { titleTemplate: "Sağlıklı Yaşam ve {EXAM_NAME} Başarısı: TESTGO'dan İpuçları", excerptTemplate: "Sınav hazırlık sürecinde fiziksel ve zihinsel sağlık çok önemli. {EXAM_NAME} performansınızı artıracak sağlıklı yaşam önerileri TESTGO'da." },
    { titleTemplate: "{EXAM_NAME} Sonrası Tercih Süreci: TESTGO ile Bilinçli Kararlar", excerptTemplate: "{EXAM_NAME} bitti, peki şimdi ne olacak? Tercih döneminde dikkat edilmesi gerekenler ve TESTGO'nun kariyer rehberliği." },
  ],
  yds_yokdil: [ // YDS ve YÖKDİL için özel şablonlar
    { titleTemplate: "{EXAM_NAME} İçin En Etkili Kelime Ezberleme Teknikleri", excerptTemplate: "{EXAM_NAME} sınavının temelini oluşturan kelime dağarcığınızı TESTGO'nun interaktif kelime kartları ve testleriyle geliştirin." },
    { titleTemplate: "{EXAM_NAME} Okuma Parçalarında Hız ve Anlama Nasıl Artırılır?", excerptTemplate: "Uzun ve karmaşık {EXAM_NAME} okuma parçalarında hem hızınızı hem de anlama oranınızı TESTGO'nun özel stratejileriyle yükseltin." },
  ]
};

export const generateBlogPostsForCategory = (categoryKey, categoryName, count, startIndex = 0) => {
  const posts = [];
  const today = new Date();
  const templatesToUse = categoryKey === 'yds' || categoryKey === 'yokdil' 
    ? [...blogTemplates.common, ...blogTemplates.yds_yokdil] 
    : blogTemplates.common;

  for (let i = 0; i < count; i++) {
    const templateIndex = (startIndex + i) % templatesToUse.length;
    const template = templatesToUse[templateIndex];
    const title = template.titleTemplate.replace(/{EXAM_NAME}/g, categoryName.toUpperCase());
    const excerpt = template.excerptTemplate.replace(/{EXAM_NAME}/g, categoryName.toUpperCase());
    const postDate = new Date(today);
    postDate.setDate(today.getDate() + i); // Her posta farklı bir tarih ver

    posts.push({
      id: `${categoryKey}-generated-${startIndex + i + 100}`, // Benzersiz ID
      title: title,
      category: `${categoryName} Stratejileri`,
      categoryKey: categoryKey,
      date: postDate.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: "TESTGO Uzman Ekibi",
      excerpt: excerpt,
      imageSlug: `${categoryKey}-stratejileri-${i + 1}`,
      linkTo: `/test-coz`, 
      linkText: `${categoryName.toUpperCase()} Testlerini Çöz`
    });
  }
  return posts;
};
