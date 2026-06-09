import React from 'react';
import { Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { reviews } from '../data';

export default function Footer() {
  return (
    <>
      {/* Trust & Social Proof Section */}
      <section id="reviews" className="py-24 bg-stone-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Beloved by Thousands</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Join thousands of women renting their perfect dress for unforgettable moments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 border border-stone-100 shadow-sm">
                <div className="flex text-rose-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 font-light leading-relaxed">"{review.text}"</p>
                <div className="font-serif text-stone-900 tracking-wide">— {review.name}</div>
              </div>
            ))}
          </div>

          <div id="about" className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pt-12 border-t border-stone-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-stone-700">
                <Truck size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium tracking-widest uppercase text-sm mb-2">Pre-Paid Returns</h3>
              <p className="text-stone-500 font-light text-sm">Returning your dress is simple with our pre-paid shipping labels.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-stone-700">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium tracking-widest uppercase text-sm mb-2">Dry Cleaning Included</h3>
              <p className="text-stone-500 font-light text-sm">Don't worry about the aftermath. Professional dry cleaning is on us.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-stone-700">
                <RefreshCw size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-medium tracking-widest uppercase text-sm mb-2">4-Day Rentals</h3>
              <p className="text-stone-500 font-light text-sm">Enjoy a flexible 4-day rental period so you're never rushed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-stone-900 text-stone-400 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="md:w-1/3">
            <h2 className="font-serif text-white text-2xl mb-6">Amit Dress Rentals</h2>
            <p className="font-light text-sm leading-relaxed mb-6">
              Embrace the elegance of designer fashion. We provide luxury dress rentals so you can feel beautiful at every event without breaking the bank.
            </p>
          </div>

          <div className="hidden md:flex gap-16 md:w-1/3 justify-center">
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#collection" className="hover:text-white transition-colors">Our Collection</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About the Brand</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3 w-full">
            <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Join the Inner Circle</h4>
            <p className="font-light text-sm leading-relaxed mb-4">
              Subscribe to receive 10% off your first order and exclusive access to new arrivals.
            </p>
            <form className="flex border-b border-stone-700 pb-2 focus-within:border-white transition-colors" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-white w-full text-sm font-light placeholder-stone-600"
                required
              />
              <button type="submit" className="text-white uppercase tracking-widest text-xs font-semibold hover:text-rose-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Amit Dress Rentals. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
