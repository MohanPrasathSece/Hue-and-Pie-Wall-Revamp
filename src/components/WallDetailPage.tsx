import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Home,
  MessageCircle,
  Phone,
  Ruler,
  Shield,
  Sparkles,
  Wrench,
  Layers,
} from "lucide-react";
import {
  findDesign,
  findRoom,
  getDesignsForRoom,
  designs,
  rooms,
  materials,
  type WallDesign,
  type WallRoom,
} from "@/lib/wall-data";

interface WallDetailPageProps {
  slug: string;
  onBack: () => void;
  onSelectSlug: (slug: string) => void;
  onOpenConsultation: (service?: string) => void;
}

export function WallDetailPage({
  slug,
  onBack,
  onSelectSlug,
  onOpenConsultation,
}: WallDetailPageProps) {
  const design = findDesign(slug);
  const room = findRoom(slug);

  if (room) {
    return (
      <RoomDetailView
        room={room}
        onBack={onBack}
        onSelectDesign={onSelectSlug}
        onOpenConsultation={onOpenConsultation}
      />
    );
  }

  if (design) {
    return (
      <DesignDetailView
        design={design}
        onBack={onBack}
        onSelectSlug={onSelectSlug}
        onOpenConsultation={onOpenConsultation}
      />
    );
  }

  return (
    <div className="py-32 text-center max-w-lg mx-auto">
      <h2 className="font-serif text-3xl font-normal text-[#2C2523] mb-4">Wall Not Found</h2>
      <p className="text-sm text-[#655B54] mb-6">The requested wall concept could not be located.</p>
      <button type="button" onClick={onBack} className="btn-gold px-6 py-2.5 text-xs font-bold">
        Back to All Walls
      </button>
    </div>
  );
}

// -------------------------------------------------------------------------
// VIEW A: ROOM CATEGORY VIEW (e.g. Living Room Walls)
// -------------------------------------------------------------------------
function RoomDetailView({
  room,
  onBack,
  onSelectDesign,
  onOpenConsultation,
}: {
  room: WallRoom;
  onBack: () => void;
  onSelectDesign: (slug: string) => void;
  onOpenConsultation: (service?: string) => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const roomDesigns = getDesignsForRoom(room.slug);
  const fallbackDesigns = roomDesigns.length > 0 ? roomDesigns : designs.slice(0, 3);
  const otherRooms = rooms.filter((r) => r.slug !== room.slug);

  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs text-[#8C8279] mb-8">
          <button type="button" onClick={onBack} className="hover:text-[#2C2523] flex items-center gap-1 cursor-pointer">
            <Home size={13} />
            <span>Studio Home</span>
          </button>
          <span>/</span>
          <button type="button" onClick={onBack} className="hover:text-[#2C2523] cursor-pointer">
            All Rooms
          </button>
          <span>/</span>
          <span className="font-semibold text-[#2C2523]">{room.name}</span>
        </div>

        {/* Hero Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[520px] rounded-[28px] overflow-hidden bg-[#F3EDE4] border border-[#E8DFD2] shadow-xs">
              <img
                src={room.gallery[activeImageIndex] || room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#2C2523] text-xs font-semibold shadow-xs">
                  {room.name}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#2C2523]/90 text-white text-xs font-medium flex items-center gap-1.5">
                  <Clock size={13} className="text-[#C59B4E]" />
                  <span>{room.turnaround}</span>
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {room.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                {room.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-[#C59B4E] shadow-sm scale-102"
                        : "border-[#E8DFD2] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Guarantees Box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD2] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center shrink-0">
                  <Wrench size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C2523]">Dustless Install</h4>
                  <p className="text-[11px] text-[#8C8279]">Built in factory</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD2] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center shrink-0">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C2523]">10-Yr Warranty</h4>
                  <p className="text-[11px] text-[#8C8279]">IS:710 Marine Ply</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-[#E8DFD2] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C2523]">{room.turnaround}</h4>
                  <p className="text-[11px] text-[#8C8279]">Quiet handover</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Specs */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-xs font-bold tracking-wider uppercase text-[#664465] bg-[#EFE6EE] border border-[#E0D5E0] px-3.5 py-1 rounded-full w-fit mb-3">
              Architectural Room Category
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2C2523] leading-tight mb-4">
              {room.name}
            </h1>

            <p className="text-base text-[#655B54] leading-relaxed mb-6">
              {room.description}
            </p>

            {/* Price Range Card */}
            <div className="p-6 rounded-[24px] bg-[#F4EFEA] border border-[#E8DFD2] mb-6">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8C8279] font-bold block">
                    Typical Investment (All-Inclusive)
                  </span>
                  <span className="font-serif text-3xl font-medium text-[#2C2523]">
                    {room.priceRange}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#2C2523] bg-white px-3 py-1 rounded-full border border-[#E0D5C7]">
                  Turnkey Handover
                </span>
              </div>
              <p className="text-xs text-[#655B54] leading-relaxed">
                Covers 3D laser measurement, factory CNC fabrication, IS:710 BWR marine ply, concealed hardware, ambient LED profiles, and quiet on-site assembly.
              </p>
            </div>

            {/* Features Checklist */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-medium text-[#2C2523] mb-3">
                Key Engineering Highlights
              </h3>
              <ul className="space-y-2.5">
                {room.features.map((feat, idx) => (
                  <li key={idx} className="p-3 rounded-2xl bg-white border border-[#E8DFD2] flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EFE6EE] text-[#664465] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-[#2C2523] leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation(`Room Assessment: ${room.name}`)}
                className="w-full py-4 btn-gold text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
              >
                <span>Book Free In-Home Wall Assessment</span>
                <ArrowUpRight size={16} />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/919845012345?text=Hello%2C%20I%20am%20interested%20in%20Revamp%20${encodeURIComponent(room.name)}%3A`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors text-xs font-semibold"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Quote</span>
                </a>

                <a
                  href="tel:+919845012345"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#E0D5C7] bg-white text-[#2C2523] hover:bg-[#F3EDE4] transition-colors text-xs font-semibold"
                >
                  <Phone size={15} className="text-[#C59B4E]" />
                  <span>+91 98450 12345</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ready-to-Install Concepts in this room */}
        <div className="pt-16 border-t border-[#E8DFD2] mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C59B4E] font-bold block mb-1">
                Curated Designs
              </span>
              <h2 className="font-serif text-3xl font-normal text-[#2C2523]">
                Ready-to-Install Concepts for {room.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackDesigns.map((d) => (
              <div
                key={d.slug}
                onClick={() => onSelectDesign(d.slug)}
                className="rounded-[24px] overflow-hidden bg-white border border-[#E8DFD2] shadow-2xs hover:shadow-xl hover:border-[#C59B4E] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-[#F3EDE4]">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B4E] block mb-1">
                      {d.code} • {d.theme}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-[#2C2523] group-hover:text-[#C59B4E] transition-colors mb-2">
                      {d.name}
                    </h3>
                    <p className="text-xs text-[#655B54] line-clamp-2 leading-relaxed">
                      {d.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-[#EFE7DD] flex items-center justify-between bg-[#FAF8F5]/60">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8C8279] block">Estimated Cost</span>
                    <span className="font-serif text-xl font-medium text-[#2C2523]">{d.price}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F3EDE4] group-hover:bg-[#C59B4E] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Rooms Quick Access */}
        <div className="pt-12 border-t border-[#E8DFD2]">
          <h3 className="font-serif text-xl font-normal text-[#2C2523] mb-5">
            Explore Other Room Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherRooms.map((r) => (
              <button
                key={r.slug}
                type="button"
                onClick={() => onSelectDesign(r.slug)}
                className="p-3.5 rounded-2xl bg-white border border-[#E8DFD2] hover:border-[#C59B4E] text-left transition-all cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <span className="text-xs font-bold text-[#2C2523] block leading-snug">{r.name}</span>
                <span className="text-[11px] text-[#8C8279] block mt-1">{r.priceRange}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------
// VIEW B: INDIVIDUAL WALL DESIGN VIEW (e.g. Cloud Wood Slatted Wall)
// -------------------------------------------------------------------------
function DesignDetailView({
  design,
  onBack,
  onSelectSlug,
  onOpenConsultation,
}: {
  design: WallDesign;
  onBack: () => void;
  onSelectSlug: (slug: string) => void;
  onOpenConsultation: (service?: string) => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const gallery = [design.image, ...(design.gallery || [])].filter(
    (img, idx, arr) => arr.indexOf(img) === idx
  );

  const customizationOptions = [
    {
      id: "cove-lighting",
      label: "Warm 2700K Ambient Cove LED Profile",
      note: "Concealed indirect illumination with flicker-free dimmer driver",
      addCost: "₹14,500",
    },
    {
      id: "pvd-gold",
      label: "Grade-304 Titanium PVD Gold Inlay Accents",
      note: "Precision-mitered chamfered brass/gold transition strips",
      addCost: "₹18,000",
    },
    {
      id: "acoustic-core",
      label: "High-Density Acoustic Insulation Felt Backer",
      note: "65% sound absorption (NRC 0.85) for quiet rooms and media setups",
      addCost: "₹12,000",
    },
    {
      id: "floating-ledge",
      label: "Integrated Floating Display Stone/Oak Ledge",
      note: "Cantilevered concealed-bracket shelf engineered for decor",
      addCost: "₹16,500",
    },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const similarDesigns = designs
    .filter((d) => d.slug !== design.slug && (d.roomSlug === design.roomSlug || d.themeSlug === design.themeSlug))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs text-[#8C8279] mb-8">
          <button type="button" onClick={onBack} className="hover:text-[#2C2523] flex items-center gap-1 cursor-pointer">
            <Home size={13} />
            <span>Studio Home</span>
          </button>
          <span>/</span>
          <button type="button" onClick={() => onSelectSlug(design.roomSlug)} className="hover:text-[#2C2523] cursor-pointer">
            {design.room}
          </button>
          <span>/</span>
          <span className="font-semibold text-[#2C2523]">{design.name}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Gallery Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[530px] rounded-[28px] overflow-hidden bg-[#F3EDE4] border border-[#E8DFD2] shadow-xs">
              <img
                src={gallery[activeImageIndex] || design.image}
                alt={design.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#2C2523] text-xs font-semibold shadow-xs">
                  {design.code}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#2C2523]/90 text-white text-xs font-medium flex items-center gap-1.5">
                  <Clock size={13} className="text-[#C59B4E]" />
                  <span>{design.turnaround}</span>
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-[#C59B4E] shadow-sm scale-102"
                        : "border-[#E8DFD2] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD2] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center shrink-0">
                  <Wrench size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C2523]">Dustless Install</h4>
                  <p className="text-[11px] text-[#8C8279]">Pre-engineered offsite</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD2] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center shrink-0">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C2523]">10-Yr Guarantee</h4>
                  <p className="text-[11px] text-[#8C8279]">Anti-warp marine ply</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-[#E8DFD2] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2C2523]">{design.turnaround}</h4>
                  <p className="text-[11px] text-[#8C8279]">Factory assembly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-3">
              <button
                type="button"
                onClick={() => onSelectSlug(design.roomSlug)}
                className="text-xs font-bold tracking-wider uppercase text-[#664465] bg-[#EFE6EE] border border-[#E0D5E0] px-3.5 py-1 rounded-full hover:bg-[#E2D5E2] transition-colors cursor-pointer"
              >
                {design.room}
              </button>
              <span className="text-xs font-semibold text-[#8C8279] bg-white px-3 py-1 rounded-full border border-[#E8DFD2]">
                {design.theme}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2C2523] leading-tight mb-4">
              {design.name}
            </h1>

            <p className="text-base text-[#655B54] leading-relaxed mb-6">
              {design.summary}
            </p>

            {/* Price Estimate Card */}
            <div className="p-6 rounded-[24px] bg-[#F4EFEA] border border-[#E8DFD2] mb-6">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8C8279] font-bold block">
                    Estimated Cost (All-Inclusive)
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#2C2523]">
                    {design.price}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#2C2523] bg-white px-3 py-1 rounded-full border border-[#E0D5C7]">
                  Factory-Direct
                </span>
              </div>
              <p className="text-xs text-[#655B54] leading-relaxed">
                {design.priceNote}
              </p>
            </div>

            {/* Customization Options */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg font-medium text-[#2C2523]">
                  Make It Yours (Custom Add-ons)
                </h3>
                <span className="text-xs text-[#8C8279]">Click to include</span>
              </div>

              <div className="space-y-2.5">
                {customizationOptions.map((opt) => {
                  const checked = selectedAddons.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleAddon(opt.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        checked
                          ? "bg-[#EFE6EE]/50 border-[#664465] shadow-xs"
                          : "bg-white/80 border-[#E8DFD2] hover:border-[#664465]/50"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          checked
                            ? "bg-[#664465] text-white"
                            : "border border-[#D9CEBF] bg-[#FAF8F5] text-transparent"
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-semibold text-[#2C2523]">{opt.label}</h4>
                          <span className="text-xs font-bold text-[#664465]">{opt.addCost}</span>
                        </div>
                        <p className="text-[11px] text-[#8C8279] mt-0.5">{opt.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {selectedAddons.length > 0 && (
                <p className="text-xs text-[#C59B4E] font-semibold mt-2.5 flex items-center gap-1.5">
                  <CheckCircle2 size={13} />
                  <span>
                    {selectedAddons.length} bespoke detail{selectedAddons.length > 1 ? "s" : ""} added to your project brief.
                  </span>
                </p>
              )}
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation(`Wall Quote: ${design.name} (${design.code})`)}
                className="w-full py-4 btn-gold text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
              >
                <span>Book Free In-Home Assessment for this Wall</span>
                <ArrowUpRight size={16} />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/919845012345?text=Hello%2C%20I%20am%20interested%20in%20the%20Revamp%20concept%3A%20${encodeURIComponent(design.name)}%20(${design.code})`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors text-xs font-semibold"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Quote</span>
                </a>

                <a
                  href="tel:+919845012345"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#E0D5C7] bg-white text-[#2C2523] hover:bg-[#F3EDE4] transition-colors text-xs font-semibold"
                >
                  <Phone size={15} className="text-[#C59B4E]" />
                  <span>+91 98450 12345</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Engineering Specs */}
        <div className="pt-16 border-t border-[#E8DFD2] mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider text-[#C59B4E] font-bold block mb-1">
              Technical Specifications
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#2C2523]">
              Engineered for Longevity & Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[24px] bg-white border border-[#E8DFD2] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center mb-4">
                <Ruler size={18} />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#2C2523] mb-2">Standard Dimensions</h3>
              <p className="text-sm font-bold text-[#C59B4E] mb-2">{design.specs.dimensions}</p>
              <p className="text-xs text-[#655B54] leading-relaxed">
                Precision calibrated to your wall length and floor-to-ceiling height during laser site assessment.
              </p>
            </div>

            <div className="p-6 rounded-[24px] bg-white border border-[#E8DFD2] shadow-2xs md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#F3EDE4] text-[#C59B4E] flex items-center justify-center mb-4">
                <Layers size={18} />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#2C2523] mb-3">Architectural Material Layers</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2C2523]">
                {design.specs.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B4E] mt-2 shrink-0" />
                    <span className="text-[#2C2523] leading-snug">{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Concepts */}
        {similarDesigns.length > 0 && (
          <div className="pt-12 border-t border-[#E8DFD2]">
            <h3 className="font-serif text-2xl font-normal text-[#2C2523] mb-6">
              Similar Architectural Wall Concepts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarDesigns.map((sim) => (
                <div
                  key={sim.slug}
                  onClick={() => onSelectSlug(sim.slug)}
                  className="rounded-2xl p-4 bg-white border border-[#E8DFD2] hover:border-[#C59B4E] transition-all cursor-pointer flex items-center gap-4 group"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#F3EDE4]">
                    <img src={sim.image} alt={sim.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#C59B4E] block">{sim.code}</span>
                    <h4 className="text-sm font-semibold text-[#2C2523] group-hover:text-[#C59B4E] transition-colors leading-snug">{sim.name}</h4>
                    <span className="text-xs font-medium text-[#8C8279] mt-0.5 block">{sim.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
