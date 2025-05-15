import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, TrendingUp } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

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
  },
  {
    name: "Premium Plan",
    price: "29.99₺",
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
    popular: true,
  },
];

export function PricingSection() {
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
            Üyelik Seçenekleri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İhtiyaçlarınıza en uygun planı seçin ve TESTGO'nun tüm
            avantajlarından yararlanın.
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
            <motion.div key={index} variants={fadeIn} className="flex">
              <Card
                className={`w-full flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden ${
                  plan.popular
                    ? "border-2 border-primary relative ring-4 ring-primary/20 bg-card"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md flex items-center">
                    <Star className="h-4 w-4 mr-1.5 fill-yellow-300 text-yellow-300" />{" "}
                    Popüler
                  </div>
                )}
                <CardHeader className="text-center pt-10 p-6">
                  <CardTitle
                    className={`text-2xl font-bold ${
                      plan.popular ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center my-4">
                    <span
                      className={`text-4xl font-extrabold ${
                        plan.popular ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check
                          className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.popular ? "text-primary" : "text-green-500"
                          }`}
                        />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto p-6">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full text-base font-semibold ${
                      plan.popular
                        ? ""
                        : "bg-foreground/80 hover:bg-foreground/90 text-background"
                    }`}
                    variant={plan.variant}
                  >
                    <a href={plan.link}>
                      {plan.cta} <TrendingUp className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
