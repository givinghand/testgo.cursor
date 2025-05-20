
import React from "react";
import { motion } from "framer-motion";
import { CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; // Removed Card import
import { Button } from "@/components/ui/button";
import { Check, Star, TrendingUp } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Ücretsiz Plan",
    price: "0₺",
    period: "/her zaman",
    features: [
      "Sınırlı test çözme",
      "Temel sonuç görüntüleme",
      "Konu bazlı testler",
    ],
    cta: "Hemen Başla",
    link: "/uye-ol",
    variant: "outline",
    popular: false,
    blobColor: "linear-gradient(45deg, hsl(var(--secondary) / 0.7), hsl(var(--accent) / 0.7))",
  },
  {
    name: "Premium Plan",
    price: "99.90₺",
    period: "/aylık",
    features: [
      "Sınırsız test çözme",
      "Detaylı puanlama sistemi",
      "Başarımlar ve rozetler",
      "Genel ve özel sıralamalar",
      "Kişiselleştirilmiş tavsiyeler",
      "Detaylı performans analizleri",
      "Hata kaydı ve tekrar testleri",
    ],
    cta: "Premium'a Geç",
    link: "/premium-kayit", 
    variant: "default",
    popular: false, 
    blobColor: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))",
  },
];

export function PricingSection() {
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Üyelik Seçenekleri</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İhtiyaçlarınıza en uygun planı seçin ve <span className="text-primary font-bold">TEST</span><span className="text-[hsl(var(--secondary))] font-bold">GO</span>'nun tüm avantajlarından yararlanın.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={fadeIn} className="flex h-full">
              <div className={`blob-card h-full ${plan.popular ? 'border-2 border-primary ring-4 ring-primary/20' : 'border-border'}`}>
                <div className="blob-animated" style={{ background: plan.blobColor }}></div>
                <div className="blob-card-bg"></div>
                <div className="blob-card-content flex flex-col">
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center z-10">
                      <Star className="h-4 w-4 mr-1.5 fill-yellow-300 text-yellow-400" /> Popüler
                    </div>
                  )}
                  <CardHeader className="text-center pt-10 p-6">
                    <CardTitle className={`text-2xl font-bold ${plan.name === "Premium Plan" ? 'text-primary' : 'text-foreground'}`}>{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center my-4">
                      <span className={`text-4xl font-extrabold ${plan.name === "Premium Plan" ? 'text-primary' : 'text-foreground'}`}>{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 pt-0">
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${plan.name === "Premium Plan" ? 'text-primary' : 'text-[hsl(var(--secondary))]'}`} />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto p-6">
                    <Button asChild size="lg" className={`w-full text-base font-semibold ${plan.name === "Premium Plan" ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'}`} variant={plan.variant === "outline" && plan.name !== "Premium Plan" ? "secondary" : plan.variant}>
                      <Link to={plan.link}>{plan.cta} <TrendingUp className="ml-2 h-5 w-5"/></Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
