
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    title: "Tıp Fakültesi Öğrencisi",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60",
    quote: "TESTGO sayesinde TYT'de ilk 1000'e girmeyi başardım. Özellikle eksik konu analizleri ve kişiselleştirilmiş çalışma programı çok faydalı oldu.",
    rating: 5,
  },
  {
    name: "Mehmet Kaya",
    title: "Mühendislik Öğrencisi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60",
    quote: "Deneme sınavları ve detaylı analizler sayesinde zayıf olduğum konuları tespit edip, çalışmalarımı ona göre yönlendirdim. Sonuç olarak hedeflediğim bölüme yerleştim.",
    rating: 5,
  },
  {
    name: "Zeynep Demir",
    title: "İşletme Öğrencisi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60",
    quote: "İnteraktif testler ve anında geri bildirimler öğrenme sürecimi çok hızlandırdı. Ayrıca mobil uyumlu olması her yerde çalışabilmemi sağladı.",
    rating: 4,
  },
];

export function TestimonialsSection() {
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Öğrencilerimiz <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span> Hakkında Ne Diyor?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Binlerce öğrencimizin başarı hikayelerinden ve deneyimlerinden bazıları.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden flex flex-col card-hover">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 text-sm leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-primary/50">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                    </div>
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
