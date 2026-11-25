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
} from "lucide-react";
import { findDesign, designs, type WallDesign } from "@/lib/wall-data";

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
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-[#6B5E59] hover:text-[#664465] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A3928B]">
            <span
              onClick={() => onSelectRoom(design.roomSlug)}
              className="hover:text-[#664465] cursor-pointer"
            >
              {design.room}
            </span>
            <span>•</span>
            <span
              onClick={() => onSelectStyle(design.styleSlug)}
              className="hover:text-[#664465] cursor-pointer"
            >
              {design.style}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Large Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Hero Photograph */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#EAE4DC] border border-[#E8E2D9] shadow-md">
              <img
                src={design.gallery[activeImgIndex] || design.image}
                alt={design.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono font-semibold">
                {design.code}
              </div>
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#664465] text-white text-xs font-semibold shadow-md">
                {design.turnaround}
              </div>
            </div>

            {/* Thumbnail Row */}
            {design.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {design.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
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

            {/* Architectural Philosophy / Description */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm">
              <h3 className="text-xl font-serif text-[#2C2523] mb-3">Design Description</h3>
              <p className="text-sm sm:text-base text-[#6B5E59] leading-relaxed mb-6">
                {design.description}
              </p>

              {/* Materials Used Links */}
              <div className="pt-6 border-t border-[#F0EAE1]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#664465] mb-3">
                  Materials Integrated in This Wall
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {design.materialsUsed.map((mat) => (
                    <div
                      key={mat.code}
                      onClick={() => onSelectMaterial(mat.materialSlug)}
                      className="group cursor-pointer p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] hover:border-[#664465] transition-all flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-[#A3928B] uppercase">
                          {mat.code}
                        </span>
                        <div className="text-xs font-semibold text-[#2C2523] group-hover:text-[#664465] transition-colors">
                          {mat.name}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-[#8A7973] font-medium group-hover:text-[#664465]">
                        <span>View Spec</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm">
              <h3 className="text-xl font-serif text-[#2C2523] mb-4">Engineering Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Dimensions
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.dimensions}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Lighting Specification
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.lighting}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Acoustic Performance
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.acousticRating}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A7973] font-semibold block mb-1">
                    Warranty Handover
                  </span>
                  <span className="font-semibold text-[#2C2523]">{design.specs.warranty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Customizations & Booking Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Sticky Card */}
            <div className="sticky top-24 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E2D9] shadow-xl">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => onSelectRoom(design.roomSlug)}
                  className="px-3 py-1 rounded-full bg-[#EFE6EE] text-[#664465] text-xs font-semibold hover:bg-[#664465] hover:text-white transition-colors"
                >
                  {design.room}
                </button>
                <button
                  onClick={() => onSelectStyle(design.styleSlug)}
                  className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] text-[#6B5E59] text-xs font-semibold hover:border-[#664465] hover:text-[#664465] transition-colors"
                >
                  {design.style}
                </button>
              </div>

              {/* Title & Code */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#2C2523] tracking-tight mb-2">
                {design.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5E59] leading-relaxed mb-6">
                {design.summary}
              </p>

              {/* Turnkey Price Breakdown */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8A7973] mb-1">
                  Turnkey Package Price
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#664465]">
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
                <div className="mb-6">
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
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? "bg-[#EFE6EE]/30 border-[#664465] shadow-sm"
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
                  className="w-full py-4 rounded-full bg-[#664465] hover:bg-[#4E304F] text-white font-semibold text-sm tracking-wide shadow-xl shadow-[#664465]/25 transition-all hover:scale-101 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C59B4E]" />
                  Book This Design
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get WhatsApp 3D Estimate
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-[#F0EAE1] grid grid-cols-3 gap-2 text-center text-[11px] text-[#6B5E59]">
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
        </div>

        {/* Similar Wall Designs */}
        {similarDesigns.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D9]">
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
