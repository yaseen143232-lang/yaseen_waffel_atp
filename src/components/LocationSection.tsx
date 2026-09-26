import React, { useState } from 'react';
import { MapPin, Clock, Phone, UtensilsCrossed, ShoppingBag, Bike, ExternalLink, Copy, Check, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Waffle Maker, Near Zudio, Papampeta, Anantapur, Andhra Pradesh');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#f8f3eb]/70 border-t border-[#dbc2b0]/30" id="location">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Box (5 cols) */}
          <div className="lg:col-span-5 tactile-card bg-white p-7 sm:p-8 rounded-3xl flex flex-col justify-between border border-[#f2ede5]">
            <div>
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider">
                Storefront Landmark
              </span>
              <h2 className="font-headline text-3xl font-bold text-[#1d1c17] mt-1 tracking-tight">
                Visit Our Parlor
              </h2>
              <p className="text-sm text-[#554336] mt-2 leading-relaxed">
                Located centrally in Papampeta, just footsteps away from Zudio.
              </p>

              {/* Address Details */}
              <div className="mt-6 flex flex-col gap-4">
                {/* Address item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#ffdcc3]/50 flex items-center justify-center text-[#8d4b00] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#77574a]">
                      Address
                    </h5>
                    <p className="text-sm text-[#1d1c17] font-medium mt-0.5">
                      Near Zudio, Papampeta, Anantapur, Andhra Pradesh
                    </p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#ffdbcd]/50 flex items-center justify-center text-[#77574a] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#77574a]">
                      Operating Hours
                    </h5>
                    <p className="text-sm text-[#1d1c17] font-medium mt-0.5">
                      Monday to Sunday: <strong className="font-bold text-[#8d4b00]">11:00 AM – 11:00 PM</strong>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#77574a]">
                      Direct Phone
                    </h5>
                    <a
                      href="tel:+919121919205"
                      className="text-base text-[#8d4b00] font-bold hover:underline block mt-0.5"
                    >
                      +91 9121919205
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-[#f2ede5]">
                <span className="px-3 py-1.5 rounded-full bg-[#f2ede5] text-[#554336] text-xs font-semibold flex items-center gap-1.5">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#8d4b00]" /> Dine-in
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#f2ede5] text-[#554336] text-xs font-semibold flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#8d4b00]" /> Quick Takeaway
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#f2ede5] text-[#554336] text-xs font-semibold flex items-center gap-1.5">
                  <Bike className="w-3.5 h-3.5 text-[#8d4b00]" /> Doorstep Delivery
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://maps.google.com/?q=Near+Zudio,+Papampeta,+Anantapur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1d1c17] text-white text-xs sm:text-sm font-bold hover:bg-black transition-colors shadow-sm active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-[#dbc2b0] hover:bg-[#f2ede5] text-[#554336] text-xs font-bold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Maps Stylized Frame (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-[#f2ede5] bg-[#e5e3df] relative min-h-[380px] flex items-center justify-center">
            {/* Background grid texture representing map lines */}
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(#bcaaa4_1.5px,transparent_1.5px)] [background-size:18px_18px]" />

            {/* Roads decorative stylized SVG lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none stroke-[#a89988]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="20%" x2="100%" y2="80%" strokeWidth="8" />
              <line x1="20%" y1="0" x2="80%" y2="100%" strokeWidth="12" stroke="#d5c8b8" />
              <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="6" />
              <circle cx="50%" cy="50%" r="90" fill="none" strokeWidth="4" strokeDasharray="6 6" />
            </svg>

            {/* Styled Landmark Overlay Card */}
            <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-sm">
              <div className="w-16 h-16 rounded-full bg-[#ba0035] text-white flex items-center justify-center shadow-2xl animate-bounce mb-3.5">
                <span className="text-3xl">🧇</span>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white w-full">
                <h4 className="font-headline text-xl font-bold text-[#1d1c17]">
                  Waffle Maker
                </h4>
                <p className="text-xs text-[#554336] mt-1">
                  Near Zudio, Main Road, Papampeta
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open Now until 11:00 PM
                </div>
                <div className="mt-4 pt-3 border-t border-[#f2ede5] flex justify-center">
                  <a
                    href="https://maps.google.com/?q=Near+Zudio,+Papampeta,+Anantapur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A] hover:text-[#15803D] hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
