import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, MapPin, Bike } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'takeaway' | 'delivery'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.totalItemPrice * item.quantity,
    0
  );
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutViaWhatsApp = () => {
    if (cartItems.length === 0) return;

    let message = `🧇 *NEW ORDER - Waffle Maker Anantapur* 🧇\n\n`;

    if (customerName.trim()) {
      message += `👤 *Customer:* ${customerName.trim()}`;
      if (customerPhone.trim()) message += ` (${customerPhone.trim()})`;
      message += `\n`;
    }

    message += `📍 *Order Type:* ${
      orderType === 'takeaway'
        ? 'Takeaway Pickup (Near Zudio, Papampeta)'
        : `Doorstep Delivery (Address: ${deliveryAddress.trim() || 'To be shared'})`
    }\n\n`;

    message += `📋 *Items Ordered:*\n`;
    cartItems.forEach((ci, idx) => {
      message += `${idx + 1}. *${ci.quantity}x ${ci.item.name}* - ₹${
        ci.totalItemPrice * ci.quantity
      }\n`;
      if (ci.selectedCustomizations.length > 0) {
        ci.selectedCustomizations.forEach((c) => {
          message += `   └ + ${c.name}\n`;
        });
      }
    });

    message += `\n💰 *Total Amount:* ₹${subtotal}\n`;

    if (specialNote.trim()) {
      message += `📝 *Special Instructions:* ${specialNote.trim()}\n`;
    }

    message += `\nPlease confirm availability and estimated preparation time! 🙏`;

    window.open(
      `https://wa.me/919121919205?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 border-l border-[#f2ede5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#f2ede5] flex items-center justify-between bg-[#f8f3eb]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#8d4b00] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-headline text-lg font-bold text-[#1d1c17]">
                Your Order Bag
              </h2>
              <span className="text-xs text-[#77574a]">
                {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 rounded-full hover:bg-white text-[#77574a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body: Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#f8f3eb] flex items-center justify-center text-3xl mb-3">
                🧇
              </div>
              <h3 className="font-headline text-lg font-bold text-[#1d1c17]">
                Your bag is empty
              </h3>
              <p className="text-xs text-[#77574a] max-w-xs mt-1">
                Explore our crispy Belgian waffles, sizzling brownies, or loaded chicken fries and add your favorites!
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-6 py-2.5 rounded-full bg-[#8d4b00] text-white text-xs font-bold hover:bg-[#6e3900] transition-colors cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* List of Cart Items */}
              <div className="flex flex-col gap-3">
                {cartItems.map((cartItem) => (
                  <div
                    key={cartItem.cartItemId}
                    className="p-3.5 rounded-2xl border border-[#f2ede5] bg-[#fef9f1]/60 flex gap-3 items-start"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#f2ede5]"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold text-[#1d1c17] truncate">
                          {cartItem.item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(cartItem.cartItemId)}
                          className="text-[#887364] hover:text-[#ba0035] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Customizations summary */}
                      {cartItem.selectedCustomizations.length > 0 && (
                        <div className="text-[11px] text-[#77574a] mt-0.5 space-y-0.5">
                          {cartItem.selectedCustomizations.map((c) => (
                            <div key={c.id}>+ {c.name}</div>
                          ))}
                        </div>
                      )}

                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-headline text-sm font-bold text-[#8d4b00]">
                          ₹{cartItem.totalItemPrice * cartItem.quantity}
                        </span>

                        {/* Quantity Stepper */}
                        <div className="inline-flex items-center gap-1.5 border border-[#dbc2b0] rounded-full px-2 py-0.5 bg-white">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                cartItem.cartItemId,
                                cartItem.quantity - 1
                              )
                            }
                            className="p-0.5 hover:text-[#8d4b00] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                cartItem.cartItemId,
                                cartItem.quantity + 1
                              )
                            }
                            className="p-0.5 hover:text-[#8d4b00] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="pt-2 border-t border-[#f2ede5] flex flex-col gap-3">
                <span className="text-xs font-bold text-[#554336] uppercase tracking-wider">
                  Order Type
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'border-[#8d4b00] bg-[#ffdcc3]/30 text-[#8d4b00]'
                        : 'border-[#dbc2b0]/50 text-[#554336] hover:bg-[#f8f3eb]'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Takeaway Pickup</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      orderType === 'delivery'
                        ? 'border-[#8d4b00] bg-[#ffdcc3]/30 text-[#8d4b00]'
                        : 'border-[#dbc2b0]/50 text-[#554336] hover:bg-[#f8f3eb]'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>Local Delivery</span>
                  </button>
                </div>

                {/* Details Inputs */}
                <div className="flex flex-col gap-2 mt-1">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#dbc2b0] text-xs text-[#1d1c17] focus:outline-none focus:border-[#8d4b00]"
                  />

                  {orderType === 'delivery' && (
                    <input
                      type="text"
                      placeholder="Delivery Address / Landmark in Anantapur"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#dbc2b0] text-xs text-[#1d1c17] focus:outline-none focus:border-[#8d4b00]"
                    />
                  )}

                  <input
                    type="text"
                    placeholder="Special instructions (e.g. Extra napkins, less sweet)"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#dbc2b0] text-xs text-[#1d1c17] focus:outline-none focus:border-[#8d4b00]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer: Totals and Checkout CTA */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#f2ede5] bg-[#f8f3eb] flex flex-col gap-3">
            <div className="flex flex-col gap-1 text-xs text-[#554336]">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#1d1c17]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Eco Packaging &amp; Cutlery</span>
                <span className="font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1d1c17] pt-2 border-t border-[#dbc2b0]/40">
                <span>Grand Total</span>
                <span className="font-headline text-lg text-[#8d4b00]">
                  ₹{subtotal}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutViaWhatsApp}
              className="w-full py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#16A34A]" />
              <span>Send Order to WhatsApp • ₹{subtotal}</span>
            </button>

            <button
              onClick={onClearCart}
              className="text-[11px] text-[#77574a] hover:text-[#ba0035] text-center font-semibold transition-colors cursor-pointer"
            >
              Clear Entire Bag
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
