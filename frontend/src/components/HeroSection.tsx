import { Shield, Globe, Package, Tag } from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useQueries';

const trustBadges = [
  { icon: Shield, label: '100% Authentic' },
  { icon: Globe, label: 'Global Shipping' },
  { icon: Package, label: 'Low MOQ' },
  { icon: Tag, label: 'Custom Branding' },
];

export default function HeroSection() {
  const { data: whatsappLink } = useWhatsAppLink();

  const scrollToQuote = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image — using the real wavy bulk hair photo */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/product-bulk-hair.dim_1200x800.jpg"
          alt="Premium Human Hair — SS GLOBAL TRADES"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/85 via-charcoal-900/75 to-charcoal-900/97" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">India's Premier Hair Exporter</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black leading-tight mb-6">
            <span className="text-cream block text-5xl sm:text-6xl lg:text-7xl">Premium Human Hair.</span>
            <span className="gold-text-gradient block text-5xl sm:text-6xl lg:text-7xl">Global Standards.</span>
            <span className="text-cream block text-5xl sm:text-6xl lg:text-7xl">Trusted Worldwide.</span>
          </h1>

          {/* Company name badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-gold/40 bg-charcoal-800/50">
            <span className="text-gold font-black text-sm tracking-[0.25em] uppercase">SS GLOBAL TRADES</span>
          </div>

          {/* Subheadline */}
          <p className="text-cream-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
            Delivering 100% authentic human hair from India to global brands, salons, and wholesalers.
            <span className="text-cream font-bold"> Quality you can trust. Supply you can scale.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToQuote}
              className="px-8 py-4 gold-gradient text-charcoal-900 font-black text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-gold"
            >
              Request a Quote
            </button>
            <a
              href={whatsappLink || 'https://wa.me/918918832546'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold text-gold font-black text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors text-center"
            >
              Order Sample
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-charcoal-800/60 backdrop-blur-sm border border-gold/20 px-4 py-3"
              >
                <Icon size={18} className="text-gold flex-shrink-0" />
                <span className="text-cream text-sm font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-900 to-transparent" />
    </section>
  );
}
