import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  Home,
} from "lucide-react";
import { findMaterialProduct, materialProducts, designs } from "@/lib/wall-data";

interface MaterialDetailPageProps {
  materialSlug: string;
  onNavigateHome: () => void;
  onSelectDesign: (slug: string) => void;
  onSelectCategory: (slug: string) => void;
  onOpenConsultation: (service: string) => void;
}

export function MaterialDetailPage({
  materialSlug,
  onNavigateHome,
  onSelectDesign,
  onSelectCategory,
  onOpenConsultation,
}: MaterialDetailPageProps) {
  const material = findMaterialProduct(materialSlug) || materialProducts[0];

  const handleWhatsAppQuote = () => {
    const text = `Hi Hue & Pie! I'm interested in ordering sample swatches / quotes for ${material.name} (Code: ${material.code}, Rate: ${material.price}). Could you provide delivery timelines and thickness specs?`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Designs using this material
  const usingDesigns = designs.filter((d) =>
    material.relatedDesignSlugs.includes(d.slug)
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb Navigation Bar with Explicit Clickable Buttons */}
      <div className="bg-white border-b border-[#E8E2D9] sticky top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {/* Left: Quick Back Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectCategory(material.categorySlug)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] hover:bg-[#664465] hover:border-[#664465] hover:text-white transition-all text-xs font-semibold text-[#2C2523] cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {material.category}</span>
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
              onClick={onNavigateHome}
              className="px-2 sm:px-2.5 py-1 rounded-md hover:bg-[#EFE6EE] hover:text-[#664465] font-semibold transition-colors cursor-pointer"
            >
              Materials
            </button>
            <ChevronRight className="w-3 h-3 text-[#B8ACA4]" />
            <button
              onClick={() => onSelectCategory(material.categorySlug)}
              className="px-2 sm:px-2.5 py-1 rounded-md hover:bg-[#EFE6EE] hover:text-[#664465] font-semibold transition-colors cursor-pointer"
            >
              {material.category}
            </button>
            <ChevronRight className="w-3 h-3 text-[#B8ACA4]" />
            <span className="px-2 sm:px-2.5 py-1 rounded-md bg-[#EFE6EE] text-[#664465] font-bold">
              {material.code}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Section 1: Main Product Image (order-1 on mobile, left on desktop) */}
          <div className="lg:col-span-7 order-1 flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EAE4DC] border border-[#E8E2D9] shadow-md">
              <img
                src={material.image}
                alt={material.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-semibold">
                {material.code}
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#664465] text-white text-[11px] sm:text-xs font-semibold shadow-md">
                Thickness: {material.thickness}
              </div>
            </div>
          </div>

          {/* Section 2: Pricing & Enquiry (order-2 on mobile, right on desktop) */}
          <div className="lg:col-span-5 order-2 lg:row-span-2 flex flex-col gap-6">
            <div className="lg:sticky lg:top-24 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D9] shadow-xl">
              <button
                onClick={() => onSelectCategory(material.categorySlug)}
                className="px-3 py-1 rounded-full bg-[#EFE6EE] text-[#664465] text-xs font-semibold hover:bg-[#664465] hover:text-white transition-colors mb-3 sm:mb-4 inline-block"
              >
                {material.category}
              </button>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#2C2523] tracking-tight mb-2 leading-snug">
                {material.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#6B5E59] leading-relaxed mb-5 sm:mb-6">
                Finish: <span className="font-semibold text-[#2C2523]">{material.finish}</span>
              </p>

              {/* Price Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] mb-5 sm:mb-6">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A7973] mb-1">
                  Material Unit Price
                </div>
                <div className="text-2xl sm:text-4xl font-serif font-bold text-[#664465] mb-2">
                  {material.price}
                </div>
                <p className="text-xs text-[#6B5E59]">
                  Available in standard prefabricated panels or custom cut-to-size dimensions. Includes off-site edge sealing.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() =>
                    onOpenConsultation(
                      `Enquire About Material: ${material.name} (${material.code})`
                    )
                  }
                  className="w-full py-3.5 sm:py-4 rounded-full bg-[#664465] hover:bg-[#4E304F] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xl shadow-[#664465]/25 transition-all hover:scale-101 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C59B4E]" />
                  Enquire About This Material
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Sample via WhatsApp
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#F0EAE1] grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-[#6B5E59]">
                <div>
                  <Layers className="w-4 h-4 text-[#C59B4E] mx-auto mb-1" />
                  <span>Physical Swatches</span>
                </div>
                <div>
                  <ShieldCheck className="w-4 h-4 text-[#C59B4E] mx-auto mb-1" />
                  <span>ISO Certified</span>
                </div>
                <div>
                  <CheckCircle2 className="w-4 h-4 text-[#C59B4E] mx-auto mb-1" />
                  <span>Zero Wood Dust</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Product Overview & Specifications (order-3 on mobile, below image on desktop) */}
          <div className="lg:col-span-7 order-3 flex flex-col gap-6">
            {/* Description Card */}
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm">
              <h3 className="text-lg sm:text-xl font-serif text-[#2C2523] mb-3">Product Overview</h3>
              <p className="text-xs sm:text-base text-[#6B5E59] leading-relaxed mb-6">
                {material.description}
              </p>

              {/* Material Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 sm:pt-6 border-t border-[#F0EAE1]">
                <div className="flex items-center gap-2 text-xs text-[#2C2523]">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B4E] shrink-0" />
                  <span>Sustainably sourced & non-toxic</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2C2523]">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B4E] shrink-0" />
                  <span>Precision CNC-calibrated edges</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2C2523]">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B4E] shrink-0" />
                  <span>Moisture & termite resistant</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2C2523]">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B4E] shrink-0" />
                  <span>10-year factory warranty</span>
                </div>
              </div>
            </div>

            {/* Detailed Technical Specifications Table */}
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm">
              <h3 className="text-lg sm:text-xl font-serif text-[#2C2523] mb-4">Technical Specifications</h3>
              <div className="divide-y divide-[#F0EAE1] text-xs sm:text-sm">
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Product Code</span>
                  <span className="font-mono font-bold text-[#2C2523]">{material.code}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Standard Thickness</span>
                  <span className="font-semibold text-[#2C2523]">{material.thickness}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Finish / Texture</span>
                  <span className="font-semibold text-[#2C2523]">{material.finish}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Panel Dimensions</span>
                  <span className="font-semibold text-[#2C2523]">{material.dimensions}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Material Origin</span>
                  <span className="font-semibold text-[#2C2523]">{material.origin}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Fire Retardant Rating</span>
                  <span className="font-semibold text-[#2C2523]">{material.fireRating}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Moisture Resistance</span>
                  <span className="font-semibold text-[#2C2523]">{material.moistureResistance}</span>
                </div>
                <div className="py-2.5 sm:py-3 flex justify-between gap-3">
                  <span className="text-[#8A7973] font-medium">Lead Time</span>
                  <span className="font-semibold text-[#664465]">{material.leadTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wall Designs Using This Material */}
        {usingDesigns.length > 0 && (
          <div className="mt-12 sm:mt-20 pt-10 sm:pt-16 border-t border-[#E8E2D9]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#664465]">
                  Real Installations
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#2C2523] mt-1">
                  Wall Designs Using This Material
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {usingDesigns.map((des) => (
                <div
                  key={des.slug}
                  onClick={() => onSelectDesign(des.slug)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                    <img
                      src={des.image}
                      alt={des.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                      {des.room}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3928B]">{des.code}</span>
                      <h4 className="text-lg font-serif text-[#2C2523] group-hover:text-[#664465] transition-colors mt-0.5">
                        {des.name}
                      </h4>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#F0EAE1] flex items-center justify-between">
                      <span className="text-sm font-serif font-bold text-[#2C2523]">{des.price}</span>
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
