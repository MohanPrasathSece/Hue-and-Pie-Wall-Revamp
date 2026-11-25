import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import wallHeroImg from "@/assets/wall-hero.jpg";

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
  onExploreDesigns: () => void;
  onViewWallDetail: (slug: string) => void;
}

// Smooth easing animated counter
function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1800;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function Hero({ onOpenConsultation, onExploreDesigns, onViewWallDetail }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5] overflow-hidden border-b border-[#E8DFD2]">
      {/* Background Subtle Luxury Architectural Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFE6EE]/60 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F3EDE4]/80 rounded-full blur-3xl pointer-events-none -ml-32 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7">
            {/* Small Badge above headline as requested */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#664465]/15 mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#664465]" />
              <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#664465]">
                Hue &amp; Pie Wall Revamp Studio
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-normal text-[#2C2523] leading-[1.12] tracking-tight mb-6">
              Elevate Your Home with{" "}
              <em className="text-[#664465] not-italic font-medium">
                Bespoke Architectural Walls.
              </em>
            </h1>

            <p className="text-base sm:text-lg text-[#655B54] leading-relaxed mb-8 max-w-xl font-normal">
              Turnkey feature walls pre-engineered off-site in our factory to millimeter tolerances. Acoustic fluted timber slats, Italian microcement curves, and titanium PVD brass installed in 1 to 3 days with zero sawdust in your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
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
                <span>Explore Wall Designs</span>
                <ArrowRight size={15} />
              </button>
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
                      Turnkey Package Price
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

        {/* Centered Animated Increasing Stats Strip Below Hero Section */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E8DFD2] max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Stat 1 */}
            <div className="p-4 rounded-2xl bg-white/70 border border-[#E8DFD2]/70 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#664465] block leading-tight">
                <AnimatedNumber target={500} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8279] block mt-1">
                Walls Transformed
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-4 rounded-2xl bg-white/70 border border-[#E8DFD2]/70 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#664465] block leading-tight">
                1–<AnimatedNumber target={3} suffix=" Days" />
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8279] block mt-1">
                Clean Handover
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-4 rounded-2xl bg-white/70 border border-[#E8DFD2]/70 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#664465] block leading-tight">
                <AnimatedNumber target={100} suffix="%" />
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8279] block mt-1">
                Zero On-Site Dust
              </span>
            </div>

            {/* Stat 4 */}
            <div className="p-4 rounded-2xl bg-white/70 border border-[#E8DFD2]/70 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#664465] block leading-tight">
                <AnimatedNumber target={10} suffix="-Year" />
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8279] block mt-1">
                Craft Warranty
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
