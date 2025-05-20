
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Mail, Lock, User, ShieldCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function RegisterPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    tcKimlik: "",
    kvkkAccepted: false,
  });

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Şifreler Eşleşmiyor!",
        description: "Lütfen şifrenizi kontrol edin.",
        variant: "destructive",
      });
      return;
    }
    if (!formData.kvkkAccepted) {
      toast({
        title: "KVKK Onayı Gerekli!",
        description: "Lütfen KVKK ve Gizlilik Politikasını kabul edin.",
        variant: "destructive",
      });
      return;
    }
    // Kayıt mantığı buraya eklenecek
    console.log("Kayıt verileri:", formData);
    toast({
      title: "Kayıt Başarılı!",
      description: `Hoş geldin ${formData.fullName}! Hesabın oluşturuldu.`,
    });
    navigate("/giris"); 
  };


  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <UserPlus className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-3xl font-bold">Sen de Katıl</CardTitle>
            <CardDescription>
              TESTGO'ya katılarak öğrenme serüvenine başla! Binlerce soru ve yüzlerce konu seni bekliyor.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Adınız Soyadınız</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="fullName" placeholder="Adınız Soyadınız" required className="pl-10" value={formData.fullName} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">E-posta Adresiniz</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="ornek@mail.com" required className="pl-10" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="password">Şifreniz</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" required className="pl-10" value={formData.password} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="confirmPassword">Şifrenizi Tekrar Girin</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="confirmPassword" type="password" placeholder="••••••••" required className="pl-10" value={formData.confirmPassword} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="tcKimlik">T.C. Kimlik Numaranız (İsteğe Bağlı)</Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="tcKimlik" placeholder="T.C. Kimlik Numaranız" className="pl-10" value={formData.tcKimlik} onChange={handleChange} />
                </div>
                <p className="text-xs text-muted-foreground">Deneme sınavı sıralamaları için gereklidir. Girmek istemiyorsanız boş bırakabilirsiniz.</p>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox 
                  id="kvkkAccepted" 
                  checked={formData.kvkkAccepted}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, kvkkAccepted: checked }))}
                />
                <Label htmlFor="kvkkAccepted" className="text-sm font-normal leading-snug">
                  <Link to="/kvkk-gizlilik" target="_blank" className="text-primary hover:underline">KVKK Aydınlatma Metni</Link>'ni ve <Link to="/kvkk-gizlilik" target="_blank" className="text-primary hover:underline">Gizlilik Politikası</Link>'nı okudum, kabul ediyorum.
                </Label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground !mt-6">
                Hesabımı Oluştur
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center flex-col">
            <p className="text-sm text-muted-foreground">
              Zaten bir hesabın var mı?{' '}
              <Link to="/giris" className="font-medium text-primary hover:underline">
                Giriş Yap
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
