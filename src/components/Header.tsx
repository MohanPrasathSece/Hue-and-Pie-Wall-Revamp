import { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface HeaderProps {
  onOpenConsultation: (service?: string) => void;
  activeView: string;
  onNavigateHome: () => void;
}

export function Header({ onOpenConsultation, activeView, onNavigateHome }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeView !== "home") {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Only required category links
  const menuCategories = [
    { label: "Rooms", id: "rooms" },
    { label: "Styles", id: "styles" },
    { label: "Wall Designs", id: "designs" },
    { label: "Materials", id: "materials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E8DFD2]"
            : "bg-[#FAF8F5]/90 backdrop-blur-xs py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - EXACT LOGO & FONT FROM USER'S IMAGE */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="group cursor-pointer text-left focus:outline-none"
            aria-label="Hue & Pie - Wall Revamp Studio"
          >
            <BrandLogo variant="badge" />
          </button>

          {/* Desktop Navigation Links - ONLY ESSENTIAL CATEGORIES */}
          <nav className="hidden md:flex items-center gap-8">
            {menuCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-semibold text-[#2C2523] hover:text-[#664465] transition-colors cursor-pointer py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919845012345"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#E0D5C7] bg-white text-xs font-semibold text-[#2C2523] hover:bg-[#EFE6EE] hover:text-[#664465] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B4E]" />
              <span>+91 98450 12345</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenConsultation("Header Assessment Booking")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#664465] hover:bg-[#4F2D4E] text-white text-xs font-semibold tracking-wide shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C59B4E]" />
              <span>Book Assessment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-[#E0D5C7] bg-white flex items-center justify-center text-[#2C2523] hover:bg-[#EFE6EE] transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation - ONLY REQUIRED CATEGORIES */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col p-6 sm:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD2]">
            <BrandLogo variant="badge" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-[#E8DFD2] bg-white flex items-center justify-center text-[#2C2523] shadow-xs cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="text-xs uppercase tracking-widest text-[#8A7973] font-bold mt-8 mb-4">
            Categories
          </div>

          <nav className="flex flex-col gap-3 flex-1">
            {[
              { label: "Explore by Room", id: "rooms" },
              { label: "Explore by Style", id: "styles" },
              { label: "Popular Wall Designs", id: "designs" },
              { label: "Explore Materials", id: "materials" },
            ].map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="text-left font-serif text-2xl text-[#2C2523] hover:text-[#664465] transition-colors flex items-center justify-between py-3 border-b border-[#EFE7DD]"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} className="text-[#8C8279]" />
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E8DFD2] flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation("Mobile Menu Booking");
              }}
              className="w-full py-4 rounded-full bg-[#664465] hover:bg-[#4F2D4E] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles size={16} className="text-[#C59B4E]" />
              <span>Book Free Wall Assessment</span>
            </button>
            <a
              href="tel:+919845012345"
              className="w-full py-3 rounded-full border border-[#E0D5C7] bg-white text-[#2C2523] text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-2xs"
            >
              <Phone size={14} className="text-[#C59B4E]" />
              <span>Call: +91 98450 12345</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
