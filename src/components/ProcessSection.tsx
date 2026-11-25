import { process } from "@/lib/wall-data";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F4EFEA] border-b border-[#E8DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#EFE6EE] text-[#664465] border border-[#E0D5E0] inline-block mb-3">
            Zero On-Site Construction Dust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-3">
            How We Complete Your Wall in 3 Days
          </h2>
          <p className="text-base text-[#655B54] leading-relaxed">
            Zero sawing in your living room. We manufacture panels to millimeter tolerances in our factory offsite.
          </p>
        </div>

        {/* Process Steps - Straight Down Vertical Stack on Mobile (grid-cols-1) & 4-Col Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {process.map((p) => (
            <div
              key={p.step}
              className="w-full rounded-[24px] p-7 sm:p-8 bg-white border border-[#E8DFD2] hover:border-[#664465] hover:bg-[#FAF6FA]/70 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#664465] font-medium block mb-3.5">
                  {p.step}
                </span>
                <h3 className="font-serif font-medium text-xl text-[#2C2523] mb-2.5">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#655B54] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
