import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const ContactBanner: React.FC = () => {
  return (
    <section className="py-14 bg-[#b15f00] text-white relative overflow-hidden" id="contact">
      {/* Decorative backdrop glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight">
              Craving Something Sweet or Crispy Tonight?
            </h3>
            <p className="text-sm sm:text-base text-white/85 mt-1.5 max-w-xl">
              Give us a quick call or message us on WhatsApp for fast takeaways and hot packaging.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919121919205"
              className="px-6 py-3 rounded-full bg-white text-[#1d1c17] text-xs sm:text-sm font-bold shadow-sm hover:bg-[#f8f3eb] transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#8d4b00]" />
              <span>+91 9121919205</span>
            </a>

            <a
              href="https://wa.me/919121919205?text=Hi%20Waffle%20Maker,%20I%20would%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#16A34A] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#15803D] transition-all flex items-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#16A34A]" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
