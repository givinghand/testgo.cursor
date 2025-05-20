
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, LogOut, User, Settings, ShieldCheck, Library } from "lucide-react"; // BookUser yerine Library kullanıldı
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/test-coz", label: "Test Çöz" },
  { href: "/konu-calis", label: "Konu Çalış" },
  { href: "/denemeler", label: "Denemeler" },
  { href: "/durumum", label: "Durumum" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, profile, signOut, loading } = useAuth();

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
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}>
            <img src="https://images.unsplash.com/photo-1580428354768-03a028646bc8" alt="TESTGO Logo" className="h-10 w-10" /> 
          </motion.div>
          <span className="text-2xl font-extrabold tracking-tight text-foreground">
             <span className="text-primary">TEST</span><span className="text-secondary">GO</span>
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavLink to={link.href} className={({ isActive }) => cn(navigationMenuTriggerStyle(), "text-base", isActive && "bg-accent text-accent-foreground font-semibold")}>
                  {link.label}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-3">
          {loading ? (
            <div className="flex items-center space-x-2 p-2 rounded-md">
              <LoadingSpinner size="sm" />
              <span className="text-sm text-muted-foreground">Yükleniyor...</span>
            </div>
          ) : user ? (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={() => navigate("/durumum")} className="flex items-center space-x-2 px-3 py-2 h-auto">
                  <Library className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Hesabım</span>
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
              <Button variant="ghost" asChild>
                <Link to="/giris">Giriş Yap</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md hover:opacity-90 transition-opacity">
                <Link to="/uye-ol">Sen de Katıl</Link>
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
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/giris" onClick={() => setIsMobileMenuOpen(false)}>Giriş Yap</Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    <Link to="/uye-ol" onClick={() => setIsMobileMenuOpen(false)}>Sen de Katıl</Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
