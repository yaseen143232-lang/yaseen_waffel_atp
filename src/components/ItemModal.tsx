import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, Check } from 'lucide-react';
import { MenuItem, CustomizationOption } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedCustomizations: CustomizationOption[]
  ) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<
    CustomizationOption[]
  >([]);

  const toggleCustomization = (option: CustomizationOption) => {
    if (selectedCustomizations.some((c) => c.id === option.id)) {
      setSelectedCustomizations(
        selectedCustomizations.filter((c) => c.id !== option.id)
      );
    } else {
      setSelectedCustomizations([...selectedCustomizations, option]);
    }
  };

  const customizationTotal = selectedCustomizations.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  const unitPrice = item.price + customizationTotal;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedCustomizations);
    onClose();
  };

  const handleWhatsAppInstant = () => {
    const addonsText =
      selectedCustomizations.length > 0
        ? ` with addons: ${selectedCustomizations.map((c) => c.name).join(', ')}`
        : '';
    const text = `Hi Waffle Maker, I would like to order ${quantity}x ${item.name}${addonsText}. Total: ₹${totalPrice}`;
    window.open(
      `https://wa.me/919121919205?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#f2ede5] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative h-60 w-full bg-[#f8f3eb]">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          {item.badge && (
            <span className="absolute top-4 left-4 glass-pill px-3 py-1 rounded-full text-xs font-bold text-[#8d4b00] shadow-sm">
              {item.badge}
            </span>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {item.isVeg ? (
                  <span
                    title="Pure Vegetarian"
                    className="w-4 h-4 rounded-xs border border-emerald-600 flex items-center justify-center p-0.5 bg-emerald-50"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  </span>
                ) : (
                  <span
                    title="Contains Non-Veg Chicken"
                    className="w-4 h-4 rounded-xs border border-red-600 flex items-center justify-center p-0.5 bg-red-50"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                  </span>
                )}
                <span className="text-xs text-[#77574a] font-semibold">
                  {item.subtitle}
                </span>
                <span className="text-xs text-[#887364]">• {item.prepTime}</span>
              </div>
              <h2 className="font-headline text-2xl font-bold text-[#1d1c17]">
                {item.name}
              </h2>
            </div>
            <div className="text-right shrink-0">
              <span className="font-headline text-2xl font-bold text-[#8d4b00]">
                ₹{item.price}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#554336] mt-3 leading-relaxed">
            {item.description}
          </p>

          {/* Customization Options */}
          {item.customizations && item.customizations.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#f2ede5]">
              <h3 className="font-headline text-sm font-bold text-[#1d1c17] mb-2.5">
                Customize Your Delight
              </h3>
              <p className="text-xs text-[#77574a] mb-3">
                Select your preferred dips, scoops, or toppings:
              </p>
              <div className="flex flex-col gap-2">
                {item.customizations.map((option) => {
                  const isChecked = selectedCustomizations.some(
                    (c) => c.id === option.id
                  );
                  return (
                    <label
                      key={option.id}
                      onClick={() => toggleCustomization(option)}
                      className={`flex items-center justify-between p-3 rounded-2xl border text-xs sm:text-sm cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#8d4b00] bg-[#ffdcc3]/20 text-[#1d1c17] font-semibold'
                          : 'border-[#dbc2b0]/50 hover:border-[#8d4b00]/50 text-[#554336]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#8d4b00] border-[#8d4b00] text-white'
                              : 'border-[#dbc2b0] bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span>{option.name}</span>
                      </div>
                      <span className="font-bold text-[#8d4b00]">
                        +₹{option.price}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Stepper & Final Price */}
          <div className="mt-6 pt-5 border-t border-[#f2ede5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#554336]">Quantity:</span>
              <div className="inline-flex items-center gap-2 border border-[#dbc2b0] rounded-full p-1 bg-[#f8f3eb]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#554336] hover:bg-[#ffdcc3] hover:text-[#8d4b00] transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-sm font-bold text-[#1d1c17]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#554336] hover:bg-[#ffdcc3] hover:text-[#8d4b00] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-[#77574a] block font-bold uppercase tracking-wider">
                Total
              </span>
              <span className="font-headline text-2xl font-bold text-[#8d4b00]">
                ₹{totalPrice}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleAdd}
              className="flex-1 py-3.5 rounded-full bg-[#8d4b00] hover:bg-[#6e3900] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Add to Order • ₹{totalPrice}
            </button>
            <button
              onClick={handleWhatsAppInstant}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#16A34A]" />
              <span>Instant WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
