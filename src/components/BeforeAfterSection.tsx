import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import wallHeroImg from "@/assets/wall-hero.jpg";
import livingRoomImg from "@/assets/hue-pie-living-room.jpg";

export function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#C59B4E] block mb-2">
            The Transformation Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-3">
            Before &amp; After Wall Revamp
          </h2>
          <p className="text-base text-[#655B54] leading-relaxed">
            Drag the slider to see how a plain developer wall transforms into an architectural statement in just 2 days.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden border border-[#E8DFD2] shadow-2xl relative select-none h-[340px] sm:h-[460px] lg:h-[500px]">
          {/* Before Image (Left / Background) */}
          <img
            src={livingRoomImg}
            alt="Plain Developer Wall Before Revamp"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold backdrop-blur-xs">
            Standard Developer Wall
          </div>

          {/* After Image (Right / Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={wallHeroImg}
              alt="Architectural Fluted Timber Feature Wall After Revamp"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-full bg-[#C59B4E] text-white text-xs font-semibold shadow-md">
              Revamp Architectural Feature Wall
            </div>
          </div>

          {/* Draggable Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-9 h-9 rounded-full bg-white text-[#2C2523] shadow-xl flex items-center justify-center border border-[#E8DFD2]">
              <MoveHorizontal className="w-4 h-4 text-[#2C2523]" />
            </div>
          </div>

          {/* Invisible Range Input for accessibility and smooth dragging */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
            aria-label="Before and after transformation slider"
          />
        </div>
      </div>
    </section>
  );
}
