
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { fadeIn } from "@/utils/animations.jsx";

const faqs = [
  {
    question: "Test çözmek ücretsiz mi?",
    answer: "Evet, TESTGO'da temel test çözme özellikleri tamamen ücretsizdir. Ücretsiz planımızla birçok konudaki testlere erişebilir ve temel sonuçlarınızı görebilirsiniz.",
  },
  {
    question: "Premium üyelik sistemi ne işe yarar?",
    answer: "Premium üyelik, TESTGO deneyiminizi bir üst seviyeye taşır. Sınırsız test çözme, detaylı puanlama, başarımlar, sıralamalar, kişiselleştirilmiş tavsiyeler ve kapsamlı performans analizleri gibi birçok gelişmiş özelliğe erişim sağlar.",
  },
  {
    question: "TC Kimlik ile giriş güvenli mi?",
    answer: "Kullanıcı güvenliği ve veri gizliliği bizim için en önemli önceliktir. TC Kimlik bilgileri gibi hassas veriler, en güncel güvenlik standartları ve şifreleme yöntemleri kullanılarak korunmaktadır. Verileriniz asla üçüncü partilerle paylaşılmaz.",
  },
  {
    question: "Sıralamalar neye göre hesaplanır?",
    answer: "Sıralamalar, çözdüğünüz testlerdeki performansınıza, doğru cevap sayınıza, test tamamlama sürenize ve diğer kullanıcıların performanslarına göre karmaşık bir algoritma ile hesaplanır. Bu sayede adil ve motive edici bir rekabet ortamı sunulur.",
  },
  {
    question: "Hangi derslerde testler bulunuyor?",
    answer: "TESTGO platformunda, okul müfredatına uygun birçok ders için testler bulunmaktadır. Matematik, Türkçe, Fen Bilimleri, Sosyal Bilimler gibi temel derslerin yanı sıra, sınavlara özel hazırlık testleri de mevcuttur. İçeriklerimiz sürekli güncellenmekte ve genişletilmektedir.",
  }
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aklınızdaki soruların cevaplarını burada bulabilirsiniz.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 card-hover">
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
      </div>
    </section>
  );
}
