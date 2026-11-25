interface BrandLogoProps {
  className?: string;
  showStudioBadge?: boolean;
  variant?: "text" | "badge" | "light";
}

export function BrandLogo({
  className = "",
  showStudioBadge = true,
}: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Clean text in signature purple with zero background box */}
      <div className="flex flex-col items-start leading-none group-hover:opacity-90 transition-opacity">
        <span
          className="font-brand text-2xl sm:text-[27px] font-normal text-[#664465] tracking-normal leading-none"
          style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
        >
          Hue &amp; Pie
        </span>
        <span
          className="text-[9px] sm:text-[9.5px] tracking-[0.22em] uppercase font-bold text-[#664465]/90 mt-1.5 leading-none"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          INTERIORS, YOUR WAY.
        </span>
      </div>

      {showStudioBadge && (
        <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#664465]/20 self-center">
          Wall Studio
        </span>
      )}
    </div>
  );
}
