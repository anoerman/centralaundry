"use client";

import { useEffect, useState } from "react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { ArrowUp } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-transform hover:scale-105"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <a
        href={getWhatsAppLink(
          "Hi CentraLaundry, I'd like to ask about your laundry machines and business packages.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <SiWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
}
