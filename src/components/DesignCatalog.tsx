import { useState, useMemo } from "react";
import { ArrowRight, Eye, Filter } from "lucide-react";
import { designs, themes, rooms } from "@/lib/wall-data";

interface DesignCatalogProps {
  onSelectDesign: (slug: string) => void;
}

export function DesignCatalog({ onSelectDesign }: DesignCatalogProps) {
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState("all");

  const filteredDesigns = useMemo(() => {
    return designs.filter((item) => {
      const matchRoom = selectedRoom === "all" || item.roomSlug === selectedRoom;
      const matchTheme = selectedTheme === "all" || item.themeSlug === selectedTheme;
      return matchRoom && matchTheme;
    });
  }, [selectedRoom, selectedTheme]);

  return (
    <section id="designs" className="py-20 sm:py-28 bg-[#F4EFEA]/70 border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0] inline-block mb-3">
            Curated Ready-to-Install Concepts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-3">
            Signature Wall Designs
          </h2>
          <p className="text-base text-[#655B54] leading-relaxed">
            Transparent all-inclusive rates, itemized material lists, and millimeter factory tolerances for clean 1–3 day installation.
          </p>
        </div>

        {/* Style Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedTheme("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedTheme === "all"
                ? "bg-[#664465] text-white shadow-xs"
                : "bg-white text-[#655B54] border border-[#E0D5C7] hover:border-[#664465]"
            }`}
          >
            All Architectural Styles
          </button>
          {themes.map((theme) => {
            const active = selectedTheme === theme.slug;
            return (
              <button
                key={theme.slug}
                type="button"
                onClick={() => setSelectedTheme(active ? "all" : theme.slug)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? "bg-[#664465] text-white shadow-xs"
                    : "bg-white text-[#655B54] border border-[#E0D5C7] hover:border-[#664465]"
                }`}
              >
                {theme.name}
              </button>
            );
          })}
        </div>

        {/* Active Filter Clear Bar */}
        {(selectedRoom !== "all" || selectedTheme !== "all") && (
          <div className="flex items-center justify-between pb-5 mb-8 border-b border-[#E0D5C7] text-xs text-[#655B54]">
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-[#664465]" />
              <span>Filtering by:</span>
              {selectedTheme !== "all" && (
                <span className="font-bold text-[#664465]">
                  {themes.find((t) => t.slug === selectedTheme)?.name}
                </span>
              )}
              {selectedRoom !== "all" && (
                <span className="font-bold text-[#664465]">
                  • {rooms.find((r) => r.slug === selectedRoom)?.name}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedRoom("all");
                setSelectedTheme("all");
              }}
              className="text-[#664465] hover:underline font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDesigns.map((design) => (
            <div
              key={design.slug}
              className="rounded-[28px] overflow-hidden bg-white border border-[#E8DFD2] shadow-2xs hover:shadow-xl hover:border-[#664465] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container without text overlay */}
                <div
                  onClick={() => onSelectDesign(design.slug)}
                  className="block relative h-68 sm:h-72 lg:h-[300px] w-full overflow-hidden bg-[#F3EDE4] cursor-pointer"
                >
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-white text-[#2C2523] text-xs font-semibold flex items-center gap-1.5 shadow-md">
                      <Eye size={13} />
                      <span>View Wall Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0]">
                      {design.code} &bull; {design.room}
                    </span>
                    <span className="text-xs font-semibold text-[#8C8279]">
                      {design.turnaround}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectDesign(design.slug)}
                    className="font-serif text-2xl font-normal text-[#2C2523] hover:text-[#664465] transition-colors mb-2.5 cursor-pointer leading-snug"
                  >
                    {design.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#655B54] line-clamp-2 leading-relaxed mb-4">
                    {design.summary}
                  </p>

                  <span className="inline-block text-[11px] font-medium text-[#664465] bg-[#EFE6EE]/60 px-2.5 py-1 rounded-md">
                    Style: {design.theme}
                  </span>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#EFE7DD] flex items-center justify-between bg-[#FAF8F5]/50">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8C8279] tracking-wider block">
                    Estimated Cost
                  </span>
                  <span className="font-serif text-2xl font-medium text-[#2C2523]">
                    {design.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectDesign(design.slug)}
                  className="btn-gold px-4 sm:px-5 py-2.5 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Wall Page</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
