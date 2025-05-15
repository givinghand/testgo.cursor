
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, BarChart2, TrendingUp, Lightbulb } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const steps = [
  {
    icon: <CheckSquare className="h-10 w-10 text-primary" />,
    title: "Test Seç ve Çöz",
    description: "Geniş konu ve ders yelpazesinden dilediğin testi seç, hemen çözmeye başla.",
    bgColor: "bg-primary/10",
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-secondary" />,
    title: "Anında Puan ve Analiz Al",
    description: "Testi bitirir bitirmez puanını, doğrularını/yanlışlarını ve detaylı analizini gör.",
    bgColor: "bg-secondary/10",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: "Gelişimini Takip Et, Sıralamada Yüksel",
    description: "Performansını izle, eksiklerini gider ve sıralamalarda üst sıralara tırman.",
    bgColor: "bg-accent/10",
  },
];

export function HowItWorksSection() {
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
          <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            3 Adımda <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Başarıya giden yolculuğunuz hiç bu kadar kolay olmamıştı.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeIn} className="flex">
              <Card className="w-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden card-hover bg-card border border-border">
                <CardHeader className="pt-8 pb-4">
                  <div className={`w-20 h-20 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-6 shadow-md`}>
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8 px-6">
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  <div className={`mt-6 text-5xl font-bold opacity-10 ${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent'}`}>
                    0{index + 1}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
