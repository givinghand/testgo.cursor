
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, BarChartBig, Target, Zap } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const benefits = [
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Gelişimini Anlık Gör",
    description: "Her test sonrası doğru ve yanlışlarını detaylı analiz et, performansını anında öğren.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Rekabetle Motive Ol",
    description: "Puanlar, başarımlar ve sıralamalarla öğrenmeyi oyunlaştır. Arkadaşlarınla yarış, zirveye oyna!",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Hatalarını Tekrar Çöz",
    description: "Zayıf olduğun konulara odaklan, yanlış yaptığın soruları tekrar çözerek eksiklerini gider.",
  },
  {
    icon: <BarChartBig className="h-8 w-8 text-primary" />,
    title: "Kişiselleştirilmiş Deneyim",
    description: "Sana özel öneriler ve çalışma planları ile öğrenme verimliliğini en üst düzeye çıkar.",
  }
];

export function BenefitsSection() {
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Neden <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sınavlara hazırlık sürecinizi dönüştürecek benzersiz avantajlar sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary bg-card rounded-xl card-hover">
                <CardHeader className="items-center text-center p-6">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center p-6 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
