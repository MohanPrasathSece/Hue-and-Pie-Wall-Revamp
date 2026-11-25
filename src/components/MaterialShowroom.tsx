import { ArrowUpRight } from "lucide-react";
import { materialCategories, materials } from "@/lib/wall-data";

interface MaterialShowroomProps {
  onOpenConsultation: (service?: string) => void;
}

export function MaterialShowroom({ onOpenConsultation }: MaterialShowroomProps) {
  return (
    <section id="materials" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-wider uppercase text-[#C59B4E] block mb-2">
              Physical Touch & Texture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-3">
              Tactile Materials & Finishes
            </h2>
            <p className="text-base text-[#655B54] leading-relaxed max-w-2xl">
              From natural American teak veneers and titanium PVD brass inlays to breathable Italian Venetian plasters.
              We bring physical swatch sample boxes directly to your in-home assessment.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              type="button"
              onClick={() => onOpenConsultation("Sample Box Request")}
              className="btn-gold px-6 py-3 text-xs sm:text-sm font-bold shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Request At-Home Sample Box</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* 6 Material Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {materialCategories.map((cat) => (
            <div
              key={cat.slug}
              className="rounded-[24px] p-6 bg-white border border-[#E8DFD2] hover:border-[#C59B4E] hover:shadow-lg transition-all flex gap-5 items-center group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-[#F3EDE4]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-serif text-xl font-normal text-[#2C2523] group-hover:text-[#C59B4E] transition-colors mb-1">
                  {cat.name}
                </h4>
                <p className="text-xs text-[#655B54] mb-2 leading-relaxed">
                  {cat.subtitle}
                </p>
                <span className="text-xs font-bold text-[#C59B4E]">
                  {cat.priceRange} &bull; {cat.count} Finishes
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Concrete Swatches Showroom */}
        <div className="pt-10 border-t border-[#E8DFD2]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4E] block mb-1">
                Authentic Swatch Finishes
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C2523]">
                Physical Architectural Samples
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#655B54] max-w-md">
              Certified IS:710 Marine Grade backings, zero-VOC lime plasters, and titanium PVD brass.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((m) => (
              <div
                key={m.slug}
                className="rounded-[24px] overflow-hidden bg-white border border-[#E8DFD2] hover:border-[#C59B4E] hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#F3EDE4]">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#EFE6EE] text-[#664465] text-[10px] font-bold tracking-wider uppercase border border-[#E0D5E0] shadow-2xs">
                      {m.code}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold text-[#664465] block mb-1">
                      {m.category}
                    </span>
                    <h4 className="font-serif text-lg font-medium text-[#2C2523] mb-1.5 leading-snug">
                      {m.name}
                    </h4>
                    <p className="text-xs text-[#655B54] mb-3 line-clamp-2">
                      {m.finish}
                    </p>
                    <div className="text-[11px] text-[#8C8279] space-y-0.5">
                      <p><strong>Thickness:</strong> {m.thickness}</p>
                      <p><strong>Brand:</strong> {m.brand}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-[#EFE7DD] flex items-center justify-between bg-[#FAF8F5]/60">
                  <div>
                    <span className="text-[10px] uppercase text-[#8C8279] font-bold block">Rate</span>
                    <span className="font-serif text-base font-medium text-[#2C2523]">{m.price}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Swatch Request: ${m.name} (${m.code})`)}
                    className="text-xs font-bold text-[#C59B4E] hover:underline cursor-pointer"
                  >
                    Request Sample &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
