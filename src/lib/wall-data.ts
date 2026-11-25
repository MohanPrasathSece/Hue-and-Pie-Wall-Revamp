import wallHeroImg from "@/assets/wall-hero.jpg";
import wallBedroomImg from "@/assets/wall-bedroom.jpg";
import wallEntryImg from "@/assets/wall-entry.jpg";
import livingRoomImg from "@/assets/hue-pie-living-room.jpg";
import livingLuxuryImg from "@/assets/hue-pie-living-luxury.jpg";
import bedroomImg from "@/assets/hue-pie-bedroom.jpg";
import scandinavianImg from "@/assets/hue-pie-scandinavian-warm.jpg";
import materialsImg from "@/assets/hue-pie-materials.jpg";

export function findDesign(slug: string): WallDesign | undefined {
  return designs.find((d) => d.slug === slug);
}

export function findRoom(slug: string): WallRoom | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function getDesignsForRoom(roomSlug: string): WallDesign[] {
  return designs.filter((d) => d.roomSlug === roomSlug);
}

export function findMaterial(slug: string): Material | undefined {
  return materials.find((m) => m.slug === slug);
}

export interface WallRoom {
  name: string;
  slug: string;
  image: string;
  gallery: string[];
  note: string;
  description: string;
  priceRange: string;
  turnaround: string;
  features: string[];
}

export interface WallDesign {
  slug: string;
  name: string;
  code: string;
  room: string;
  roomSlug: string;
  theme: string;
  themeSlug: string;
  image: string;
  gallery: string[];
  summary: string;
  price: string;
  priceNote: string;
  turnaround: string;
  specs: {
    dimensions: string;
    materials: string[];
  };
}

export interface MaterialCategory {
  name: string;
  slug: string;
  image: string;
  subtitle: string;
  count: number;
  priceRange: string;
}

export interface Material {
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
  colours: string;
  brand: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

// 6 Core Room Categories
export const rooms: WallRoom[] = [
  {
    name: "Living Room Walls",
    slug: "living-room",
    image: wallHeroImg,
    gallery: [wallHeroImg, livingLuxuryImg, livingRoomImg],
    note: "Dramatic TV focal walls, acoustic fluted timber slats, and floating ambient ledges.",
    description:
      "Transform your central living space with architectural TV unit panelling, acoustic fluted timber slats, and concealed 2700K ambient cove profiles. Pre-engineered off-site and installed in 1–2 days without dust or mess.",
    priceRange: "₹95,000 – ₹1,65,000",
    turnaround: "1–2 Days Handover",
    features: [
      "Concealed cable raceways & heavy-duty TV bracket support",
      "Factory-calibrated IS:710 BWR marine plywood structure",
      "Acoustic felt damping core for crisp home theater audio",
      "Integrated floating console ledges in Italian quartz or teak",
    ],
  },
  {
    name: "Master Bedrooms",
    slug: "bedroom",
    image: wallBedroomImg,
    gallery: [wallBedroomImg, bedroomImg, wallHeroImg],
    note: "Full-width upholstered headboards, soft acoustic panels, and warm bedside cove light.",
    description:
      "Serene, hotel-grade bedroom feature walls designed for rest and quiet luxury. Incorporates acoustic fluting, zero-VOC lime plaster curves, integrated bedside ledges, and warm reading sconces.",
    priceRange: "₹85,000 – ₹1,35,000",
    turnaround: "1–2 Days Handover",
    features: [
      "Zero-VOC breathable microcement and natural oak finishes",
      "Integrated reading lights with dual bedside dimmer control",
      "Full-width acoustic headboard backing for whisper-quiet sleep",
      "Concealed electrical conduits for seamless charging points",
    ],
  },
  {
    name: "Entrance & Foyers",
    slug: "entrance",
    image: wallEntryImg,
    gallery: [wallEntryImg, wallHeroImg, livingLuxuryImg],
    note: "PVD gold accents, stone-cast textures, and mirror paneling for lasting first impressions.",
    description:
      "High-impact entryways combining titanium PVD champagne brass metal strips, textured mineral plaster, and recessed accent illumination. Creates an immediate statement of refinement as soon as doors open.",
    priceRange: "₹68,000 – ₹1,45,000",
    turnaround: "1–2 Days Handover",
    features: [
      "Grade-304 titanium PVD brass inlays with anti-tarnish guarantee",
      "Tactile stone-cast mineral plaster and grasscloth textures",
      "Concealed key drop console and integrated bevelled mirrors",
      "Ultra-durable, scrub-resistant protective seal for high traffic",
    ],
  },
  {
    name: "Study & Home Office",
    slug: "study",
    image: scandinavianImg,
    gallery: [scandinavianImg, wallHeroImg, livingRoomImg],
    note: "Acoustic wooden slat backdrops designed for zoom backgrounds and quiet spatial focus.",
    description:
      "Executive home office backdrops featuring Scandinavian light oak slats mounted onto high-density acoustic felt. Eliminates reverberation on video calls while elevating work environments.",
    priceRange: "₹80,000 – ₹1,20,000",
    turnaround: "1 Day Handover",
    features: [
      "65% echo and reverberation reduction (NRC 0.85 rating)",
      "Glare-free matte finish optimized for high-definition video calls",
      "Concealed cable passages for dual monitors and desktop setups",
      "100% FSC-certified sustainably harvested American white oak",
    ],
  },
  {
    name: "Dining Feature Walls",
    slug: "dining-room",
    image: livingLuxuryImg,
    gallery: [livingLuxuryImg, wallHeroImg, scandinavianImg],
    note: "Architectural arched niches, tactile limewash, and display ledges for entertaining.",
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
  },
  {
    name: "Mandir & Sacred Spaces",
    slug: "mandir",
    image: wallEntryImg,
    gallery: [wallEntryImg, wallHeroImg, livingLuxuryImg],
    note: "Intricate CNC back-lit jaali panels, brass trim accents, and serene sacred backdrops.",
    description:
      "Sacred devotional feature walls engineered with precision CNC-cut geometric jaali panels, concealed warm 2400K backlighting, natural teak accents, and brass border detailing.",
    priceRange: "₹75,000 – ₹1,30,000",
    turnaround: "2 Days Handover",
    features: [
      "High-precision CNC fretwork in acoustic composite and teak",
      "Concealed warm 2400K spiritual back-lit illumination",
      "Solid brushed brass border framing and bell suspension points",
      "Easy-wipe heat and smoke resistant protective finish",
    ],
  },
];

// Design Themes
export const themes = [
  { name: "Modern Luxury", slug: "modern-luxury" },
  { name: "Minimalist & Japandi", slug: "minimal" },
  { name: "Gold & Brass Inlays", slug: "gold-accents" },
  { name: "Textured & Plaster", slug: "art-traditional" },
  { name: "Soft Pastels", slug: "pastels" },
  { name: "Contemporary Arches", slug: "contemporary" },
];

// 10 Curated Ready-to-Install Wall Designs
export const designs: WallDesign[] = [
  {
    slug: "cloud-wood",
    name: "Cloud Wood Slatted Wall",
    code: "HPC-001",
    room: "Living Room",
    roomSlug: "living-room",
    theme: "Modern Luxury",
    themeSlug: "modern-luxury",
    image: wallHeroImg,
    gallery: [wallHeroImg, livingLuxuryImg, livingRoomImg],
    summary:
      "Sculpted engineered teak slats paired with a soft warm beige accent backdrop and integrated warm 2700K ambient LED cove. Built off-site with zero dust.",
    price: "₹1,20,000",
    priceNote: "Estimated for a 10×9 ft living room focal wall. Includes factory fabrication & install.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft (Customizable to any wall)",
      materials: [
        "100% Calibrated BWR Marine Plywood (IS:710)",
        "Natural American Teak Fluted Veneer Slats",
        "Concealed 2700K High-CRI LED Aluminium Profiles",
        "Anti-Warp Acoustic Felt Insulation Backing",
      ],
    },
  },
  {
    slug: "taupe-arc",
    name: "Taupe Minimalist Arc Wall",
    code: "HPC-002",
    room: "Bedroom",
    roomSlug: "bedroom",
    theme: "Minimalist & Japandi",
    themeSlug: "minimal",
    image: wallBedroomImg,
    gallery: [wallBedroomImg, bedroomImg, wallHeroImg],
    summary:
      "Gentle architectural curves finished in breathable Italian microcement. A subtle recessed arch frames the headboard with serene, shadowless indirect lighting.",
    price: "₹85,000",
    priceNote: "Estimated for a 10×9 ft master bedroom wall.",
    turnaround: "1–2 Days Handover",
    specs: {
      dimensions: "10×9 ft (Customizable)",
      materials: [
        "Curved Pre-Formed Structural Gypsum Backing",
        "Zero-VOC Italian Taupe Microcement Coating",
        "Seamless Concealed Joint Interlocking System",
        "Matte Water-Repellent Hydrophobic Top Seal",
      ],
    },
  },
  {
    slug: "gold-accent",
    name: "Luminous Gold Foyer Statement",
    code: "HPC-006",
    room: "Entrance & Foyers",
    roomSlug: "entrance",
    theme: "Gold & Brass Inlays",
    themeSlug: "gold-accents",
    image: wallEntryImg,
    gallery: [wallEntryImg, livingLuxuryImg, wallHeroImg],
    summary:
      "PVD-coated champagne brass metal panels integrated with hand-troweled warm stone plaster. Creates an unforgettable, luminous first impression.",
    price: "₹1,45,000",
    priceNote: "Estimated for an 8×9 ft entryway wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "8×9 ft (Customizable)",
      materials: [
        "Grade 304 Titanium PVD Champagne Gold Stainless Strips",
        "Tactile Stone-Effect Natural Mineral Plaster",
        "Recessed Low-Glare Floor-to-Ceiling Sconces",
        "Lifetime Anti-Tarnish PVD Finish Warranty",
      ],
    },
  },
  {
    slug: "nordic-slats",
    name: "Nordic Acoustic Oak Paneling",
    code: "HPC-007",
    room: "Study & Home Office",
    roomSlug: "study",
    theme: "Modern Luxury",
    themeSlug: "modern-luxury",
    image: scandinavianImg,
    gallery: [scandinavianImg, wallHeroImg, livingRoomImg],
    summary:
      "Natural Scandinavian light oak slats mounted onto recycled acoustic polyester felt. Reduces echo by 65% while delivering clean architectural beauty.",
    price: "₹95,000",
    priceNote: "Estimated for a 10×9 ft home office or media wall.",
    turnaround: "1 Day Handover",
    specs: {
      dimensions: "10×9 ft (Customizable)",
      materials: [
        "FSC-Certified White Oak Wood Slats (27mm wide)",
        "9mm High-Density Sound Absorbing Acoustic Felt (NRC 0.85)",
        "Pre-Drilled Modular Interlocking Mounting Clips",
        "UV-Cured Anti-Scratch Ultra-Matte Seal",
      ],
    },
  },
  {
    slug: "venetian-charcoal",
    name: "Venetian Warm Stone Dining Wall",
    code: "HPC-008",
    room: "Dining Feature Walls",
    roomSlug: "dining-room",
    theme: "Textured & Plaster",
    themeSlug: "art-traditional",
    image: livingLuxuryImg,
    gallery: [livingLuxuryImg, wallHeroImg, scandinavianImg],
    summary:
      "Authentic multi-coat Italian Venetian lime plaster burnished by hand. Accented with slim brushed brass horizontal reveals that catch ambient evening chandelier light.",
    price: "₹1,10,000",
    priceNote: "Estimated for a 12×9 ft dining wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "12×9 ft (Customizable)",
      materials: [
        "Aged Slaked Italian Lime Venetian Plaster",
        "100% Breathable Anti-Bacterial & Anti-Mold Formula",
        "Solid Brushed Champagne Brass Inlay Grooves",
        "Natural Beeswax Final Protective Polish",
      ],
    },
  },
  {
    slug: "japandi-cane",
    name: "Japandi Cane & Fluted Oak Wall",
    code: "HPC-009",
    room: "Bedroom",
    roomSlug: "bedroom",
    theme: "Minimalist & Japandi",
    themeSlug: "minimal",
    image: wallBedroomImg,
    gallery: [wallBedroomImg, scandinavianImg, bedroomImg],
    summary:
      "Artisanal handwoven rattan webbing panels framed in natural solid white oak. Infuses bedrooms with organic warmth, tactile texture, and tranquil serenity.",
    price: "₹1,15,000",
    priceNote: "Estimated for a 10×9 ft master suite wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft (Customizable)",
      materials: [
        "Natural Octagonal Woven Rattan Webbing Mesh",
        "Kiln-Dried Solid American White Oak Framework",
        "Eco-Friendly Water-Based Matte Protective Finish",
        "Integrated Floating Oak Bedside Ledgers",
      ],
    },
  },
  {
    slug: "blush-fluted",
    name: "Cashmere Beige & Fluted Headboard",
    code: "HPC-003",
    room: "Bedroom",
    roomSlug: "bedroom",
    theme: "Soft Pastels",
    themeSlug: "pastels",
    image: bedroomImg,
    gallery: [bedroomImg, wallBedroomImg, wallHeroImg],
    summary:
      "Custom fluted polyurethane panels rendered in a warm cashmere beige palette with brushed champagne brass borders. Complements soft morning light perfectly.",
    price: "₹92,000",
    priceNote: "Estimated for a 10×9 ft bedroom headboard wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft (Customizable)",
      materials: [
        "High-Density Fluted Polyurethane Paneling",
        "Satin Low-VOC Anti-Fingerprint Finish",
        "Brushed Champagne Brass Transition Profiles",
        "Concealed Wall Cleat Mounting Hardware",
      ],
    },
  },
  {
    slug: "straw-ribbon",
    name: "Natural Grasscloth & Brass Inlay",
    code: "HPC-004",
    room: "Entrance & Foyers",
    roomSlug: "entrance",
    theme: "Contemporary Arches",
    themeSlug: "contemporary",
    image: wallEntryImg,
    gallery: [wallEntryImg, livingLuxuryImg, scandinavianImg],
    summary:
      "Textured Japanese grasscloth wallpaper framed with crisp geometric brass moldings. A tactile, organic welcome that balances natural materials with refined metalwork.",
    price: "₹68,000",
    priceNote: "Estimated for an 8×9 ft wall.",
    turnaround: "1–2 Days Handover",
    specs: {
      dimensions: "8×9 ft (Customizable)",
      materials: [
        "Natural Hand-Woven Sisal & Grasscloth Wallcovering",
        "Precision Miter-Cut Brass Framing Strips",
        "Fungus-Resistant Eco Adhesive Underlay",
        "Calibrated Moisture-Barrier Plywood Backer",
      ],
    },
  },
  {
    slug: "cloud-arch",
    name: "Contemporary Sculpted Arch Wall",
    code: "HPC-005",
    room: "Living Room",
    roomSlug: "living-room",
    theme: "Contemporary Arches",
    themeSlug: "contemporary",
    image: livingRoomImg,
    gallery: [livingRoomImg, wallHeroImg, livingLuxuryImg],
    summary:
      "A fluid architectural niche with a recessed limewashed focal backdrop and an integrated solid stone display ledge. Elevates open living spaces with sculptural depth.",
    price: "₹1,05,000",
    priceNote: "Estimated for a 10×9 ft wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "10×9 ft (Customizable)",
      materials: [
        "Pre-Engineered Lightweight CNC Curved Rib Frame",
        "Seamless Flexible Drywall Skin with Micro-Skim Coat",
        "Natural Mineral Limewash Finish",
        "Integrated Floating Quartz Display Ledge",
      ],
    },
  },
  {
    slug: "sacred-jaali",
    name: "Backlit Geometric Jaali & Teak Wall",
    code: "HPC-010",
    room: "Mandir & Sacred Spaces",
    roomSlug: "mandir",
    theme: "Modern Luxury",
    themeSlug: "modern-luxury",
    image: wallEntryImg,
    gallery: [wallEntryImg, wallHeroImg, livingLuxuryImg],
    summary:
      "Intricate CNC-machined backlit geometric jaali fretwork framed in natural American teak with concealed 2400K spiritual illumination and brushed brass borders.",
    price: "₹98,000",
    priceNote: "Estimated for an 8×9 ft sacred mandir accent wall.",
    turnaround: "2 Days Handover",
    specs: {
      dimensions: "8×9 ft (Customizable)",
      materials: [
        "100% Calibrated BWR Marine Plywood (IS:710)",
        "High-Precision CNC Acoustic Composite Jaali Lattice",
        "Concealed Warm 2400K LED Backlight Diffusers",
        "Solid Brushed Champagne Brass Perimeter Inlays",
      ],
    },
  },
];

// Material Categories
export const materialCategories: MaterialCategory[] = [
  {
    name: "Architectural Wood Panels",
    slug: "wood",
    image: wallHeroImg,
    subtitle: "Warm natural grain in fluted teak, smoked oak, and walnut.",
    count: 24,
    priceRange: "₹180–₹650 / sq ft",
  },
  {
    name: "PVD Brass & Metal Inlays",
    slug: "decorative-panels",
    image: wallEntryImg,
    subtitle: "Champagne gold, rose gold, and gunmetal stainless profiles.",
    count: 20,
    priceRange: "₹250–₹900 / sq ft",
  },
  {
    name: "Artisanal Textured Plasters",
    slug: "textures",
    image: livingLuxuryImg,
    subtitle: "Hand-troweled Venetian lime plaster and microcement.",
    count: 16,
    priceRange: "₹90–₹380 / sq ft",
  },
  {
    name: "Tactile Wallpapers & Weaves",
    slug: "wallpapers",
    image: wallBedroomImg,
    subtitle: "Natural Japanese grasscloth, linen, and silk textures.",
    count: 52,
    priceRange: "₹45–₹300 / sq ft",
  },
  {
    name: "Architectural Fluted Polymer",
    slug: "laminates",
    image: bedroomImg,
    subtitle: "Waterproof lightweight fluted panels for bedrooms and foyers.",
    count: 38,
    priceRange: "₹60–₹220 / sq ft",
  },
  {
    name: "Seamless Microcement Surfaces",
    slug: "other-finishes",
    image: livingRoomImg,
    subtitle: "Jointless continuous concrete finishes for minimalist interiors.",
    count: 12,
    priceRange: "₹70–₹500 / sq ft",
  },
];

// Concrete Material Swatches
export const materials: Material[] = [
  {
    slug: "teak-natural",
    name: "Natural American Teak Slats",
    category: "Wood Panels",
    categorySlug: "wood",
    code: "WP-TK-01",
    finish: "Hand-buffed natural satin oil",
    image: wallHeroImg,
    unit: "Per sq ft",
    price: "₹380 / sq ft",
    thickness: "18mm",
    dimensions: "8 ft × 5 inch",
    colours: "Warm Natural, Honey Golden",
    brand: "CenturyPly / Greenlam Architectural",
  },
  {
    slug: "smoked-oak",
    name: "Smoked Oak Acoustic Slat",
    category: "Wood Panels",
    categorySlug: "wood",
    code: "WP-OK-04",
    finish: "Deep matte charcoal stained veneer",
    image: scandinavianImg,
    unit: "Per sq ft",
    price: "₹420 / sq ft",
    thickness: "21mm",
    dimensions: "9 ft × 6 inch",
    colours: "Smoked Espresso, Ash Grey",
    brand: "Decowood Luxury",
  },
  {
    slug: "champagne-brass",
    name: "Champagne Brass PVD Inlay",
    category: "Metal Inlays",
    categorySlug: "decorative-panels",
    code: "MT-BR-02",
    finish: "Titanium PVD anti-fingerprint satin",
    image: wallEntryImg,
    unit: "Per rft",
    price: "₹320 / rft",
    thickness: "1.5mm (Solid 304)",
    dimensions: "10 ft length × 15mm width",
    colours: "Champagne Gold, Rose Gold",
    brand: "Jindal Architectural PVD",
  },
  {
    slug: "venetian-plaster",
    name: "Venetian Burnished Lime Plaster",
    category: "Textured Plaster",
    categorySlug: "textures",
    code: "PL-VN-03",
    finish: "Hand-troweled multi-tone polished marble dust",
    image: livingLuxuryImg,
    unit: "Per sq ft",
    price: "₹240 / sq ft",
    thickness: "2.5mm",
    dimensions: "Site Applied",
    colours: "Warm Alabaster, Sandstone, Taupe",
    brand: "San Marco Italy",
  },
  {
    slug: "fluted-charcoal",
    name: "Architectural Fluted Polyurethane",
    category: "Fluted Polymer",
    categorySlug: "laminates",
    code: "FL-PU-09",
    finish: "High-density primed fluted profile",
    image: wallBedroomImg,
    unit: "Per panel",
    price: "₹1,850 / panel",
    thickness: "12mm",
    dimensions: "8 ft × 6 inch",
    colours: "Off-White, Cashmere Beige, Terracotta",
    brand: "Evershine Profiles",
  },
  {
    slug: "italian-microcement",
    name: "Seamless Warm Microcement",
    category: "Microcement",
    categorySlug: "other-finishes",
    code: "MC-IT-01",
    finish: "Continuous mineral skin with hydrophobic topcoat",
    image: livingRoomImg,
    unit: "Per sq ft",
    price: "₹290 / sq ft",
    thickness: "3mm",
    dimensions: "Continuous Wall",
    colours: "Bone White, Warm Greige, Desert Dune",
    brand: "Topciment Spain",
  },
  {
    slug: "grasscloth-natural",
    name: "Woven Japanese Grasscloth",
    category: "Wallpapers",
    categorySlug: "wallpapers",
    code: "WP-GC-06",
    finish: "Natural sisal fibers with metallic backing",
    image: materialsImg,
    unit: "Per roll",
    price: "₹5,400 / roll (50 sq ft)",
    thickness: "1mm",
    dimensions: "10m × 0.91m",
    colours: "Natural Hemp, Golden Straw",
    brand: "Phillip Jeffries / D'Decor",
  },
  {
    slug: "stone-cast",
    name: "Cast Travertine Stone Plaster",
    category: "Textured Plaster",
    categorySlug: "textures",
    code: "PL-TR-05",
    finish: "Porous tactile travertine texture with pitted detailing",
    image: wallHeroImg,
    unit: "Per sq ft",
    price: "₹270 / sq ft",
    thickness: "3.5mm",
    dimensions: "Site Applied",
    colours: "Classic Roman Travertine, Muted Ivory",
    brand: "Novacolor",
  },
];

// 4-Stage Dustless Execution Process
export const process: ProcessStep[] = [
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
