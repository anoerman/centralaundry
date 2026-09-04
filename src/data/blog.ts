import type { BlogPost } from "@/types";

// Dummy data — replace with database-backed source later.
export const blogPosts: BlogPost[] = [
  {
    id: "extend-washer-lifespan",
    title: "5 Ways to Extend the Lifespan of Your Commercial Washer",
    category: "Maintenance Tips",
    coverImage: "https://picsum.photos/seed/blog-1/900/600",
    excerpt:
      "Commercial washers are a major investment. A few simple habits can add years to their working life and cut down on costly repairs.",
    content: [
      "Commercial washing machines run far harder than home appliances — often 10 or more loads a day. That workload means small maintenance habits make a much bigger difference over time than they would at home.",
      "Start with water quality. Hard water leaves mineral deposits on drum seals and heating elements, which is one of the most common causes of early machine failure. A water softener isn't a nice-to-have for a high-volume laundromat — it's protection for your equipment.",
      "Clean the lint and debris traps daily, not weekly. A clogged trap forces the pump to work harder, which shortens motor life and raises your electricity bill in the process.",
      "Don't overload. It's tempting to squeeze in one more shirt to save a cycle, but overloading strains the bearings and drum suspension — the two most expensive parts to replace.",
      "Finally, schedule preventive servicing rather than waiting for a breakdown. A technician can catch a worn belt or a slow leak before it turns into a full day of downtime.",
    ],
    takeaways: [
      "Install a water softener to protect seals and heating elements",
      "Empty lint traps daily, not weekly",
      "Avoid overloading to protect bearings and drum suspension",
      "Book preventive servicing instead of waiting for breakdowns",
    ],
    author: "Andi Wijaya",
    readTimeMinutes: 4,
    date: "2026-08-12",
  },
  {
    id: "choosing-machine-capacity",
    title: "How to Choose the Right Machine Capacity for Your Laundry Business",
    category: "Buying Guide",
    coverImage: "https://picsum.photos/seed/blog-2/900/600",
    excerpt:
      "Picking the wrong washer capacity is one of the most expensive mistakes a new laundry business can make. Here's how to size it correctly.",
    content: [
      "Machine capacity is usually the first decision a new laundry business owner has to make, and it's easy to get wrong in either direction — too small and you're bottlenecked during peak hours, too large and you're paying for water and electricity you don't need.",
      "Start with your customer profile. A neighborhood self-service laundromat serving individual households does fine with 8-10kg washers. A business serving hotels, hospitals, or other bulk commercial clients needs 15kg or higher to keep turnaround times reasonable.",
      "Think about peak-hour throughput, not average load. If your busiest two hours see triple the normal traffic, size your machine count and capacity for that peak, not the daily average — otherwise customers wait, and waiting customers don't come back.",
      "Match your dryer capacity to your washer capacity. A common mistake is buying a large washer paired with an undersized dryer, which just moves the bottleneck downstream instead of removing it.",
      "If you're not sure, a supplier consultation is worth the hour. Sharing your expected daily volume and customer type lets a specialist size your whole line correctly instead of guessing.",
    ],
    takeaways: [
      "Match capacity to customer type: households vs. hotels/hospitals",
      "Size for peak-hour traffic, not the daily average",
      "Keep washer and dryer capacity matched to avoid a downstream bottleneck",
      "Get a supplier consultation before committing to a machine lineup",
    ],
    author: "Siti Rahayu",
    readTimeMinutes: 5,
    date: "2026-07-28",
  },
  {
    id: "laundromat-startup-costs",
    title: "What It Really Costs to Open a Laundromat in Indonesia",
    category: "Business Guide",
    coverImage: "https://picsum.photos/seed/blog-3/900/600",
    excerpt:
      "A realistic breakdown of the costs behind opening a self-service laundromat — equipment, space, and the expenses first-time owners forget.",
    content: [
      "Most first-time owners budget for machines and rent, then get surprised by everything else. Here's a more complete picture of what actually goes into opening a laundromat.",
      "Equipment is the largest line item, typically 50-60% of your total startup budget. This is also where a turnkey business package helps — bundling machines, installation, and staff training into one predictable cost instead of sourcing each piece separately.",
      "Space and utilities come next. Water and electrical capacity matter as much as square footage — commercial washers need higher-amperage circuits and steady water pressure, which can mean electrical upgrades if the space wasn't previously commercial.",
      "Working capital is the piece first-time owners underestimate most. Budget at least three months of operating expenses in reserve — rent, utilities, and staff wages — while the business builds a regular customer base.",
      "Finally, factor in signage, POS/payment systems, and basic interior work. These feel minor individually but easily add up to 10-15% of the total budget if planned late instead of upfront.",
    ],
    takeaways: [
      "Equipment is typically 50-60% of total startup cost",
      "Check electrical capacity and water pressure before signing a lease",
      "Keep 3 months of operating expenses as working capital",
      "Budget signage, POS, and interior work upfront, not as an afterthought",
    ],
    author: "Budi Santoso",
    readTimeMinutes: 6,
    date: "2026-07-05",
  },
  {
    id: "eco-friendly-laundry-trends",
    title: "The Shift Toward Eco-Friendly Commercial Laundry",
    category: "Industry News",
    coverImage: "https://picsum.photos/seed/blog-4/900/600",
    excerpt:
      "Energy-efficient machines and water recycling systems are moving from nice-to-have to expected. What it means for laundry business owners.",
    content: [
      "Across the commercial laundry industry, energy and water efficiency have shifted from a marketing angle to a real cost consideration — and increasingly, a customer expectation.",
      "Newer washer models use significantly less water per cycle than machines from even five years ago, without sacrificing wash quality. For high-volume operations, that difference shows up directly on the utility bill.",
      "Water recycling and greywater reuse systems are also becoming more common in larger installations, capturing rinse water for reuse in the next wash cycle.",
      "For business owners, this trend matters beyond utility costs — customers increasingly ask about it, especially commercial clients like hotels with their own sustainability commitments to report on.",
      "When evaluating new equipment, it's worth asking suppliers directly about energy ratings and water-per-cycle figures, not just price and capacity.",
    ],
    takeaways: [
      "Newer machines use meaningfully less water per cycle than older models",
      "Water recycling systems are becoming standard in larger installations",
      "Commercial clients (hotels, hospitals) increasingly ask about sustainability",
      "Ask suppliers for energy ratings and water-per-cycle figures, not just price",
    ],
    author: "Dewi Lestari",
    readTimeMinutes: 4,
    date: "2026-06-18",
  },
  {
    id: "reduce-machine-downtime",
    title: "How to Reduce Machine Downtime During Peak Hours",
    category: "Maintenance Tips",
    coverImage: "https://picsum.photos/seed/blog-5/900/600",
    excerpt:
      "A machine breakdown during your busiest hours costs more than the repair — it costs customers. Here's how to minimize the risk.",
    content: [
      "Downtime during peak hours is one of the most expensive problems a laundry business can face, because the cost isn't just the repair bill — it's the customers who leave and don't come back.",
      "The single biggest lever is preventive maintenance on a fixed schedule, not a reactive one. Machines that are serviced on a calendar, rather than after something breaks, fail far less often during high-traffic periods.",
      "Keep a small stock of common wear parts on-site — belts, seals, and igniters are inexpensive and fail predictably. Waiting for a technician to source a part can turn a 30-minute fix into a lost afternoon.",
      "Train at least one staff member to handle basic troubleshooting: clearing error codes, checking water supply valves, and resetting circuit breakers. Many stoppages don't need a technician visit at all.",
      "Finally, work with a supplier who offers fast-response servicing, not just a warranty on paper. Ask about typical response time for an on-site visit before you buy, not after something breaks down.",
    ],
    takeaways: [
      "Use a fixed preventive maintenance schedule, not a reactive one",
      "Keep common wear parts (belts, seals, igniters) in stock on-site",
      "Train staff on basic troubleshooting before calling a technician",
      "Confirm a supplier's on-site response time before buying, not after",
    ],
    author: "Andi Wijaya",
    readTimeMinutes: 5,
    date: "2026-05-30",
  },
];
