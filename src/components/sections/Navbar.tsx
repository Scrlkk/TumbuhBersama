import { useState, useEffect } from "react";
import { TreePine, Menu, X, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoImage from "@/assets/style/images/TumbuhBersama.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-forest-dark/95 backdrop-blur-md shadow-md py-3 text-brand-cream"
          : "bg-transparent py-5 text-brand-forest-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-brand-forest-dark group-hover:scale-105 transition-transform overflow-hidden">
            <img src={LogoImage} alt="TumbuhBersama Logo" className="w-full h-full object-cover" />
          </div>
          <span className={`text-xl font-bold tracking-tight font-serif ${isScrolled ? "text-brand-cream" : "text-brand-forest-dark"}`}>
            Tumbuh<span className="text-brand-leaf">Bersama</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#about"
            className={`transition-colors hover:text-brand-leaf ${
              isScrolled ? "text-brand-cream/90" : "text-brand-forest-dark/80"
            }`}
          >
            Tentang Kami
          </a>
          <a
            href="#programs"
            className={`transition-colors hover:text-brand-leaf ${
              isScrolled ? "text-brand-cream/90" : "text-brand-forest-dark/80"
            }`}
          >
            Program & Aksi
          </a>
          <a
            href="#action"
            className={`transition-colors hover:text-brand-leaf ${
              isScrolled ? "text-brand-cream/90" : "text-brand-forest-dark/80"
            }`}
          >
            Relawan & Donasi
          </a>
          <a
            href="#contact"
            className={`transition-colors hover:text-brand-leaf ${
              isScrolled ? "text-brand-cream/90" : "text-brand-forest-dark/80"
            }`}
          >
            Kontak
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className={`text-sm font-semibold hover:bg-white/10 ${
              isScrolled ? "text-brand-cream" : "text-brand-forest-dark"
            }`}
          >
            <a href="#action-volunteer" className="flex items-center gap-1.5">
              <Users className="w-4 h-4" /> Jadi Relawan
            </a>
          </Button>
          <Button
            asChild
            className="bg-brand-terracotta hover:bg-brand-terracotta-hover text-white text-sm font-semibold rounded-full px-5 shadow-sm"
          >
            <a href="#action-donate" className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-white" /> Donasi
            </a>
          </Button>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${
            isScrolled ? "text-brand-cream" : "text-brand-forest-dark"
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-forest-dark text-brand-cream px-6 pt-4 pb-6 space-y-4 shadow-xl border-t border-white/10">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium hover:text-brand-leaf"
          >
            Tentang Kami
          </a>
          <a
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium hover:text-brand-leaf"
          >
            Program & Aksi
          </a>
          <a
            href="#action"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium hover:text-brand-leaf"
          >
            Relawan & Donasi
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium hover:text-brand-leaf"
          >
            Kontak
          </a>
          <div className="pt-4 flex flex-col gap-2.5">
            <Button
              asChild
              className="bg-brand-leaf hover:bg-brand-leaf-hover text-brand-forest-dark font-bold w-full"
            >
              <a href="#action-volunteer" onClick={() => setMobileMenuOpen(false)}>
                Jadi Relawan
              </a>
            </Button>
            <Button
              asChild
              className="bg-brand-terracotta hover:bg-brand-terracotta-hover text-white font-bold w-full"
            >
              <a href="#action-donate" onClick={() => setMobileMenuOpen(false)}>
                Donasi Sekarang
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
