import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-full aspect-[3/4] overflow-hidden mb-4 bg-stone-100 cursor-pointer">
        {/* Default Product Image */}
        <img 
          src={product.imageProduct} 
          alt={`${product.name} material details`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
        />
        
        {/* Hover Model Image */}
        <img 
          src={product.imageModel} 
          alt={`${product.name} worn by model`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
        />

        {/* Quick Add Button Base overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
          <button 
            onClick={handleAddToCart}
            className={`w-full py-3 text-sm tracking-widest uppercase font-medium transition-colors ${
              isAdded 
                ? 'bg-rose-700 text-white' 
                : 'bg-white text-stone-900 hover:bg-stone-900 hover:text-white'
            }`}
          >
            {isAdded ? 'Added to Rentals' : 'Rent Now'}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <h3 className="font-serif text-lg text-stone-900 mb-1 text-center">{product.name}</h3>
      <div className="flex gap-3 text-sm">
        <span className="text-stone-500 line-through text-xs mt-0.5 mr-1">Retail ${product.retailPrice.toFixed(2)}</span>
        <span className="font-medium text-rose-800">Rent ${product.rentalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
