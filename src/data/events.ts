import type { CompanyEvent } from "@/types";

// Dummy data — replace with database-backed source later.
export const events: CompanyEvent[] = [
  {
    id: "laundry-expo-2026",
    title: "CentralLaundry at Indonesia Laundry Expo 2026",
    category: "Exhibition",
    date: "2026-03-14",
    location: "Jakarta Convention Center, Jakarta",
    images: [
      "/events/laundry-expo-1.jpg",
      "/events/laundry-expo-2.jpg",
      "/events/laundry-expo-3.jpg",
      "/events/laundry-expo-4.jpg",
    ],
    excerpt:
      "We showcased our full lineup of commercial washers and dryers to over 2,000 laundry business owners.",
    description:
      "CentralLaundry took part in Indonesia's largest laundry industry trade show, demonstrating our commercial washers, dryers, and finishing equipment live on the show floor. Our team ran hands-on consultations for entrepreneurs planning new laundromats, and we announced two new turnkey business packages exclusively for expo attendees.",
    highlights: [
      "Live demos of Speed Queen and Girbau commercial machines",
      "Free consultations for over 150 prospective laundry business owners",
      "Launched limited-time expo pricing on Starter and Business packages",
    ],
  },
  {
    id: "staff-technical-training-2026",
    title: "Annual Technical Training for Service Engineers",
    category: "Training",
    date: "2026-01-22",
    location: "CentralLaundry Workshop, Depok",
    images: [
      "/events/technical-training-1.jpg",
      "/events/technical-training-2.jpg",
      "/events/technical-training-3.jpg",
    ],
    excerpt:
      "Our service engineers completed a 3-day certification refresh on the newest commercial machine models.",
    description:
      "To keep our after-sales support sharp, our technical team spent three days training on the latest washer and dryer models from our partner brands, covering diagnostics, preventive maintenance, and installation standards. This is part of our commitment to fast, reliable service for every customer.",
    highlights: [
      "3-day hands-on certification with brand technical trainers",
      "Covered 6 new machine models added to our lineup this year",
      "Updated our standard installation checklist for faster setup",
    ],
  },
  {
    id: "franchise-launch-bandung",
    title: "Franchise Partner Launch — Bandung",
    category: "Installation",
    date: "2025-11-08",
    location: "Bandung, Jawa Barat",
    images: [
      "/events/franchise-bandung-1.jpg",
      "/events/franchise-bandung-2.jpg",
      "/events/franchise-bandung-3.jpg",
      "/events/franchise-bandung-4.jpg",
    ],
    excerpt:
      "Delivered and installed a full Franchise Laundry Package for our newest partner outlet in Bandung.",
    description:
      "Our team completed a full turnkey installation for a new franchise partner, from equipment delivery to staff training. The outlet opened with 8 commercial washers, 6 dryers, and a complete POS setup, all supported by our team on-site through opening week.",
    highlights: [
      "8 washers and 6 dryers installed and commissioned in 4 days",
      "10-day staff training program completed on-site",
      "Outlet opened with full 2-year maintenance coverage",
    ],
  },
  {
    id: "csr-orphanage-donation",
    title: "CSR: Laundry Equipment Donation to Panti Asuhan Kasih Ibu",
    category: "Community",
    date: "2025-09-19",
    location: "Depok, Jawa Barat",
    images: [
      "/events/csr-donation-1.jpg",
      "/events/csr-donation-2.jpg",
      "/events/csr-donation-3.jpg",
    ],
    excerpt:
      "Donated a commercial washer and dryer set to a local orphanage as part of our community outreach program.",
    description:
      "As part of our ongoing community outreach, CentralLaundry donated a commercial washer and dryer to Panti Asuhan Kasih Ibu, along with a year of free maintenance support. Our team also spent the day teaching staff how to operate and care for the machines.",
    highlights: [
      "Donated 1 commercial washer and 1 dryer, installed on-site",
      "Included 1 year of free maintenance and servicing",
      "Trained 4 staff members on daily operation and basic care",
    ],
  },
  {
    id: "supplier-factory-visit",
    title: "Factory Visit: Girbau Manufacturing Plant",
    category: "Partnership",
    date: "2025-07-02",
    location: "Barcelona, Spain",
    images: [
      "/events/factory-visit-1.jpg",
      "/events/factory-visit-2.jpg",
      "/events/factory-visit-3.jpg",
    ],
    excerpt:
      "Our founder visited Girbau's manufacturing plant to strengthen our distribution partnership.",
    description:
      "Our founder and technical lead traveled to Girbau's manufacturing facility to review upcoming machine models, discuss distribution terms, and align on service standards for the Indonesian market. This visit strengthens CentralLaundry's position as a trusted regional distributor.",
    highlights: [
      "Reviewed 3 upcoming commercial machine models before launch",
      "Renewed exclusive regional distribution agreement",
      "Aligned on parts supply and technical support standards",
    ],
  },
  {
    id: "laundromat-open-house",
    title: "Open House: New Laundromat Business Owners Meetup",
    category: "Community",
    date: "2025-05-24",
    location: "CentralLaundry Showroom, Depok",
    images: [
      "/events/open-house-1.jpg",
      "/events/open-house-2.jpg",
      "/events/open-house-3.jpg",
    ],
    excerpt:
      "Hosted an open house for current and prospective laundry business owners to share tips and network.",
    description:
      "We opened our showroom for a casual meetup where laundromat owners could see our full equipment lineup, ask questions, and swap notes with other business owners. Several attendees who came to browse ended up starting their laundry business within the month.",
    highlights: [
      "Over 40 laundry business owners and prospects attended",
      "Live Q&A session on equipment financing and setup costs",
      "3 attendees signed up for Starter Packages on the spot",
    ],
  },
];
