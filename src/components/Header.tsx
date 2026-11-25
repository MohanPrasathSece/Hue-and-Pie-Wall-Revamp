import { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#E8DFD2]"
            : "bg-[#FAF8F5]/85 backdrop-blur-xs py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - EXACT HUE & PIE LOGO WITH WALL STUDIO DIVISION */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="group flex flex-col items-start text-left cursor-pointer"
            aria-label="Hue & Pie - Wall Revamp Studio"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl sm:text-[28px] font-normal tracking-tight text-[#2C2523] group-hover:text-[#664465] transition-colors leading-none">
                Hue &amp; Pie
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0]">
                Wall Studio
              </span>
            </div>
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#664465]/80 font-medium mt-1">
              Interiors, Your Way.
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              type="button"
              onClick={() => handleNavClick("rooms")}
              className="text-sm font-medium text-[#2C2523] hover:text-[#664465] transition-colors cursor-pointer py-1"
            >
              Browse by Room
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("designs")}
              className="text-sm font-medium text-[#2C2523] hover:text-[#664465] transition-colors cursor-pointer py-1"
            >
              Wall Designs
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("materials")}
              className="text-sm font-medium text-[#2C2523] hover:text-[#664465] transition-colors cursor-pointer py-1"
            >
              Tactile Materials
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("process")}
              className="text-sm font-medium text-[#2C2523] hover:text-[#664465] transition-colors cursor-pointer py-1"
            >
              Dustless 3-Day Process
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("calculator")}
              className="text-sm font-medium text-[#2C2523] hover:text-[#664465] transition-colors cursor-pointer py-1"
            >
              Price Calculator
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct Phone Dial */}
            <a
              href="tel:+919845012345"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#E0D5C7] bg-white text-xs font-semibold text-[#2C2523] hover:bg-[#EFE6EE] hover:text-[#664465] transition-all shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B4E]" />
              <span>+91 98450 12345</span>
            </a>

            {/* Signature Gold CTA Button - Hidden on small mobile screens */}
            <button
              type="button"
              onClick={() => onOpenConsultation("Wall Revamp Assessment")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 btn-gold text-xs font-bold tracking-wide cursor-pointer"
            >
              <span>Book Wall Assessment</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Drawer Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full border border-[#E0D5C7] bg-white text-[#2C2523] hover:bg-[#EFE6EE] transition-colors cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF8F5] p-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD2]">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-normal text-[#2C2523]">Hue &amp; Pie</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EFE6EE] text-[#664465]">
                  Studio
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#664465] block mt-0.5">
                Interiors, Your Way.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-[#E8DFD2] bg-white flex items-center justify-center text-[#2C2523] shadow-xs cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 py-8 flex-1">
            {[
              { label: "Browse by Room", id: "rooms" },
              { label: "Wall Designs Catalog", id: "designs" },
              { label: "Tactile Materials", id: "materials" },
              { label: "Dustless 3-Day Process", id: "process" },
              { label: "Instant Price Calculator", id: "calculator" },
            ].map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="text-left font-serif text-2xl text-[#2C2523] hover:text-[#664465] transition-colors flex items-center justify-between py-2 border-b border-[#EFE7DD]"
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
              className="w-full py-3.5 btn-gold text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles size={16} />
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
