export interface Product {
  id: string;
  name: string;
  retailPrice: number;
  rentalPrice: number;
  imageProduct: string;
  imageModel: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}
