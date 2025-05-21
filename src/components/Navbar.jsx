import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, LogOut, User, Settings, ShieldCheck, Library, TestTube2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/test-coz", label: "Test Çöz" },
  { href: "/konu-calis", label: "Konu Çalış" },
  { href: "/denemeler", label: "Denemeler" },
  { href: "/durumum", label: "Durumum" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, profile, signOut, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      setIsMobileMenuOpen(false);
      toast({
        title: "Çıkış Yapıldı",
        description: "Başarıyla çıkış yaptınız. Tekrar bekleriz!",
        className: "bg-primary text-primary-foreground",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Çıkış Hatası",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const getAvatarFallback = (fullName) => {
    if (!fullName) return "K";
    const names = fullName.split(' ');
    if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      className="sticky top-0 z-50 w-full py-6"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="absolute inset-x-0 -inset-y-4 bg-[#FFFFFF]/35 backdrop-blur-md border-b border-white/10 rounded-2xl mx-12" />
          <div className="relative flex h-20 items-center justify-between px-16">
            <Link to="/" className="flex items-center space-x-2 z-10">
              <motion.div 
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }} 
                className="flex items-center"
              >
                <TestTube2 className="h-8 w-8 text-primary mr-2" />
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  <span className="text-primary">TEST</span><span className="text-secondary">GO</span>
                </span>
              </motion.div>
            </Link>

            <NavigationMenu className="hidden md:flex z-10">
              <NavigationMenuList className="flex gap-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavLink 
                      to={link.href} 
                      className={({ isActive }) => cn(
                        "px-4 py-2 rounded-md text-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-white/10",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/20" 
                          : link.href === "/blog"
                            ? "bg-[#343b4d] text-white hover:bg-[#343b4d]/90 shadow-[#343b4d]/20"
                            : "bg-[#56CD95] text-primary-foreground hover:bg-[#4ab583] shadow-[#56CD95]/20"
                      )}
                    >
                      {link.label}
                    </NavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex items-center space-x-3 z-10">
              {loading ? (
                <div className="flex items-center space-x-2 p-2 rounded-md">
                  <LoadingSpinner size="sm" />
                  <span className="text-sm text-muted-foreground">Yükleniyor...</span>
                </div>
              ) : user ? (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" onClick={() => navigate("/durumum")} className="flex items-center space-x-2 px-3 py-2 h-auto bg-[#56CD95]/20 hover:bg-[#56CD95]/30">
                      <Library className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold">Hesabım</span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={profile?.avatar_url || ''} alt={profile?.full_name || user?.email} />
                          <AvatarFallback>{getAvatarFallback(profile?.full_name || user?.email)}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">{profile?.full_name || user.email}</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {profile?.is_premium ? "Premium Üye" : "Standart Üye"}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigate("/durumum")}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profilim</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/ayarlar")}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Ayarlar</span>
                      </DropdownMenuItem>
                      {!profile?.is_premium && (
                        <DropdownMenuItem onClick={() => navigate("/premium-uye-ol")} className="text-primary hover:!text-primary focus:!text-primary">
                          <ShieldCheck className="mr-2 h-4 w-4" />
                          <span>Premium'a Geç</span>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Çıkış Yap</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <>
                  <Button variant="ghost" asChild className="text-lg font-bold px-4 py-2 h-auto bg-[#2785E5] hover:brightness-110 hover:scale-105 transition-all duration-200 text-white shadow-md hover:shadow-lg border border-white/10">
                    <Link to="/giris">Giriş Yap</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-bold px-4 py-2 h-auto hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 group border border-white/10">
                    <Link to="/uye-ol" className="relative overflow-hidden">
                      <span className="relative z-10">Sen de Katıl</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-gradient" />
                    </Link>
                  </Button>
                </>
              )}
            </div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <AnimatePresence initial={false} mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="sr-only">Menüyü Aç/Kapat</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm p-0">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle className="text-xl font-bold">
                    <span className="text-primary">TEST</span><span className="text-secondary">GO</span> Menü
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 p-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "text-lg font-medium py-3 px-4 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
                          isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground"
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-auto p-6 border-t space-y-4">
                 {loading ? <p className="text-center text-muted-foreground">Yükleniyor...</p> : user ? (
                    <>
                      <Button variant="outline" onClick={() => { navigate("/durumum"); setIsMobileMenuOpen(false); }} className="w-full justify-start text-left">
                        <User className="mr-2 h-5 w-5 text-primary" /> Profilim
                      </Button>
                      <Button variant="destructive" onClick={handleLogout} className="w-full">
                         <LogOut className="mr-2 h-5 w-5"/> Çıkış Yap
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild className="w-full bg-[#2785E5] hover:brightness-110 hover:scale-105 transition-all duration-200 text-white">
                        <Link to="/giris" onClick={() => setIsMobileMenuOpen(false)}>Giriş Yap</Link>
                      </Button>
                      <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                        <Link to="/uye-ol" onClick={() => setIsMobileMenuOpen(false)} className="relative overflow-hidden">
                          <span className="relative z-10">Sen de Katıl</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-gradient" />
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
