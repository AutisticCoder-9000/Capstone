export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  description: string;
}

export type Screen = 'home' | 'categories' | 'products' | 'detail' | 'cart' | 'checkout';

export type NavigateParams = {
  category?: string;
  product?: Product;
};
