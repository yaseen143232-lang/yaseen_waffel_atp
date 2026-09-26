import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SIGNATURE_CATEGORIES } from '../data/menuData';
import { CategoryKey } from '../types';

interface SignatureBentoProps {
  onSelectCategory: (category: CategoryKey) => void;
}

export const SignatureBento: React.FC<SignatureBentoProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 bg-[#f8f3eb]/70 border-y border-[#dbc2b0]/30" id="categories">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider">
            Artisanal Specialties
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#1d1c17] mt-1.5 tracking-tight">
            Signature Delights
          </h2>
          <p className="text-sm sm:text-base text-[#554336] mt-2 max-w-xl mx-auto">
            Every bite is made live right in front of you. Choose from decadent sweet creations to sizzling savory favorites.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="tactile-card tactile-hover bg-white rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 group border border-[#f2ede5]"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-[#f2ede5]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-[#8d4b00] shadow-sm">
                    {cat.tag}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-[#1d1c17]">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#554336] mt-1.5 leading-relaxed line-clamp-3">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-3 flex items-center justify-between border-t border-[#f2ede5]">
                <div>
                  <span className="text-[11px] text-[#77574a] uppercase font-bold tracking-wider block">Starts at</span>
                  <span className="font-headline text-lg sm:text-xl font-bold text-[#8d4b00]">
                    From {cat.priceFrom}
                  </span>
                </div>
                <button
                  onClick={() => onSelectCategory(cat.categoryKey)}
                  aria-label={`Explore ${cat.title}`}
                  className="w-10 h-10 rounded-full bg-[#ffdbcd]/60 hover:bg-[#b15f00] hover:text-white text-[#77574a] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
