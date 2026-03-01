import { CheckCircle, Settings, Tag, Package, Truck, MessageSquare } from 'lucide-react';

const differentiators = [
  {
    icon: CheckCircle,
    title: '100% Authentic Human Hair',
    description: 'Every batch is verified for authenticity. No synthetic blends, no compromises.',
  },
  {
    icon: Settings,
    title: 'Strict Quality Control Process',
    description: 'Multi-stage quality inspection from sourcing to final packaging ensures consistent excellence.',
  },
  {
    icon: Tag,
    title: 'Custom Branding & Private Label',
    description: 'Launch your own brand with our OEM and private label packaging solutions.',
  },
  {
    icon: Package,
    title: 'Low MOQ Available',
    description: 'Start small and scale up. We accommodate businesses at every stage of growth.',
  },
  {
    icon: Truck,
    title: 'Fast & Secure International Shipping',
    description: 'Reliable worldwide delivery via DHL and FedEx with full tracking and insurance.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Pricing & Communication',
    description: 'No hidden fees. Clear pricing, honest timelines, and responsive support at every step.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">Why Choose Us</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-heading font-black text-cream mb-4 text-4xl sm:text-5xl">
            Why Choose <span className="gold-text-gradient">SS GLOBAL TRADES?</span>
          </h2>
          <p className="text-cream-muted text-base max-w-xl mx-auto font-medium">
            We go beyond supply — we build partnerships built on quality, trust, and long-term growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-8 bg-charcoal-700 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-gold/30 group-hover:border-gold/60 mb-6 transition-colors">
                <Icon size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-cream text-xl mb-3">{title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed font-medium">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
