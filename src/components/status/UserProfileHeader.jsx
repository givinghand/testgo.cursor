
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Edit3, Check, Upload } from "lucide-react";
import { fadeIn } from "@/utils/animations.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function UserProfileHeader({ name, email, profileImageUrl, onEditClick }) {

  const getAvatarFallback = (fullName) => {
    if (!fullName) return "K";
    const names = fullName.split(' ');
    if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };
  
  return (
    <motion.div
      variants={fadeIn}
      className="mb-10 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:justify-between p-6 bg-card rounded-xl shadow-lg border border-primary/20"
    >
      <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
        <div className="relative mb-4 sm:mb-0 sm:mr-6 group">
          <Avatar className="w-24 h-24 border-4 border-primary shadow-md">
            <AvatarImage src={profileImageUrl} alt={name || "Kullanıcı Avatarı"} />
            <AvatarFallback className="text-3xl bg-primary/20 text-primary font-semibold">
              {getAvatarFallback(name)}
            </AvatarFallback>
          </Avatar>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute bottom-0 right-0 bg-background/80 backdrop-blur-sm border-primary text-primary rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={onEditClick}
            title="Profil resmini değiştir"
          >
            <Upload className="h-4 w-4" />
          </Button>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">Merhaba, {name || "Kullanıcı"}!</h1>
          <p className="text-md text-muted-foreground">{email || "E-posta adresi bulunamadı"}</p>
        </div>
      </div>
      <Button variant="outline" size="lg" className="mt-4 sm:mt-0 border-primary text-primary hover:bg-primary/10" onClick={onEditClick}>
        <Edit3 className="mr-2 h-4 w-4" /> Profilini Düzenle
      </Button>
    </motion.div>
  );
}
