import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality Process", href: "#quality-process" },
  { label: "Contact", href: "#contact" },
];

function SSMonogram() {
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex items-center gap-3 group"
      aria-label="SS Global Trade — Home"
    >
      {/* Logo Image */}
      <div className="relative flex-shrink-0">
        <img
          src="/assets/uploads/logo-1.jpeg"
          alt="SS Global Trade Logo"
          className="w-14 h-14 object-cover rounded-sm"
          aria-hidden="true"
        />
      </div>

      {/* Brand text */}
      <div className="flex flex-col leading-tight">
        <span className="font-heading text-sm font-black text-gold tracking-[0.2em] uppercase">
          SS GLOBAL TRADE
        </span>
        <span className="text-xs text-cream-muted tracking-widest uppercase font-semibold">
          Premium Human Hair Exporter
        </span>
      </div>
    </button>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal-900/95 backdrop-blur-md shadow-lg border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <SSMonogram />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-bold text-cream-muted hover:text-gold transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 text-sm font-black tracking-wide uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal-900 transition-all duration-200"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-cream hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-800 border-t border-gold/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 px-2 text-cream-muted hover:text-gold border-b border-charcoal-600 transition-colors text-sm uppercase tracking-wide font-bold"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-3 py-3 text-sm font-black tracking-wide uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal-900 transition-all duration-200"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
