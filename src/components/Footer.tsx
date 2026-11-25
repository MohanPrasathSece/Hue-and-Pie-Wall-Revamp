import { Phone, ArrowUpRight, Shield, Sparkles, MapPin, Mail } from "lucide-react";
import { rooms } from "@/lib/wall-data";
import { BrandLogo } from "./BrandLogo";

interface FooterProps {
  onOpenConsultation: (service?: string) => void;
  onSelectRoom: (slug: string) => void;
  onNavigateHome: () => void;
}

export function Footer({ onOpenConsultation, onSelectRoom, onNavigateHome }: FooterProps) {
  return (
    <footer className="bg-[#FAF8F5] text-[#2C2523] border-t border-[#E8DFD2] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#E8DFD2]">
          {/* Col 1: Brand Info - EXACT HUE & PIE LOGO FROM USER'S IMAGE */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={onNavigateHome}
              className="text-left cursor-pointer mb-5 block focus:outline-none"
            >
              <BrandLogo variant="badge" />
            </button>

            <p className="text-xs sm:text-sm text-[#655B54] leading-relaxed max-w-sm mb-6">
              Bespoke architectural wall design manufactured with millimeter factory precision and installed in 1 to 3 days without on-site wood dust. Available in Bangalore, Mumbai, Hyderabad, Delhi NCR and Pune.
            </p>

            <div className="p-4 rounded-2xl bg-[#EFE6EE]/50 border border-[#E0D5E0] space-y-2 text-xs text-[#655B54]">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#664465]" />
                <span className="font-semibold text-[#2C2523]">10-Year Craft Warranty</span>
              </div>
              <p className="text-[11px] text-[#664465]/80 pl-5">
                IS:710 BWR Marine Plywood and titanium PVD metal anti-tarnish guarantee.
              </p>
            </div>
          </div>

          {/* Col 2: Room Collections */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#664465] mb-4">
              Room Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#655B54]">
              {rooms.map((r) => (
                <li key={r.slug}>
                  <button
                    type="button"
                    onClick={() => onSelectRoom(r.slug)}
                    className="hover:text-[#664465] transition-colors cursor-pointer text-left py-0.5"
                  >
                    {r.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Locations */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#664465] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#655B54]">
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#C59B4E] shrink-0" />
                <a href="tel:+919845012345" className="hover:text-[#664465] transition-colors">
                  +91 98450 12345 (Direct Line)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#C59B4E] shrink-0" />
                <a href="mailto:walls@hueandpie.com" className="hover:text-[#664465] transition-colors">
                  walls@hueandpie.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#C59B4E] shrink-0 mt-0.5" />
                <span>Experience Studios in Bangalore, Mumbai, Delhi NCR, Hyderabad and Pune</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => onOpenConsultation("Footer CTA")}
                className="w-full py-3 rounded-full bg-[#664465] hover:bg-[#4F2D4E] text-white text-xs font-semibold tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={14} className="text-[#C59B4E]" />
                <span>Book In-Home Assessment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8279] gap-4">
          <p>&copy; {new Date().getFullYear()} Hue &amp; Pie Interiors Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#664465] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#664465] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#664465] cursor-pointer">10-Year Warranty Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
