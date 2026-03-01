import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Quality Process', href: '#quality-process' },
  { label: 'Contact', href: '#contact' },
];

const productLinks = [
  { label: 'Hair Bundles', href: '#products' },
  { label: 'Closures & Frontals', href: '#products' },
  { label: 'Custom Wigs', href: '#products' },
  { label: 'Bulk Supply', href: '#products' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'ss-global-trades');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="font-heading font-black text-gold text-xl tracking-widest uppercase">SS GLOBAL TRADES</h3>
              <p className="text-cream-muted text-xs tracking-widest uppercase mt-1 font-semibold">Premium Hair Exports</p>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed mb-6 font-medium">
              Premium human hair supplier serving global brands, salons, and wholesalers with quality you can trust.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-gold/60 text-xs tracking-widest uppercase font-bold">Est. India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-cream text-base mb-5 pb-2 border-b border-gold/20 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream-muted text-sm hover:text-gold transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold transition-colors rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-cream text-base mb-5 pb-2 border-b border-gold/20 uppercase tracking-wide">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream-muted text-sm hover:text-gold transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1 h-1 bg-gold/40 group-hover:bg-gold transition-colors rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-cream text-base mb-5 pb-2 border-b border-gold/20 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@ssglobaltrade.com"
                  className="text-cream-muted text-sm hover:text-gold transition-colors font-medium"
                >
                  info@ssglobaltrade.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+918918832546"
                  className="text-cream-muted text-sm hover:text-gold transition-colors font-medium"
                >
                  +91 891 883 2546
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream-muted text-sm font-medium">Haldia, West Bengal, India – 721657</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-muted text-xs tracking-wide font-medium">
            © {currentYear} SS GLOBAL TRADES. All rights reserved.
          </p>
          <p className="text-cream-muted text-xs flex items-center gap-1 font-medium">
            Built with <Heart size={12} className="text-gold fill-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors font-bold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
