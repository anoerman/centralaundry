import type { Product } from "@/types";

// Dummy data — replace with database-backed source later.
export const products: Product[] = [
  {
    id: "washer-commercial-10kg",
    name: "Commercial Washer 10kg",
    category: "washer",
    brand: "Speed Queen",
    image: "/products/washer-10kg.jpg",
    price: 45000000,
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
    price: 52000000,
    specs: ["Capacity 18kg", "Gas/electric", "Reversing tumble", "220V"],
    description:
      "High-capacity dryer for large loads, built for continuous daily commercial use.",
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
];
