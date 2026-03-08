import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SS GLOBAL TRADE has been our trusted supplier for over 2 years. The quality is consistently excellent, and their customer service is outstanding. Highly recommended!",
    name: "Sarah Johnson",
    title: "Hair Salon Owner",
    location: "Los Angeles, USA",
    initials: "SJ",
  },
  {
    quote:
      "The custom branding and packaging options helped us launch our brand successfully. The hair quality exceeds our expectations every single time.",
    name: "Maria Rodriguez",
    title: "Hair Brand Founder",
    location: "Miami, USA",
    initials: "MR",
  },
  {
    quote:
      "Fast shipping, transparent communication, and premium quality products. SS GLOBAL TRADE is our go-to supplier for all human hair needs.",
    name: "Emma Williams",
    title: "Wholesale Distributor",
    location: "London, UK",
    initials: "EW",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">
              Testimonials
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-heading font-black text-cream mb-4 text-4xl sm:text-5xl">
            What Our <span className="gold-text-gradient">Clients Say</span>
          </h2>
          <p className="text-cream-muted text-base max-w-xl mx-auto font-medium">
            Trusted by brands, salons, and wholesalers across the globe.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-8 bg-charcoal-700 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-gold/40 mb-4" />

              {/* Quote text */}
              <p className="text-cream-muted text-sm leading-relaxed flex-1 mb-8 italic font-medium">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 font-heading text-gold font-black text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-cream font-bold text-sm">{t.name}</p>
                  <p className="text-gold text-xs font-semibold">{t.title}</p>
                  <p className="text-cream-muted text-xs font-medium">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
