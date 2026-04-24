export const WHATSAPP_NUMBER = "6282164097066";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo Commander Dede, saya ingin konsultasi project VIBOXS. Saya ingin membahas kebutuhan website / automation / dashboard / AI system untuk bisnis saya.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappLink();
