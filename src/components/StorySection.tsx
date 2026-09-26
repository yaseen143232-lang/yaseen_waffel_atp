import React from 'react';
import { Utensils, Award, Sparkles, ChefHat } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8f3eb]/60 border-t border-[#dbc2b0]/30" id="story">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Visual & Founder Plaque (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="tactile-card bg-white p-8 rounded-3xl border border-[#f2ede5] relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#ffdcc3]/30 rounded-full blur-2xl" />

              <div className="w-14 h-14 rounded-2xl bg-[#b15f00] text-white flex items-center justify-center mb-6 shadow-md">
                <Utensils className="w-7 h-7" />
              </div>

              <h3 className="font-headline text-2xl font-bold text-[#1d1c17]">
                Shaik Md Yaseen
              </h3>
              <p className="text-sm font-bold text-[#8d4b00] mt-0.5">
                Founder &amp; Chief Baker
              </p>

              <blockquote className="text-sm text-[#554336] italic mt-4 border-l-2 border-[#b15f00] pl-4 leading-relaxed">
                "Crafted with Passion right here in Anantapur. We believe every waffle must possess that signature Brussels crunch on the outside with a cloud-soft interior, complemented by sinful chocolate and savory crispy chicken bites that redefine street-side gourmet."
              </blockquote>

              <div className="mt-6 pt-6 border-t border-[#f2ede5] grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-[#77574a] font-bold uppercase tracking-wider block">
                    Kitchen Location
                  </span>
                  <span className="text-xs font-semibold text-[#1d1c17] mt-0.5 block">
                    Near Zudio, Papampeta
                  </span>
                </div>
                <div className="border-l border-[#dbc2b0]/40 pl-4">
                  <span className="text-[11px] text-[#77574a] font-bold uppercase tracking-wider block">
                    Daily Standard
                  </span>
                  <span className="text-xs font-semibold text-[#1d1c17] mt-0.5 block">
                    100% Fresh Daily Batter
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Story Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider">
                Authentic Belgian Standards
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#1d1c17] mt-1.5 tracking-tight">
                Why Dessert Enthusiasts &amp; Foodies Choose Waffle Maker
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#554336] leading-relaxed">
              We brought the golden standard of European waffle craftsmanship to Anantapur. No pre-packaged mixes or microwaved pastries — every single item is griddled fresh upon your order.
            </p>

            {/* 3 Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#f2ede5] shadow-xs">
                <Award className="w-6 h-6 text-[#8d4b00] mb-2.5" />
                <h4 className="font-headline text-sm font-bold text-[#1d1c17]">
                  Premium Ingredients
                </h4>
                <p className="text-xs text-[#554336] mt-1.5 leading-relaxed">
                  Real dairy butter, imported cocoa, pure Nutella, and farm-fresh poultry.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#f2ede5] shadow-xs">
                <Sparkles className="w-6 h-6 text-[#8d4b00] mb-2.5" />
                <h4 className="font-headline text-sm font-bold text-[#1d1c17]">
                  Pearl Sugar Crunch
                </h4>
                <p className="text-xs text-[#554336] mt-1.5 leading-relaxed">
                  Authentic caramelized sugar beads that create that prized European waffle snap.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#f2ede5] shadow-xs">
                <ChefHat className="w-6 h-6 text-[#8d4b00] mb-2.5" />
                <h4 className="font-headline text-sm font-bold text-[#1d1c17]">
                  Spotless Open Kitchen
                </h4>
                <p className="text-xs text-[#554336] mt-1.5 leading-relaxed">
                  Watch your waffles, pancakes, and chicken sizzle in our clean open galley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
