import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';

interface FloatingWhatsAppProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <aside className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Floating Cart Button (if items in cart) */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="group flex items-center gap-2.5 bg-[#8d4b00] hover:bg-[#6e3900] text-white px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-[#8d4b00] rounded-full text-[10px] font-extrabold flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <span className="text-xs font-bold">Review Order</span>
        </button>
      )}

      {/* Persistent WhatsApp Widget */}
      <a
        href="https://wa.me/919121919205?text=Hi%20Waffle%20Maker,%20I%20would%20like%20to%20place%20an%20order!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="group flex items-center gap-3 bg-[#16A34A] hover:bg-[#15803D] text-white pl-3.5 pr-4 sm:pr-5 py-2.5 sm:py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/25"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-[#16A34A]" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-emerald-100 font-bold leading-none">
            Craving waffles?
          </span>
          <span className="text-xs sm:text-sm font-bold leading-tight mt-0.5">
            Order on WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
};
