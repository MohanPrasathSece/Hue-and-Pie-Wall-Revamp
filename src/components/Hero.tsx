import { ArrowRight, ArrowUpRight, Sparkles, Clock, Shield, Wrench, Award } from "lucide-react";
import wallHeroImg from "@/assets/wall-hero.jpg";

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
  onExploreDesigns: () => void;
  onViewWallDetail: (slug: string) => void;
}

export function Hero({ onOpenConsultation, onExploreDesigns, onViewWallDetail }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAF8F5] overflow-hidden border-b border-[#E8DFD2]">
      {/* Background Subtle Luxury Architectural Glow (Warm Beige & Light Plum Mist) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFE6EE]/70 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F3EDE4]/80 rounded-full blur-3xl pointer-events-none -ml-32 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#E0D5E0] mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#664465]" />
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#664465]">
                Hue &amp; Pie Wall Revamp Studio
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-[#2C2523] leading-[1.12] tracking-tight mb-6">
              Transform Any Wall in{" "}
              <em className="text-[#664465] not-italic font-medium">1 to 3 Days.</em>
            </h1>

            <p className="text-base sm:text-lg text-[#655B54] leading-relaxed mb-8 max-w-xl font-normal">
              Bespoke architectural wall design without the chaos of a full renovation.
              Precision factory-finished acoustic timber slats, titanium PVD brass inlays,
              warm microcement curves, and concealed 2700K ambient LED coves.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={() => onOpenConsultation("Hero Wall Assessment")}
                className="btn-gold px-7 py-3.5 text-sm font-bold shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free In-Home Assessment</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                type="button"
                onClick={onExploreDesigns}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-[#D9CEBF] bg-white text-[#2C2523] font-semibold text-sm hover:bg-[#EFE6EE] hover:text-[#664465] transition-all cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <span>Explore 50+ Wall Designs</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-7 border-t border-[#E8DFD2]">
              {[
                { num: "500+", label: "Walls Transformed" },
                { num: "1-3 Days", label: "Clean Handover" },
                { num: "100%", label: "Zero On-Site Dust" },
                { num: "10-Year", label: "Craft Warranty" },
              ].map((st, i) => (
                <div key={i}>
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-[#664465] block">
                    {st.num}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8279] block mt-0.5">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] overflow-hidden bg-white border border-[#E5DDD1] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group">
              <div
                onClick={() => onViewWallDetail("cloud-wood")}
                className="relative h-[290px] sm:h-[340px] w-full overflow-hidden bg-[#F3EDE4] cursor-pointer"
              >
                <img
                  src={wallHeroImg}
                  alt="Cloud Wood Slatted Living Room Wall Paneling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#EFE6EE] text-[#664465] text-xs font-semibold shadow-2xs border border-[#E0D5E0]">
                    Featured Concept
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#664465]/90 text-white text-xs font-medium">
                    2 Days Install
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onViewWallDetail("cloud-wood")}
                    className="font-serif text-2xl font-normal text-[#2C2523] hover:text-[#664465] transition-colors mb-2 cursor-pointer"
                  >
                    Cloud Wood Slatted Wall
                  </h3>
                  <p className="text-xs sm:text-sm text-[#655B54] mb-4 leading-relaxed">
                    Sculpted engineered teak slats with soft warm beige backdrop and integrated 2700K ambient cove profile.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE7DD] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8C8279] tracking-wider block">
                      Estimated Cost (All-Inclusive)
                    </span>
                    <span className="font-serif text-2xl font-medium text-[#2C2523]">
                      ₹1,20,000
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onViewWallDetail("cloud-wood")}
                    className="btn-gold px-4 sm:px-5 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Wall Page</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
