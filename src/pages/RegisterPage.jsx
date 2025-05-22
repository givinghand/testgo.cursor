import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Mail, Lock, User, ShieldCheck, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

export function RegisterPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signUp, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    tcKimlik: "",
    kvkkAccepted: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    
    const errors = [];
    if (!minLength) errors.push("En az 8 karakter");
    if (!hasNumber) errors.push("En az 1 rakam");
    if (!hasSpecial) errors.push("En az 1 özel karakter");
    if (!hasUpperCase) errors.push("En az 1 büyük harf");
    
    return errors;
  };

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Password validation
    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0) {
      toast({
        title: "Şifre Gereksinimleri",
        description: `Şifreniz şunları içermelidir: ${passwordErrors.join(", ")}`,
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Şifreler Eşleşmiyor!",
        description: "Lütfen şifrenizi kontrol edin.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!formData.kvkkAccepted) {
      toast({
        title: "KVKK Onayı Gerekli!",
        description: "Lütfen KVKK ve Gizlilik Politikasını kabul edin.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!formData.tcKimlik || formData.tcKimlik.length !== 11) {
      toast({
        title: "T.C. Kimlik Numarası Gerekli!",
        description: "Lütfen 11 haneli T.C. Kimlik numaranızı girin.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      await signUp(formData.email, formData.password, fullName, formData.tcKimlik);
      toast({
        title: "Kayıt Başarılı!",
        description: `Hoş geldin ${fullName}! Hesabın oluşturuldu. Lütfen e-postanı kontrol et.`,
        className: "bg-green-500 text-white",
      });
      navigate("/giris"); 
    } catch (error) {
       toast({
        title: "Kayıt Başarısız!",
        description: error.message || "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                  <Label htmlFor="firstName">Adınız</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="firstName" placeholder="Adınız" required className="pl-10" value={formData.firstName} onChange={handleChange} disabled={isLoading || authLoading} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Soyadınız</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="lastName" placeholder="Soyadınız" required className="pl-10" value={formData.lastName} onChange={handleChange} disabled={isLoading || authLoading} />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">E-posta Adresiniz</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="ornek@mail.com" required className="pl-10" value={formData.email} onChange={handleChange} disabled={isLoading || authLoading} />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="tcKimlik">T.C. Kimlik Numaranız</Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="tcKimlik" 
                    placeholder="11 haneli TC Kimlik numaranızı giriniz" 
                    className="pl-10" 
                    value={formData.tcKimlik} 
                    onChange={handleChange} 
                    disabled={isLoading || authLoading}
                    required
                    pattern="[0-9]{11}"
                    maxLength={11}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="password">Şifreniz</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" required className="pl-10" value={formData.password} onChange={handleChange} disabled={isLoading || authLoading} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Şifreniz en az 8 karakter uzunluğunda olmalı ve en az 1 büyük harf, 1 rakam ve 1 özel karakter içermelidir.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="confirmPassword">Şifrenizi Tekrar Girin</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="confirmPassword" type="password" placeholder="••••••••" required className="pl-10" value={formData.confirmPassword} onChange={handleChange} disabled={isLoading || authLoading} />
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox 
                  id="kvkkAccepted" 
                  checked={formData.kvkkAccepted}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, kvkkAccepted: checked }))}
                  disabled={isLoading || authLoading}
                  required
                />
                <Label htmlFor="kvkkAccepted" className="text-sm font-normal leading-snug">
                  <Link to="/kvkk-gizlilik" target="_blank" className="text-primary hover:underline">KVKK Aydınlatma Metni</Link>'ni ve <Link to="/kvkk-gizlilik" target="_blank" className="text-primary hover:underline">Gizlilik Politikası</Link>'nı okudum, kabul ediyorum.
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground !mt-6" disabled={isLoading || authLoading}>
                {(isLoading || authLoading) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
