import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, Flame, Droplets, Star } from 'lucide-react';
import { HOTLINK_IMAGES } from '../data/menuData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20" id="home">
      {/* Ambient Backlight */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#ffdbcd]/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#ffdcc3]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Text Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Quick Pill Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-[#554336] text-xs font-semibold shadow-sm">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-bold text-amber-600">4.9</span> Local Favorite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-[#554336] text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#8d4b00]" />
                100% Fresh Batter Daily
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-[#8d4b00] text-xs font-semibold shadow-sm bg-[#ffdcc3]/40">
                <Flame className="w-3.5 h-3.5 text-[#8d4b00]" />
                Ready in 10-15 Mins
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1d1c17] tracking-tight leading-[1.12]">
              Freshly Baked{' '}
              <span className="text-[#b15f00] relative inline-block">
                Belgian Magic
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#ffdcc3]/80 -z-10"
                  viewBox="0 0 200 8"
                  fill="currentColor"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q100,0 200,5 L200,8 Q100,3 0,8 Z" />
                </svg>
              </span>{' '}
              &amp; Crispy Loaded Bites in Anantapur
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#554336] max-w-2xl leading-relaxed">
              Handcrafted golden Belgian waffles, sizzling brownie skillets, fluffy morning pancakes, and crave-worthy loaded chicken fries. Made fresh to order right near Zudio, Papampeta.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#b15f00] text-white font-bold text-sm shadow-md hover:bg-[#8d4b00] transition-all active:scale-95 group"
              >
                <span>Explore Full Menu</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://wa.me/919121919205?text=Hi%20Waffle%20Maker,%20I%20would%20like%20to%20place%20an%20order!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] text-white font-bold text-sm shadow-md hover:bg-[#15803D] transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#16A34A]" />
                <span>Instant WhatsApp Order</span>
              </a>
            </div>

            {/* Storefront Live Status */}
            <div className="flex items-center gap-3 pt-3 border-t border-[#dbc2b0]/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <p className="text-xs sm:text-sm text-[#554336]">
                <strong className="text-[#1d1c17]">Baking Now</strong> • Near Zudio, Papampeta • Open Daily 11:00 AM – 11:00 PM
              </p>
            </div>
          </div>

          {/* Featured Hero Visual (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rounded Showcase Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#f8f3eb] aspect-square">
                <img
                  src={HOTLINK_IMAGES.waffleHero}
                  alt="Gourmet Belgian Waffle with chocolate drizzle and berries"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Glass Badges */}
                <div className="absolute top-4 left-4 glass-pill px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
                  <span className="text-xs font-bold text-[#1d1c17]">Freshly Baked</span>
                </div>

                <div className="absolute bottom-4 right-4 glass-pill px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-[#8d4b00] fill-[#8d4b00]" />
                  <span className="text-xs font-bold text-[#1d1c17]">Belgian Chocolate Drizzle</span>
                </div>
              </div>

              {/* Decorative Floating Review Snippet */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-xl border border-[#f2ede5] max-w-xs animate-in fade-in duration-500">
                <div className="w-10 h-10 rounded-full bg-[#ffd4c2] flex items-center justify-center text-[#7a5a4c] font-bold text-sm">
                  Y
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-[#1d1c17]">"Best waffles in Anantapur!"</p>
                  <p className="text-[11px] text-[#554336]">Crisp crust &amp; rich Nutella</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
