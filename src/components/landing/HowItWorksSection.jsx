
import React from "react";
import { motion } from "framer-motion";
import { CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"; // Removed Card import
import { UserPlus, Edit3, BarChart, Award, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const steps = [
  {
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: "Ücretsiz Kayıt Ol",
    description: "Hızlı ve kolay bir şekilde platforma kayıt ol, öğrenme serüvenine hemen başla.",
  },
  {
    icon: <Edit3 className="h-10 w-10 text-primary" />,
    title: "Testini Seç ve Çöz",
    description: "Binlerce soru arasından istediğin konuyu seç, interaktif testlerle bilgilerini sına.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Anlık Sonuçları Gör",
    description: "Test bitiminde detaylı analizlerle performansını değerlendir, güçlü ve zayıf yönlerini keşfet.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Başarıya Ulaş!",
    description: "Kişiselleştirilmiş önerilerle eksiklerini gider, hedeflerine emin adımlarla ilerle.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">3 Adımda <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basit adımlarla nasıl çalıştığımızı keşfedin ve öğrenme potansiyelinizi en üst düzeye çıkarın.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="blob-card h-full w-full">
                <div className="blob-animated"></div>
                <div className="blob-card-bg"></div>
                <div className="blob-card-content flex flex-col items-center text-center">
                  <CardHeader className="items-center p-6 pb-3">
                    <div className="p-5 bg-primary/10 rounded-full mb-5 inline-flex">
                      {step.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mt-8 w-full">
                  <ArrowRight className="h-8 w-8 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
