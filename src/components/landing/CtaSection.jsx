
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import { fadeIn } from "@/utils/animations.jsx";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Zap className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Bugün Gelişimini Başlat!
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Daha fazla bekleme! TESTGO ile potansiyelini keşfet, hedeflerine bir adım daha yaklaş.
            Binlerce soru ve yüzlerce konu anlatımı seni bekliyor.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="xl" 
              asChild 
              className="bg-white text-primary hover:bg-slate-100 shadow-2xl transform transition-all duration-300 group px-10 py-4 text-xl font-bold rounded-full"
            >
              <Link to="/test-coz">
                Hemen Test Çöz
                <ArrowRight className="ml-2.5 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
