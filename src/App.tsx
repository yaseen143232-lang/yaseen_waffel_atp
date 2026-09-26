/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureBento } from './components/SignatureBento';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { ContactBanner } from './components/ContactBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer } from './components/CartDrawer';
import { ItemModal } from './components/ItemModal';
import { MenuItem, CustomizationOption, CartItem, CategoryKey } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleSelectCategory = (category: CategoryKey) => {
    setSelectedCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedCustomizations: CustomizationOption[]
  ) => {
    const customPrice = selectedCustomizations.reduce(
      (sum, opt) => sum + opt.price,
      0
    );
    const totalItemPrice = item.price + customPrice;

    // Create unique key based on item ID and selected customization IDs
    const customIds = selectedCustomizations
      .map((c) => c.id)
      .sort()
      .join('-');
    const cartItemId = `${item.id}_${customIds}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          cartItemId,
          item,
          quantity,
          selectedCustomizations,
          totalItemPrice,
        },
      ];
    });

    showToast(`Added ${quantity}x ${item.name} to order bag!`);
  };

  const handleAddToCartDirect = (item: MenuItem) => {
    handleAddToCart(item, 1, []);
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((ci) =>
        ci.cartItemId === cartItemId ? { ...ci, quantity: newQuantity } : ci
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fef9f1] text-[#1d1c17] flex flex-col font-sans selection:bg-[#ffdcc3] selection:text-[#2f1500]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#1d1c17] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-in slide-in-from-top-3 border border-white/20">
          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white">
            <Check className="w-3 h-3 stroke-[3]" />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <SignatureBento onSelectCategory={handleSelectCategory} />
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenItemModal={(item) => setModalItem(item)}
          onAddToCartDirect={handleAddToCartDirect}
        />
        <StorySection />
        <Testimonials />
        <LocationSection />
        <ContactBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom WhatsApp & Cart Quick Action */}
      <FloatingWhatsApp
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Customization & Detail Modal */}
      <ItemModal
        item={modalItem}
        onClose={() => setModalItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
