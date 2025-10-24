import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2349063887291"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl bg-[#25D366] text-white hover:scale-105 active:scale-95 transition-transform duration-300"
      data-testid="button-floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}