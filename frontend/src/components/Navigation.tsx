import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Quality Process', href: '#quality-process' },
  { label: 'Contact', href: '#contact' },
];

function SSMonogram() {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      className="flex items-center gap-3 group"
      aria-label="SS Global Trades — Home"
    >
      {/* Gold SS Monogram */}
      <div className="relative flex-shrink-0">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E27A" />
              <stop offset="35%" stopColor="#C9A84C" />
              <stop offset="65%" stopColor="#E8C96A" />
              <stop offset="100%" stopColor="#A07830" />
            </linearGradient>
            <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E27A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#A07830" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Outer diamond border */}
          <rect
            x="3"
            y="3"
            width="46"
            height="46"
            rx="2"
            stroke="url(#borderGrad)"
            strokeWidth="1"
            fill="none"
          />
          {/* Inner thin border */}
          <rect
            x="6"
            y="6"
            width="40"
            height="40"
            rx="1"
            stroke="url(#borderGrad)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
          {/* SS Text */}
          <text
            x="26"
            y="35"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="26"
            fill="url(#goldGrad)"
            filter="url(#glow)"
            letterSpacing="-1"
          >
            SS
          </text>
        </svg>
      </div>

      {/* Brand text */}
      <div className="flex flex-col leading-tight">
        <span className="font-heading text-sm font-black text-gold tracking-[0.2em] uppercase">
          SS GLOBAL TRADES
        </span>
        <span className="text-xs text-cream-muted tracking-widest uppercase font-semibold">
          Premium Hair Exports
        </span>
      </div>
    </a>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg border-b border-gold/10'
          : 'bg-transparent'
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
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-bold text-cream-muted hover:text-gold transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2 text-sm font-black tracking-wide uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal-900 transition-all duration-200"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
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
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 px-2 text-cream-muted hover:text-gold border-b border-charcoal-600 transition-colors text-sm uppercase tracking-wide font-bold"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
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
