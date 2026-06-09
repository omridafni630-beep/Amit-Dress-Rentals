import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemove, onUpdateQuantity }: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + item.rentalPrice * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="font-serif text-2xl">Your Rentals</h2>
          <button onClick={onClose} className="p-2 -mr-2 text-stone-500 hover:text-stone-900 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center">
                <Trash2 size={24} className="text-stone-300" />
              </div>
              <p>Your cart is currently empty.</p>
              <button 
                onClick={onClose}
                className="text-stone-900 underline underline-offset-4 tracking-widest text-sm uppercase font-medium hover:text-rose-700"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-32 flex-shrink-0 bg-stone-100 overflow-hidden">
                    <img src={item.imageProduct} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-stone-400 hover:text-rose-700 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-stone-500 text-sm mt-1">${item.rentalPrice.toFixed(2)} / 4 Days</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-stone-200">
                        <button 
                          className="px-3 py-1 hover:bg-stone-50 disabled:opacity-50"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >-</button>
                        <span className="px-3 py-1 text-sm">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-stone-50"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 bg-stone-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="uppercase tracking-widest text-sm font-medium">Subtotal</span>
              <span className="font-serif text-xl border-b border-stone-300 pb-1">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-stone-500 text-xs mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-stone-900 text-white uppercase tracking-widest text-sm py-4 hover:bg-stone-800 transition-colors">
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
