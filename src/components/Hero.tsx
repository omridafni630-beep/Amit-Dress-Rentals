import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566165571064-16e6d624b561?auto=format&fit=crop&q=80&w=2000" 
          alt="Designer Gowns Hero" 
          className="w-full h-full object-cover object-top"
        />
        {/* Soft overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-sm">
          Own the Moment, <br className="hidden md:block"/>
          Not the Dress.
        </h1>
        <p className="text-lg md:text-xl text-stone-100 mb-10 font-light tracking-wide drop-shadow-sm max-w-2xl mx-auto">
          Rent luxury designer gowns and elegant evening wear for your next wedding, gala, or special event. Look stunning without the commitment.
        </p>
        <a 
          href="#collection"
          className="inline-block bg-white text-stone-900 uppercase tracking-widest text-sm font-medium py-4 px-10 rounded-none hover:bg-stone-900 hover:text-white transition-all duration-300"
        >
          Shop the Collection
        </a>
      </div>
    </section>
  );
}
