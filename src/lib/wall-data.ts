import wallHeroImg from "@/assets/wall-hero.jpg";
import wallBedroomImg from "@/assets/wall-bedroom.jpg";
import wallEntryImg from "@/assets/wall-entry.jpg";
import livingRoomImg from "@/assets/hue-pie-living-room.jpg";
import livingLuxuryImg from "@/assets/hue-pie-living-luxury.jpg";
import bedroomImg from "@/assets/hue-pie-bedroom.jpg";
import scandinavianImg from "@/assets/hue-pie-scandinavian-warm.jpg";
import materialsImg from "@/assets/hue-pie-materials.jpg";
import wardrobeImg from "@/assets/hue-pie-wardrobe-suite.jpg";
import kitchenImg from "@/assets/hue-pie-kitchen.jpg";

export interface WallRoom {
  name: string;
  slug: string;
  image: string;
  bannerImage: string;
  heading: string;
  description: string;
  priceRange: string;
  turnaround: string;
  features: string[];
  relatedMaterialSlugs: string[];
}

export interface WallStyle {
  name: string;
  slug: string;
  image: string;
  bannerImage: string;
  heading: string;
  description: string;
  palette: string[];
  features: string[];
}

export interface MaterialCategory {
  name: string;
  slug: string;
  image: string;
  bannerImage: string;
  heading: string;
  description: string;
  unitPriceRange: string;
  features: string[];
}

export interface MaterialProduct {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  code: string;
  finish: string;
  image: string;
  unit: string;
  price: string;
  thickness: string;
  dimensions: string;
  origin: string;
  fireRating: string;
  moistureResistance: string;
  leadTime: string;
  description: string;
  relatedDesignSlugs: string[];
}

export interface WallDesign {
  slug: string;
  name: string;
  code: string;
  room: string;
  roomSlug: string;
  style: string;
  styleSlug: string;
  image: string;
  gallery: string[];
  summary: string;
  description: string;
  price: string;
  priceNote: string;
  turnaround: string;
  specs: {
    dimensions: string;
    materials: string[];
    lighting: string;
    acousticRating: string;
    warranty: string;
  };
  materialsUsed: {
    name: string;
    code: string;
    materialSlug: string;
  }[];
  customizations: {
    id: string;
    name: string;
    priceDelta: number;
    description: string;
  }[];
  similarDesignSlugs: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

// -------------------------------------------------------------
// 1. Explore by Room (6 Categories)
// -------------------------------------------------------------
export const rooms: WallRoom[] = [
  {
    name: "Living Room",
    slug: "living-room",
    image: wallHeroImg,
    bannerImage: wallHeroImg,
    heading: "Living Room Wall Designs",
    description:
      "Transform your central living space with architectural TV focal panelling, acoustic fluted timber slats, floating stone ledges, and concealed 2700K ambient cove profiles. Pre-engineered in our factory and installed in 1–2 days without dust or sawing.",
    priceRange: "₹95,000 – ₹1,65,000",
    turnaround: "1–2 Days Handover",
    features: [
      "Concealed cable raceways & heavy-duty TV bracket support",
      "Factory-calibrated IS:710 BWR marine plywood structure",
      "Acoustic felt damping core for crisp home theater audio",
      "Integrated floating console ledges in Italian quartz or teak",
    ],
    relatedMaterialSlugs: ["wood-panels", "brass-metal", "fluted-marble"],
  },
  {
    name: "Master Bedroom",
    slug: "bedroom",
    image: wallBedroomImg,
    bannerImage: wallBedroomImg,
    heading: "Master Bedroom Wall Designs",
    description:
      "Serene, hotel-grade bedroom feature walls designed for rest and quiet luxury. Incorporates full-width acoustic headboard panelling, zero-VOC Italian microcement curves, integrated bedside ledges, and warm reading sconces.",
    priceRange: "₹85,000 – ₹1,35,000",
    turnaround: "1–2 Days Handover",
    features: [
      "Zero-VOC breathable microcement and natural oak finishes",
      "Integrated reading lights with dual bedside dimmer control",
      "Full-width acoustic headboard backing for whisper-quiet sleep",
      "Concealed electrical conduits for seamless charging points",
    ],
    relatedMaterialSlugs: ["microcement-lime", "acoustic-fabric", "wood-panels"],
  },
  {
    name: "Entrance & Foyer",
    slug: "entrance",
    image: wallEntryImg,
    bannerImage: wallEntryImg,
    heading: "Entrance & Foyer Wall Designs",
    description:
      "High-impact entryways combining titanium PVD champagne brass metal strips, textured mineral plaster, and recessed accent illumination. Creates an immediate statement of refinement the moment guests step inside.",
    priceRange: "₹68,000 – ₹1,45,000",
    turnaround: "1–2 Days Handover",
    features: [
      "Grade-304 titanium PVD brass inlays with anti-tarnish guarantee",
      "Tactile stone-cast mineral plaster and grasscloth textures",
      "Concealed key drop console and integrated bevelled mirrors",
      "Ultra-durable, scrub-resistant protective seal for high traffic",
    ],
    relatedMaterialSlugs: ["brass-metal", "fluted-marble", "microcement-lime"],
  },
  {
    name: "Study & Home Office",
    slug: "study",
    image: scandinavianImg,
    bannerImage: scandinavianImg,
    heading: "Study & Home Office Wall Designs",
    description:
      "Executive home office backdrops featuring Scandinavian light oak slats mounted onto high-density acoustic felt. Eliminates reverberation on video calls while elevating spatial clarity and productivity.",
    priceRange: "₹80,000 – ₹1,20,000",
    turnaround: "1 Day Handover",
    features: [
      "65% echo and reverberation reduction (NRC 0.85 rating)",
      "Glare-free matte finish optimized for high-definition video calls",
      "Concealed cable passages for dual monitors and desktop setups",
      "100% FSC-certified sustainably harvested American white oak",
    ],
    relatedMaterialSlugs: ["wood-panels", "acoustic-fabric"],
  },
  {
    name: "Dining Room",
    slug: "dining-room",
    image: livingLuxuryImg,
    bannerImage: livingLuxuryImg,
    heading: "Dining Room Wall Designs",
    description:
      "Rich ambient dining backdrops finished with hand-troweled Italian Venetian lime plaster, champagne brass reveals, and architectural arched display niches for glassware and art.",
    priceRange: "₹90,000 – ₹1,40,000",
    turnaround: "2 Days Handover",
    features: [
      "Authentic burnished Italian Venetian plaster with beeswax polish",
      "Slim brushed brass horizontal reveals that catch chandelier glow",
      "Moisture-proof and washable protective matte sealer",
      "Curved structural niches pre-formed for integrated LED lighting",
    ],
    relatedMaterialSlugs: ["microcement-lime", "fluted-marble", "brass-metal"],
  },
  {
    name: "Mandir",
    slug: "mandir",
    image: wardrobeImg,
    bannerImage: wardrobeImg,
    heading: "Mandir & Sacred Wall Designs",
    description:
      "Sacred devotional feature walls engineered with precision CNC-cut geometric jaali panels, concealed warm 2400K spiritual backlighting, natural teak accents, and brass border detailing.",
    priceRange: "₹75,000 – ₹1,30,000",
    turnaround: "2 Days Handover",
    features: [
      "High-precision CNC fretwork in acoustic composite and teak",
      "Concealed warm 2400K spiritual back-lit illumination",
      "Solid brushed brass border framing and bell suspension points",
      "Easy-wipe heat and smoke resistant protective finish",
    ],
    relatedMaterialSlugs: ["cnc-jaali", "wood-panels", "brass-metal"],
  },
];

// -------------------------------------------------------------
// 2. Explore by Style (8 Categories)
// -------------------------------------------------------------
export const styles: WallStyle[] = [
  {
    name: "Luxury",
    slug: "luxury",
    image: livingLuxuryImg,
    bannerImage: livingLuxuryImg,
    heading: "Luxury Wall Designs",
    description:
      "Opulent architectural surfaces defined by bookmatched Italian marble, titanium PVD champagne brass inlays, brushed bronze profiles, and recessed warm halo lighting.",
    palette: ["#1F1620", "#C59B4E", "#FAF8F5", "#8C7156"],
    features: ["Titanium PVD Grade-304 Brass", "Italian Marble Accents", "Concealed Warm Illumination"],
  },
  {
    name: "Modern",
    slug: "modern",
    image: wallHeroImg,
    bannerImage: wallHeroImg,
    heading: "Modern Wall Designs",
    description:
      "Crisp, contemporary geometric compositions combining matte lacquer panels, slimline shadowline reveals, floating ledges, and calibrated linear slats.",
    palette: ["#2C2523", "#E8E2D9", "#C59B4E", "#4A4036"],
    features: ["Sharp Shadowline Reveals", "Matte Anti-Fingerprint Lacquer", "Linear Acoustic Slats"],
  },
  {
    name: "Minimalist",
    slug: "minimalist",
    image: wallBedroomImg,
    bannerImage: wallBedroomImg,
    heading: "Minimalist Wall Designs",
    description:
      "Understated luxury with seamless monolithic surfaces, subtle continuous microcement textures, quiet shadow gaps, and clutter-free hidden storage integration.",
    palette: ["#FAF8F5", "#E4DCD3", "#B3A596", "#3A332C"],
    features: ["Seamless Microcement Surface", "Hidden Zero-Hardware Doors", "Subtle Organic Depth"],
  },
  {
    name: "Vintage & Classic",
    slug: "vintage-classic",
    image: livingRoomImg,
    bannerImage: livingRoomImg,
    heading: "Vintage & Classic Wall Designs",
    description:
      "Timeless European boiserie wall paneling, fluted mouldings, ornate egg-and-dart cornices, and heritage warm paint finishes that radiate enduring charm.",
    palette: ["#3D2B3D", "#D4AF37", "#F5EFE6", "#7A5A72"],
    features: ["Architectural Boiserie Moulding", "Hand-Finished Patina", "High-Density Lightweight Gypsum"],
  },
  {
    name: "Japandi",
    slug: "japandi",
    image: scandinavianImg,
    bannerImage: scandinavianImg,
    heading: "Japandi Wall Designs",
    description:
      "The perfect fusion of Scandinavian functionality and Japanese wabi-sabi simplicity: natural American oak slats, textured washi plaster, and organic clay warmth.",
    palette: ["#EFEAE4", "#D8C7B5", "#8C7B6D", "#38312B"],
    features: ["Natural Matte American Oak", "Acoustic Felt Insulation", "Wabi-Sabi Lime Washes"],
  },
  {
    name: "Contemporary Arches",
    slug: "contemporary-arches",
    image: kitchenImg,
    bannerImage: kitchenImg,
    heading: "Contemporary Arches Wall Designs",
    description:
      "Graceful architectural portals, curved display niches, and soft radius corners that soften interior geometries and frame art with gentle indirect ambient lighting.",
    palette: ["#F7F3EE", "#DFCFBE", "#C59B4E", "#5A493B"],
    features: ["Pre-Formed Gypsum Portals", "Soft Indirect Cove Glow", "Tactile Micro-Render Surface"],
  },
  {
    name: "Soft Pastels",
    slug: "soft-pastels",
    image: bedroomImg,
    bannerImage: bedroomImg,
    heading: "Soft Pastels Wall Designs",
    description:
      "Gentle, calming bedroom and lounge walls combining dusty sage, champagne taupe, muted rose microcement, and plush upholstered acoustic flutes.",
    palette: ["#EAE3E6", "#D7C2CC", "#F8F5F2", "#664465"],
    features: ["Dusty Matte Pastel Microcement", "Bouclé & Velvet Acoustic Fluting", "Soothing Eye-Relaxing Tones"],
  },
  {
    name: "Rustic & Natural",
    slug: "rustic-natural",
    image: materialsImg,
    bannerImage: materialsImg,
    heading: "Rustic & Natural Wall Designs",
    description:
      "Earthy, tactile installations featuring split-face stone cladding, rough-sawn timber beams, Roman travertine plaster, and deep organic shadows.",
    palette: ["#33271E", "#7D6755", "#C2B29F", "#ECE5DC"],
    features: ["Natural Split-Face Slate", "Thermal-Treated Rough Oak", "Roman Porous Travertine"],
  },
];

// -------------------------------------------------------------
// 3. Explore Materials (6 Categories)
// -------------------------------------------------------------
export const materialCategories: MaterialCategory[] = [
  {
    name: "Architectural Wood Panels",
    slug: "wood-panels",
    image: wallHeroImg,
    bannerImage: wallHeroImg,
    heading: "Architectural Wood Panels",
    description:
      "Precision-milled acoustic timber slats, fluted natural veneers, and moisture-resistant marine-grade architectural louvers crafted from sustainable American hardwoods.",
    unitPriceRange: "₹380 – ₹520 / sq ft",
    features: ["FSC-Certified American Hardwoods", "Class-1 Fire Retardant Core", "High Acoustic NRC 0.85"],
  },
  {
    name: "Italian Microcement & Lime Plaster",
    slug: "microcement-lime",
    image: wallBedroomImg,
    bannerImage: wallBedroomImg,
    heading: "Italian Microcement & Lime Plaster",
    description:
      "Hand-burnished Venetian plasters, breathable Roman lime wash, and 3mm continuous microcement surfaces offering seamless tactile elegance with zero grout lines.",
    unitPriceRange: "₹290 – ₹450 / sq ft",
    features: ["100% Breathable Zero-VOC Lime", "Scratch & Stain Resistant", "Seamless Jointless Application"],
  },
  {
    name: "PVD Brass & Metal Inlays",
    slug: "brass-metal",
    image: wallEntryImg,
    bannerImage: wallEntryImg,
    heading: "PVD Brass & Metal Inlays",
    description:
      "Grade-304 stainless steel profiles finished in Physical Vapour Deposition (PVD) titanium champagne brass, burnished bronze, and brushed rose gold.",
    unitPriceRange: "₹180 – ₹320 / rft",
    features: ["Titanium PVD Coated Grade-304", "10-Year Anti-Tarnish Guarantee", "Precision Flush-Fit Joints"],
  },
  {
    name: "Fluted Marble & Stone Cladding",
    slug: "fluted-marble",
    image: livingLuxuryImg,
    bannerImage: livingLuxuryImg,
    heading: "Fluted Marble & Stone Cladding",
    description:
      "Ribbed Italian Carrara marble, grooved travertine slabs, and ultra-thin flexible natural slate rock sheets engineered for dramatic feature backdrops.",
    unitPriceRange: "₹480 – ₹850 / sq ft",
    features: ["Authentic Natural Quarried Stone", "Precision Water-Jet Ribbed Fluting", "Sealed with Stain-Proof Nano-Coat"],
  },
  {
    name: "Acoustic Fabric & Headboard Panels",
    slug: "acoustic-fabric",
    image: bedroomImg,
    bannerImage: bedroomImg,
    heading: "Acoustic Fabric & Headboard Panels",
    description:
      "High-density sound-absorbing recycled PET felt backing wrapped in premium Belgian linen, bouclé, and stain-resistant commercial velvet.",
    unitPriceRange: "₹320 – ₹490 / sq ft",
    features: ["Superior NRC 0.90 Acoustic Core", "Commercial Stain-Resistant Velvets", "Soft Touch Hotel-Grade Padding"],
  },
  {
    name: "Back-lit CNC Jaali & 3D Surfaces",
    slug: "cnc-jaali",
    image: wardrobeImg,
    bannerImage: wardrobeImg,
    heading: "Back-lit CNC Jaali & 3D Surfaces",
    description:
      "Computer-guided precision fretwork in solid teak, cast mineral stone composite, and back-lit diffuser panels designed for serene prayer and feature walls.",
    unitPriceRange: "₹520 – ₹780 / sq ft",
    features: ["Sub-Millimeter Computer CNC Precision", "Integrated 2400K Warm Backlighting", "Non-Yellowing Optical Diffuser"],
  },
];

// -------------------------------------------------------------
// 4. Material Products (Detailed Swatches)
// -------------------------------------------------------------
export const materialProducts: MaterialProduct[] = [
  {
    slug: "natural-teak-slats",
    name: "Natural American Teak Slats",
    category: "Architectural Wood Panels",
    categorySlug: "wood-panels",
    code: "WP-TK-01",
    finish: "Natural Matte Teak",
    image: wallHeroImg,
    unit: "sq ft",
    price: "₹380/sq ft",
    thickness: "18mm",
    dimensions: "8ft × 4ft panels (27mm slats / 13mm gap)",
    origin: "Sustainable American Teak Forest, FSC Certified",
    fireRating: "Class B-s1, d0 (EN 13501-1)",
    moistureResistance: "Moisture-sealed back & edges with polyurethane seal",
    leadTime: "In-Stock (Immediate Pre-Fabrication)",
    description:
      "Precision-fluted natural American teak slats mounted onto 9mm acoustic felt backing. Provides a deep, warm architectural texture that dampens flutter echoes and refines ambient sound.",
    relatedDesignSlugs: ["cloud-wood", "japandi-acoustic-nook", "spiritual-jaali-mandir"],
  },
  {
    slug: "smoked-oak-louvers",
    name: "Acoustic Smoked Oak Louvers",
    category: "Architectural Wood Panels",
    categorySlug: "wood-panels",
    code: "WP-OK-02",
    finish: "Smoked Acoustic Oak",
    image: scandinavianImg,
    unit: "sq ft",
    price: "₹420/sq ft",
    thickness: "22mm",
    dimensions: "9ft × 4ft modular panels",
    origin: "European Smoked Oak",
    fireRating: "Class A Commercial Rating",
    moistureResistance: "High Humidity Protected",
    leadTime: "In-Stock (Factory Prefab 24h)",
    description:
      "Dark-smoked European oak slats with rich wood grain depth. Mounted onto high-density black acoustic damping felt, engineered for high-end home theaters and living rooms.",
    relatedDesignSlugs: ["cloud-wood", "monochrome-slat-study"],
  },
  {
    slug: "fluted-walnut-veneer",
    name: "Fluted American Walnut Veneer",
    category: "Architectural Wood Panels",
    categorySlug: "wood-panels",
    code: "WP-WN-03",
    finish: "Hand-Rubbed American Walnut",
    image: livingRoomImg,
    unit: "sq ft",
    price: "₹460/sq ft",
    thickness: "18mm",
    dimensions: "8ft × 4ft panels",
    origin: "American Black Walnut",
    fireRating: "Class B-s1 Fire Retardant",
    moistureResistance: "Polyurethane clear satin coated",
    leadTime: "2 Days Factory Prep",
    description:
      "Deep cocoa tones and flowing cathedral grain fluting. Perfect for opulent dining rooms, executive offices, and luxury master headboards.",
    relatedDesignSlugs: ["neo-classical-boiserie", "champagne-brass-entry"],
  },
  {
    slug: "italian-microcement-taupe",
    name: "Italian Microcement Taupe",
    category: "Italian Microcement & Lime Plaster",
    categorySlug: "microcement-lime",
    code: "MC-TP-01",
    finish: "Troweled Venetian Taupe",
    image: wallBedroomImg,
    unit: "sq ft",
    price: "₹290/sq ft",
    thickness: "3mm",
    dimensions: "Continuous seamless monolithic coat",
    origin: "Verona, Italy",
    fireRating: "A1 Non-Combustible",
    moistureResistance: "100% Waterproof with dual ceramic sealer",
    leadTime: "Factory Pre-Cast Panels or On-Site Application",
    description:
      "Authentic Italian microcement troweled in three micro-layers to produce gentle tonal clouding, silky smooth texture, and an unbroken monolithic surface.",
    relatedDesignSlugs: ["taupe-arc", "architectural-arch-living", "soft-blush-headboard"],
  },
  {
    slug: "travertine-lime-plaster",
    name: "Roman Travertine Lime Plaster",
    category: "Italian Microcement & Lime Plaster",
    categorySlug: "microcement-lime",
    code: "MC-TR-02",
    finish: "Porous Roman Travertine",
    image: materialsImg,
    unit: "sq ft",
    price: "₹340/sq ft",
    thickness: "4mm",
    dimensions: "Seamless continuous trowel",
    origin: "Northern Italy",
    fireRating: "A1 Non-Combustible",
    moistureResistance: "Naturally Mold & Bacteria Resistant (pH 12)",
    leadTime: "In-Stock",
    description:
      "Textured slaked lime plaster infused with crushed Italian travertine dust. Recreates the organic pitted horizontal veins of ancient Roman limestone with beeswax protection.",
    relatedDesignSlugs: ["travertine-foyer-portal", "rustic-slate-living"],
  },
  {
    slug: "champagne-brass-t-inlay",
    name: "Titanium PVD Champagne Brass T-Profile",
    category: "PVD Brass & Metal Inlays",
    categorySlug: "brass-metal",
    code: "BR-CH-01",
    finish: "Titanium PVD Brushed Champagne",
    image: wallEntryImg,
    unit: "rft",
    price: "₹180/rft",
    thickness: "12mm face × 3mm depth",
    dimensions: "10ft continuous extruded strips",
    origin: "Titanium PVD Coated SS304",
    fireRating: "Non-Combustible Grade-304",
    moistureResistance: "Anti-Tarnish Salt Spray Tested > 500 hrs",
    leadTime: "In-Stock",
    description:
      "Solid Grade-304 stainless steel coated in champagne titanium PVD vacuum chamber. Fits flush between fluted timber or marble panels to catch and reflect ambient light.",
    relatedDesignSlugs: ["champagne-brass-entry", "cloud-wood", "fluted-marble-dining"],
  },
  {
    slug: "burnished-bronze-reveals",
    name: "Burnished Bronze Shadowline Reveals",
    category: "PVD Brass & Metal Inlays",
    categorySlug: "brass-metal",
    code: "BR-BZ-02",
    finish: "Anti-Tarnish Burnished Bronze",
    image: livingLuxuryImg,
    unit: "rft",
    price: "₹210/rft",
    thickness: "15mm × 4mm",
    dimensions: "10ft strips",
    origin: "Architectural Bronze Alloy",
    fireRating: "Non-Combustible",
    moistureResistance: "100% Weather & Tarnish Resistant",
    leadTime: "In-Stock",
    description:
      "Deep dark bronze metal inlays with brushed micro-texture. Creates bold architectural framing around wall panels and lighting coves.",
    relatedDesignSlugs: ["champagne-brass-entry", "monochrome-slat-study"],
  },
  {
    slug: "carrara-ribbed-marble",
    name: "Honed Fluted Carrara White Marble",
    category: "Fluted Marble & Stone Cladding",
    categorySlug: "fluted-marble",
    code: "ST-CR-01",
    finish: "Honed Ribbed Fluting",
    image: livingLuxuryImg,
    unit: "sq ft",
    price: "₹650/sq ft",
    thickness: "15mm",
    dimensions: "4ft × 2ft modular tiles",
    origin: "Carrara, Italy",
    fireRating: "A1 Non-Combustible",
    moistureResistance: "Nano-Sealed Against Wine, Oil & Stains",
    leadTime: "3 Days Factory Prep",
    description:
      "Quarried Italian Carrara marble featuring precision water-jet fluting. Subtle grey veining dances across crisp vertical ribs, lending stately grandeur to dining and living focal walls.",
    relatedDesignSlugs: ["fluted-marble-dining", "travertine-foyer-portal"],
  },
  {
    slug: "slate-rock-veneer",
    name: "Split-Face Charcoal Slate Rock Veneer",
    category: "Fluted Marble & Stone Cladding",
    categorySlug: "fluted-marble",
    code: "ST-SL-02",
    finish: "Natural Split-Face 3D",
    image: materialsImg,
    unit: "sq ft",
    price: "₹480/sq ft",
    thickness: "2mm flexible fiberglass backing",
    dimensions: "8ft × 4ft ultra-light sheets",
    origin: "Natural Quarried Slate",
    fireRating: "Class A Fire Retardant",
    moistureResistance: "100% Water Impermeable",
    leadTime: "In-Stock",
    description:
      "Real quarried stone cleaved into thin sheets backed with resin and fiberglass. Offers the dramatic texture of raw masonry without structural weight.",
    relatedDesignSlugs: ["rustic-slate-living", "cloud-wood"],
  },
  {
    slug: "boucle-acoustic-velvet",
    name: "High-Density Bouclé Oatmeal Acoustic Panel",
    category: "Acoustic Fabric & Headboard Panels",
    categorySlug: "acoustic-fabric",
    code: "AB-BC-01",
    finish: "High-Density Bouclé Oatmeal",
    image: bedroomImg,
    unit: "sq ft",
    price: "₹320/sq ft",
    thickness: "25mm cushioned acoustic panel",
    dimensions: "Modular 400mm × 2400mm flutes",
    origin: "Belgium Textile Mill",
    fireRating: "BS 5852 Crib 5 Flame Retardant",
    moistureResistance: "Scotchgard Stain-Resistant Shield",
    leadTime: "Factory Pre-Fabricated in 2 Days",
    description:
      "Plush textured bouclé fabric wrapping acoustic foam and dense PET backing. Yields supreme tactile comfort for bedroom headboards and home theater walls.",
    relatedDesignSlugs: ["soft-blush-headboard", "taupe-arc"],
  },
  {
    slug: "teak-geometric-jaali",
    name: "Teak Geometric CNC Jaali Panel",
    category: "Back-lit CNC Jaali & 3D Surfaces",
    categorySlug: "cnc-jaali",
    code: "JL-TK-01",
    finish: "CNC-Precision Natural Teak",
    image: wardrobeImg,
    unit: "sq ft",
    price: "₹550/sq ft",
    thickness: "18mm solid marine ply with teak veneer",
    dimensions: "8ft × 4ft panels",
    origin: "Factory CNC Milled In-House",
    fireRating: "Class B Fire Retardant",
    moistureResistance: "Polyurethane edge-sealed",
    leadTime: "2 Days Factory CNC Cut",
    description:
      "Sacred geometric fretwork cut with sub-millimeter computer precision. Designed to hold concealed warm backlighting for devotional mandir backdrops.",
    relatedDesignSlugs: ["spiritual-jaali-mandir", "champagne-brass-entry"],
  },
  {
    slug: "backlit-acoustic-lattice",
    name: "2400K Backlit Acrylic & Timber Lattice",
    category: "Back-lit CNC Jaali & 3D Surfaces",
    categorySlug: "cnc-jaali",
    code: "JL-AC-02",
    finish: "Warm 2400K Diffused Glow",
    image: wallHeroImg,
    unit: "sq ft",
    price: "₹620/sq ft",
    thickness: "20mm sandwich structure",
    dimensions: "Custom pre-sized modular cassette",
    origin: "Hue & Pie Precision Workshop",
    fireRating: "Self-Extinguishing Acrylic",
    moistureResistance: "Dust & Moisture Sealed (IP54)",
    leadTime: "3 Days Factory Fabrication",
    description:
      "Multi-layer optical light guide sandwiching warm 2400K architectural LEDs behind precision lattice cuts for a gentle ethereal radiance.",
    relatedDesignSlugs: ["spiritual-jaali-mandir", "fluted-marble-dining"],
  },
];

// -------------------------------------------------------------
// 5. Ready-to-Install Wall Designs (12 Signature Designs)
// -------------------------------------------------------------
export const designs: WallDesign[] = [
  {
    slug: "cloud-wood",
    name: "Cloud Wood Slatted Wall",
    code: "HPC-001",
    room: "Living Room",
    roomSlug: "living-room",
    style: "Modern",
    styleSlug: "modern",
    image: wallHeroImg,
    gallery: [wallHeroImg, livingLuxuryImg, livingRoomImg],
    summary: "Sculpted engineered teak slats paired with a soft warm beige accent backdrop and 2700K ambient cove LED.",
    description:
      "Our signature living room installation: factory-milled American teak slats mounted on acoustic felt, flanked by a concealed 2700K LED glow channel and floating console support. Eliminates wood dust at home by arriving pre-cut and edge-sealed.",
    price: "₹1,20,000",
    priceNote: "Estimated for a standard 10×9 ft living room focal wall. Includes pre-fab, delivery & 2-day clean mount.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft (Customizable to any wall width)",
      materials: [
        "100% Calibrated BWR Marine Plywood (IS:710)",
        "Natural American Teak Fluted Veneer Slats (WP-TK-01)",
        "Concealed 2700K High-CRI LED Aluminium Profiles",
        "Anti-Warp Acoustic Felt Insulation Backing",
      ],
      lighting: "2700K Warm White CRI > 95, Concealed Indirect Cove",
      acousticRating: "NRC 0.85 (65% Echo Reduction)",
      warranty: "10-Year Structural & Anti-Warp Warranty",
    },
    materialsUsed: [
      { name: "Natural American Teak Slats", code: "WP-TK-01", materialSlug: "natural-teak-slats" },
      { name: "Titanium PVD Champagne Brass Inlays", code: "BR-CH-01", materialSlug: "champagne-brass-t-inlay" },
    ],
    customizations: [
      { id: "brass-inlay", name: "Add Titanium PVD Brass Reveal Strips", priceDelta: 8500, description: "Adds 3 vertical champagne brass reveals between timber slat modules." },
      { id: "floating-console", name: "Integrated Floating Teak Console (6ft)", priceDelta: 16500, description: "Wall-hung floating media shelf with push-to-open drawer mechanisms." },
      { id: "smart-dimmer", name: "Tuya/Zigbee Smart Dimmer Integration", priceDelta: 4200, description: "Control cove brightness and scenes via Alexa, Google Home or smartphone." },
    ],
    similarDesignSlugs: ["rustic-slate-living", "architectural-arch-living", "japandi-acoustic-nook"],
  },
  {
    slug: "taupe-arc",
    name: "Taupe Minimalist Arc Wall",
    code: "HPC-002",
    room: "Master Bedroom",
    roomSlug: "bedroom",
    style: "Minimalist",
    styleSlug: "minimalist",
    image: wallBedroomImg,
    gallery: [wallBedroomImg, bedroomImg, wallHeroImg],
    summary: "Architectural curved microcement arch framing the master headboard with soft indirect cove illumination.",
    description:
      "A serene master bedroom feature wall finished in authentic Italian taupe microcement. Features a soft structural curved arch that embraces the bed and provides shadow-free bedside reading light.",
    price: "₹85,000",
    priceNote: "Estimated for a 10×9 ft master bedroom bed backdrop.",
    turnaround: "1–2 Days Handover",
    specs: {
      dimensions: "10×9 ft modular cassette",
      materials: [
        "Curved Pre-Formed Structural Gypsum Backing",
        "Hand-Troweled Italian Microcement Taupe (MC-TP-01)",
        "Zero-VOC Breathable Protective Matte Wax",
        "Dimmable Indirect Perimeter LED Channel",
      ],
      lighting: "3000K Soft White Bedside Halo Glow",
      acousticRating: "Solid Acoustic Cleat Core",
      warranty: "10-Year Delamination & Surface Crack Warranty",
    },
    materialsUsed: [
      { name: "Italian Microcement Taupe", code: "MC-TP-01", materialSlug: "italian-microcement-taupe" },
      { name: "High-Density Bouclé Acoustic Panel", code: "AB-BC-01", materialSlug: "boucle-acoustic-velvet" },
    ],
    customizations: [
      { id: "velvet-inset", name: "Padded Bouclé Fabric Inset Panel", priceDelta: 11000, description: "Soft acoustic bouclé padding positioned directly behind bed pillows." },
      { id: "bedside-sconces", name: "Dual Brushed Brass Reading Sconces", priceDelta: 7500, description: "Rotatable directional brass reading lights with integrated toggle switches." },
    ],
    similarDesignSlugs: ["soft-blush-headboard", "japandi-acoustic-nook", "architectural-arch-living"],
  },
  {
    slug: "champagne-brass-entry",
    name: "PVD Brass Horizon Entryway",
    code: "HPC-003",
    room: "Entrance & Foyer",
    roomSlug: "entrance",
    style: "Luxury",
    styleSlug: "luxury",
    image: wallEntryImg,
    gallery: [wallEntryImg, wallHeroImg, livingLuxuryImg],
    summary: "Grade-304 champagne PVD brass strips embedded into charcoal textured mineral stone plaster with back-lit key ledge.",
    description:
      "Make an unforgettable first impression. Combines titanium PVD champagne brass metal strips, dark stone plaster, and an integrated bevelled vanity mirror with a floating key drop console.",
    price: "₹1,10,000",
    priceNote: "Estimated for a 7×9 ft foyer gallery wall.",
    turnaround: "1–2 Days Handover",
    specs: {
      dimensions: "7×9 ft modular wall",
      materials: [
        "Titanium PVD Champagne Brass Profiles (BR-CH-01)",
        "Tactile Charcoal Mineral Plaster Slabs",
        "Floating Solid Teak Key Console",
        "Anti-Fingerprint Clear Topcoat",
      ],
      lighting: "Concealed 2700K Downlight Warm Grazers",
      acousticRating: "Acoustic Backed",
      warranty: "10-Year Anti-Tarnish & PVD Finish Warranty",
    },
    materialsUsed: [
      { name: "Titanium PVD Champagne Brass", code: "BR-CH-01", materialSlug: "champagne-brass-t-inlay" },
      { name: "American Walnut Veneer", code: "WP-WN-03", materialSlug: "fluted-walnut-veneer" },
    ],
    customizations: [
      { id: "integrated-mirror", name: "Full-Length Bevelled Mirror Portal", priceDelta: 9500, description: "Adds a 2ft × 7ft bevelled architectural mirror with brass borders." },
      { id: "drawer-keydrop", name: "Lockable Hidden Drawer Console", priceDelta: 6000, description: "Fitted key tray and concealed valet drawer with velvet liner." },
    ],
    similarDesignSlugs: ["travertine-foyer-portal", "cloud-wood", "fluted-marble-dining"],
  },
  {
    slug: "japandi-acoustic-nook",
    name: "Japandi Slatted Study Wall",
    code: "HPC-004",
    room: "Study & Home Office",
    roomSlug: "study",
    style: "Japandi",
    styleSlug: "japandi",
    image: scandinavianImg,
    gallery: [scandinavianImg, wallHeroImg, livingRoomImg],
    summary: "Natural Scandinavian white oak slats mounted onto sound-dampening acoustic felt for quiet work focus.",
    description:
      "Engineered specifically for executives and remote professionals: eliminates echo and audio reverberation on calls while creating a calm, wabi-sabi background with concealed monitor wiring.",
    price: "₹78,000",
    priceNote: "Estimated for an 8×9 ft office wall.",
    turnaround: "1 Day Handover",
    specs: {
      dimensions: "8×9 ft modular paneling",
      materials: [
        "Natural American White Oak Slats (WP-OK-02)",
        "High-Density Acoustic Felt Backing (NRC 0.85)",
        "Zero-VOC Natural Wax Oil Finish",
      ],
      lighting: "Glare-Free Neutral Work Glow 3500K",
      acousticRating: "NRC 0.85 Certified Acoustic Absorption",
      warranty: "10-Year Acoustic & Surface Warranty",
    },
    materialsUsed: [
      { name: "Smoked Acoustic Oak Louvers", code: "WP-OK-02", materialSlug: "smoked-oak-louvers" },
    ],
    customizations: [
      { id: "bookshelf-ledge", name: "Floating Oak Bookshelf (5ft)", priceDelta: 7800, description: "Solid oak display shelf capable of holding 25kg books/decor." },
      { id: "cable-chase", name: "Dual-Monitor Concealed Wiring Chase", priceDelta: 3500, description: "Direct pass-through for HDMI, USB-C and power cables." },
    ],
    similarDesignSlugs: ["cloud-wood", "monochrome-slat-study", "taupe-arc"],
  },
  {
    slug: "fluted-marble-dining",
    name: "Carrara Fluted Dining Accent",
    code: "HPC-005",
    room: "Dining Room",
    roomSlug: "dining-room",
    style: "Contemporary Arches",
    styleSlug: "contemporary-arches",
    image: livingLuxuryImg,
    gallery: [livingLuxuryImg, wallHeroImg, scandinavianImg],
    summary: "Water-jet ribbed Carrara white marble flanked by arched display niches and champagne brass accents.",
    description:
      "A dramatic dining room centerpiece. Precision water-jet fluted marble catches chandelier light, framed by dual arched niches finished in Roman lime plaster with glassware display shelves.",
    price: "₹1,45,000",
    priceNote: "Estimated for a 10×9 ft dining room wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft wall structure",
      materials: [
        "Honed Fluted Carrara White Marble (ST-CR-01)",
        "Titanium PVD Champagne Brass Borders",
        "Pre-Formed Arched Display Niches with 8mm Glass",
      ],
      lighting: "2700K Warm Dimmable Niche Spotlight",
      acousticRating: "Solid Acoustic Marine Core",
      warranty: "10-Year Stone Stability & Structural Warranty",
    },
    materialsUsed: [
      { name: "Honed Fluted Carrara White Marble", code: "ST-CR-01", materialSlug: "carrara-ribbed-marble" },
      { name: "Titanium PVD Champagne Brass Inlays", code: "BR-CH-01", materialSlug: "champagne-brass-t-inlay" },
    ],
    customizations: [
      { id: "glass-shelves", name: "Tempered Fluted Glass Shelving", priceDelta: 8500, description: "Adds 4 custom glass display shelves with concealed brass clips." },
      { id: "wine-rack", name: "Integrated Brass Horizontal Wine Pegs (12 bottles)", priceDelta: 12000, description: "Solid turned brass pegs to display fine vintages." },
    ],
    similarDesignSlugs: ["champagne-brass-entry", "neo-classical-boiserie", "architectural-arch-living"],
  },
  {
    slug: "spiritual-jaali-mandir",
    name: "Spiritual Teak Back-lit Mandir",
    code: "HPC-006",
    room: "Mandir",
    roomSlug: "mandir",
    style: "Vintage & Classic",
    styleSlug: "vintage-classic",
    image: wardrobeImg,
    gallery: [wardrobeImg, wallEntryImg, wallHeroImg],
    summary: "Sub-millimeter CNC cut sacred geometric teak jaali with concealed 2400K spiritual golden backlighting.",
    description:
      "Devotional tranquility: features a central back-lit sacred jaali panel framed by solid teak borders, brushed brass bell suspension pegs, and a cantilevered pooja platform.",
    price: "₹92,000",
    priceNote: "Estimated for a 7×9 ft mandir devotional wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "7×9 ft devotional wall",
      materials: [
        "Teak Geometric CNC Jaali Panel (JL-TK-01)",
        "2400K Warm Backlit Optical Diffuser",
        "BWR Marine Grade Moisture & Smoke Shield",
      ],
      lighting: "2400K Spiritual Sunset Warmth Glow",
      acousticRating: "Acoustic Composite Core",
      warranty: "10-Year Termite & Delamination Warranty",
    },
    materialsUsed: [
      { name: "Teak Geometric CNC Jaali Panel", code: "JL-TK-01", materialSlug: "teak-geometric-jaali" },
      { name: "Titanium PVD Champagne Brass Inlays", code: "BR-CH-01", materialSlug: "champagne-brass-t-inlay" },
    ],
    customizations: [
      { id: "floating-pooja", name: "Cantilevered Teak Pooja Platform (4ft)", priceDelta: 14000, description: "Heavy-duty floating drawer console for sacred idols and pooja essentials." },
      { id: "brass-bells", name: "Set of 5 Pure Cast Hanging Brass Bells", priceDelta: 4800, description: "Hanging ceremonial bells mounted on polished brass hooks." },
    ],
    similarDesignSlugs: ["champagne-brass-entry", "neo-classical-boiserie"],
  },
  {
    slug: "soft-blush-headboard",
    name: "Nordic Velvet Fluted Headboard",
    code: "HPC-007",
    room: "Master Bedroom",
    roomSlug: "bedroom",
    style: "Soft Pastels",
    styleSlug: "soft-pastels",
    image: bedroomImg,
    gallery: [bedroomImg, wallBedroomImg, wallHeroImg],
    summary: "Continuous soft bouclé and velvet vertical upholstered flutes spanning wall-to-wall behind the master bed.",
    description:
      "Turn your master bedroom into a 5-star boutique retreat. Full-height upholstered bouclé and velvet flutes absorb sound and create an irresistibly soft, cozy atmosphere.",
    price: "₹98,000",
    priceNote: "Estimated for an 11×9 ft wall-to-wall bedroom installation.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "11×9 ft full wall coverage",
      materials: [
        "High-Density Bouclé Oatmeal Acoustic Panel (AB-BC-01)",
        "Stain-Shield Velvet Accents",
        "High-Resilience Cushioning Foam Core",
      ],
      lighting: "Integrated Bedside Warm 2700K Sconces Ready",
      acousticRating: "NRC 0.90 Superior Acoustic Absorption",
      warranty: "10-Year Cushioning & Frame Warranty",
    },
    materialsUsed: [
      { name: "High-Density Bouclé Oatmeal Acoustic Panel", code: "AB-BC-01", materialSlug: "boucle-acoustic-velvet" },
    ],
    customizations: [
      { id: "integrated-switch", name: "Integrated Touch Switches & USB-C Ports", priceDelta: 5500, description: "Built-in dual high-speed charging modules on left and right sides." },
      { id: "extended-curved-ends", name: "Curved Radius Edge Returns", priceDelta: 8000, description: "Soft 6-inch curved return panels that hug the room corners." },
    ],
    similarDesignSlugs: ["taupe-arc", "japandi-acoustic-nook"],
  },
  {
    slug: "rustic-slate-living",
    name: "Natural Slate Rock Feature Wall",
    code: "HPC-008",
    room: "Living Room",
    roomSlug: "living-room",
    style: "Rustic & Natural",
    styleSlug: "rustic-natural",
    image: materialsImg,
    gallery: [materialsImg, wallHeroImg, livingRoomImg],
    summary: "Authentic split-face charcoal natural slate rock veneer with recessed perimeter grazers and floating walnut shelf.",
    description:
      "Raw natural beauty without the weight of traditional masonry. Ultra-thin flexible slate veneer showcases millions of years of geologic texture under warm grazing light.",
    price: "₹1,35,000",
    priceNote: "Estimated for a 10×9 ft living room fireplace / TV backdrop.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft wall installation",
      materials: [
        "Split-Face Charcoal Slate Rock Veneer (ST-SL-02)",
        "Solid American Black Walnut Ledge",
        "Concealed Low-Glare LED Grazing Track",
      ],
      lighting: "3000K Textured Grazing Optics",
      acousticRating: "Solid Acoustic Base Core",
      warranty: "10-Year Stone Bonding & Texture Guarantee",
    },
    materialsUsed: [
      { name: "Split-Face Charcoal Slate Rock Veneer", code: "ST-SL-02", materialSlug: "slate-rock-veneer" },
      { name: "Fluted American Walnut Veneer", code: "WP-WN-03", materialSlug: "fluted-walnut-veneer" },
    ],
    customizations: [
      { id: "electric-fireplace", name: "Concealed Cutout for 50-inch Electric Fireplace", priceDelta: 8000, description: "Reinforced framing and thermal insulation for modern linear fireplace." },
    ],
    similarDesignSlugs: ["cloud-wood", "travertine-foyer-portal"],
  },
  {
    slug: "architectural-arch-living",
    name: "Double Arch Limewash Alcove",
    code: "HPC-009",
    room: "Living Room",
    roomSlug: "living-room",
    style: "Contemporary Arches",
    styleSlug: "contemporary-arches",
    image: kitchenImg,
    gallery: [kitchenImg, wallHeroImg, livingLuxuryImg],
    summary: "Twin architectural curved portals finished in Roman lime wash with built-in floating shelves and indirect cove glow.",
    description:
      "Sculptural European charm: dual pre-engineered arched alcoves that house books, sculptures, and collectibles, surrounded by breathable Mediterranean lime plaster.",
    price: "₹1,15,000",
    priceNote: "Estimated for a 10×9 ft living room display alcove.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft alcove system",
      materials: [
        "Precision-Formed Structural Arches",
        "Italian Venetian Plaster Finish",
        "Integrated 2700K Perimeter LEDs",
      ],
      lighting: "2700K Architectural Ambient Halo",
      acousticRating: "Sound-Deadening Core",
      warranty: "10-Year Structure & Finish Warranty",
    },
    materialsUsed: [
      { name: "Italian Microcement Taupe", code: "MC-TP-01", materialSlug: "italian-microcement-taupe" },
    ],
    customizations: [
      { id: "brass-rim", name: "Brushed Brass Arch Perimeter Rim", priceDelta: 9200, description: "Slim curved brass edging framing each arch." },
    ],
    similarDesignSlugs: ["fluted-marble-dining", "taupe-arc"],
  },
  {
    slug: "neo-classical-boiserie",
    name: "Vintage Parisian Boiserie Wall",
    code: "HPC-010",
    room: "Dining Room",
    roomSlug: "dining-room",
    style: "Vintage & Classic",
    styleSlug: "vintage-classic",
    image: livingRoomImg,
    gallery: [livingRoomImg, livingLuxuryImg, wallHeroImg],
    summary: "Geometric European boiserie wall paneling with ornate egg-and-dart moulding and satin eggshell finish.",
    description:
      "A tribute to Parisian Haussmannian luxury. Symmetrical panel mouldings and delicate fluting painted in rich satin eggshell, instantly adding timeless elegance to any dining room.",
    price: "₹1,28,000",
    priceNote: "Estimated for a 12×9 ft dining room focal wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "12×9 ft wall",
      materials: [
        "High-Density Moisture-Resistant Engineered Mouldings",
        "Hand-Sprayed Polyurethane Satin Topcoat",
        "Concealed Acoustic Cleat Mounting",
      ],
      lighting: "Wall Sconce Mounting Ready",
      acousticRating: "Calibrated Solid Core",
      warranty: "10-Year Finish & Joint Guarantee",
    },
    materialsUsed: [
      { name: "Fluted American Walnut Veneer", code: "WP-WN-03", materialSlug: "fluted-walnut-veneer" },
    ],
    customizations: [
      { id: "gold-leaf", name: "Hand-Applied Gold Leaf Detail on Mouldings", priceDelta: 14000, description: "Delicate gold leaf highlighting on inner frame borders." },
    ],
    similarDesignSlugs: ["fluted-marble-dining", "champagne-brass-entry"],
  },
  {
    slug: "monochrome-slat-study",
    name: "Matte Charcoal Executive Backdrop",
    code: "HPC-011",
    room: "Study & Home Office",
    roomSlug: "study",
    style: "Modern",
    styleSlug: "modern",
    image: wallHeroImg,
    gallery: [wallHeroImg, scandinavianImg, livingRoomImg],
    summary: "Matte charcoal fluted louvers with burnished bronze reveals and anti-glare finish for high-profile virtual calls.",
    description:
      "Sleek and authoritative: dark charcoal acoustic louvers mounted flush with burnished bronze accents. Optimized to prevent screen glare and absorb office noise.",
    price: "₹88,000",
    priceNote: "Estimated for an 8×9 ft office wall.",
    turnaround: "1–2 Days Handover",
    specs: {
      dimensions: "8×9 ft wall",
      materials: [
        "Acoustic Smoked Oak Louvers (WP-OK-02)",
        "Burnished Bronze Shadowline Reveals (BR-BZ-02)",
        "NRC 0.85 Black Acoustic Felt",
      ],
      lighting: "3500K Studio Neutral Task Light Integration",
      acousticRating: "NRC 0.85 Certified",
      warranty: "10-Year Surface & Acoustic Warranty",
    },
    materialsUsed: [
      { name: "Acoustic Smoked Oak Louvers", code: "WP-OK-02", materialSlug: "smoked-oak-louvers" },
      { name: "Burnished Bronze Shadowline Reveals", code: "BR-BZ-02", materialSlug: "burnished-bronze-reveals" },
    ],
    customizations: [
      { id: "integrated-soundbar", name: "Concealed Soundbar Mounting Shelf", priceDelta: 4500, description: "Recessed shelf with power and optical audio pass-through." },
    ],
    similarDesignSlugs: ["japandi-acoustic-nook", "cloud-wood"],
  },
  {
    slug: "travertine-foyer-portal",
    name: "Roman Travertine Grand Portal",
    code: "HPC-012",
    room: "Entrance & Foyer",
    roomSlug: "entrance",
    style: "Luxury",
    styleSlug: "luxury",
    image: wallEntryImg,
    gallery: [wallEntryImg, materialsImg, livingLuxuryImg],
    summary: "Porous Roman travertine plaster slabs framed by titanium champagne brass reveals and back-lit architectural entry console.",
    description:
      "A monumental entrance statement that mirrors luxury Italian palazzos. Features authentic textured travertine veins with embedded champagne brass reveals and soft perimeter glow.",
    price: "₹1,40,000",
    priceNote: "Estimated for an 8×9 ft grand foyer wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "8×9 ft foyer portal",
      materials: [
        "Roman Travertine Lime Plaster (MC-TR-02)",
        "Titanium PVD Champagne Brass Profiles (BR-CH-01)",
        "Integrated Warm 2700K Grazer",
      ],
      lighting: "2700K Warm Vertical Grazing Light",
      acousticRating: "Solid Acoustic Base",
      warranty: "10-Year Anti-Crack & PVD Warranty",
    },
    materialsUsed: [
      { name: "Roman Travertine Lime Plaster", code: "MC-TR-02", materialSlug: "travertine-lime-plaster" },
      { name: "Titanium PVD Champagne Brass Inlays", code: "BR-CH-01", materialSlug: "champagne-brass-t-inlay" },
    ],
    customizations: [
      { id: "floating-seat", name: "Floating Travertine Foyer Bench (4ft)", priceDelta: 15500, description: "Matching cantilevered bench with 150kg weight tolerance." },
    ],
    similarDesignSlugs: ["champagne-brass-entry", "rustic-slate-living", "fluted-marble-dining"],
  },
];

// -------------------------------------------------------------
// 6. Helper Query Functions
// -------------------------------------------------------------
export function findDesign(slug: string): WallDesign | undefined {
  return designs.find((d) => d.slug === slug);
}

export function findRoom(slug: string): WallRoom | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function findStyle(slug: string): WallStyle | undefined {
  return styles.find((s) => s.slug === slug);
}

export function findMaterialCategory(slug: string): MaterialCategory | undefined {
  return materialCategories.find((c) => c.slug === slug);
}

export function findMaterialProduct(slug: string): MaterialProduct | undefined {
  return materialProducts.find((p) => p.slug === slug);
}

export function getDesignsForRoom(roomSlug: string): WallDesign[] {
  return designs.filter((d) => d.roomSlug === roomSlug);
}

export function getDesignsForStyle(styleSlug: string): WallDesign[] {
  return designs.filter((d) => d.styleSlug === styleSlug);
}

export function getDesignsForMaterial(materialCategorySlug: string): WallDesign[] {
  const products = materialProducts.filter((p) => p.categorySlug === materialCategorySlug);
  const productSlugs = new Set(products.map((p) => p.slug));
  return designs.filter((d) =>
    d.materialsUsed.some((m) => productSlugs.has(m.materialSlug))
  );
}

export function getProductsForCategory(categorySlug: string): MaterialProduct[] {
  return materialProducts.filter((p) => p.categorySlug === categorySlug);
}

// -------------------------------------------------------------
// 7. 3-Day Process Steps (Mobile Straight Vertical Stack)
// -------------------------------------------------------------
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "In-Home Assessment",
    desc: "A spatial designer visits your home with physical material swatches, laser measurement tools, and preliminary 3D recommendations.",
  },
  {
    step: "02",
    title: "3D CAD & Locked Quote",
    desc: "Within 48 hours, you receive photorealistic 3D elevations and an itemized fixed quote with zero mid-project escalations.",
  },
  {
    step: "03",
    title: "Factory Pre-Fabrication",
    desc: "Panels are precision-cut on computer CNC machines and edge-sealed off-site in our factory, completely eliminating wood dust in your home.",
  },
  {
    step: "04",
    title: "Clean 1–3 Day Install",
    desc: "Our certified installation team mounts pre-assembled wall panels onto acoustic cleats with zero mess, deep cleans the room, and hands over warranty.",
  },
];

export const process = processSteps;
