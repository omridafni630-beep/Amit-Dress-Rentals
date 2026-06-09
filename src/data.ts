import { Product, Review } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sapphire Satin Evening Gown',
    retailPrice: 450,
    rentalPrice: 65,
    imageProduct: 'https://images.unsplash.com/photo-1582533561751-2485ed6f9c96?auto=format&fit=crop&q=80&w=800',
    imageModel: 'https://images.unsplash.com/photo-1595777457583-95e059f58196?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Midnight Velvet Elegance',
    retailPrice: 320,
    rentalPrice: 55,
    imageProduct: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800',
    imageModel: 'https://images.unsplash.com/photo-1566165571064-16e6d624b561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Onyx Silk Halter Gown',
    retailPrice: 480,
    rentalPrice: 75,
    imageProduct: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=800',
    imageModel: 'https://images.unsplash.com/photo-1566206091558-f3d9cecae5d9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Amethyst Draped Corset Gown',
    retailPrice: 390,
    rentalPrice: 60,
    imageProduct: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=800',
    imageModel: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&q=80&w=800'
  }
];

export const reviews: Review[] = [
  { id: '1', name: 'Eleanor H.', rating: 5, text: 'Rented the Sapphire Satin Gown for a black-tie wedding. The process was seamless and the dress was in strictly perfect condition!' },
  { id: '2', name: 'Sophia R.', rating: 5, text: 'Fast delivery, gorgeous premium packaging, and it fit like an absolute dream. I love not having to buy a $400 dress I\'ll only wear once.' },
  { id: '3', name: 'Isabella C.', rating: 5, text: 'I received so many compliments on the Midnight Velvet dress. Returning it was incredibly easy with the pre-paid label.' }
];
