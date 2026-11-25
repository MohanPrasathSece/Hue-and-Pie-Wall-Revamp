import { ArrowRight } from "lucide-react";
import { styles } from "@/lib/wall-data";

interface StyleBrowserProps {
  onSelectStyle: (slug: string) => void;
}

export function StyleBrowser({ onSelectStyle }: StyleBrowserProps) {
  return (
    <section id="styles" className="py-20 md:py-28 bg-[#F4EFEA]/60 border-y border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#664465]/15 text-[#664465] text-xs font-semibold tracking-wider uppercase mb-3">
              Design Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C2523] tracking-tight">
              Explore by Style
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6B5E59] max-w-md">
            From quiet wabi-sabi Japandi oak to opulent Italian marble with PVD brass, choose the aesthetic language of your home.
          </p>
        </div>

        {/* 8 Style Cards: Representative Image + Style Name Only */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {styles.map((style) => (
            <div
              key={style.slug}
              onClick={() => onSelectStyle(style.slug)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Representative Style Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                <img
                  src={style.image}
                  alt={style.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Card Footer: Style Name Only */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-white">
                <h3 className="text-base sm:text-lg lg:text-xl font-serif text-[#2C2523] group-hover:text-[#664465] transition-colors truncate">
                  {style.name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] group-hover:bg-[#664465] group-hover:border-[#664465] flex items-center justify-center transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#6B5E59] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
