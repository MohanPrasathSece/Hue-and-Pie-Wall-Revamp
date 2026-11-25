import { ArrowUpRight } from "lucide-react";
import { designs } from "@/lib/wall-data";

interface DesignCatalogProps {
  onSelectDesign: (slug: string) => void;
}

export function DesignCatalog({ onSelectDesign }: DesignCatalogProps) {
  // Take top 6 popular designs for visual homepage showcase
  const popularDesigns = designs.slice(0, 6);

  return (
    <section id="designs" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#664465]/15 text-[#664465] text-xs font-semibold tracking-wider uppercase mb-3">
              Signature Creations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C2523] tracking-tight">
              Popular Wall Designs
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6B5E59] max-w-md">
            Factory pre-finished architectural panels calibrated to millimeter tolerances and installed dust-free in 1–3 days.
          </p>
        </div>

        {/* Compact & Visual Grid: Photo + Name + View Design Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {popularDesigns.map((design) => (
            <div
              key={design.slug}
              onClick={() => onSelectDesign(design.slug)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Design Photograph */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                <img
                  src={design.image}
                  alt={design.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Design Name + View Design Link */}
              <div className="p-5 sm:p-6 flex items-center justify-between bg-white">
                <h3 className="text-lg sm:text-xl font-serif text-[#2C2523] group-hover:text-[#664465] transition-colors">
                  {design.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#664465] group-hover:text-[#4A2D49] transition-colors shrink-0 ml-3">
                  View Design
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
