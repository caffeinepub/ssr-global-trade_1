import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import ProcessSection from "./components/ProcessSection";
import ProductsSection from "./components/ProductsSection";
import QuoteSection from "./components/QuoteSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseSection from "./components/WhyChooseSection";

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
