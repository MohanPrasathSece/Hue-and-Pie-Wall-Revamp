import { ArrowUpRight } from "lucide-react";
import { rooms } from "@/lib/wall-data";

interface RoomBrowserProps {
  onSelectRoom: (slug: string) => void;
}

export function RoomBrowser({ onSelectRoom }: RoomBrowserProps) {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0] inline-block mb-3">
            Spatial Wall Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-3">
            Explore by Room
          </h2>
          <p className="text-base text-[#655B54] leading-relaxed">
            Every room serves a distinct lifestyle function. Browse purpose-engineered acoustic timber,
            headboard paneling, and foyer focal surfaces.
          </p>
          <span className="md:hidden text-xs text-[#664465] font-semibold block mt-3">
            ← Swipe sideways on mobile to browse all rooms →
          </span>
        </div>

        {/* Mobile Horizontal Carousel & Desktop 3-Column Grid */}
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 gap-5 px-1 -mx-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-8 md:overflow-visible md:pb-0">
          {rooms.map((room) => (
            <div
              key={room.slug}
              onClick={() => onSelectRoom(room.slug)}
              className="shrink-0 w-[84vw] max-w-[340px] snap-center md:w-auto md:max-w-none group rounded-[26px] overflow-hidden border border-[#E8DFD2] hover:border-[#664465] bg-white shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* High-Resolution Photo */}
              <div className="relative h-60 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#F3EDE4]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Information below photo */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#664465]">
                      Wall Category
                    </span>
                    <span className="text-xs font-semibold text-[#655B54]">
                      {room.priceRange}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#2C2523] group-hover:text-[#664465] transition-colors mb-2 leading-snug">
                    {room.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#655B54] leading-relaxed">
                    {room.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE7DD] flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-[#2C2523] group-hover:text-[#664465] transition-colors">
                    Explore {room.name}
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-[#EFE6EE] text-[#664465] group-hover:bg-[#664465] group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
