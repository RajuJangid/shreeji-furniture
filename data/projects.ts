// data/projects.ts

export interface Project {
  id: number;
  slug: string;
  title: string;
  clientName: string;
  category: "Residential" | "Commercial" | "Kitchen";
  location: string;
  thumbnail: string;
  description: string;
  gallery: string[];
  startDate: string;
  endDate: string;
  size: string;
  scope: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "mr-patel-bungalow",
    title: "Luxury 4BHK Bungalow",
    clientName: "Mr. Rakesh Patel",
    category: "Residential",
    location: "Alkapuri, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
    description: "A complete turnkey project for a premium bungalow. The design focuses on modern minimalism with teak wood accents. We handled everything from civil restructuring to the final soft furnishings.",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
    ],
    startDate: "10 Jan 2024",
    endDate: "15 May 2024",
    size: "3,200 Sq. Ft.",
    scope: [
      "Civil Work & Italian Flooring",
      "Full Home POP False Ceiling",
      "Teak Wood Main Door Design",
      "Modular Kitchen (PU Finish)",
      "4 Bedrooms with Hydraulic Beds"
    ]
  },
  {
    id: 2,
    slug: "shree-supermarket",
    title: "Supermarket Display Racks",
    clientName: "Shree Provision Store",
    category: "Commercial",
    location: "Gotri Road, Vadodara",
    thumbnail: "https://unsplash.com/photos/a-grocery-store-aisle-filled-with-lots-of-food-cg7gpa790OA",
    description: "Heavy-duty wooden and metal display racks for a grocery store. Focused on maximizing storage space while maintaining wide aisles for customer movement.",
    gallery: [
      "https://unsplash.com/photos/shelves-are-stocked-with-colorful-bags-of-snacks-aBIcYy9bu5o",
      "https://unsplash.com/photos/yellow-and-green-fruits-on-white-metal-rack-dWzRegf99aA"
    ],
    startDate: "01 Feb 2024",
    endDate: "20 Feb 2024",
    size: "1,500 Sq. Ft.",
    scope: [
      "Heavy Duty Wooden Racks",
      "Cash Counter Design",
      "Wall Paneling for Display",
      "LED Strip Lighting"
    ]
  },
  {
    id: 3,
    slug: "sharma-modular-kitchen",
    title: "L-Shaped Acrylic Kitchen",
    clientName: "Mrs. Anjali Sharma",
    category: "Kitchen",
    location: "Manjalpur, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800",
    description: "High-gloss acrylic modular kitchen with soft-close Hettich fittings. Designed for heavy Indian cooking with a dedicated chimney and tall pantry unit.",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1200",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200"
    ],
    startDate: "05 March 2024",
    endDate: "25 March 2024",
    size: "180 Sq. Ft.",
    scope: [
      "Marine Ply Carcass",
      "Acrylic Shutters (White & Grey)",
      "Hettich Tandem Boxes",
      "Quartz Countertop Installation",
      "Under-cabinet Lighting"
    ]
  },
  {
    id: 4,
    slug: "tech-vertex-office",
    title: "IT Office Interior",
    clientName: "Tech Vertex Solutions",
    category: "Commercial",
    location: "Sayajigunj, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
    description: "Modern open-plan office for a software company. Features acoustic paneling, ergonomic workstations, and a vibrant breakout area.",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200"
    ],
    startDate: "10 Jan 2024",
    endDate: "30 March 2024",
    size: "2,500 Sq. Ft.",
    scope: [
      "Partitions (Glass & Aluminum)",
      "Conference Room Acoustics",
      "25 Workstations",
      "Director Cabin Furniture",
      "Reception Area Design"
    ]
  },
  {
    id: 5,
    slug: "mr-desai-penthouse",
    title: "Penthouse Renovation",
    clientName: "Mr. Vikram Desai",
    category: "Residential",
    location: "Vasna-Bhayli Road",
    thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800",
    description: "Renovation of an old penthouse into a contemporary living space. We replaced all flooring and redesigned the layout to bring in more natural light.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200"
    ],
    startDate: "15 Nov 2023",
    endDate: "20 Feb 2024",
    size: "2,800 Sq. Ft.",
    scope: [
      "Demolition & Civil Changes",
      "Italian Marble Flooring",
      "Wooden Terrace Decking",
      "Custom Walk-in Wardrobes",
      "Home Automation Wiring"
    ]
  },
  {
    id: 6,
    slug: "cafe-brew-interior",
    title: "Rustic Theme Cafe",
    clientName: "Cafe Brew Masters",
    category: "Commercial",
    location: "Fatehgunj, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
    description: "A cozy, rustic-themed cafe interior using reclaimed wood and exposed brick walls. Custom seating arrangements for groups and couples.",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1200"
    ],
    startDate: "01 Dec 2023",
    endDate: "15 Jan 2024",
    size: "800 Sq. Ft.",
    scope: [
      "Exposed Brick Wall Treatment",
      "Pinewood Tables & Counters",
      "Hanging Light Fixtures",
      "Service Counter Fabrication"
    ]
  },
  {
    id: 7,
    slug: "mrs-iyer-kitchen",
    title: "Parallel Kitchen Redesign",
    clientName: "Mrs. Iyer",
    category: "Kitchen",
    location: "Karelibaug, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800",
    description: "Converted a small, cramped kitchen into a spacious parallel layout. Used light colors to make the space feel bigger.",
    gallery: [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200",
      "https://images.unsplash.com/photo-1565538420147-9a528e185f2b?q=80&w=1200"
    ],
    startDate: "10 April 2024",
    endDate: "30 April 2024",
    size: "120 Sq. Ft.",
    scope: [
      "Granite Platform Extension",
      "Laminate Finish Shutters",
      "SS Wire Baskets",
      "Loft Storage Cabinets"
    ]
  },
  {
    id: 8,
    slug: "dr-shah-clinic",
    title: "Dental Clinic Interior",
    clientName: "Dr. Ami Shah",
    category: "Commercial",
    location: "OP Road, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
    description: "Clean, hygienic, and calming interior for a dental clinic. Used white laminates with blue accents to match their branding.",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
      "https://images.unsplash.com/photo-1516549655169-df83a0929553?q=80&w=1200"
    ],
    startDate: "01 March 2024",
    endDate: "15 April 2024",
    size: "900 Sq. Ft.",
    scope: [
      "Reception Desk & Waiting Area",
      "Operatory Room Cabinets",
      "Glass Partitions",
      "False Ceiling with LED Panels"
    ]
  },
  {
    id: 9,
    slug: "mr-gupta-3bhk",
    title: "Budget 3BHK Furnishing",
    clientName: "Mr. Gupta",
    category: "Residential",
    location: "Waghodia Road",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
    description: "A budget-friendly yet durable furniture project for a rental apartment. Used sturdy laminates and simple designs.",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200"
    ],
    startDate: "01 Jan 2024",
    endDate: "28 Feb 2024",
    size: "1,400 Sq. Ft.",
    scope: [
      "3 Bedroom Wardrobes",
      "Basic Modular Kitchen",
      "TV Unit & Shoe Rack",
      "Safety Door Grill & Woodwork"
    ]
  },
  {
    id: 10,
    slug: "fashion-hub-showroom",
    title: "Boutique Showroom",
    clientName: "Fashion Hub",
    category: "Commercial",
    location: "Raopura, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
    description: "Elegant showroom design for a clothing boutique. Focused on track lighting and full-length mirrors.",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200"
    ],
    startDate: "10 Feb 2024",
    endDate: "10 March 2024",
    size: "600 Sq. Ft.",
    scope: [
      "Wall Racks & Hangers",
      "Trial Room Fabrication",
      "Display Counter",
      "Glass Frontage Work"
    ]
  },
  {
    id: 11,
    slug: "mr-singh-villa",
    title: "Classic Wooden Villa",
    clientName: "Mr. Rajveer Singh",
    category: "Residential",
    location: "New Sama Road",
    thumbnail: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800",
    description: "Traditional Indian home design with heavy woodwork, intricate jaali work, and a classic swing in the living room.",
    gallery: [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200"
    ],
    startDate: "01 Nov 2023",
    endDate: "30 March 2024",
    size: "2,200 Sq. Ft.",
    scope: [
      "Veneer Finish Furniture",
      "CNC Jaali Partitions",
      "Wooden Ceiling Beams",
      "Traditional Swing (Jhula)"
    ]
  },
  {
    id: 12,
    slug: "skyline-kitchen",
    title: "Island Kitchen Concept",
    clientName: "Mrs. Mehta",
    category: "Kitchen",
    location: "Vasna Road",
    thumbnail: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800",
    description: "A large open-concept kitchen with a central island for cooking and dining. Finished in matte grey and wood tones.",
    gallery: [
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200",
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=1200"
    ],
    startDate: "01 April 2024",
    endDate: "01 May 2024",
    size: "250 Sq. Ft.",
    scope: [
      "Central Island Unit",
      "Built-in Appliances",
      "Tall Pantry Unit",
      "Breakfast Counter"
    ]
  },
  {
    id: 13,
    slug: "co-work-space",
    title: "Co-Working Space",
    clientName: "StartUp Vadodara",
    category: "Commercial",
    location: "Ellora Park",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=800",
    description: "Flexible office space with hot desks and private cabins. Industrial look with open ceiling ducts.",
    gallery: [
      "https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=1200",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200"
    ],
    startDate: "15 Jan 2024",
    endDate: "15 April 2024",
    size: "3,000 Sq. Ft.",
    scope: [
      "Metal Frame Desks",
      "Acoustic Phone Booths",
      "Cafeteria Area",
      "Meeting Pods"
    ]
  },
  {
    id: 14,
    slug: "mr-kothari-flat",
    title: "2BHK Modern Flat",
    clientName: "Mr. Kothari",
    category: "Residential",
    location: "Harni-Warsia Ring Road",
    thumbnail: "https://images.unsplash.com/photo-1502005229762-cf1e2da0c543?q=80&w=800",
    description: "Complete interior solution for a compact 2BHK. Used space-saving furniture like folding tables and sofa-cum-beds.",
    gallery: [
      "https://images.unsplash.com/photo-1502005229762-cf1e2da0c543?q=80&w=1200",
      "https://images.unsplash.com/photo-1534349762913-924996967271?q=80&w=1200"
    ],
    startDate: "01 Feb 2024",
    endDate: "15 March 2024",
    size: "1,100 Sq. Ft.",
    scope: [
      "Space Saving Furniture",
      "TV Unit with Storage",
      "Compact Modular Kitchen",
      "Balcony Seating"
    ]
  },
  {
    id: 15,
    slug: "jewelry-shop-interior",
    title: "Luxury Jewelry Store",
    clientName: "Alankar Jewelers",
    category: "Commercial",
    location: "Mandvi, Vadodara",
    thumbnail: "https://images.unsplash.com/photo-1582037928769-181f2644ec27?q=80&w=800",
    description: "Premium interior with velvet finish panels and high-security glass displays. Lighting designed to make gold and diamonds sparkle.",
    gallery: [
      "https://images.unsplash.com/photo-1582037928769-181f2644ec27?q=80&w=1200",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1200"
    ],
    startDate: "01 Jan 2024",
    endDate: "01 March 2024",
    size: "800 Sq. Ft.",
    scope: [
      "Velvet Wall Paneling",
      "Security Glass Counters",
      "Chandelier Installation",
      "Safe Room Construction"
    ]
  },
  {
    id: 16,
    slug: "mrs-patil-kitchen",
    title: "PVC Modular Kitchen",
    clientName: "Mrs. Patil",
    category: "Kitchen",
    location: "Tarsali",
    thumbnail: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800",
    description: "Waterproof and termite-proof PVC kitchen. Best suited for areas with moisture issues.",
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200"
    ],
    startDate: "10 March 2024",
    endDate: "25 March 2024",
    size: "100 Sq. Ft.",
    scope: [
      "PVC Foam Board Carcass",
      "PVC Laminates",
      "SS 304 Baskets",
      "Granite Molding"
    ]
  },
  {
    id: 17,
    slug: "advocate-office",
    title: "Lawyer's Chamber",
    clientName: "Adv. Joshi & Associates",
    category: "Commercial",
    location: "Nyay Mandir Area",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800",
    description: "Sophisticated office with floor-to-ceiling book racks for legal journals. Dark wood tones for a professional look.",
    gallery: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200"
    ],
    startDate: "01 Dec 2023",
    endDate: "15 Jan 2024",
    size: "500 Sq. Ft.",
    scope: [
      "Full Height Book Racks",
      "Executive Table",
      "Waiting Area Seating",
      "Wooden Flooring"
    ]
  },
  {
    id: 18,
    slug: "mr-rana-duplex",
    title: "Duplex Staircase & Living",
    clientName: "Mr. Rana",
    category: "Residential",
    location: "Sama-Savli Road",
    thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800",
    description: "Specialized work on the staircase railing and double-height living room wall.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200"
    ],
    startDate: "15 Feb 2024",
    endDate: "15 April 2024",
    size: "2,000 Sq. Ft.",
    scope: [
      "Teak Wood Staircase Railing",
      "Double Height Wall Paneling",
      "Chandelier Installation",
      "TV Unit Stone Cladding"
    ]
  },
  {
    id: 19,
    slug: "kids-room-theme",
    title: "Kids Bedroom Theme",
    clientName: "Mrs. Trivedi",
    category: "Residential",
    location: "Chhani",
    thumbnail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800",
    description: "A colorful space-themed bedroom for two kids with bunk beds and a study desk.",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
      "https://images.unsplash.com/photo-1558025137-08e630750588?q=80&w=1200"
    ],
    startDate: "01 April 2024",
    endDate: "20 April 2024",
    size: "200 Sq. Ft.",
    scope: [
      "Custom Bunk Bed",
      "Study Table for Two",
      "Wardrobe with Cartoon Prints",
      "Safety Grills"
    ]
  },
  {
    id: 20,
    slug: "mobile-store-interior",
    title: "Electronics & Mobile Store",
    clientName: "Gadget World",
    category: "Commercial",
    location: "Subhanpura",
    thumbnail: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800",
    description: "Futuristic design with white and neon blue themes. Glass counters for mobile display.",
    gallery: [
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1200",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200"
    ],
    startDate: "10 Jan 2024",
    endDate: "10 Feb 2024",
    size: "400 Sq. Ft.",
    scope: [
      "Backlit Logo Signage",
      "Glass Display Counters",
      "Slatwall Panels for Accessories",
      "False Ceiling with Profile Lights"
    ]
  }
];