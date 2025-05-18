import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, GraduationCap as UserGraduate } from 'lucide-react';
import { fadeIn, staggerContainer } from "@/utils/animations.jsx";

// Your studentTestimonials array remains the same

const TestimonialCard = ({ testimonial }) => {
  return (
    // Use the main class from the "scratch CSS" for the card
    <div className="testimonial-card-scratch">
      {/* Avatar: Positioned absolutely by the CSS */}
      <Avatar className="reviewer-avatar-scratch"> {/* Apply avatar specific class */}
        <AvatarImage src={testimonial.image} alt={testimonial.name} />
        <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>

      {/* Wrapper for name and quote - this helps with initial layout and hover transformation */}
      <div className="card-content-wrapper-scratch">
        <h3 className="reviewer-name-scratch">{testimonial.name}</h3>
        <p className="review-text-scratch">{testimonial.quote}</p>
      </div>

      {/* Stars: Appear on hover, positioned absolutely */}
      <div className="review-stars-scratch">
        {Array(5).fill(0).map((_, i) => (
          <Star
            key={i}
            // lucide-react icons take className for styling.
            // The colors here will apply, CSS primarily handles size/position.
            className={`inline-block w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
          />
        ))}
      </div>

      {/* Reviewer Details: Appear on hover, positioned absolutely */}
      <div className="reviewer-details-scratch">
        {/* You can structure this as needed */}
        <p>{testimonial.exam} Sınavı</p> {/* Example detail */}
        <p className="text-sm">{testimonial.title}</p> {/* Example detail, text-sm for smaller font */}
      </div>
    </div>
  );
};

export function StudentTestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background"> {/* Changed to bg-background assuming it's your page bg */}
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <UserGraduate className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Öğrencilerimiz <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span> Hakkında Ne Diyor?
          </h2>
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
            <motion.div key={index} variants={fadeIn} className="flex"> {/* flex helps if cards have different heights initially */}
               <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}