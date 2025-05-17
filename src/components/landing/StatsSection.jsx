
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animations";
import { BookOpen, Users, Edit3, FileText, Award } from "lucide-react";

const stats = [
  {
    icon: <Edit3 className="h-10 w-10 text-primary" />,
    value: "250.000+",
    label: "Soru Çözüldü",
    bgColor: "bg-primary/10",
  },
  {
    icon: <FileText className="h-10 w-10 text-secondary" />,
    value: "1.500+",
    label: "Deneme Sınavı",
    bgColor: "bg-secondary/10",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-accent" />,
    value: "800+",
    label: "Konu Anlatımı",
    bgColor: "bg-accent/10",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: "50.000+",
    label: "Aktif Kullanıcı",
    bgColor: "bg-primary/10",
  },
];

export function StatsSection() {
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
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Başarıya Giden Yolda Rakamlarla <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platformumuzdaki etkileyici istatistiklerle öğrenme deneyiminizi nasıl zenginleştirdiğimizi görün.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeIn} className="flex">
              <div className="w-full text-center p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background border border-border card-hover">
                <div className={`w-20 h-20 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-6 shadow-md`}>
                  {stat.icon}
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
