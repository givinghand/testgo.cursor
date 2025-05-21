import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Briefcase } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

const teacherTestimonials = [
  {
    name: "Ahmet Çelik",
    title: "Matematik Öğretmeni",
    experience: "15 Yıllık Deneyim",
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60",
    quote: "TESTGO, öğrencilerimin gelişimini takip etmemi ve onlara özel çalışma materyalleri önermemi çok kolaylaştırdı. Analiz araçları sayesinde her öğrencinin ihtiyacını net bir şekilde görebiliyorum.",
    rating: 5,
  },
  {
    name: "Elif Erdoğan",
    title: "Türk Dili ve Edebiyatı Öğretmeni",
    experience: "10 Yıllık Deneyim",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlciUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60",
    quote: "Öğrencilerimin TESTGO platformundaki testleri çözdükten sonra özellikle paragraf yorumlama ve anlama becerilerinde ciddi bir artış gözlemledim. Kaynak çeşitliliği harika.",
    rating: 5,
  },
  {
    name: "Mustafa Güneş",
    title: "Fen Bilimleri Öğretmeni",
    experience: "LGS Hazırlık Uzmanı",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60",
    quote: "LGS'ye hazırlanan öğrencilerim için TESTGO denemeleri vazgeçilmez oldu. Gerçek sınav formatına yakınlığı ve detaylı soru çözümleri, öğrencilerin eksiklerini kapatmasında büyük rol oynuyor.",
    rating: 4,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="blob-card testimonial-card-hover-effect">
      <div className="blob-animated" />
      <div className="blob-card-bg" />
      <div className="blob-card-content">
        <div className="testimonial-content-front">
          <Avatar className="avatar">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <p className="name">{testimonial.name}</p>
          <p className="title">{testimonial.title}</p>
          <p className="title text-xs mt-1 opacity-80">{testimonial.experience}</p>
        </div>
        <div className="testimonial-content-back">
          <div className="stars">
            {Array(5).fill(0).map((_, i) => (
              <Star
                key={i}
                className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 fill-slate-100'}`}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <p className="quote">"{testimonial.quote}"</p>
        </div>
      </div>
    </div>
  );
};

export function TeacherTestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Briefcase className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Öğretmenler <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>'yu Neden Öneriyor?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deneyimli eğitimcilerin platformumuz hakkındaki değerli görüşleri.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teacherTestimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn} className="w-full">
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
