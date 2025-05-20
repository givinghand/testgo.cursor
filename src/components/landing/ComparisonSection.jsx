
import React from "react";
import { motion } from "framer-motion";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Removed Card import
import { XCircle, CheckCircle, ArrowRight, Zap, AlertTriangle, ChevronsRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const oldMethodPoints = [
  { problem: "Tekrar edilen kitap testleri", consequence: "Sıkıcılık ve motivasyon kaybı" },
  { problem: "Geri bildirim eksikliği", consequence: "Hataların farkına varamama ve tekrarlama" },
  { problem: "Takip edilemeyen gelişim", consequence: "Nerede eksik olduğunu bilememe" },
  { problem: "Sınırlı soru çeşitliliği", consequence: "Farklı soru tiplerine hazırlıksız yakalanma" },
  { problem: "Güncel olmayan içerik", consequence: "Sınav formatından uzaklaşma" },
];

const testgoPoints = [
  { solution: "Gerçek zamanlı geri bildirim", benefit: "Anında öğrenme ve hataları düzeltme" },
  { solution: "Kişisel başarımlarla motivasyon", benefit: "Öğrenmeyi oyunlaştırma ve keyifli hale getirme" },
  { solution: "Anlık sıralamalar ve öneriler", benefit: "Rekabet duygusu ve kişiye özel gelişim yolu" },
  { solution: "Detaylı analizlerle gelişim takibi", benefit: "Güçlü ve zayıf yönleri net görme" },
  { solution: "Geniş ve güncel soru bankası", benefit: "Her seviyeye uygun, sınav odaklı pratik" },
];


export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ChevronsRight className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Eski Yöntemler vs. <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Öğrenme deneyimini nasıl yeniden şekillendirdiğimizi ve fark yarattığımızı görün.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn} className="h-full">
            <div className="blob-card h-full border-destructive/30">
              <div className="blob-animated" style={{ background: 'linear-gradient(45deg, hsl(var(--destructive) / 0.7), hsl(var(--destructive) / 0.4))' }}></div>
              <div className="blob-card-bg"></div>
              <div className="blob-card-content">
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-2xl font-bold text-destructive flex items-center">
                    <AlertTriangle className="mr-3 h-7 w-7" />
                    Eski Yöntemler
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 p-6 pt-2 flex-grow">
                  {oldMethodPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <XCircle className="mr-3 h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col text-foreground">
                        <span className="font-medium">{point.problem}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                           <ArrowRight className="mr-1 h-3 w-3 text-destructive transform rotate-90 sm:hidden"/>
                           <span className="sm:hidden">&nbsp;</span>
                          {point.consequence}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="h-full">
             <div className="blob-card h-full border-primary/50">
              <div className="blob-animated"></div>
              <div className="blob-card-bg"></div>
              <div className="blob-card-content">
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-2xl font-bold text-primary flex items-center">
                    <Zap className="mr-3 h-7 w-7 fill-primary text-primary-foreground" />
                    <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span> ile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 p-6 pt-2 flex-grow">
                  {testgoPoints.map((point, index) => (
                     <div key={index} className="flex items-start">
                      <CheckCircle className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col text-foreground">
                        <span className="font-medium">{point.solution}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="mr-1 h-3 w-3 text-primary transform rotate-90 sm:hidden"/>
                          <span className="sm:hidden">&nbsp;</span>
                          {point.benefit}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
