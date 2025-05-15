import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, CheckCircle, TrendingUp, Zap } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Eski Yöntemler vs. <span className="text-primary">TESTGO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Öğrenme deneyimini nasıl yeniden şekillendirdiğimizi görün.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn}>
            <Card className="h-full shadow-lg border-destructive/30 bg-background rounded-xl overflow-hidden">
              <CardHeader className="bg-destructive/10 p-6">
                <CardTitle className="text-2xl font-bold text-destructive flex items-center">
                  <XCircle className="mr-3 h-7 w-7" />
                  Eski Yöntemler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground p-6">
                <p className="flex items-start">
                  <XCircle className="mr-2 mt-1 h-5 w-5 text-destructive flex-shrink-0" />{" "}
                  Tekrar edilen kitap testleri, sıkıcı ve monoton.
                </p>
                <p className="flex items-start">
                  <XCircle className="mr-2 mt-1 h-5 w-5 text-destructive flex-shrink-0" />{" "}
                  Geri bildirim eksikliği, hataların farkına varamama.
                </p>
                <p className="flex items-start">
                  <XCircle className="mr-2 mt-1 h-5 w-5 text-destructive flex-shrink-0" />{" "}
                  Takip edilemeyen gelişim, motivasyon kaybı.
                </p>
                <p className="flex items-start">
                  <XCircle className="mr-2 mt-1 h-5 w-5 text-destructive flex-shrink-0" />{" "}
                  Sınırlı soru çeşitliliği ve güncel olmayan içerik.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full shadow-lg border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/20 rounded-xl overflow-hidden">
              <CardHeader className="bg-primary/10 p-6">
                <CardTitle className="text-2xl font-bold text-primary flex items-center">
                  <Zap className="mr-3 h-7 w-7" />
                  TESTGO ile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground p-6">
                <p className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0" />{" "}
                  Gerçek zamanlı geri bildirim, anında öğrenme.
                </p>
                <p className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0" />{" "}
                  Kişisel başarımlarla motivasyon, öğrenmeyi oyunlaştırma.
                </p>
                <p className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0" />{" "}
                  Anlık sıralamalar ve kişiye özel önerilerle rekabet.
                </p>
                <p className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 text-primary flex-shrink-0" />{" "}
                  <TrendingUp className="inline mr-1 h-5 w-5" /> Detaylı
                  analizlerle gelişimini net bir şekilde takip etme.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
