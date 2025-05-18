
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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHRlYWNoZXJ8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=100&q=60",
    quote: "TESTGO, öğrencilerimin gelişimini takip etmemi ve onlara özel çalışma materyalleri önermemi çok kolaylaştırdı. Analiz araçları sayesinde her öğrencinin ihtiyacını net bir şekilde görebiliyorum.",
    rating: 5,
  },
  {
    name: "Elif Erdoğan",
    title: "Türk Dili ve Edebiyatı Öğretmeni",
    experience: "10 Yıllık Deneyim",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=100&q=60",
    quote: "Öğrencilerimin TESTGO platformundaki testleri çözdükten sonra özellikle paragraf yorumlama ve anlama becerilerinde ciddi bir artış gözlemledim. Kaynak çeşitliliği harika.",
    rating: 5,
  },
  {
    name: "Mustafa Güneş",
    title: "Fen Bilimleri Öğretmeni",
    experience: "LGS Hazırlık Uzmanı",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHRlYWNoZXJ8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=100&q=60",
    quote: "LGS'ye hazırlanan öğrencilerim için TESTGO denemeleri vazgeçilmez oldu. Gerçek sınav formatına yakınlığı ve detaylı soru çözümleri, öğrencilerin eksiklerini kapatmasında büyük rol oynuyor.",
    rating: 5,
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
        <span className="text-xs text-secondary mt-auto">Detaylar için üzerine gelin</span>
      </div>
      <div className="testimonial-content-back">
        <Avatar className="avatar">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <p className="name">{testimonial.name}</p>
        <p className="title">{testimonial.title}</p>
        <p className="title text-xs mt-1 opacity-80">{testimonial.experience}</p>
      </div>
    </div>
  );
};

export function TeacherTestimonialsSection() {
   return (
    // MODIFICATION: Added mx-auto and a max-width to the <section> element.
    // You can adjust max-w-7xl (which is 1280px) to other Tailwind max-width utilities
    // like max-w-screen-xl, max-w-6xl, etc., depending on your desired width.
    <section className="py-16 md:py-24 bg-card mx-auto max-w-7xl">
      {/* 
        MODIFICATION: The inner div no longer strictly needs "container" or "mx-auto" 
        if the section itself is handling the max-width and centering.
        Keeping px-6 for consistent horizontal padding. You could also use "w-full" here
        if you want its children to truly fill the (now centered and max-width) section.
        Or, if your 'container' class adds specific responsive padding you like, you can use:
        <div className="container px-6"> 
        Just remove the mx-auto from it.
      */}
      <div className="w-full px-6"> {/* Or simply "px-6" if no other container logic is needed */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teacherTestimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn} className="flex">
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
