import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useContactInfo, useBusinessHours, useWhatsAppLink, useSubmitQuoteRequest } from '../hooks/useQueries';
import { Product } from '../backend';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const productOptions = [
  { value: Product.hairBundles, label: 'Hair Bundles' },
  { value: Product.closuresAndFrontals, label: 'Closures & Frontals' },
  { value: Product.customWigs, label: 'Custom Wigs' },
  { value: Product.bulkSupply, label: 'Bulk Supply' },
  { value: Product.oemPrivateLabel, label: 'OEM / Private Label' },
];

export default function QuoteSection() {
  const { data: contactInfo } = useContactInfo();
  const { data: businessHours } = useBusinessHours();
  const { data: whatsappLink } = useWhatsAppLink();
  const submitMutation = useSubmitQuoteRequest();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    product: '' as Product | '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.product) return;

    const id = `quote-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    try {
      await submitMutation.mutateAsync({
        id,
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        product: formData.product as Product,
        requirements: formData.requirements,
      });
      setSubmitted(true);
      setFormData({ fullName: '', email: '', companyName: '', product: '', requirements: '' });
    } catch (err) {
      console.error('Failed to submit quote request:', err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-black tracking-[0.3em] uppercase">Get a Quote</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-heading font-black text-cream mb-4 text-4xl sm:text-5xl">
            Ready to <span className="gold-text-gradient">Start Your Order?</span>
          </h2>
          <p className="text-cream-muted text-base max-w-xl mx-auto font-medium">
            Contact us today for a personalized quote tailored to your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-10 bg-charcoal-700 border border-gold/20">
                <CheckCircle size={56} className="text-gold mb-6" />
                <h3 className="font-heading font-black text-cream text-2xl mb-3">Quote Request Sent!</h3>
                <p className="text-cream-muted text-base font-medium mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours with a personalized quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-gold text-gold font-black text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-charcoal-700 border border-gold/10 p-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-cream text-sm font-bold uppercase tracking-wide">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="bg-charcoal-800 border-gold/20 text-cream placeholder:text-cream-muted/50 focus:border-gold font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cream text-sm font-bold uppercase tracking-wide">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-charcoal-800 border-gold/20 text-cream placeholder:text-cream-muted/50 focus:border-gold font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-cream text-sm font-bold uppercase tracking-wide">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Your Company"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="bg-charcoal-800 border-gold/20 text-cream placeholder:text-cream-muted/50 focus:border-gold font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-cream text-sm font-bold uppercase tracking-wide">Product Interest</Label>
                  <Select
                    value={formData.product}
                    onValueChange={(val) => setFormData({ ...formData, product: val as Product })}
                    required
                  >
                    <SelectTrigger className="bg-charcoal-800 border-gold/20 text-cream focus:border-gold font-medium">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal-800 border-gold/20">
                      {productOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value} className="text-cream hover:text-gold focus:text-gold font-medium">
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-cream text-sm font-bold uppercase tracking-wide">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Tell us about your requirements — quantity, length, texture, delivery timeline..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    rows={4}
                    className="bg-charcoal-800 border-gold/20 text-cream placeholder:text-cream-muted/50 focus:border-gold resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full py-4 gold-gradient text-charcoal-900 font-black text-sm tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2 shadow-gold"
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Request Quote'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* WhatsApp CTA */}
            <div className="p-6 bg-charcoal-700 border border-gold/10">
              <h3 className="font-heading font-bold text-cream text-lg mb-2">Quick Response</h3>
              <p className="text-cream-muted text-sm mb-4 font-medium">Chat with us on WhatsApp for instant assistance.</p>
              <a
                href={whatsappLink || 'https://wa.me/918918832546'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 bg-whatsapp text-white font-black text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
              >
                <SiWhatsapp size={18} />
                Message on WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="p-6 bg-charcoal-700 border border-gold/10">
              <h3 className="font-heading font-bold text-cream text-lg mb-5">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gold text-xs font-black uppercase tracking-wide mb-0.5">Email</p>
                    <a
                      href={`mailto:${contactInfo?.email || 'info@ssglobaltrade.com'}`}
                      className="text-cream-muted text-sm hover:text-gold transition-colors font-medium"
                    >
                      {contactInfo?.email || 'info@ssglobaltrade.com'}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gold text-xs font-black uppercase tracking-wide mb-0.5">Phone</p>
                    <a
                      href={`tel:${contactInfo?.phone || '+918918832546'}`}
                      className="text-cream-muted text-sm hover:text-gold transition-colors font-medium"
                    >
                      {contactInfo?.phone || '+91 891 883 2546'}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gold text-xs font-black uppercase tracking-wide mb-0.5">Location</p>
                    <span className="text-cream-muted text-sm font-medium">
                      {contactInfo?.location || 'Haldia, West Bengal, India – 721657'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-charcoal-700 border border-gold/10">
              <h3 className="font-heading font-bold text-cream text-lg mb-4 flex items-center gap-2">
                <Clock size={16} className="text-gold" />
                Business Hours
              </h3>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex justify-between">
                  <span className="text-cream-muted">Monday – Friday</span>
                  <span className="text-cream font-bold">{businessHours?.mondayToFriday || '9:00 AM – 6:00 PM IST'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-cream-muted">Saturday</span>
                  <span className="text-cream font-bold">{businessHours?.saturday || '10:00 AM – 2:00 PM IST'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-cream-muted">Sunday</span>
                  <span className="text-gold font-bold">{businessHours?.sunday || 'Closed'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
