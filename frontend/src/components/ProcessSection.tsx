const steps = [
  {
    number: '01',
    title: 'Ethical Sourcing',
    description: 'Responsibly sourced from trusted suppliers with full transparency and fair practices.',
  },
  {
    number: '02',
    title: 'Sorting & Quality Inspection',
    description: 'Rigorous quality checks at every stage — length, texture, strength, and authenticity verified.',
  },
  {
    number: '03',
    title: 'Cleaning & Processing',
    description: 'Advanced professional processing for premium quality, preserving natural texture and shine.',
  },
  {
    number: '04',
    title: 'Secure Packaging',
    description: 'Custom packaging with your branding, ensuring products arrive in perfect condition.',
  },
  {
    number: '05',
    title: 'Worldwide Delivery',
    description: 'Fast and secure international shipping via DHL / FedEx with full tracking.',
  },
];

export default function ProcessSection() {
  return (
    <section id="quality-process" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">Our Process</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-heading font-black text-cream mb-4 text-4xl sm:text-5xl">
            From Sourcing to <span className="gold-text-gradient">Your Door</span>
          </h2>
          <p className="text-cream-muted text-base max-w-xl mx-auto font-medium">
            We maintain the highest standards at every step of our process.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-px bg-gold/20" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-20 h-20 flex flex-col items-center justify-center bg-charcoal-900 border-2 border-gold/40 mb-6 group hover:border-gold transition-colors">
                    <span className="font-heading text-gold text-xl font-black">{step.number}</span>
                  </div>
                  <h3 className="font-heading font-bold text-cream text-base mb-2">{step.title}</h3>
                  <p className="text-cream-muted text-xs leading-relaxed font-medium">{step.description}</p>
                  {/* Arrow connector (not last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 -right-2 z-20 text-gold/40 text-lg">›</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Steps */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border-2 border-gold/40 bg-charcoal-800">
                  <span className="font-heading text-gold text-lg font-black">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gold/20 my-2" />
                )}
              </div>
              {/* Right: content */}
              <div className={`pb-8 ${index === steps.length - 1 ? '' : ''}`}>
                <h3 className="font-heading font-bold text-cream text-xl mb-2 mt-3">{step.title}</h3>
                <p className="text-cream-muted text-sm leading-relaxed font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
