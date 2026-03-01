import { useState } from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { useWhatsAppLink } from '../hooks/useQueries';

export default function WhatsAppButton() {
  const { data: whatsappLink } = useWhatsAppLink();
  const [hovered, setHovered] = useState(false);

  const href = whatsappLink || 'https://wa.me/918918832546';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip label */}
      <span
        className={`
          bg-charcoal-800 text-cream text-sm font-sans font-medium
          px-3 py-1.5 rounded-full border border-gold/30 shadow-gold-sm
          whitespace-nowrap pointer-events-none
          transition-all duration-300
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
        `}
        aria-hidden="true"
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="
          relative flex items-center justify-center
          w-14 h-14 rounded-full
          bg-whatsapp text-white
          shadow-whatsapp
          animate-pulse-glow
          hover:scale-110 focus:scale-110
          transition-transform duration-200
          outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900
        "
      >
        <SiWhatsapp size={28} />
      </a>
    </div>
  );
}
