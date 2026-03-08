import { Globe, Leaf, Star } from "lucide-react";

const pillars = [
  {
    icon: Star,
    title: "Quality First",
    description:
      "Strict quality control at every stage of processing to ensure consistency, strength, and natural texture.",
  },
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    description:
      "Transparent and responsible sourcing practices that respect suppliers and uphold ethical standards.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving brands, salons, and wholesalers worldwide with reliable supply and seamless logistics.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-heading font-black text-cream mb-6 leading-tight text-4xl sm:text-5xl">
              Rooted in India.
              <br />
              <span className="gold-text-gradient">Trusted Globally.</span>
            </h2>
            <p className="text-cream-muted text-base leading-relaxed mb-6 font-medium">
              SS GLOBAL TRADE is an India-based human hair export company
              committed to quality, transparency, and long-term partnerships.
              Our mission is to deliver ethically sourced, high-grade human hair
              products that empower brands and entrepreneurs to grow confidently
              in the global beauty market.
            </p>
            <p className="text-cream-muted text-base leading-relaxed font-medium">
              We combine traditional sourcing expertise with modern quality
              control systems to ensure consistency, strength, and natural
              texture in every batch.
            </p>

            {/* Decorative divider */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gold/20" />
              <span className="text-gold/50 text-xs font-black tracking-widest uppercase">
                Est. India
              </span>
              <div className="h-px flex-1 bg-gold/20" />
            </div>
          </div>

          {/* Right: Pillar Cards */}
          <div className="grid gap-5">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-5 p-6 bg-charcoal-700 border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30 bg-charcoal-800">
                  <Icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-cream text-lg mb-1">
                    {title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed font-medium">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
