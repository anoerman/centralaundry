import type { BusinessPackage } from "@/types";

// Dummy data — replace with database-backed source later.
export const packages: BusinessPackage[] = [
  {
    id: "starter-package",
    name: "Starter Laundry Package",
    price: 75000000,
    images: ["https://picsum.photos/seed/package-1-1/600/450", "https://picsum.photos/seed/package-1-2/600/450", "https://picsum.photos/seed/package-1-3/600/450", "https://picsum.photos/seed/package-1-4/600/450"],
    includes: [
      "2x Commercial Washer 10kg",
      "1x Commercial Dryer 13kg",
      "Basic shop layout consultation",
      "Staff training (2 days)",
    ],
    description:
      "Everything needed to open a small self-service or drop-off laundromat.",
  },
  {
    id: "business-package",
    name: "Business Laundry Package",
    price: 150000000,
    images: ["https://picsum.photos/seed/package-2-1/600/450", "https://picsum.photos/seed/package-2-2/600/450", "https://picsum.photos/seed/package-2-3/600/450", "https://picsum.photos/seed/package-2-4/600/450"],
    includes: [
      "4x Commercial Washer 15kg",
      "3x Commercial Dryer 18kg",
      "1x Vacuum Ironing Table",
      "POS & booking system setup",
      "Staff training (5 days)",
      "1-year maintenance support",
    ],
    description:
      "A complete mid-scale laundry business setup for higher daily volume.",
  },
  {
    id: "franchise-package",
    name: "Franchise Laundry Package",
    price: 350000000,
    images: ["https://picsum.photos/seed/package-3-1/600/450", "https://picsum.photos/seed/package-3-2/600/450", "https://picsum.photos/seed/package-3-3/600/450", "https://picsum.photos/seed/package-3-4/600/450"],
    includes: [
      "8x Commercial Washer 15kg",
      "6x Commercial Dryer 18kg",
      "2x Vacuum Ironing Table",
      "Branding & interior design package",
      "POS & booking system setup",
      "Staff training (10 days)",
      "2-year maintenance support",
    ],
    description:
      "Full turnkey setup for opening a laundry outlet under a franchise or multi-branch model.",
  },
];
