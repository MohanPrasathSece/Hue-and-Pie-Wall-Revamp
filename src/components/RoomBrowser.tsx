import { ArrowRight } from "lucide-react";
import { rooms } from "@/lib/wall-data";

interface RoomBrowserProps {
  onSelectRoom: (slug: string) => void;
}

export function RoomBrowser({ onSelectRoom }: RoomBrowserProps) {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Minimal & Refined */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#664465]/15 text-[#664465] text-xs font-semibold tracking-wider uppercase mb-3">
              Room Collections
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2C2523] tracking-tight">
              Explore by Room
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6B5E59] max-w-md">
            Engineered architectural feature walls tailored to the acoustic and functional needs of each room in your home.
          </p>
        </div>

        {/* 6 Room Cards: Large Image + Room Name Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room) => (
            <div
              key={room.slug}
              onClick={() => onSelectRoom(room.slug)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Large Attractive Interior Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="w-full height-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Card Footer: Room Name Only + Subtle Arrow */}
              <div className="p-4 sm:p-6 flex items-center justify-between bg-white min-h-[58px] sm:min-h-[72px]">
                <h3 className="text-lg sm:text-2xl font-serif text-[#2C2523] group-hover:text-[#664465] transition-colors leading-snug">
                  {room.name}
                </h3>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] group-hover:bg-[#664465] group-hover:border-[#664465] flex items-center justify-center transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6B5E59] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
