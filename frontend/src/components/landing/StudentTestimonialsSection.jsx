
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, GraduationCap as UserGraduate } from 'lucide-react';
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const studentTestimonials = [
  {
    name: "Ayşe Yılmaz",
    title: "Tıp Fakültesi Öğrencisi",
    exam: "YKS",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudCUyMHNtaWxpbmd8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=100&q=60",
    quote: "TESTGO sayesinde TYT'de ilk 1000'e girmeyi başardım. Özellikle eksik konu analizleri ve kişiselleştirilmiş çalışma programı çok faydalı oldu. Deneme sınavları gerçek sınavla birebirdi!",
    rating: 5,
  },
  {
    name: "Mehmet Kaya",
    title: "Mühendislik Öğrencisi",
    exam: "YKS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHN0dWRlbnR8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=100&q=60",
    quote: "Deneme sınavları ve detaylı analizler sayesinde zayıf olduğum konuları tespit edip, çalışmalarımı ona göre yönlendirdim. Sonuç olarak hedeflediğim bölüme yerleştim. TESTGO'ya teşekkürler!",
    rating: 5,
  },
  {
    name: "Zeynep Demir",
    title: "LGS Öğrencisi",
    exam: "LGS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwc3R1ZGVudHx8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=100&q=60",
    quote: "İnteraktif testler ve anında geri bildirimler öğrenme sürecimi çok hızlandırdı. Ayrıca mobil uyumlu olması her yerde çalışabilmemi sağladı. TESTGO ile çalışmak çok keyifli.",
    rating: 4,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card-hover-effect">
      <div className="testimonial-content-front">
        <div className="stars">
          {Array(5).fill(0).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
            />
          ))}
        </div>
        <p className="quote">"{testimonial.quote.substring(0, 100)}{testimonial.quote.length > 100 ? "..." : ""}"</p>
        <span className="text-xs text-primary mt-auto">Detaylar için üzerine gelin</span>
      </div>
      <div className="testimonial-content-back">
        <Avatar className="avatar">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <p className="name">{testimonial.name}</p>
        <p className="title">{testimonial.exam} Sınavına Hazırlanıyor</p>
        <p className="title text-xs mt-1">{testimonial.title}</p>
      </div>
    </div>
  );
};


export function StudentTestimonialsSection() {
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
          <UserGraduate className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Öğrencilerimiz <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span> Hakkında Ne Diyor?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Binlerce öğrencimizin başarı hikayelerinden ve deneyimlerinden bazıları.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {studentTestimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn} className="flex">
               <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
