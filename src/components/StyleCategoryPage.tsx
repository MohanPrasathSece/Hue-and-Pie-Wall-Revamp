import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { findStyle, getDesignsForStyle, rooms } from "@/lib/wall-data";

interface StyleCategoryPageProps {
  styleSlug: string;
  onNavigateHome: () => void;
  onSelectDesign: (slug: string) => void;
  onOpenConsultation: (service: string) => void;
}

export function StyleCategoryPage({
  styleSlug,
  onNavigateHome,
  onSelectDesign,
  onOpenConsultation,
}: StyleCategoryPageProps) {
  const style = findStyle(styleSlug) || findStyle("luxury")!;
  const allDesigns = getDesignsForStyle(style.slug);

  // Filter by room
  const [selectedRoomFilter, setSelectedRoomFilter] = useState<string>("all");

  const roomOptions = [
    "all",
    ...Array.from(new Set(allDesigns.map((d) => d.room))),
  ];

  const filteredDesigns =
    selectedRoomFilter === "all"
      ? allDesigns
      : allDesigns.filter((d) => d.room === selectedRoomFilter);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-[#6B5E59] hover:text-[#664465] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Styles
          </button>
          <span className="text-xs tracking-wider uppercase text-[#A3928B] font-semibold">
            Style Category • {style.name}
          </span>
        </div>
      </div>

      {/* Style Hero Banner */}
      <div className="relative bg-[#1A121A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={style.bannerImage}
            alt={style.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A121A] via-[#1A121A]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE]/15 border border-[#EFE6EE]/30 text-[#EFE6EE] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B4E]" />
              Signature Aesthetic
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FAF8F5] tracking-tight mb-4">
              {style.heading}
            </h1>
            <p className="text-base sm:text-lg text-[#E4DCD3] leading-relaxed mb-6">
              {style.description}
            </p>

            {/* Signature Features */}
            <div className="flex flex-wrap gap-2">
              {style.features.map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-[#FAF8F5] border border-white/10"
                >
                  ✦ {feat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Room Filters */}
        {roomOptions.length > 2 && (
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#6B5E59] mb-3">
              Filter by Room
            </div>
            <div className="flex flex-wrap gap-2">
              {roomOptions.map((room) => (
                <button
                  key={room}
                  onClick={() => setSelectedRoomFilter(room)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    selectedRoomFilter === room
                      ? "bg-[#664465] text-white shadow-md shadow-[#664465]/20"
                      : "bg-white text-[#6B5E59] border border-[#E8E2D9] hover:border-[#664465] hover:text-[#664465]"
                  }`}
                >
                  {room === "all" ? "All Rooms" : room}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Designs Belonging to That Style */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2523]">
                {style.name} Wall Collections
              </h2>
              <p className="text-sm text-[#6B5E59] mt-1">
                Showing {filteredDesigns.length} signature design{filteredDesigns.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDesigns.map((design) => (
              <div
                key={design.slug}
                onClick={() => onSelectDesign(design.slug)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Design Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                  <img
                    src={design.image}
                    alt={design.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                    {design.room}
                  </div>
                </div>

                {/* Card Content: Name + Price + View Design */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A3928B]">
                      {design.code}
                    </span>
                    <h3 className="text-xl font-serif text-[#2C2523] mt-1 group-hover:text-[#664465] transition-colors">
                      {design.name}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#8A7973] font-medium">
                        Turnkey Estimate
                      </div>
                      <div className="text-lg font-serif font-bold text-[#2C2523]">
                        {design.price}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#664465] group-hover:text-[#4A2D49] transition-colors">
                      View Design
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Consultation Banner */}
        <div className="rounded-3xl bg-[#2A162B] text-white p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#664465]/40 via-transparent to-[#C59B4E]/20" />
          <div className="relative max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-serif mb-4">
              Bring {style.name} Elegance to Your Home
            </h3>
            <p className="text-sm sm:text-base text-[#D3C3D0] mb-8">
              Discuss your space with our design architects. We provide full 3D CAD elevations, sample boxes delivered to your doorstep, and fixed itemized pricing.
            </p>
            <button
              onClick={() => onOpenConsultation(`Design Consultation (${style.name} Style)`)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C59B4E] hover:bg-[#B38A3F] text-white text-sm font-semibold tracking-wide shadow-xl transition-all hover:scale-105"
            >
              Book {style.name} Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
