import { Phone, ArrowUpRight, Shield, Sparkles, MapPin, Mail } from "lucide-react";
import { rooms } from "@/lib/wall-data";

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
          {/* Col 1: Brand Info - EXACT HUE & PIE LOGO */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={onNavigateHome}
              className="text-left cursor-pointer mb-4 block"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#2C2523]">
                  Hue &amp; Pie
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0]">
                  Wall Studio
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#664465] font-medium block mt-1">
                Interiors, Your Way.
              </span>
            </button>

            <p className="text-xs sm:text-sm text-[#655B54] leading-relaxed max-w-sm mb-6">
              Bespoke architectural wall design manufactured with millimeter factory precision and installed in 1 to 3 days without on-site wood dust. Available in Bangalore, Mumbai, Hyderabad, Delhi NCR & Pune.
            </p>

            <div className="p-4 rounded-2xl bg-[#EFE6EE]/50 border border-[#E0D5E0] space-y-2 text-xs text-[#655B54]">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#664465]" />
                <span className="font-semibold text-[#2C2523]">10-Year Craft Warranty</span>
              </div>
              <p className="text-[11px] text-[#664465]/80 pl-5">
                IS:710 BWR Marine Plywood & titanium PVD metal anti-tarnish guarantee.
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
                    className="hover:text-[#664465] transition-colors cursor-pointer text-left"
                  >
                    {r.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Studios */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#664465] mb-4">
              Direct Contact & Experience Centers
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#655B54] mb-6">
              <a
                href="tel:+919845012345"
                className="flex items-center gap-2.5 text-[#2C2523] font-semibold hover:text-[#664465] transition-colors"
              >
                <Phone size={15} className="text-[#C59B4E]" />
                <span>+91 98450 12345</span>
              </a>

              <a
                href="mailto:hello@hueandpie.com"
                className="flex items-center gap-2.5 hover:text-[#664465] transition-colors"
              >
                <Mail size={15} className="text-[#C59B4E]" />
                <span>hello@hueandpie.com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#C59B4E] shrink-0 mt-0.5" />
                <span>
                  Experience Centers: Indiranagar, Bangalore &bull; Bandra West, Mumbai &bull; Jubilee Hills, Hyderabad
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation("Footer CTA Booking")}
              className="w-full py-3 btn-gold text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Sparkles size={14} />
              <span>Book In-Home Assessment</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8279] gap-4">
          <p>&copy; {new Date().getFullYear()} Hue &amp; Pie Wall Revamp Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-[#2C2523]">IS:710 Marine Certified</span>
            <span className="hover:text-[#2C2523]">Zero-VOC Plasters</span>
            <span className="hover:text-[#2C2523]">Factory Direct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
