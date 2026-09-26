import React, { useState } from 'react';
import { SlidersHorizontal, Search, MessageCircle, Plus, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem, CategoryKey } from '../types';

interface MenuSectionProps {
  selectedCategory: CategoryKey;
  onSelectCategory: (category: CategoryKey) => void;
  onOpenItemModal: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenItemModal,
  onAddToCartDirect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: 'All Delights' },
    { key: 'waffles', label: 'Belgian Waffles' },
    { key: 'brownies', label: 'Brownies & Skillets' },
    { key: 'pancakes', label: 'Fluffy Pancakes' },
    { key: 'chicken', label: 'Chicken Loaded' },
    { key: 'fries', label: 'Cheese & Fries' },
    { key: 'shakes', label: 'Beverages & Shakes' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category check
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    // Dietary check
    if (dietaryFilter === 'veg' && !item.isVeg) return false;
    if (dietaryFilter === 'non-veg' && item.isVeg) return false;
    // Search query check
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCartDirect(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1200);
  };

  return (
    <section className="py-20" id="menu">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header & Customization Note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider">
              Live Kitchen Menu
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#1d1c17] mt-1.5 tracking-tight">
              Order Your Favorites
            </h2>
            <p className="text-sm sm:text-base text-[#554336] mt-1.5">
              Prepared fresh to order with pure butter and premium chocolates.
            </p>
          </div>

          {/* Customization Callout Box */}
          <div className="p-4 rounded-2xl bg-[#ffd4c2]/40 border border-[#77574a]/20 max-w-md">
            <div className="flex items-start gap-3">
              <SlidersHorizontal className="w-5 h-5 text-[#8d4b00] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#2c160b] leading-relaxed">
                <strong className="font-bold text-[#1d1c17]">Need customizations?</strong> Extra dark chocolate, double ice cream scoop, or extra cheese sauce? Tap customize or let us know on WhatsApp!
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills Bar & Search Row */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Scrollable Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => onSelectCategory(cat.key)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1d1c17] text-[#fef9f1] shadow-sm'
                        : 'bg-[#f2ede5] hover:bg-[#ece8e0] text-[#554336]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Veg / Non-Veg Toggle & Search */}
            <div className="flex items-center gap-2.5">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-60">
                <Search className="w-4 h-4 text-[#887364] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search flavors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-full border border-[#dbc2b0] bg-white text-xs sm:text-sm text-[#1d1c17] placeholder:text-[#887364] focus:outline-none focus:border-[#8d4b00]"
                />
              </div>

              {/* Dietary Filter Segmented Control */}
              <div className="inline-flex p-1 bg-[#f2ede5] rounded-full border border-[#dbc2b0]/40">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    dietaryFilter === 'all'
                      ? 'bg-white text-[#1d1c17] shadow-xs'
                      : 'text-[#554336]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                    dietaryFilter === 'veg'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-[#554336]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                  Veg
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-white text-red-700 shadow-xs'
                      : 'text-[#554336]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                  Non-Veg
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#f2ede5] p-8 max-w-md mx-auto">
            <span className="text-4xl mb-3 block">🧇</span>
            <h3 className="font-headline text-lg font-bold text-[#1d1c17]">No delicacies found</h3>
            <p className="text-xs text-[#554336] mt-1">
              Try adjusting your search or category filters to discover more items.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#ffdcc3] text-[#2f1500] text-xs font-bold hover:bg-[#ffb77d] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Menu Item Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="menu-items-grid">
          {filteredItems.map((item) => {
            const isAdded = recentlyAddedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onOpenItemModal(item)}
                className="tactile-card tactile-hover bg-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-[#f2ede5] cursor-pointer group transition-all duration-300"
              >
                <div>
                  {/* Photo Thumbnail */}
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-[#f8f3eb]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-[#8d4b00] shadow-sm">
                        {item.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 glass-pill px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#554336] shadow-sm">
                      {item.prepTime}
                    </span>
                  </div>

                  {/* Header Row: Dietary & Price */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
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
                      <span className="text-xs text-[#77574a] font-semibold">{item.subtitle}</span>
                    </div>

                    <span className="font-headline text-2xl font-bold text-[#8d4b00]">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-headline text-xl font-bold text-[#1d1c17] group-hover:text-[#8d4b00] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#554336] mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Quick Actions */}
                <div className="mt-5 pt-4 border-t border-[#f2ede5] flex items-center justify-between gap-2">
                  {/* Quick Add / Customize Trigger */}
                  <button
                    onClick={(e) => handleQuickAdd(e, item)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#ffdcc3]/50 hover:bg-[#8d4b00] text-[#6e3900] hover:text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add / Customize</span>
                      </>
                    )}
                  </button>

                  {/* Direct WhatsApp Order */}
                  <a
                    href={`https://wa.me/919121919205?text=${encodeURIComponent(
                      `Hi Waffle Maker, I would like to order: ${item.name} (₹${item.price})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold shadow-sm transition-transform active:scale-95 whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-[#16A34A]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
