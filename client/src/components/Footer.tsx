import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Poetic Soul. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Made with ❤️ by Poetic Soul
          </p>
          <a
            href="https://wa.me/2349063887291"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-footer-whatsapp"
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp className="h-5 w-5" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
