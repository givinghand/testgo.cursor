
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, UserPlus, BookOpen, BarChart, Shield, Settings, CreditCard } from "lucide-react";

const faqCategories = [
  {
    category: "Genel Sorular",
    icon: <HelpCircle className="h-6 w-6 mr-2 text-primary" />,
    faqs: [
      {
        question: "TESTGO nedir ve ne işe yarar?",
        answer: "TESTGO, öğrencilerin çeşitli sınavlara hazırlanmalarına, konu eksiklerini gidermelerine ve gelişimlerini takip etmelerine yardımcı olan online bir eğitim ve test platformudur. İnteraktif testler, detaylı analizler ve kişiselleştirilmiş öğrenme deneyimleri sunar.",
      },
      {
        question: "Platformu kullanmak için herhangi bir ücret ödemem gerekiyor mu?",
        answer: "TESTGO'nun temel özellikleri ve belirli sayıda testi ücretsiz olarak kullanabilirsiniz. Daha kapsamlı içeriklere, detaylı analizlere ve premium özelliklere erişmek için uygun fiyatlı üyelik planlarımızdan birini seçebilirsiniz.",
      },
      {
        question: "Hangi sınavlara yönelik içerikler bulunuyor?",
        answer: "Platformumuzda LGS, YKS, KPSS, YDS, YÖKDİL gibi popüler sınavların yanı sıra, okul derslerine destekleyici çeşitli konularda testler ve öğrenme materyalleri bulunmaktadır. İçerik yelpazemiz sürekli olarak genişlemektedir.",
      },
    ],
  },
  {
    category: "Üyelik ve Hesap",
    icon: <UserPlus className="h-6 w-6 mr-2 text-primary" />,
    faqs: [
      {
        question: "Nasıl üye olabilirim?",
        answer: "Ana sayfamızdaki 'Üye Ol' butonuna tıklayarak veya navigasyon menüsündeki ilgili bağlantıyı kullanarak kolayca üyelik formuna ulaşabilir ve gerekli bilgileri doldurarak saniyeler içinde TESTGO ailesine katılabilirsiniz.",
      },
      {
        question: "Şifremi unuttum, ne yapmalıyım?",
        answer: "Giriş sayfasındaki 'Şifremi Unuttum' bağlantısına tıklayarak e-posta adresinizi girmeniz yeterlidir. Şifre sıfırlama bağlantısı e-posta adresinize gönderilecektir.",
      },
      {
        question: "Premium üyelik avantajları nelerdir?",
        answer: "Premium üyelerimiz; sınırsız test çözme, tüm konu anlatımlarına erişim, detaylı performans analizleri, kişiselleştirilmiş çalışma önerileri, başarımlar, sıralamalar ve reklamsız bir platform deneyimi gibi birçok özel avantaja sahip olurlar.",
      },
      {
        question: "Üyeliğimi nasıl iptal edebilirim?",
        answer: "Premium üyeliğinizi istediğiniz zaman profil ayarlarınızdaki 'Üyelik Yönetimi' bölümünden kolayca iptal edebilirsiniz. İptal işlemi sonrasında, mevcut fatura döneminizin sonuna kadar premium özelliklerden yararlanmaya devam edebilirsiniz.",
      },
    ],
  },
  {
    category: "Testler ve İçerikler",
    icon: <BookOpen className="h-6 w-6 mr-2 text-primary" />,
    faqs: [
      {
        question: "Testlerin zorluk seviyeleri nasıl belirleniyor?",
        answer: "Testlerimiz, uzman eğitimciler tarafından farklı zorluk seviyelerine (kolay, orta, zor) göre hazırlanmaktadır. Ayrıca, bazı testlerde adaptif öğrenme teknolojileri kullanılarak soruların zorluğu performansınıza göre ayarlanabilir.",
      },
      {
        question: "Yanlış yaptığım soruların çözümlerini görebilir miyim?",
        answer: "Evet, premium üyelerimiz test sonrasında yanlış yaptıkları veya boş bıraktıkları tüm soruların detaylı çözümlerine ve açıklamalarına erişebilirler. Bu, hatalarınızdan öğrenmeniz için önemli bir özelliktir.",
      },
      {
        question: "Konu anlatımları nasıl bir formatta sunuluyor?",
        answer: "Konu anlatımlarımız, özet metinler, açıklayıcı görseller, interaktif şemalar ve önerilen video ders linkleri gibi çeşitli formatlarda sunulmaktadır. Amacımız, her öğrenme stiline uygun materyaller sağlamaktır.",
      },
    ],
  },
  {
    category: "Performans ve Gelişim Takibi",
    icon: <BarChart className="h-6 w-6 mr-2 text-primary" />,
    faqs: [
      {
        question: "Gelişimimi nasıl takip edebilirim?",
        answer: "'Durumum' sayfasından genel başarı yüzdenizi, çözdüğünüz test sayısını, doğru/yanlış/boş oranlarınızı ve konu bazlı performansınızı detaylı grafikler ve tablolarla takip edebilirsiniz.",
      },
      {
        question: "Sıralamalar neye göre hesaplanıyor?",
        answer: "Genel ve deneme sınavı sıralamaları, testlerdeki puanlarınız, çözüm süreleriniz ve diğer kullanıcıların performansları dikkate alınarak özel bir algoritma ile hesaplanır. Bu, adil bir rekabet ortamı sunar.",
      },
      {
        question: "Eksik olduğum konuları nasıl belirleyebilirim?",
        answer: "Platformumuz, çözdüğünüz testlerdeki performansınıza göre eksik olduğunuz konuları otomatik olarak analiz eder ve 'Eksik Konu Analizi' sayfasında size özel bir liste sunar. Bu konulara yönelik çalışma önerileri de alabilirsiniz.",
      },
    ],
  },
   {
    category: "Güvenlik ve Gizlilik",
    icon: <Shield className="h-6 w-6 mr-2 text-primary" />,
    faqs: [
      {
        question: "Kişisel bilgilerim güvende mi?",
        answer: "Evet, kişisel bilgilerinizin güvenliği bizim için en üst düzeydedir. Verileriniz, KVKK (Kişisel Verilerin Korunması Kanunu) standartlarına uygun olarak en güncel şifreleme teknolojileri ve güvenlik protokolleri ile korunmaktadır. Detaylı bilgi için 'KVKK & Gizlilik Politikası' sayfamızı inceleyebilirsiniz.",
      },
      {
        question: "TC Kimlik numaram neden isteniyor ve güvenli mi?",
        answer: "Bazı resmi sınavlara (örneğin ÖSYM sınavları) yönelik denemelerde ve sıralamalarda kimlik doğrulaması ve çift kaydı önlemek amacıyla TC Kimlik numarası istenebilir. Bu bilgi, yasal gereklilikler ve güvenlik amacıyla talep edilir ve yüksek güvenlik standartlarıyla korunur. TC Kimlik numarası vermek zorunlu değildir, ancak bazı özelliklerin kullanımı için gerekebilir.",
      },
    ],
  },
  {
    category: "Teknik Destek ve Diğer Konular",
    icon: <Settings className="h-6 w-6 mr-2 text-primary" />,
    faqs: [
      {
        question: "Platformda bir sorunla karşılaştım, ne yapmalıyım?",
        answer: "Herhangi bir teknik sorunla karşılaşırsanız veya bir hata fark ederseniz, lütfen 'İletişim' sayfamızdaki formu kullanarak veya destek e-posta adresimiz üzerinden bizimle iletişime geçin. Ekibimiz en kısa sürede size yardımcı olacaktır.",
      },
      {
        question: "Mobil uygulama mevcut mu?",
        answer: "Şu anda TESTGO'ya web tarayıcıları üzerinden erişebilirsiniz. Mobil uygulamamız geliştirme aşamasındadır ve en kısa sürede kullanıcılarımızın hizmetine sunulacaktır. Gelişmelerden haberdar olmak için bültenimize kaydolabilirsiniz.",
      },
    ],
  },
];


export function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Sıkça Sorulan Sorular
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          TESTGO hakkında merak ettiğiniz her şey burada. Aradığınız cevabı bulamazsanız, lütfen bizimle <Link to="/iletisim" className="text-primary hover:underline">iletişime geçin</Link>.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        {faqCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <div className="flex items-center mb-6">
              {category.icon}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.category}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {category.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${catIndex}-${index}`} className="border border-border bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 card-hover">
                  <AccordionTrigger className="py-5 px-6 text-left text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors [&[data-state=open]]:text-primary [&[data-state=open]]:border-b border-border">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-5 px-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
