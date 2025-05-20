
export const examCategoriesForBlog = [
  { id: "all", name: "Tümü" },
  { id: "yks", name: "YKS" },
  { id: "lgs", name: "LGS" },
  { id: "kpss", name: "KPSS" },
  { id: "yds", name: "YDS" },
  { id: "yokdil", name: "YÖKDİL" },
  { id: "puan-hesaplama", name: "Puan Hesaplama" },
  { id: "sinav-konulari", name: "Sınav Konuları" },
  { id: "tercih-rehberi", name: "Tercih Rehberi" },
  { id: "genel", name: "Genel" },
];

export const blogPostsData = [
  {
    id: 1,
    title: "YKS'ye Hazırlıkta Ustalaşın: Kapsamlı Stratejiler ve TESTGO İpuçları",
    category: "YKS Hazırlık",
    categoryKey: "yks",
    date: "15 Mayıs 2025",
    author: "Dr. Başarı Uzmanı",
    excerpt: "YKS, üniversite hayallerinize açılan kapıdır. Bu zorlu maratonda TESTGO'nun sunduğu deneme sınavları ve konu testleri ile nasıl zirveye oynayabileceğinizi keşfedin.",
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
    excerpt: "LGS'ye hazırlanan genç beyinler için zaman yönetimi ve etkili ders çalışma yöntemleri hayati önem taşır. TESTGO'daki LGS denemeleri ile pratik yapın.",
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
    excerpt: "Kamu personeli olma yolunda KPSS büyük bir engel gibi görünebilir. Ancak TESTGO'nun kapsamlı konu testleri ve performans analizleri ile bu engeli aşabilirsiniz.",
    imageSlug: "kpss-maratonu-konu-analizi",
    linkTo: "/test-coz",
    linkText: "KPSS Konu Testleri"
  },
  {
    id: 4,
    title: "YDS ve YÖKDİL'de Kelime Bilginizi TESTGO ile Zirveye Taşıyın",
    category: "Dil Sınavları",
    categoryKey: "yds",
    date: "22 Mayıs 2025",
    author: "Dil Uzmanı Dr. Elif",
    excerpt: "YDS ve YÖKDİL gibi dil sınavlarında kelime bilgisi ve okuduğunu anlama becerisi kritik rol oynar. TESTGO'daki özel testlerle pratik yapın.",
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
    excerpt: "Başarıya giden yolda deneme sınavları, performansınızı ölçmek için en iyi araçtır. TESTGO'nun Türkiye geneli denemeleriyle kendinizi test edin.",
    imageSlug: "deneme-sinavlari-onemi-simulasyon",
    linkTo: "/denemeler",
    linkText: "Tüm Denemeleri Gör"
  },
  {
    id: 11,
    title: "YKS Puan Hesaplama Aracı ve Detaylı Anlatım",
    category: "Puan Hesaplama",
    categoryKey: "puan-hesaplama",
    date: "19 Mayıs 2025",
    author: "TESTGO Ekibi",
    excerpt: "YKS puanınızı nasıl hesaplayacağınızı öğrenin. TESTGO'nun güncel katsayılarla YKS puan hesaplama aracı ve püf noktaları.",
    imageSlug: "yks-puan-hesaplama-araci",
    linkTo: "/blog/yks-puan-hesaplama", 
    linkText: "Detayları Gör"
  },
  {
    id: 12,
    title: "LGS Puan Hesaplama: Adım Adım Rehber ve Online Araç",
    category: "Puan Hesaplama",
    categoryKey: "puan-hesaplama",
    date: "19 Mayıs 2025",
    author: "TESTGO Ekibi",
    excerpt: "LGS puanınızı doğru bir şekilde hesaplamak için bilmeniz gerekenler. TESTGO LGS puan hesaplama aracı ile netlerinizi puana dönüştürün.",
    imageSlug: "lgs-puan-hesaplama-rehberi",
    linkTo: "/blog/lgs-puan-hesaplama",
    linkText: "Hesaplama Aracına Git"
  },
  {
    id: 13,
    title: "KPSS Puan Hesaplama (Lisans, Önlisans, Ortaöğretim)",
    category: "Puan Hesaplama",
    categoryKey: "puan-hesaplama",
    date: "19 Mayıs 2025",
    author: "TESTGO Ekibi",
    excerpt: "KPSS Lisans, Önlisans ve Ortaöğretim puan türleri nasıl hesaplanır? TESTGO KPSS puan hesaplama motoru ile tahmini puanınızı öğrenin.",
    imageSlug: "kpss-puan-hesaplama-motoru",
    linkTo: "/blog/kpss-puan-hesaplama",
    linkText: "Puanını Hesapla"
  },
  {
    id: 14,
    title: "YDS Puan Hesaplama ve Değerlendirme Kriterleri",
    category: "Puan Hesaplama",
    categoryKey: "puan-hesaplama",
    date: "19 Mayıs 2025",
    author: "TESTGO Ekibi",
    excerpt: "YDS'de doğru ve yanlış sayılarınıza göre puanınız nasıl hesaplanır? YDS puanlama sistemi hakkında her şey.",
    imageSlug: "yds-puan-degerlendirme",
    linkTo: "/blog/yds-puan-hesaplama",
    linkText: "YDS Puanını Öğren"
  },
  {
    id: 15,
    title: "YÖKDİL Puan Hesaplama (Sağlık, Sosyal, Fen)",
    category: "Puan Hesaplama",
    categoryKey: "puan-hesaplama",
    date: "19 Mayıs 2025",
    author: "TESTGO Ekibi",
    excerpt: "YÖKDİL Sağlık, Sosyal ve Fen Bilimleri alanlarına göre puan hesaplama yöntemleri. TESTGO ile YÖKDİL puanınızı tahmin edin.",
    imageSlug: "yokdil-puan-tahmini",
    linkTo: "/blog/yokdil-puan-hesaplama",
    linkText: "YÖKDİL Puanını Hesapla"
  },
  {
    id: 16,
    title: "YKS Konuları ve Soru Dağılımları (TYT-AYT)",
    category: "Sınav Konuları",
    categoryKey: "sinav-konulari",
    date: "19 Mayıs 2025",
    author: "TESTGO Akademik Kadro",
    excerpt: "YKS (TYT ve AYT) sınavında hangi derslerden hangi konular çıkıyor? Güncel YKS konu listesi ve soru dağılımları.",
    imageSlug: "yks-tyt-ayt-konu-dagilimi",
    linkTo: "/blog/yks-konulari",
    linkText: "YKS Konularını İncele"
  },
  {
    id: 17,
    title: "LGS Konuları ve Örnek Soru Tipleri",
    category: "Sınav Konuları",
    categoryKey: "sinav-konulari",
    date: "19 Mayıs 2025",
    author: "TESTGO Akademik Kadro",
    excerpt: "LGS'de başarı için bilinmesi gereken tüm derslerin konuları. TESTGO ile LGS konularına hakim olun, örnek soruları çözün.",
    imageSlug: "lgs-ders-konulari-ornekler",
    linkTo: "/blog/lgs-konulari",
    linkText: "LGS Konu Listesi"
  },
  {
    id: 18,
    title: "KPSS Lisans Konuları (Genel Yetenek - Genel Kültür, Eğitim Bilimleri)",
    category: "Sınav Konuları",
    categoryKey: "sinav-konulari",
    date: "19 Mayıs 2025",
    author: "TESTGO Akademik Kadro",
    excerpt: "KPSS Lisans sınavı için Genel Yetenek, Genel Kültür ve Eğitim Bilimleri derslerinin güncel konu listeleri.",
    imageSlug: "kpss-lisans-gygk-egitim-konulari",
    linkTo: "/blog/kpss-lisans-konulari",
    linkText: "KPSS Lisans Konuları"
  },
  {
    id: 19,
    title: "KPSS Önlisans Konuları (Genel Yetenek - Genel Kültür)",
    category: "Sınav Konuları",
    categoryKey: "sinav-konulari",
    date: "19 Mayıs 2025",
    author: "TESTGO Akademik Kadro",
    excerpt: "KPSS Önlisans sınavına hazırlananlar için Genel Yetenek ve Genel Kültür derslerinin tüm konuları.",
    imageSlug: "kpss-onlisans-gygk-konu-listesi",
    linkTo: "/blog/kpss-onlisans-konulari",
    linkText: "KPSS Önlisans Konuları"
  },
  {
    id: 20,
    title: "YDS Konuları ve Sınav Formatı Detayları",
    category: "Sınav Konuları",
    categoryKey: "sinav-konulari",
    date: "19 Mayıs 2025",
    author: "TESTGO Dil Uzmanları",
    excerpt: "YDS'de başarılı olmak için bilmeniz gereken gramer konuları, kelime türleri ve sınav formatı hakkında kapsamlı bilgiler.",
    imageSlug: "yds-sinav-formati-konular",
    linkTo: "/blog/yds-konulari",
    linkText: "YDS Konu Detayları"
  },
  {
    id: 21,
    title: "YÖKDİL Konuları (Sağlık, Sosyal, Fen Bilimleri)",
    category: "Sınav Konuları",
    categoryKey: "sinav-konulari",
    date: "19 Mayıs 2025",
    author: "TESTGO Dil Uzmanları",
    excerpt: "YÖKDİL Sağlık, Sosyal ve Fen Bilimleri alanlarına özel konu listeleri ve sınavda dikkat edilmesi gerekenler.",
    imageSlug: "yokdil-alan-konulari",
    linkTo: "/blog/yokdil-konulari",
    linkText: "YÖKDİL Konuları"
  },
  {
    id: 22,
    title: "LGS Sonrası Tercih Yaparken Dikkat Edilmesi Gerekenler",
    category: "Tercih Rehberi",
    categoryKey: "tercih-rehberi",
    date: "19 Mayıs 2025",
    author: "Eğitim Danışmanı Ayşe Yılmaz",
    excerpt: "LGS puanınızla en doğru liseyi seçmek için nelere dikkat etmelisiniz? Puan, yüzdelik dilim, okul türleri ve daha fazlası.",
    imageSlug: "lgs-tercih-ipuclari-dikkat",
    linkTo: "/blog/lgs-tercih-rehberi",
    linkText: "LGS Tercih İpuçları"
  },
  {
    id: 23,
    title: "YKS Sonrası Tercih Süreci: Doğru Bölüm ve Üniversite Seçimi",
    category: "Tercih Rehberi",
    categoryKey: "tercih-rehberi",
    date: "19 Mayıs 2025",
    author: "Kariyer Koçu Mehmet Demir",
    excerpt: "Hayalinizdeki üniversite ve bölüme ulaşmak için YKS tercihlerinizi nasıl yapmalısınız? Stratejik tercih listesi oluşturma.",
    imageSlug: "yks-universite-bolum-tercihi",
    linkTo: "/blog/yks-tercih-rehberi",
    linkText: "YKS Tercih Stratejileri"
  },
];


const blogTemplates = {
  common: [
    { titleTemplate: "{EXAM_NAME} İçin En İyi Çalışma Kaynakları ve TESTGO Önerileri", excerptTemplate: "{EXAM_NAME} sınavına hazırlanırken hangi kaynakları kullanmalısınız? TESTGO'nun {EXAM_NAME} özel içerikleriyle en verimli kaynaklara ulaşın." },
    { titleTemplate: "{EXAM_NAME} Sınavında Zaman Yönetimi Nasıl Yapılır?", excerptTemplate: "Sınav anında zamanı etkili kullanmak, başarının anahtarlarından biridir. {EXAM_NAME} için özel zaman yönetimi tekniklerini ve TESTGO ipuçlarını keşfedin." },
  ],
  yds_yokdil: [ 
    { titleTemplate: "{EXAM_NAME} İçin En Etkili Kelime Ezberleme Teknikleri", excerptTemplate: "{EXAM_NAME} sınavının temelini oluşturan kelime dağarcığınızı TESTGO'nun interaktif kelime kartları ve testleriyle geliştirin." },
    { titleTemplate: "{EXAM_NAME} Okuma Parçalarında Hız ve Anlama Nasıl Artırılır?", excerptTemplate: "Uzun ve karmaşık {EXAM_NAME} okuma parçalarında hem hızınızı hem de anlama oranınızı TESTGO'nun özel stratejileriyle yükseltin." },
  ]
};

export const generateBlogPostsForCategory = (categoryKey, categoryName, count, startIndex = 0) => {
  const posts = [];
  const today = new Date();
  let templatesToUse = [...blogTemplates.common];
  if (categoryKey === 'yds' || categoryKey === 'yokdil') {
    templatesToUse = [...templatesToUse, ...blogTemplates.yds_yokdil];
  }


  const baseExistingPosts = blogPostsData.filter(p => p.categoryKey === categoryKey && p.id.toString().includes('-generated-'));
  const existingGeneratedCount = baseExistingPosts.length;
  
  let currentStartIndex = existingGeneratedCount > 0 ? existingGeneratedCount : startIndex;


  for (let i = 0; i < count; i++) {
    const templateIndex = (currentStartIndex + i) % templatesToUse.length;
    const template = templatesToUse[templateIndex];
    const title = template.titleTemplate.replace(/{EXAM_NAME}/g, categoryName.toUpperCase());
    const excerpt = template.excerptTemplate.replace(/{EXAM_NAME}/g, categoryName.toUpperCase());
    const postDate = new Date(today);
    postDate.setDate(today.getDate() + (currentStartIndex + i)); 

    posts.push({
      id: `${categoryKey}-generated-${currentStartIndex + i + 1000}`, 
      title: title,
      category: `${categoryName} İpuçları`,
      categoryKey: categoryKey,
      date: postDate.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: "TESTGO Uzman İçerik Ekibi",
      excerpt: excerpt,
      imageSlug: `${categoryKey}-ipuclari-${currentStartIndex + i + 1}`,
      linkTo: `/blog/${categoryKey}-generated-${currentStartIndex + i + 1000}`, 
      linkText: `Daha Fazla Oku`
    });
  }
  return posts;
};
