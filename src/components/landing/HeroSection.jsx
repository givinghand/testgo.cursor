
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import { fadeIn } from "@/utils/animations.jsx";

const heroImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/00529612-644c-4489-a947-86a89854cb46/feb401f2b12584ba673e70de8961bed7.png";

export function HeroSection() {
  return (
    <section className="relative text-white py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImageUrl} alt="TESTGO platformunu kullanan gülümseyen bir öğrenci" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-shadow-lg">
            Gelişimin Yeni Adı: <span className="block sm:inline">
              <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-slate-100 text-shadow-md">
            Test çöz, gelişimini takip et, rekabete katıl. Öğrenme yolculuğunda sana özel bir deneyim.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="xl" 
              asChild 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 shadow-2xl transform transition-all duration-300 group px-10 py-4 text-xl font-bold rounded-full"
            >
              <Link to="/test-coz">
                <Zap className="mr-2.5 h-6 w-6 animate-pulse" />
                Hemen Ücretsiz Test Çözmeye Başla
                <ChevronRight className="ml-2.5 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
        }
        .text-shadow-md {
          text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
        }
      `}</style>
    </section>
  );
}
