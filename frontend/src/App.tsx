import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseSection from './components/WhyChooseSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-cream font-sans">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <QuoteSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
