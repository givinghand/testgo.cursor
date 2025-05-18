
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Edit3, Check } from "lucide-react";
import { fadeIn } from "@/utils/animations.jsx";

export function UserProfileHeader({ name, email, profileImageUrl }) {
  return (
    <motion.div
      variants={fadeIn}
      className="mb-10 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:justify-between p-6 bg-card rounded-xl shadow-lg border border-primary/20"
    >
      <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
        <div className="relative mb-4 sm:mb-0 sm:mr-6">
          <img 
            alt={name || "Kullanıcı Avatarı"}
            className="w-24 h-24 rounded-full border-4 border-primary shadow-md object-cover"
           src="https://images.unsplash.com/photo-1683071765673-ff92ff1645dc" />
          <div className="absolute bottom-0 right-0 bg-green-500 p-1.5 rounded-full border-2 border-card animate-pulse">
            <Check className="h-3 w-3 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">Merhaba, {name || "Kullanıcı"}!</h1>
          <p className="text-md text-muted-foreground">{email || "E-posta adresi bulunamadı"}</p>
        </div>
      </div>
      <Button variant="outline" size="lg" className="mt-4 sm:mt-0 border-primary text-primary hover:bg-primary/10">
        <Edit3 className="mr-2 h-4 w-4" /> Profilini Düzenle
      </Button>
    </motion.div>
  );
}
