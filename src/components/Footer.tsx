import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1d1c17] text-[#fef9f1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#e7e2da]/15">
          {/* Brand identity in footer */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧇</span>
              <span className="font-headline text-2xl font-bold tracking-tight text-[#fef9f1]">
                Waffle Maker
              </span>
            </div>
            <p className="text-xs text-[#ded9d2] mt-1.5">
              Belgian Waffles • Sizzling Brownies • Fluffy Pancakes • Chicken Loaded Bites
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#home" className="text-xs font-bold text-[#ffdcc3] hover:underline">
              Home
            </a>
            <a
              href="#categories"
              className="text-xs font-medium text-[#ded9d2] hover:text-white transition-colors"
            >
              Categories
            </a>
            <a
              href="#menu"
              className="text-xs font-medium text-[#ded9d2] hover:text-white transition-colors"
            >
              Menu
            </a>
            <a
              href="#story"
              className="text-xs font-medium text-[#ded9d2] hover:text-white transition-colors"
            >
              Our Story
            </a>
            <a
              href="#location"
              className="text-xs font-medium text-[#ded9d2] hover:text-white transition-colors"
            >
              Location &amp; Hours
            </a>
            <a
              href="#contact"
              className="text-xs font-medium text-[#ded9d2] hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Bottom Credits and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#ded9d2]/80">
          <p className="text-center md:text-left">
            © 2024 Waffle Maker Anantapur. Handcrafted by Shaik Md Yaseen. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Near Zudio, Papampeta, Anantapur • +91 9121919205
          </p>
        </div>
      </div>
    </footer>
  );
};
