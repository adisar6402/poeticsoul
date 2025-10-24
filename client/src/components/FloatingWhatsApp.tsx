import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2349063887291"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl bg-[#25D366] text-white hover-elevate active-elevate-2 animate-pulse hover:animate-none transition-all duration-300"
      data-testid="button-floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
