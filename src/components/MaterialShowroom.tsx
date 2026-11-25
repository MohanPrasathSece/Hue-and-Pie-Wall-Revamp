import { ArrowRight } from "lucide-react";
import { materialCategories } from "@/lib/wall-data";

interface MaterialShowroomProps {
  onSelectCategory: (slug: string) => void;
}

export function MaterialShowroom({ onSelectCategory }: MaterialShowroomProps) {
  return (
    <section id="materials" className="py-20 md:py-28 bg-[#F4EFEA]/60 border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#664465]/15 text-[#664465] text-xs font-semibold tracking-wider uppercase mb-3">
              Sensory Surfaces
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C2523] tracking-tight">
              Explore Materials
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6B5E59] max-w-md">
            Architectural timber slats, breathable Venetian plasters, titanium PVD metals, and ribbed marble.
          </p>
        </div>

        {/* 6 Material Cards: Texture/Product Image + Material Category Name Only */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {materialCategories.map((category) => (
            <div
              key={category.slug}
              onClick={() => onSelectCategory(category.slug)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Material Texture Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Material Category Name Only */}
              <div className="p-3 sm:p-5 flex items-center justify-between bg-white min-h-[58px] sm:min-h-[72px]">
                <h3 className="text-sm sm:text-lg lg:text-xl font-serif text-[#2C2523] group-hover:text-[#664465] transition-colors leading-snug line-clamp-2">
                  {category.name}
                </h3>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] group-hover:bg-[#664465] group-hover:border-[#664465] flex items-center justify-center transition-all duration-300 shrink-0 ml-1.5 sm:ml-2">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#6B5E59] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
