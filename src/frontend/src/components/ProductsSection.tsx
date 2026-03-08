interface ProductItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const products: ProductItem[] = [
  {
    title: "Premium Hair Bundles",
    subtitle: "100% Raw & Remy Human Hair",
    description:
      "Premium quality bundles in various lengths and textures. Sourced directly for maximum authenticity.",
    image: "/assets/generated/product-bundles.dim_900x1200.jpg",
  },
  {
    title: "Closures & Frontals",
    subtitle: "Natural-Looking Finish",
    description:
      "Natural-looking closures and frontals for seamless styling and a flawless hairline.",
    image: "/assets/generated/product-closures.dim_600x400.png",
  },
  {
    title: "Custom Wigs",
    subtitle: "Bespoke Craftsmanship",
    description:
      "Bespoke wigs crafted to your exact specifications — length, density, texture, and cap construction.",
    image: "/assets/generated/product-wigs.dim_600x400.png",
  },
  {
    title: "Bulk Hair Supply",
    subtitle: "Large Volume Orders",
    description:
      "Large volume orders for manufacturers and distributors. Consistent quality at scale.",
    image: "/assets/generated/product-bulk-hair.dim_1200x800.jpg",
  },
  {
    title: "OEM & Private Label",
    subtitle: "Custom Branding Solutions",
    description:
      "Custom branding and packaging solutions to launch or grow your own hair brand.",
    image: "/assets/generated/product-oem.dim_600x400.png",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">
              Our Products
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-heading font-black text-cream mb-4 text-4xl sm:text-5xl">
            Premium Hair Products
          </h2>
          <p className="text-cream-muted text-base max-w-xl mx-auto font-medium">
            Tailored to your business needs — from individual bundles to full
            private label solutions.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-charcoal-800 border border-gold/10 hover:border-gold/40 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "/assets/generated/product-bulk.dim_600x400.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gold text-xs font-black tracking-widest uppercase mb-1">
                  {product.subtitle}
                </p>
                <h3 className="font-heading font-bold text-cream text-xl mb-3">
                  {product.title}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Options Note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 bg-charcoal-800">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <p className="text-cream-muted text-sm font-medium">
              <span className="text-gold font-bold">
                Custom options available:
              </span>{" "}
              lengths, textures, and gram options tailored to your requirements.
            </p>
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
