import React from "react";
import { motion } from "framer-motion";
import { ListChecks, CheckSquare, LineChart } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const steps = [
  {
    icon: <ListChecks className="h-10 w-10 text-background" />,
    title: "Test Seç ve Çöz",
    description:
      "Geniş konu ve ders yelpazesinden dilediğin testi seç, hemen çözmeye başla.",
  },
  {
    icon: <CheckSquare className="h-10 w-10 text-background" />,
    title: "Anında Puan ve Analiz Al",
    description:
      "Testi bitirir bitirmez puanını, doğru/yanlışlarını ve detaylı analizini gör.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-background" />,
    title: "Gelişimini Takip Et, Sıralamada Yüksel",
    description:
      "Performansını izle, eksiklerini gider ve sıralamalarda üst sıralara tırman.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            3 Adımda <span className="text-primary">TESTGO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Başarıya giden yolculuğunuz hiç bu kadar kolay olmamıştı.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-xl border border-border hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-6 p-5 bg-primary rounded-full text-primary-foreground inline-flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              <div className="mt-4 text-4xl font-extrabold text-primary opacity-10">{`0${
                index + 1
              }`}</div>
            </motion.div>
          ))}
          <div className="hidden md:block absolute top-1/3 left-0 w-full h-1 -translate-y-1/2 z-[-1]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10 Q 250 -10 500 10 T 1000 10"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray="10 5"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
