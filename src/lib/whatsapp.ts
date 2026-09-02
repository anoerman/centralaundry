// Dummy WhatsApp business number — replace with the real number.
const WHATSAPP_NUMBER = "6281234567890";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
