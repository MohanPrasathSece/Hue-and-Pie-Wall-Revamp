import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, Shield, Clock, ChevronRight, Home } from "lucide-react";
import { findRoom, getDesignsForRoom, materialProducts, type WallDesign } from "@/lib/wall-data";

interface RoomCategoryPageProps {
  roomSlug: string;
  onNavigateHome: () => void;
  onSelectDesign: (slug: string) => void;
  onSelectMaterial: (slug: string) => void;
  onOpenConsultation: (service: string) => void;
}

export function RoomCategoryPage({
  roomSlug,
  onNavigateHome,
  onSelectDesign,
  onSelectMaterial,
  onOpenConsultation,
}: RoomCategoryPageProps) {
  const room = findRoom(roomSlug) || findRoom("living-room")!;
  const allDesigns = getDesignsForRoom(room.slug);

  // Filter by style
  const [selectedStyleFilter, setSelectedStyleFilter] = useState<string>("all");

  const styleOptions = [
    "all",
    ...Array.from(new Set(allDesigns.map((d) => d.style))),
  ];

  const filteredDesigns =
    selectedStyleFilter === "all"
      ? allDesigns
      : allDesigns.filter((d) => d.style === selectedStyleFilter);

  // Related materials
  const relatedMaterials = materialProducts.filter((p) =>
    room.relatedMaterialSlugs.includes(p.categorySlug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb Bar with Buttons */}
      <div className="bg-white border-b border-[#E8E2D9] sticky top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] hover:bg-[#664465] hover:border-[#664465] hover:text-white transition-all text-xs font-semibold text-[#2C2523] cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Rooms</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#8A7973] shrink-0">
            <button
              onClick={onNavigateHome}
              className="px-2.5 py-1 rounded-md hover:bg-[#EFE6EE] hover:text-[#664465] font-semibold transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-[#B8ACA4]" />
            <span className="px-2.5 py-1 rounded-md bg-[#EFE6EE] text-[#664465] font-bold">
              {room.name}
            </span>
          </div>
        </div>
      </div>

      {/* Room Hero Banner */}
      <div className="relative bg-[#1A121A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={room.bannerImage}
            alt={room.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A121A] via-[#1A121A]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EFE6EE]/15 border border-[#EFE6EE]/30 text-[#EFE6EE] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B4E]" />
              {room.turnaround} • 10-Yr Warranty
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F5] tracking-tight mb-3 sm:mb-4 leading-tight">
              {room.heading}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#E4DCD3] leading-relaxed mb-6 sm:mb-8">
              {room.description}
            </p>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#D3C3D0]">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C59B4E]" />
                Zero Wood Dust at Home
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C59B4E]" />
                Fixed Turnkey Pricing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Style Filters */}
        {styleOptions.length > 2 && (
          <div className="mb-8 sm:mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#6B5E59] mb-3">
              Filter by Style
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {styleOptions.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyleFilter(style)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all shrink-0 whitespace-nowrap ${
                    selectedStyleFilter === style
                      ? "bg-[#664465] text-white shadow-md shadow-[#664465]/20"
                      : "bg-white text-[#6B5E59] border border-[#E8E2D9] hover:border-[#664465] hover:text-[#664465]"
                  }`}
                >
                  {style === "all" ? "All Styles" : style}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Wall Design Image Gallery */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2523]">
                {room.name} Collections
              </h2>
              <p className="text-sm text-[#6B5E59] mt-1">
                Showing {filteredDesigns.length} curated design{filteredDesigns.length > 1 ? "s" : ""}
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
                    {design.style}
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

        {/* Related Materials Section */}
        {relatedMaterials.length > 0 && (
          <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#F4EFEA] border border-[#E8E2D9] mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#664465]">
                  Engineered Finishes
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#2C2523] mt-1">
                  Related Materials for {room.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B5E59] max-w-md">
                These factory-calibrated materials are precision-cut off-site for zero dust installation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {relatedMaterials.map((mat) => (
                <div
                  key={mat.slug}
                  onClick={() => onSelectMaterial(mat.slug)}
                  className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#E8E2D9] hover:shadow-lg transition-all p-3.5 sm:p-4 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-[#A3928B] uppercase">
                        {mat.code}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#2C2523] group-hover:text-[#664465] transition-colors leading-snug">
                        {mat.name}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F0EAE1]">
                    <span className="text-xs font-bold text-[#664465]">{mat.price}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#8A7973] font-medium group-hover:text-[#2C2523]">
                      <span>View Material</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Book Consultation Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#2A162B] text-white p-6 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#664465]/40 via-transparent to-[#C59B4E]/20" />
          <div className="relative max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4">
              Ready to Revamp Your {room.name}?
            </h3>
            <p className="text-xs sm:text-base text-[#D3C3D0] mb-6 sm:mb-8">
              Book a complimentary in-home assessment. Our spatial designer visits with physical material swatches, laser tools, and custom 3D recommendations.
            </p>
            <button
              onClick={() => onOpenConsultation(`In-Home Assessment (${room.name})`)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C59B4E] hover:bg-[#B38A3F] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              Book In-Home Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
