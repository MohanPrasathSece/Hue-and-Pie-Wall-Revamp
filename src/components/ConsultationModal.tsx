import { useState } from "react";
import { X, CheckCircle2, Phone, Calendar, MapPin, User, Sparkles } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "General Wall Revamp Consultation",
}: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Bangalore");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Revamp Studio, I'd like to book an in-home wall assessment. Name: ${name || "Client"}, Phone: ${phone || "N/A"}, City: ${city}, Preferred Date: ${date || "Earliest available"}, Service: ${defaultService}.`;
    window.open(`https://wa.me/919845012345?text=${encodeURIComponent(text)}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-[32px] p-7 sm:p-9 border border-[#E8DFD2] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E8DFD2] text-[#655B54] hover:text-[#2C2523] flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6EE] text-[#664465] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E0D5E0]">
              <Sparkles size={13} />
              <span>In-Home Wall Assessment</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C2523] mb-2">
              Book Your Free Site Assessment
            </h3>
            <p className="text-xs sm:text-sm text-[#655B54] mb-6 leading-relaxed">
              Our spatial designer visits your home with physical material swatches, laser measurement tools, and 3D catalog.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#2C2523] block mb-1.5">
                  Selected Focus
                </label>
                <div className="p-3 rounded-2xl bg-white border border-[#E8DFD2] text-xs font-medium text-[#2C2523]">
                  {defaultService}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2C2523] block mb-1.5">
                  Your Full Name
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-3.5 text-[#8C8279]" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#E8DFD2] focus:border-[#C59B4E] focus:outline-none text-xs text-[#2C2523]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2C2523] block mb-1.5">
                  Phone Number (for WhatsApp confirmation)
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3.5 top-3.5 text-[#8C8279]" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98450 00000"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#E8DFD2] focus:border-[#C59B4E] focus:outline-none text-xs text-[#2C2523]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#2C2523] block mb-1.5">
                    City Location
                  </label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-3.5 text-[#8C8279]" />
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#E8DFD2] focus:border-[#C59B4E] focus:outline-none text-xs text-[#2C2523]"
                    >
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Pune">Pune</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2C2523] block mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3.5 top-3.5 text-[#8C8279]" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 rounded-2xl bg-white border border-[#E8DFD2] focus:border-[#C59B4E] focus:outline-none text-xs text-[#2C2523]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 btn-gold text-sm font-bold shadow-md hover:shadow-xl cursor-pointer"
                >
                  Confirm Free Assessment
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-2.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Instantly on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#C59B4E]/15 text-[#C59B4E] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#2C2523] mb-2">
              Assessment Requested!
            </h3>
            <p className="text-xs sm:text-sm text-[#655B54] mb-6 max-w-sm mx-auto leading-relaxed">
              Thank you, {name}. Our spatial design coordinator will contact you at <strong>{phone}</strong> within 2 hours to confirm your laser measurement schedule.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-gold px-7 py-2.5 text-xs font-bold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
