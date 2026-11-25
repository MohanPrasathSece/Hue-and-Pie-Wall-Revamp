interface BrandLogoProps {
  className?: string;
  variant?: "badge" | "text" | "light";
  showStudioBadge?: boolean;
}

export function BrandLogo({
  className = "",
  variant = "badge",
  showStudioBadge = true,
}: BrandLogoProps) {
  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {/* Exact Logo from User's Image: Deep Plum Box with Serif Hue & Pie + Spaced Uppercase Tagline */}
        <div className="bg-[#502C4E] px-4 py-2 rounded-lg text-white shadow-xs flex flex-col items-center justify-center transition-transform hover:scale-[1.02]">
          <span
            className="font-brand text-[21px] sm:text-[23px] font-normal text-white leading-none tracking-normal"
            style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
          >
            Hue &amp; Pie
          </span>
          <span
            className="text-[8.5px] sm:text-[9px] tracking-[0.22em] uppercase font-bold text-white/95 mt-1 leading-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            INTERIORS, YOUR WAY.
          </span>
        </div>

        {showStudioBadge && (
          <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0] self-center">
            Wall Studio
          </span>
        )}
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <div className="flex items-center gap-2.5">
          <span
            className="font-brand text-2xl sm:text-[26px] font-normal tracking-tight text-white leading-none"
            style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
          >
            Hue &amp; Pie
          </span>
          {showStudioBadge && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/25">
              Wall Studio
            </span>
          )}
        </div>
        <span
          className="text-[9.5px] tracking-[0.22em] uppercase text-white/80 font-bold mt-1.5"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          INTERIORS, YOUR WAY.
        </span>
      </div>
    );
  }

  // Variant: "text" (on light backgrounds)
  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2.5">
        <span
          className="font-brand text-2xl sm:text-[26px] font-normal tracking-tight text-[#502C4E] leading-none"
          style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
        >
          Hue &amp; Pie
        </span>
        {showStudioBadge && (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0]">
            Wall Studio
          </span>
        )}
      </div>
      <span
        className="text-[9.5px] tracking-[0.22em] uppercase text-[#664465] font-bold mt-1.5"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        INTERIORS, YOUR WAY.
      </span>
    </div>
  );
}
