
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Mail, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function LoginPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "kullanici@testgo.com" && password === "sifre123") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email); 
      toast({
        title: "Giriş Başarılı!",
        description: "TESTGO'ya hoş geldiniz.",
        className: "bg-green-500 text-white",
      });
      navigate("/"); 
    } else {
      toast({
        title: "Giriş Başarısız!",
        description: "E-posta veya şifre hatalı. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-8rem)] bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl border-primary/20 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
          <CardHeader className="text-center pt-8 pb-6">
            <div className="inline-block p-4 bg-primary/10 rounded-full mx-auto mb-4">
              <LogIn className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground">Giriş Yap</CardTitle>
            <CardDescription className="text-muted-foreground">
              Hesabınıza giriş yaparak TESTGO'nun tüm özelliklerinden faydalanmaya başlayın.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 sm:px-8 pb-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">E-posta Adresiniz</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ornek@mail.com" 
                    required 
                    className="pl-12 h-11 text-base focus:ring-primary focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">Şifreniz</Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    className="pl-12 h-11 text-base focus:ring-primary focus:border-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember-me" 
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="remember-me" className="text-sm font-normal text-muted-foreground cursor-pointer">Beni Hatırla</Label>
                </div>
                <Link to="/sifremi-unuttum" className="text-sm text-primary hover:underline font-medium">
                  Şifremi Unuttum?
                </Link>
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold py-3 shadow-md hover:shadow-lg transition-shadow duration-300">
                Giriş Yap
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center flex-col py-6 bg-muted/50 border-t">
            <p className="text-sm text-muted-foreground">
              Hesabınız yok mu?{' '}
              <Link to="/uye-ol" className="font-semibold text-primary hover:underline">
                Hemen Sen de Katıl!
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
