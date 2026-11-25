import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, Layers, ShieldCheck, ChevronRight, Home } from "lucide-react";
import {
  findMaterialCategory,
  getProductsForCategory,
  getDesignsForMaterial,
  type MaterialProduct,
} from "@/lib/wall-data";

interface MaterialCategoryPageProps {
  categorySlug: string;
  onNavigateHome: () => void;
  onSelectProduct: (slug: string) => void;
  onSelectDesign: (slug: string) => void;
  onOpenConsultation: (service: string) => void;
}

export function MaterialCategoryPage({
  categorySlug,
  onNavigateHome,
  onSelectProduct,
  onSelectDesign,
  onOpenConsultation,
}: MaterialCategoryPageProps) {
  const category =
    findMaterialCategory(categorySlug) || findMaterialCategory("wood-panels")!;
  const products = getProductsForCategory(category.slug);
  const relatedDesigns = getDesignsForMaterial(category.slug);

  // Filter by finish
  const [selectedFinishFilter, setSelectedFinishFilter] = useState<string>("all");
  const finishOptions = [
    "all",
    ...Array.from(new Set(products.map((p) => p.finish))),
  ];

  const filteredProducts =
    selectedFinishFilter === "all"
      ? products
      : products.filter((p) => p.finish === selectedFinishFilter);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb Bar with Buttons */}
      <div className="bg-white border-b border-[#E8E2D9] sticky top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] hover:bg-[#664465] hover:border-[#664465] hover:text-white transition-all text-xs font-semibold text-[#2C2523] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Materials</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#8A7973]">
            <button
              onClick={onNavigateHome}
              className="px-2.5 py-1 rounded-md hover:bg-[#EFE6EE] hover:text-[#664465] font-semibold transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-[#B8ACA4]" />
            <span className="px-2.5 py-1 rounded-md bg-[#EFE6EE] text-[#664465] font-bold">
              {category.name}
            </span>
          </div>
        </div>
      </div>

      {/* Material Hero Banner */}
      <div className="relative bg-[#1A121A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.bannerImage}
            alt={category.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A121A] via-[#1A121A]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE]/15 border border-[#EFE6EE]/30 text-[#EFE6EE] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
              <Layers className="w-3.5 h-3.5 text-[#C59B4E]" />
              {category.unitPriceRange}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FAF8F5] tracking-tight mb-4">
              {category.heading}
            </h1>
            <p className="text-base sm:text-lg text-[#E4DCD3] leading-relaxed mb-6">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {category.features.map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-[#FAF8F5] border border-white/10"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Finish Filters */}
        {finishOptions.length > 2 && (
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#6B5E59] mb-3">
              Filter by Finish
            </div>
            <div className="flex flex-wrap gap-2">
              {finishOptions.map((finish) => (
                <button
                  key={finish}
                  onClick={() => setSelectedFinishFilter(finish)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    selectedFinishFilter === finish
                      ? "bg-[#664465] text-white shadow-md shadow-[#664465]/20"
                      : "bg-white text-[#6B5E59] border border-[#E8E2D9] hover:border-[#664465] hover:text-[#664465]"
                  }`}
                >
                  {finish === "all" ? "All Finishes" : finish}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Material Product Gallery */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2523]">
                {category.name} Catalog
              </h2>
              <p className="text-sm text-[#6B5E59] mt-1">
                Showing {filteredProducts.length} product swatch{filteredProducts.length > 1 ? "es" : ""}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.slug}
                onClick={() => onSelectProduct(product.slug)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Material Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2C2523] text-xs font-mono font-semibold">
                    {product.code}
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#664465]/90 backdrop-blur-md text-white text-xs font-semibold">
                    {product.thickness}
                  </div>
                </div>

                {/* Card Content: Name + Product Code + Price + View Material */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#A3928B] font-medium">
                      {product.finish}
                    </span>
                    <h3 className="text-xl font-serif text-[#2C2523] mt-1 group-hover:text-[#664465] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#8A7973] font-medium">
                        Material Rate
                      </div>
                      <div className="text-lg font-serif font-bold text-[#664465]">
                        {product.price}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#664465] group-hover:text-[#4A2D49] transition-colors">
                      View Material
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wall Designs Using These Materials */}
        {relatedDesigns.length > 0 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F4EFEA] border border-[#E8E2D9] mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#664465]">
                  Turnkey Installations
                </span>
                <h3 className="text-2xl font-serif text-[#2C2523] mt-1">
                  Wall Designs Using {category.name}
                </h3>
              </div>
              <p className="text-sm text-[#6B5E59] max-w-md">
                See these materials installed in complete room collections with turnkey pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDesigns.map((design) => (
                <div
                  key={design.slug}
                  onClick={() => onSelectDesign(design.slug)}
                  className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#E8E2D9] hover:shadow-lg transition-all p-4 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={design.image}
                      alt={design.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-[#A3928B] uppercase">
                        {design.code} • {design.room}
                      </span>
                      <h4 className="text-sm font-semibold text-[#2C2523] group-hover:text-[#664465] transition-colors">
                        {design.name}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F0EAE1]">
                    <span className="text-xs font-bold text-[#2C2523]">{design.price}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#664465] font-semibold group-hover:underline">
                      <span>View Design</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enquire About Material Banner */}
        <div className="rounded-3xl bg-[#2A162B] text-white p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#664465]/40 via-transparent to-[#C59B4E]/20" />
          <div className="relative max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-serif mb-4">
              Need Physical Samples of {category.name}?
            </h3>
            <p className="text-sm sm:text-base text-[#D3C3D0] mb-8">
              We courier curated material sample boxes directly to your home with cut timber flutes, brushed brass strips, and microcement swatches.
            </p>
            <button
              onClick={() => onOpenConsultation(`Material Sample Request (${category.name})`)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C59B4E] hover:bg-[#B38A3F] text-white text-sm font-semibold tracking-wide shadow-xl transition-all hover:scale-105"
            >
              Enquire About {category.name}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
