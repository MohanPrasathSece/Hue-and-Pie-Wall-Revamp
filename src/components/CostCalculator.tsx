import { useState, useMemo } from "react";
import { Calculator, Sparkles, MessageCircle, Check, ArrowRight, ShieldCheck, Clock, Layers } from "lucide-react";

interface CostCalculatorProps {
  onOpenConsultation: (service?: string) => void;
}

interface RoomConfig {
  name: string;
  defaultW: number;
  defaultH: number;
}

const ROOM_OPTIONS: Record<string, RoomConfig> = {
  "living-room": { name: "Living Room", defaultW: 10, defaultH: 9 },
  bedroom: { name: "Master Bedroom", defaultW: 10, defaultH: 9 },
  entrance: { name: "Entrance & Foyer", defaultW: 8, defaultH: 9 },
  study: { name: "Study & Home Office", defaultW: 9, defaultH: 9 },
  "dining-room": { name: "Dining Room", defaultW: 10, defaultH: 9 },
  mandir: { name: "Mandir", defaultW: 7, defaultH: 9 },
};

interface MaterialOption {
  id: string;
  name: string;
  ratePerSqFt: number;
  subtitle: string;
}

const MATERIAL_OPTIONS: MaterialOption[] = [
  {
    id: "teak-slats",
    name: "Natural American Teak Slats",
    ratePerSqFt: 1150,
    subtitle: "Precision-milled fluted timber on acoustic felt",
  },
  {
    id: "microcement",
    name: "Seamless Italian Microcement",
    ratePerSqFt: 850,
    subtitle: "Hand-burnished breathable continuous finish",
  },
  {
    id: "brass-inlay",
    name: "Titanium PVD Brass & Stone",
    ratePerSqFt: 1350,
    subtitle: "Grade-304 gold inlays on mineral plaster",
  },
  {
    id: "fluted-marble",
    name: "Honed Ribbed Carrara Marble",
    ratePerSqFt: 1650,
    subtitle: "Quarried Italian marble with fluted water-jet ribs",
  },
  {
    id: "boucle-fabric",
    name: "Bouclé Acoustic Velvet Paneling",
    ratePerSqFt: 950,
    subtitle: "Plush cushioned vertical acoustic flutes",
  },
];

interface AddonOption {
  id: string;
  name: string;
  price: number;
}

const ADDON_OPTIONS: AddonOption[] = [
  { id: "cove-led", name: "Warm 2700K Ambient Cove LED Profile", price: 12500 },
  { id: "brass-strips", name: "Titanium PVD Champagne Brass Reveal Strips", price: 8500 },
  { id: "floating-ledge", name: "Floating Teak or Stone Console Shelf", price: 15000 },
];

export function CostCalculator({ onOpenConsultation }: CostCalculatorProps) {
  const [selectedRoomKey, setSelectedRoomKey] = useState<string>("living-room");
  const [widthFt, setWidthFt] = useState<number>(10);
  const [heightFt, setHeightFt] = useState<number>(9);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("teak-slats");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["cove-led"]);

  // Set default dimensions when room changes
  const handleRoomSelect = (key: string) => {
    setSelectedRoomKey(key);
    const cfg = ROOM_OPTIONS[key];
    if (cfg) {
      setWidthFt(cfg.defaultW);
      setHeightFt(cfg.defaultH);
    }
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const sqFt = widthFt * heightFt;
  const currentMaterial =
    MATERIAL_OPTIONS.find((m) => m.id === selectedMaterialId) || MATERIAL_OPTIONS[0];

  const materialCost = sqFt * currentMaterial.ratePerSqFt;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = ADDON_OPTIONS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const turnkeyTotal = Math.round((materialCost + addonsTotal) / 1000) * 1000;

  const currentRoomName = ROOM_OPTIONS[selectedRoomKey]?.name || "Room";

  const handleWhatsApp = () => {
    const addonsList = selectedAddons
      .map((id) => ADDON_OPTIONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Hi Hue & Pie! I calculated an estimate for my ${currentRoomName} wall:\nDimensions: ${widthFt}ft × ${heightFt}ft (${sqFt} sq ft)\nFinish: ${currentMaterial.name}\n${addonsList ? `Add-ons: ${addonsList}\n` : ""}Estimated Turnkey Total: ₹${turnkeyTotal.toLocaleString("en-IN")}\nCould we arrange an in-home assessment?`;

    window.open(`https://wa.me/919845012345?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#664465]/15 text-[#664465] text-xs font-semibold tracking-wider uppercase mb-3">
            Instant Turnkey Estimate
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-3">
            Wall Revamp Price Calculator
          </h2>
          <p className="text-base text-[#655B54] leading-relaxed">
            Select your room, dimensions, and architectural finish for real-time turnkey pricing including factory fabrication and clean 1–3 day installation.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD2] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Simple Inputs */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Room Space */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block mb-3">
                  1. Select Room Space
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {Object.entries(ROOM_OPTIONS).map(([key, config]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleRoomSelect(key)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                        selectedRoomKey === key
                          ? "bg-[#664465] text-white shadow-xs"
                          : "bg-[#FAF8F5] text-[#655B54] hover:bg-[#EFE6EE] hover:text-[#664465] border border-[#E8DFD2]"
                      }`}
                    >
                      {config.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Dimensions */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523]">
                    2. Wall Dimensions
                  </label>
                  <span className="text-xs font-semibold text-[#664465]">
                    Total Area: {sqFt} sq ft
                  </span>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { label: "8 × 9 ft", w: 8, h: 9 },
                    { label: "10 × 9 ft (Standard)", w: 10, h: 9 },
                    { label: "12 × 9 ft", w: 12, h: 9 },
                    { label: "14 × 10 ft", w: 14, h: 10 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setWidthFt(preset.w);
                        setHeightFt(preset.h);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        widthFt === preset.w && heightFt === preset.h
                          ? "bg-[#664465] text-white"
                          : "bg-[#FAF8F5] text-[#6B5E59] border border-[#E8DFD2] hover:border-[#664465]"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Width & Height Sliders */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD2]">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-[#2C2523] mb-1.5">
                      <span>Width</span>
                      <span className="font-bold">{widthFt} ft</span>
                    </div>
                    <input
                      type="range"
                      min={6}
                      max={24}
                      value={widthFt}
                      onChange={(e) => setWidthFt(Number(e.target.value))}
                      className="w-full accent-[#664465] cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium text-[#2C2523] mb-1.5">
                      <span>Height</span>
                      <span className="font-bold">{heightFt} ft</span>
                    </div>
                    <input
                      type="range"
                      min={7}
                      max={14}
                      value={heightFt}
                      onChange={(e) => setHeightFt(Number(e.target.value))}
                      className="w-full accent-[#664465] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Material Finish */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block mb-3">
                  3. Architectural Surface Finish
                </label>
                <div className="space-y-2.5">
                  {MATERIAL_OPTIONS.map((mat) => {
                    const isSelected = selectedMaterialId === mat.id;
                    return (
                      <div
                        key={mat.id}
                        onClick={() => setSelectedMaterialId(mat.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-[#EFE6EE]/40 border-2 border-[#664465] shadow-xs"
                            : "bg-white border-[#E8DFD2] hover:border-[#664465]/50"
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold text-[#2C2523]">
                            {mat.name}
                          </div>
                          <div className="text-xs text-[#8A7973]">{mat.subtitle}</div>
                        </div>
                        <span className="text-xs font-bold text-[#664465] shrink-0 ml-3">
                          ₹{mat.ratePerSqFt}/sq ft
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Optional Add-ons (No emojis, clean checkmarks) */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block mb-3">
                  4. Optional Bespoke Add-ons
                </label>
                <div className="space-y-2">
                  {ADDON_OPTIONS.map((addon) => {
                    const active = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-all border ${
                          active
                            ? "bg-[#FAF8F5] border-[#664465] text-[#2C2523] font-semibold"
                            : "bg-white border-[#E8DFD2] text-[#655B54] hover:border-[#664465]/50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                              active ? "bg-[#664465] text-white" : "border border-[#D1C7BD] bg-white"
                            }`}
                          >
                            {active && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span>{addon.name}</span>
                        </div>
                        <span className="font-bold text-[#664465]">
                          +₹{addon.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Live Turnkey Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#F4EFEA] border border-[#E8DFD2]">
              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DFD2] w-fit mb-6">
                  <Calculator size={14} className="text-[#C59B4E]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#655B54]">
                    Turnkey Estimate
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#8A7973] mb-1">
                  Estimated Total Investment
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#664465] mb-2">
                  ₹{turnkeyTotal.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-[#6B5E59] leading-relaxed mb-6">
                  Fixed fixed-quote estimate for a {widthFt}×{heightFt} ft ({sqFt} sq ft) {currentRoomName} focal wall. Zero mid-project escalations.
                </p>

                {/* Scope Breakdown */}
                <div className="p-4 rounded-2xl bg-white border border-[#E8DFD2] space-y-2.5 text-xs text-[#2C2523] mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[#655B54]">Surface Finish ({sqFt} sq ft)</span>
                    <span className="font-semibold">₹{materialCost.toLocaleString("en-IN")}</span>
                  </div>
                  {addonsTotal > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#655B54]">Selected Add-ons</span>
                      <span className="font-semibold">₹{addonsTotal.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-2 border-t border-[#F0EAE1]">
                    <span className="text-[#655B54]">Factory Pre-Fabrication</span>
                    <span className="font-semibold text-[#664465]">Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#655B54]">1–3 Day Dustless Mount</span>
                    <span className="font-semibold text-[#664465]">Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#655B54]">10-Year Craft Warranty</span>
                    <span className="font-semibold text-[#664465]">Included</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  type="button"
                  onClick={() =>
                    onOpenConsultation(
                      `Wall Calculator Quote: ${currentRoomName} (${widthFt}x${heightFt} ft, ₹${turnkeyTotal.toLocaleString("en-IN")})`
                    )
                  }
                  className="w-full py-4 rounded-full bg-[#664465] hover:bg-[#4F2D4E] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#664465]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles size={16} className="text-[#C59B4E]" />
                  <span>Book Free In-Home Assessment</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Send Estimate to WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
