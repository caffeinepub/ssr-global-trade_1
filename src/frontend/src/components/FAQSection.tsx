import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer:
      "Our minimum order quantity starts at just 1 bundle for sample orders. For wholesale and bulk orders, the MOQ varies by product type — typically starting from 5–10 bundles. We accommodate businesses at every stage, from startups to large distributors. Contact us for specific MOQ details per product.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We ship worldwide via DHL and FedEx Express. Standard delivery times are 3–7 business days to most international destinations. Express shipping options are available for urgent orders. You will receive a tracking number as soon as your order is dispatched.",
  },
  {
    question: "Do you provide samples?",
    answer:
      "Yes, we offer sample orders so you can verify quality before placing a bulk order. Sample orders are available at a small cost to cover production and shipping. Please contact us via the quote form or WhatsApp to arrange a sample order.",
  },
  {
    question: "What about customs duties and taxes?",
    answer:
      "Customs duties and import taxes are the responsibility of the buyer and vary by destination country. We provide all necessary export documentation (commercial invoice, packing list, certificate of origin) to facilitate smooth customs clearance. We recommend consulting your local customs authority for applicable rates.",
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "We stand behind the quality of our products. If you receive a defective or incorrect order, please contact us within 7 days of delivery with photos and we will arrange a replacement or refund. Custom and private label orders are non-refundable once production has commenced. Please review samples before placing large orders.",
  },
  {
    question: "Can you provide custom packaging and branding?",
    answer:
      "Absolutely. We offer full OEM and private label services including custom packaging design, branded boxes, hang tags, and labels. Minimum quantities apply for custom packaging orders. Share your brand requirements with us and our team will provide a tailored solution.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-charcoal-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">
              FAQ
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-heading font-black text-cream mb-4 text-4xl sm:text-5xl">
            FAQ & <span className="gold-text-gradient">Shipping Policy</span>
          </h2>
          <p className="text-cream-muted text-base max-w-xl mx-auto font-medium">
            Common questions about our products, shipping, and policies.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border border-gold/20 bg-charcoal-800 px-6 data-[state=open]:border-gold/40 transition-colors"
            >
              <AccordionTrigger className="text-cream font-bold text-left py-5 hover:text-gold hover:no-underline transition-colors font-heading text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-cream-muted text-sm leading-relaxed pb-5 font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
