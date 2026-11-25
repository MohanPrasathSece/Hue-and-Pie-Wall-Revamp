import { useState, useMemo } from "react";
import { Calculator, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

interface CostCalculatorProps {
  onOpenConsultation: (service?: string) => void;
}

export function CostCalculator({ onOpenConsultation }: CostCalculatorProps) {
  const [roomType, setRoomType] = useState("living-room");
  const [wallSize, setWallSize] = useState("standard"); // compact, standard, large, expansive
  const [finishType, setFinishType] = useState("teak-slats");
  const [addons, setAddons] = useState<string[]>(["cove-led"]);

  const roomNames: Record<string, string> = {
    "living-room": "Living Room TV Wall",
    bedroom: "Master Bedroom Headboard",
    entrance: "Foyer Statement Wall",
    study: "Home Office Slat Backdrop",
    "dining-room": "Dining Room Feature Wall",
    mandir: "Sacred Mandir Jaali Wall",
  };

  const sizeOptions = [
    { id: "compact", label: "8 × 8 ft (64 sq ft)", factor: 0.8 },
    { id: "standard", label: "10 × 9 ft (90 sq ft)", factor: 1.0 },
    { id: "large", label: "12 × 9 ft (108 sq ft)", factor: 1.25 },
    { id: "expansive", label: "15 × 10 ft (150 sq ft)", factor: 1.7 },
  ];

  const finishOptions = [
    { id: "teak-slats", name: "Natural Fluted Teak Slats", basePrice: 120000 },
    { id: "microcement", name: "Seamless Italian Microcement", basePrice: 85000 },
    { id: "pvd-gold", name: "Titanium PVD Gold & Stone Plaster", basePrice: 145000 },
    { id: "venetian", name: "Burnished Venetian Lime Plaster", basePrice: 110000 },
    { id: "acoustic-oak", name: "Scandinavian Oak Acoustic Slats", basePrice: 95000 },
  ];

  const availableAddons = [
    { id: "cove-led", name: "Warm 2700K Indirect Cove LED Profile", price: 14500 },
    { id: "brass-inlay", name: "Grade-304 Titanium Brass Inlay Strips", price: 16000 },
    { id: "acoustic-felt", name: "High-Density Sound-Damping Backer (NRC 0.85)", price: 12000 },
    { id: "floating-ledge", name: "Integrated Floating Teak / Stone Ledge", price: 15000 },
  ];

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedEstimate = useMemo(() => {
    const selectedFinish = finishOptions.find((f) => f.id === finishType) || finishOptions[0];
    const selectedSizeObj = sizeOptions.find((s) => s.id === wallSize) || sizeOptions[1];

    let base = selectedFinish.basePrice * selectedSizeObj.factor;

    const addonsCost = addons.reduce((sum, id) => {
      const addon = availableAddons.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);

    const total = Math.round((base + addonsCost) / 1000) * 1000;
    const low = Math.round((total * 0.95) / 1000) * 1000;
    const high = Math.round((total * 1.05) / 1000) * 1000;

    return {
      total,
      low: `₹${low.toLocaleString("en-IN")}`,
      high: `₹${high.toLocaleString("en-IN")}`,
      summary: `Estimated Investment for ${roomNames[roomType]} with ${selectedFinish.name}`,
    };
  }, [roomType, wallSize, finishType, addons]);

  const handleWhatsAppEstimate = () => {
    const selectedFinish = finishOptions.find((f) => f.id === finishType)?.name;
    const selectedSize = sizeOptions.find((s) => s.id === wallSize)?.label;
    const text = `Hello Revamp Studio, I calculated an estimate for my ${roomNames[roomType]} (${selectedSize}) with ${selectedFinish}. Estimated range: ${calculatedEstimate.low} – ${calculatedEstimate.high}. I'd like to book a site assessment.`;
    window.open(`https://wa.me/919845012345?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#C59B4E] block mb-2">
            100% Transparent Factory Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-3">
            Instant Wall Revamp Cost Calculator
          </h2>
          <p className="text-base text-[#655B54] leading-relaxed">
            Configure your room, wall size, and finish to calculate real turnkey pricing with factory fabrication and on-site assembly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#E8DFD2] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-7">
              {/* Step 1: Room Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block mb-3">
                  1. Select Room Space
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {Object.entries(roomNames).map(([key, name]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setRoomType(key)}
                      className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all cursor-pointer ${
                        roomType === key
                          ? "bg-[#664465] text-white shadow-xs"
                          : "bg-[#F8F5F0] text-[#655B54] hover:bg-[#EFE6EE] hover:text-[#664465] border border-[#E8DFD2]"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Wall Dimensions */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block mb-3">
                  2. Wall Dimensions
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {sizeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setWallSize(opt.id)}
                      className={`p-3.5 rounded-2xl text-xs font-semibold text-left transition-all cursor-pointer ${
                        wallSize === opt.id
                          ? "bg-[#664465] text-white shadow-xs"
                          : "bg-[#F8F5F0] text-[#655B54] hover:bg-[#EFE6EE] hover:text-[#664465] border border-[#E8DFD2]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Material Finish */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block mb-3">
                  3. Architectural Surface Finish
                </label>
                <div className="space-y-2">
                  {finishOptions.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFinishType(f.id)}
                      className={`w-full p-3.5 rounded-2xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        finishType === f.id
                          ? "bg-[#EFE6EE] border-2 border-[#664465] text-[#2C2523]"
                          : "bg-white border border-[#E8DFD2] text-[#655B54] hover:border-[#664465]/60"
                      }`}
                    >
                      <span>{f.name}</span>
                      <span className="font-serif font-bold text-sm text-[#C59B4E]">
                        from ₹{f.basePrice.toLocaleString("en-IN")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Addons */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2C2523] block mb-3">
                  4. Optional Bespoke Add-ons
                </label>
                <div className="space-y-2">
                  {availableAddons.map((ad) => {
                    const active = addons.includes(ad.id);
                    return (
                      <div
                        key={ad.id}
                        onClick={() => toggleAddon(ad.id)}
                        className={`p-3 rounded-2xl text-xs flex items-center justify-between cursor-pointer transition-all border ${
                          active
                            ? "bg-[#F4EFEA] border-[#C59B4E] text-[#2C2523] font-semibold"
                            : "bg-white border-[#E8DFD2] text-[#655B54] hover:border-[#C59B4E]/50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${
                              active ? "bg-[#C59B4E] text-white" : "border border-[#D2C5B4]"
                            }`}
                          >
                            {active ? "✓" : ""}
                          </div>
                          <span>{ad.name}</span>
                        </div>
                        <span className="font-bold text-[#C59B4E]">+₹{ad.price.toLocaleString("en-IN")}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-[28px] bg-[#F4EFEA] border border-[#E8DFD2]">
              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DFD2] w-fit mb-5">
                  <Calculator size={14} className="text-[#C59B4E]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#655B54]">
                    Live Estimate
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#8C8279] block mb-1">
                  Estimated Investment Range
                </span>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C2523] mb-4">
                  {calculatedEstimate.low}
                  <span className="text-lg sm:text-xl font-sans text-[#8C8279] font-normal"> to </span>
                  {calculatedEstimate.high}
                </div>

                <p className="text-xs text-[#655B54] leading-relaxed mb-6">
                  {calculatedEstimate.summary}. Includes 3D laser site survey, factory fabrication, IS:710 BWR marine ply, concealed German fittings, and 1–3 day installation.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-[#E8DFD2] space-y-2 mb-6 text-xs text-[#655B54]">
                  <div className="flex justify-between">
                    <span>Dustless Handover:</span>
                    <strong className="text-[#2C2523]">1 to 3 Days</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Warranty:</span>
                    <strong className="text-[#2C2523]">10-Year Craft Guarantee</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>On-Site Cutting:</span>
                    <strong className="text-[#2C2523]">0% (Factory Finished)</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E8DFD2]">
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Locked Quote: ${calculatedEstimate.summary} (${calculatedEstimate.low})`)}
                  className="w-full py-4 btn-gold text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <span>Lock In This Price & 3D Plan</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppEstimate}
                  className="w-full py-3 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={15} />
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
