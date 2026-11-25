import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RoomBrowser } from "./components/RoomBrowser";
import { StyleBrowser } from "./components/StyleBrowser";
import { DesignCatalog } from "./components/DesignCatalog";
import { MaterialShowroom } from "./components/MaterialShowroom";
import { ProcessSection } from "./components/ProcessSection";
import { CostCalculator } from "./components/CostCalculator";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { RoomCategoryPage } from "./components/RoomCategoryPage";
import { StyleCategoryPage } from "./components/StyleCategoryPage";
import { MaterialCategoryPage } from "./components/MaterialCategoryPage";
import { WallDetailPage } from "./components/WallDetailPage";
import { MaterialDetailPage } from "./components/MaterialDetailPage";
import { ConsultationModal } from "./components/ConsultationModal";
import { Footer } from "./components/Footer";

type AppView =
  | "home"
  | "room-category"
  | "style-category"
  | "material-category"
  | "wall-detail"
  | "material-detail";

export default function App() {
  const [activeView, setActiveView] = useState<AppView>("home");
  const [selectedSlug, setSelectedSlug] = useState<string>("living-room");
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("In-Home Wall Assessment");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hash-based deep link router
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#/room/")) {
        setSelectedSlug(hash.replace("#/room/", ""));
        setActiveView("room-category");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash.startsWith("#/style/")) {
        setSelectedSlug(hash.replace("#/style/", ""));
        setActiveView("style-category");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash.startsWith("#/material-cat/")) {
        setSelectedSlug(hash.replace("#/material-cat/", ""));
        setActiveView("material-category");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash.startsWith("#/wall/")) {
        setSelectedSlug(hash.replace("#/wall/", ""));
        setActiveView("wall-detail");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash.startsWith("#/material/")) {
        setSelectedSlug(hash.replace("#/material/", ""));
        setActiveView("material-detail");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (!hash || hash === "#") {
        setActiveView("home");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Navigation handlers
  const handleNavigateHome = () => {
    setActiveView("home");
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectRoom = (slug: string) => {
    setSelectedSlug(slug);
    setActiveView("room-category");
    window.location.hash = `#/room/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectStyle = (slug: string) => {
    setSelectedSlug(slug);
    setActiveView("style-category");
    window.location.hash = `#/style/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectMaterialCategory = (slug: string) => {
    setSelectedSlug(slug);
    setActiveView("material-category");
    window.location.hash = `#/material-cat/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectDesign = (slug: string) => {
    setSelectedSlug(slug);
    setActiveView("wall-detail");
    window.location.hash = `#/wall/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectMaterialProduct = (slug: string) => {
    setSelectedSlug(slug);
    setActiveView("material-detail");
    window.location.hash = `#/material/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenConsultation = (service = "In-Home Wall Assessment") => {
    setConsultationService(service);
    setConsultationOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2523] flex flex-col font-sans">
      {/* Universal Header with Brand Logo & Light Plum Accents */}
      <Header
        activeView={activeView}
        onNavigateHome={handleNavigateHome}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === "home" && (
          <>
            {/* Minimal, Luxury Architectural Hero */}
            <Hero
              onOpenConsultation={handleOpenConsultation}
              onExploreDesigns={() => {
                const el = document.getElementById("designs");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              onViewWallDetail={handleSelectDesign}
            />

            {/* 1. Explore by Room: 6 Cards with Large Image & Room Name ONLY */}
            <RoomBrowser onSelectRoom={handleSelectRoom} />

            {/* 2. Explore by Style: 8 Cards with Representative Image & Style Name ONLY */}
            <StyleBrowser onSelectStyle={handleSelectStyle} />

            {/* 3. Popular Wall Designs: Photo, Name, and View Design Link */}
            <DesignCatalog onSelectDesign={handleSelectDesign} />

            {/* 4. Explore Materials: 6 Texture Cards with Name ONLY */}
            <MaterialShowroom onSelectCategory={handleSelectMaterialCategory} />

            {/* 5. Dustless 3-Day Process: Straight vertical stack on mobile */}
            <ProcessSection />

            {/* 6. Interactive Before & After Slider */}
            <BeforeAfterSection />

            {/* 7. Turnkey Wall Cost Calculator */}
            <CostCalculator onOpenConsultation={handleOpenConsultation} />

            {/* Free In-Home Assessment Big Banner */}
            <section className="py-20 sm:py-28 bg-[#FAF8F5]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="rounded-[32px] p-8 sm:p-14 bg-[#F4EFEA] border border-[#E8DFD2] text-center shadow-lg">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2C2523] mb-4">
                    Schedule Your Free In-Home Wall Assessment
                  </h2>
                  <p className="text-base text-[#655B54] max-w-xl mx-auto mb-8 leading-relaxed">
                    Our spatial designer visits with physical wood swatches, laser measurement tools, and 3D catalog.
                    Zero sawdust in your home with 1–3 day clean installation.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultation("Assessment Banner CTA")}
                      className="btn-gold px-8 py-3.5 text-sm font-bold shadow-md hover:shadow-xl w-full sm:w-auto cursor-pointer"
                    >
                      <span>Get Free 3D Wall Plan & Locked Quote</span>
                    </button>

                    <a
                      href="https://wa.me/919845012345?text=Hello%20Revamp%20Studio%2C%20I%20would%20like%20to%20book%20a%20free%20in-home%20wall%20assessment."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] font-semibold text-sm hover:bg-[#25D366]/20 transition-all cursor-pointer w-full sm:w-auto"
                    >
                      <MessageCircle size={17} />
                      <span>WhatsApp Coordinator</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Dedicated Room Category Page */}
        {activeView === "room-category" && (
          <RoomCategoryPage
            roomSlug={selectedSlug}
            onNavigateHome={handleNavigateHome}
            onSelectDesign={handleSelectDesign}
            onSelectMaterial={handleSelectMaterialProduct}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* Dedicated Style Category Page */}
        {activeView === "style-category" && (
          <StyleCategoryPage
            styleSlug={selectedSlug}
            onNavigateHome={handleNavigateHome}
            onSelectDesign={handleSelectDesign}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* Dedicated Material Category Page */}
        {activeView === "material-category" && (
          <MaterialCategoryPage
            categorySlug={selectedSlug}
            onNavigateHome={handleNavigateHome}
            onSelectProduct={handleSelectMaterialProduct}
            onSelectDesign={handleSelectDesign}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* Dedicated Individual Wall Design Page */}
        {activeView === "wall-detail" && (
          <WallDetailPage
            designSlug={selectedSlug}
            onNavigateHome={handleNavigateHome}
            onSelectDesign={handleSelectDesign}
            onSelectRoom={handleSelectRoom}
            onSelectStyle={handleSelectStyle}
            onSelectMaterial={handleSelectMaterialProduct}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* Dedicated Individual Material Detail Page */}
        {activeView === "material-detail" && (
          <MaterialDetailPage
            materialSlug={selectedSlug}
            onNavigateHome={handleNavigateHome}
            onSelectDesign={handleSelectDesign}
            onSelectCategory={handleSelectMaterialCategory}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onSelectRoom={handleSelectRoom}
        onNavigateHome={handleNavigateHome}
      />

      {/* Consultation & Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={consultationService}
      />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#2C2523] text-white shadow-xl flex items-center justify-center hover:bg-[#664465] transition-all cursor-pointer border border-[#E8DFD2]"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
