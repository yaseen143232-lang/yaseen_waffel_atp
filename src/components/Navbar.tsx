import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#fef9f1]/95 backdrop-blur-md shadow-sm border-b border-[#dbc2b0]/30'
          : 'bg-[#fef9f1]/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Zone */}
        <a href="#home" className="flex items-center gap-2.5 group active:scale-95 transition-transform">
          <div className="w-10 h-10 rounded-full bg-[#b15f00] flex items-center justify-center text-white shadow-sm group-hover:rotate-12 transition-transform">
            <span className="text-xl">🧇</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-2xl text-[#8d4b00] tracking-tight leading-none">
              Waffle Maker
            </span>
            <span className="text-xs text-[#554336] font-medium hidden sm:block mt-0.5">
              Belgian Waffles &amp; Loaded Bites
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="#home"
            className="text-sm text-[#8d4b00] font-bold border-b-2 border-[#8d4b00] pb-0.5 tracking-tight transition-colors"
          >
            Home
          </a>
          <a
            href="#categories"
            className="text-sm text-[#554336] hover:text-[#8d4b00] font-medium pb-0.5 tracking-tight transition-colors"
          >
            Categories
          </a>
          <a
            href="#menu"
            className="text-sm text-[#554336] hover:text-[#8d4b00] font-medium pb-0.5 tracking-tight transition-colors"
          >
            Menu
          </a>
          <a
            href="#story"
            className="text-sm text-[#554336] hover:text-[#8d4b00] font-medium pb-0.5 tracking-tight transition-colors"
          >
            Story
          </a>
          <a
            href="#location"
            className="text-sm text-[#554336] hover:text-[#8d4b00] font-medium pb-0.5 tracking-tight transition-colors"
          >
            Location &amp; Hours
          </a>
          <a
            href="#contact"
            className="text-sm text-[#554336] hover:text-[#8d4b00] font-medium pb-0.5 tracking-tight transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Trailing Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="View Shopping Cart"
            className="relative p-2.5 rounded-full border border-[#dbc2b0] bg-white text-[#554336] hover:bg-[#ffdcc3]/30 hover:border-[#8d4b00] transition-colors flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5 text-[#8d4b00]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#ba0035] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Call Now */}
          <a
            href="tel:+919121919205"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#77574a] text-[#77574a] hover:bg-[#ffdbcd]/40 transition-colors text-sm font-bold"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Order */}
          <a
            href="https://wa.me/919121919205?text=Hi%20Waffle%20Maker,%20I%20would%20like%20to%20place%20an%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-bold shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#16A34A]" />
            <span className="hidden xs:inline">WhatsApp Order</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#554336] hover:bg-[#f2ede5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fef9f1] border-b border-[#dbc2b0]/50 px-4 py-4 flex flex-col gap-3 shadow-lg animate-in slide-in-from-top-2">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-base font-semibold text-[#8d4b00] hover:bg-[#ffdcc3]/40"
          >
            Home
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-base font-medium text-[#554336] hover:bg-[#ffdcc3]/30"
          >
            Categories
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-base font-medium text-[#554336] hover:bg-[#ffdcc3]/30"
          >
            Menu &amp; Pricing
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-base font-medium text-[#554336] hover:bg-[#ffdcc3]/30"
          >
            Our Story &amp; Craft
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-base font-medium text-[#554336] hover:bg-[#ffdcc3]/30"
          >
            Location &amp; Operating Hours
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-base font-medium text-[#554336] hover:bg-[#ffdcc3]/30"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-[#dbc2b0]/40 flex gap-2">
            <a
              href="tel:+919121919205"
              className="flex-1 text-center py-2.5 rounded-full border border-[#77574a] text-[#77574a] font-bold text-sm"
            >
              Call Now
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex-1 text-center py-2.5 rounded-full bg-[#8d4b00] text-white font-bold text-sm"
            >
              View Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
