import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Clock,
  Wrench,
  Layers,
  Phone,
  MessageCircle,
  ChevronRight,
  Home,
} from "lucide-react";
import { findDesign, findMaterialProduct, designs, type WallDesign } from "@/lib/wall-data";

interface WallDetailPageProps {
  designSlug: string;
  onNavigateHome: () => void;
  onSelectDesign: (slug: string) => void;
  onSelectRoom: (slug: string) => void;
  onSelectStyle: (slug: string) => void;
  onSelectMaterial: (slug: string) => void;
  onOpenConsultation: (service: string) => void;
}

export function WallDetailPage({
  designSlug,
  onNavigateHome,
  onSelectDesign,
  onSelectRoom,
  onSelectStyle,
  onSelectMaterial,
  onOpenConsultation,
}: WallDetailPageProps) {
  const design = findDesign(designSlug) || designs[0];

  // Active gallery image
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Selected add-on customizations
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Calculate dynamic price
  const basePriceNum = parseInt(design.price.replace(/[^\d]/g, ""), 10) || 120000;
  const addonTotal = design.customizations
    .filter((c) => selectedAddons.includes(c.id))
    .reduce((sum, c) => sum + c.priceDelta, 0);
  const totalPrice = basePriceNum + addonTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppQuote = () => {
    const addonsList = design.customizations
      .filter((c) => selectedAddons.includes(c.id))
      .map((c) => `+ ${c.name} (₹${c.priceDelta.toLocaleString("en-IN")})`)
      .join(", ");

    const text = `Hi Hue & Pie Wall Studio! I'm interested in the ${design.name} (${design.code}).\nEstimated Total: ₹${totalPrice.toLocaleString("en-IN")}${addonsList ? `\nAdd-ons: ${addonsList}` : ""}\nCould you share 3D CAD elevations & site assessment details?`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Similar wall designs
  const similarDesigns = designs
    .filter((d) => d.slug !== design.slug && (d.roomSlug === design.roomSlug || d.styleSlug === design.styleSlug))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb Navigation Bar with Explicit Clickable Buttons */}
      <div className="bg-white border-b border-[#E8E2D9] sticky top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {/* Left: Quick Back Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectRoom(design.roomSlug)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] hover:bg-[#664465] hover:border-[#664465] hover:text-white transition-all text-xs font-semibold text-[#2C2523] cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {design.room}</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-transparent hover:border-[#E8E2D9] hover:bg-[#FAF8F5] text-xs text-[#6B5E59] font-medium transition-colors cursor-pointer shrink-0"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
          </div>

          {/* Right: Path Navigation Buttons */}
          <div className="flex items-center gap-1 sm:gap-1.5 text-xs text-[#8A7973] shrink-0">
            <button
              onClick={() => onSelectRoom(design.roomSlug)}
              className="px-2 sm:px-2.5 py-1 rounded-md hover:bg-[#EFE6EE] hover:text-[#664465] font-semibold transition-colors cursor-pointer"
            >
              {design.room}
            </button>
            <ChevronRight className="w-3 h-3 text-[#B8ACA4]" />
            <button
              onClick={() => onSelectStyle(design.styleSlug)}
              className="px-2 sm:px-2.5 py-1 rounded-md hover:bg-[#EFE6EE] hover:text-[#664465] font-semibold transition-colors cursor-pointer"
            >
              {design.style}
            </button>
            <ChevronRight className="w-3 h-3 text-[#B8ACA4]" />
            <span className="px-2 sm:px-2.5 py-1 rounded-md bg-[#EFE6EE] text-[#664465] font-bold">
              {design.code}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Section 1: Large Image Gallery (order-1 on mobile, left on desktop) */}
          <div className="lg:col-span-7 order-1 flex flex-col gap-4">
            {/* Main Hero Photograph */}
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EAE4DC] border border-[#E8E2D9] shadow-md">
              <img
                src={design.gallery[activeImgIndex] || design.image}
                alt={design.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-semibold">
                {design.code}
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#664465] text-white text-[11px] sm:text-xs font-semibold shadow-md">
                {design.turnaround}
              </div>
            </div>

            {/* Thumbnail Row */}
            {design.gallery.length > 1 && (
              <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
                {design.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImgIndex === idx
                        ? "border-[#664465] ring-2 ring-[#664465]/30 scale-102"
                        : "border-[#E8E2D9] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section 2: Pricing, Customizations & Booking Actions (order-2 on mobile, right column on desktop) */}
          <div className="lg:col-span-5 order-2 lg:row-span-2 flex flex-col gap-6">
            {/* Main Sticky Card */}
            <div className="lg:sticky lg:top-28 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D9] shadow-xl">
              {/* Category Navigation Buttons */}
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                <button
                  onClick={() => onSelectRoom(design.roomSlug)}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EFE6EE] text-[#664465] text-xs font-semibold hover:bg-[#664465] hover:text-white transition-colors cursor-pointer"
                >
                  Room: {design.room}
                </button>
                <button
                  onClick={() => onSelectStyle(design.styleSlug)}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] text-[#6B5E59] text-xs font-semibold hover:border-[#664465] hover:text-[#664465] transition-colors cursor-pointer"
                >
                  Style: {design.style}
                </button>
              </div>

              {/* Title & Code */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#2C2523] tracking-tight mb-2 leading-snug">
                {design.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5E59] leading-relaxed mb-5 sm:mb-6">
                {design.summary}
              </p>

              {/* Turnkey Price Breakdown */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] mb-5 sm:mb-6">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A7973] mb-1">
                  Turnkey Package Price
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl sm:text-4xl font-serif font-bold text-[#664465]">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                  {selectedAddons.length > 0 && (
                    <span className="text-xs text-[#8A7973]">
                      (Incl. {selectedAddons.length} custom add-on{selectedAddons.length > 1 ? "s" : ""})
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#6B5E59] leading-relaxed">
                  {design.priceNote}
                </p>
              </div>

              {/* Customization Options: "Make It Yours" */}
              {design.customizations.length > 0 && (
                <div className="mb-5 sm:mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2C2523] mb-3 flex items-center justify-between">
                    <span>Customisation Options</span>
                    <span className="text-[#8A7973] font-normal">Optional</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {design.customizations.map((addon) => {
                      const isSelected = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 sm:gap-3 ${
                            isSelected
                              ? "bg-[#EFE6EE]/30 border-[#664465] shadow-xs"
                              : "bg-white border-[#E8E2D9] hover:border-[#664465]/50"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 border transition-all ${
                              isSelected
                                ? "bg-[#664465] border-[#664465] text-white"
                                : "border-[#D1C7BD] bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between text-xs sm:text-sm font-semibold text-[#2C2523]">
                              <span>{addon.name}</span>
                              <span className="text-[#664465] font-mono">
                                +₹{addon.priceDelta.toLocaleString("en-IN")}
                              </span>
                            </div>
                            <p className="text-xs text-[#8A7973] mt-0.5">
                              {addon.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => onOpenConsultation(`Book Wall: ${design.name} (${design.code})`)}
                  className="w-full py-3.5 sm:py-4 rounded-full bg-[#664465] hover:bg-[#4E304F] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xl shadow-[#664465]/25 transition-all hover:scale-101 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C59B4E]" />
                  Book This Design
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get WhatsApp 3D Estimate
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#F0EAE1] grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-[#6B5E59]">
                <div>
                  <Clock className="w-4 h-4 text-[#C59B4E] mx-auto mb-1" />
                  <span>3-Day Handover</span>
                </div>
                <div>
                  <Wrench className="w-4 h-4 text-[#C59B4E] mx-auto mb-1" />
                  <span>Zero Wood Dust</span>
                </div>
                <div>
                  <ShieldCheck className="w-4 h-4 text-[#C59B4E] mx-auto mb-1" />
                  <span>10-Yr Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Description & Specifications (order-3 on mobile, below image on desktop) */}
          <div className="lg:col-span-7 order-3 flex flex-col gap-6">
            {/* Architectural Philosophy / Description */}
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm">
              <h3 className="text-lg sm:text-xl font-serif text-[#2C2523] mb-3">Design Description</h3>
              <p className="text-xs sm:text-base text-[#6B5E59] leading-relaxed">
                {design.description}
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm">
              <h3 className="text-lg sm:text-xl font-serif text-[#2C2523] mb-4">Engineering Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Dimensions
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.dimensions}</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Lighting Specification
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.lighting}</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Acoustic Performance
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.acousticRating}</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Warranty Handover
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.warranty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MATERIALS USED IN THIS WALL - POSITIONED DOWN WITH ACTUAL MATERIAL IMAGES */}
        <div className="mt-10 sm:mt-24 p-5 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#F4EFEA] border border-[#E8E2D9]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#664465] block mb-1">
                Engineered Craftsmanship
              </span>
              <h2 className="text-xl sm:text-3xl font-serif text-[#2C2523]">
                Materials Used in {design.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6B5E59] max-w-md">
              Each material is precision cut off-site to millimeter tolerances and pre-calibrated for rapid dustless assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {design.materialsUsed.map((mat) => {
              const fullProd = findMaterialProduct(mat.materialSlug);
              return (
                <div
                  key={mat.code}
                  onClick={() => onSelectMaterial(mat.materialSlug)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] hover:border-[#664465] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Material Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE4DC]">
                      <img
                        src={fullProd?.image || design.image}
                        alt={mat.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold text-[#2C2523]">
                        {mat.code}
                      </div>
                      {fullProd?.thickness && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#664465] text-white text-[10px] font-semibold">
                          {fullProd.thickness}
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A7973] block mb-1">
                        {fullProd?.category || "Architectural Surface"}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-semibold text-[#2C2523] group-hover:text-[#664465] transition-colors">
                        {mat.name}
                      </h4>
                      {fullProd?.finish && (
                        <p className="text-xs text-[#6B5E59] mt-1">
                          Finish: {fullProd.finish}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between bg-[#FAF8F5]/50">
                    <span className="text-xs font-bold text-[#664465]">
                      {fullProd?.price || "Turnkey Specification"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#664465] group-hover:underline">
                      <span>View Material Spec</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Similar Wall Designs */}
        {similarDesigns.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E8E2D9]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#664465]">
                  Curated Recommendations
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#2C2523] mt-1">
                  Similar Wall Designs
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {similarDesigns.map((sim) => (
                <div
                  key={sim.slug}
                  onClick={() => onSelectDesign(sim.slug)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                    <img
                      src={sim.image}
                      alt={sim.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                      {sim.room}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3928B]">{sim.code}</span>
                      <h4 className="text-lg font-serif text-[#2C2523] group-hover:text-[#664465] transition-colors mt-0.5">
                        {sim.name}
                      </h4>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#F0EAE1] flex items-center justify-between">
                      <span className="text-sm font-serif font-bold text-[#2C2523]">{sim.price}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#664465]">
                        <span>View Design</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
