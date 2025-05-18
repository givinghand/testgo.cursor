
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, UserCircle, LogOut, Check } from "lucide-react"; // Check ikonu eklendi (gerçi burada kullanılmıyor ama UserStatusPage için lazım)
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils"; // cn import edildi

const navLinks = [
  { href: "/test-coz", label: "Test Çöz" },
  { href: "/konu-calis", label: "Konu Çalış" },
  { href: "/denemeler", label: "Denemeler" },
  { href: "/durumum", label: "Durumum" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");

    const handleStorageChange = () => {
      const newAuthStatus = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(newAuthStatus === "true");
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setIsMobileMenuOpen(false); 
    toast({
      title: "Çıkış Yapıldı",
      description: "Başarıyla çıkış yaptınız. Tekrar bekleriz!",
      className: "bg-primary text-primary-foreground",
    });
    navigate("/");
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
            <img-replace src="/logo.svg" alt="TESTGO Logo" className="h-10 w-10" /> 
            A colorful geometric logo representing progress and learning
          </motion.div>
          <span className="text-2xl font-extrabold tracking-tight text-foreground">
             <span className="text-primary">TEST</span><span className="text-secondary">GO</span>
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavLink to={link.href} className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground font-semibold")}>
                  {link.label}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-3">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => navigate("/durumum")} aria-label="Profilim">
                <UserCircle className="h-6 w-6 text-primary" />
              </Button>
              <Button variant="outline" onClick={handleLogout} className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive">
                <LogOut className="mr-2 h-4 w-4"/> Çıkış Yap
              </Button>
            </>
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
             {isAuthenticated ? (
                <>
                  <Button variant="outline" onClick={() => { navigate("/durumum"); setIsMobileMenuOpen(false); }} className="w-full justify-start text-left">
                    <UserCircle className="mr-2 h-5 w-5 text-primary" /> Profilim
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
