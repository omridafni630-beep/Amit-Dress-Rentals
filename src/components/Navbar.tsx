import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center bg-transparent">
            <a href="#home" className="text-sm tracking-widest uppercase hover:text-rose-700 transition-colors">Home</a>
            <a href="#collection" className="text-sm tracking-widest uppercase hover:text-rose-700 transition-colors">Collection</a>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 text-center flex-1 md:flex-none">
            <a href="#" className="font-serif text-2xl tracking-wide text-stone-900">
              Amit Dress Rentals
            </a>
          </div>

          {/* Right menu (Desktop & Mobile) */}
          <div className="flex space-x-8 items-center justify-end hidden md:flex">
             <a href="#about" className="text-sm tracking-widest uppercase hover:text-rose-700 transition-colors">About Us</a>
             <a href="#reviews" className="text-sm tracking-widest uppercase hover:text-rose-700 transition-colors">Reviews</a>
          </div>

          {/* Icons Context */}
          <div className="flex items-center space-x-4 md:ml-8">
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-stone-900 hover:text-rose-700 transition-colors"
            >
              <ShoppingBag size={24} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-rose-700 rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg shadow-black/5">
          <a href="#home" className="block py-2 text-sm uppercase tracking-wider text-center border-b border-stone-100" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#collection" className="block py-2 text-sm uppercase tracking-wider text-center border-b border-stone-100" onClick={() => setMobileMenuOpen(false)}>Collection</a>
          <a href="#about" className="block py-2 text-sm uppercase tracking-wider text-center border-b border-stone-100" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#reviews" className="block py-2 text-sm uppercase tracking-wider text-center" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
        </div>
      )}
    </nav>
  );
}
