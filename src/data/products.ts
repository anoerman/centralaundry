import type { Product } from "@/types";

// Dummy data — replace with database-backed source later.
export const products: Product[] = [
  {
    id: "washer-commercial-10kg",
    name: "Commercial Washer 10kg",
    category: "washer",
    brand: "Speed Queen",
    image: "/products/washer-10kg.jpg",
    price: 39900000,
    originalPrice: 45000000,
    isBestSeller: true,
    specs: ["Capacity 10kg", "Coin/token ready", "Stainless drum", "220V"],
    description:
      "Heavy-duty commercial washing machine built for high-traffic laundromats and laundry businesses.",
  },
  {
    id: "washer-commercial-15kg",
    name: "Commercial Washer 15kg",
    category: "washer",
    brand: "Speed Queen",
    image: "/products/washer-15kg.jpg",
    price: 62000000,
    specs: ["Capacity 15kg", "Coin/token ready", "Stainless drum", "220V"],
    description:
      "Large-capacity washer for bulk loads, ideal for hotels and industrial laundry operations.",
  },
  {
    id: "washer-commercial-20kg",
    name: "Commercial Washer 20kg",
    category: "washer",
    brand: "Girbau",
    image: "/products/washer-20kg.jpg",
    price: 78000000,
    isBestSeller: true,
    specs: ["Capacity 20kg", "Programmable cycles", "Stainless drum", "380V"],
    description:
      "Industrial-scale washer for hotels, hospitals, and high-volume laundry plants.",
  },
  {
    id: "washer-front-load-8kg",
    name: "Front Load Washer 8kg",
    category: "washer",
    brand: "Whirlpool",
    image: "/products/washer-8kg.jpg",
    price: 24500000,
    originalPrice: 28000000,
    specs: ["Capacity 8kg", "Energy efficient", "Digital display", "220V"],
    description:
      "Compact front-load washer suited for small laundromats and boutique laundry shops.",
  },
  {
    id: "dryer-commercial-13kg",
    name: "Commercial Dryer 13kg",
    category: "dryer",
    brand: "Maytag",
    image: "/products/dryer-13kg.jpg",
    price: 38000000,
    specs: ["Capacity 13kg", "Gas/electric", "Reversing tumble", "220V"],
    description:
      "Fast-cycle commercial dryer designed to pair with our washers for a full laundromat setup.",
  },
  {
    id: "dryer-commercial-18kg",
    name: "Commercial Dryer 18kg",
    category: "dryer",
    brand: "Maytag",
    image: "/products/dryer-18kg.jpg",
    price: 45900000,
    originalPrice: 52000000,
    isBestSeller: true,
    specs: ["Capacity 18kg", "Gas/electric", "Reversing tumble", "220V"],
    description:
      "High-capacity dryer for large loads, built for continuous daily commercial use.",
  },
  {
    id: "dryer-commercial-25kg",
    name: "Commercial Dryer 25kg",
    category: "dryer",
    brand: "Girbau",
    image: "/products/dryer-25kg.jpg",
    price: 68000000,
    specs: ["Capacity 25kg", "Gas/electric", "Programmable cycles", "380V"],
    description:
      "Heavy-duty dryer for industrial laundry plants and large hotel operations.",
  },
  {
    id: "ironing-table",
    name: "Vacuum Ironing Table",
    category: "other",
    brand: "Comel",
    image: "/products/ironing-table.jpg",
    price: 8500000,
    specs: ["Vacuum suction", "Heated surface", "Steam iron included"],
    description:
      "Professional ironing station that speeds up finishing for laundry and dry-cleaning businesses.",
  },
  {
    id: "folding-machine",
    name: "Automatic Folding Machine",
    category: "other",
    brand: "Comel",
    image: "/products/folding-machine.jpg",
    price: 32000000,
    originalPrice: 36500000,
    specs: ["Auto-fold towels & linens", "Adjustable fold size", "220V"],
    description:
      "Speeds up finishing for towels and linens, ideal for hotels and high-volume laundromats.",
  },
  {
    id: "dry-cleaning-machine",
    name: "Dry Cleaning Machine",
    category: "other",
    brand: "Whirlpool",
    image: "/products/dry-cleaning-machine.jpg",
    price: 95000000,
    isBestSeller: true,
    specs: ["Capacity 12kg", "Eco-solvent compatible", "Closed-loop system"],
    description:
      "Complete dry cleaning solution for laundry businesses expanding into garment care.",
  },
];
