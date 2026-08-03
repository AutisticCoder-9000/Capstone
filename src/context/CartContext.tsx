import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import type { Product } from '../types';

type CartItem = Product & { quantity: number };

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Omit<CartItem, 'quantity'>) => boolean;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Omit<CartItem, 'quantity'>) => {
    if (!product.stock) return false;
    setItems((current) => {
      const saved = current.find((item) => item.id === product.id);
      if (!saved) return [...current, { ...product, quantity: 1 }];
      if (saved.quantity >= product.stock) return current;
      return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
    });
    return true;
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((current) =>
      current.flatMap((item) =>
        item.id !== id
          ? [item]
          : quantity <= 0
          ? []
          : [{ ...item, quantity: Math.min(item.stock, quantity) }]
      )
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  return (
    <CartContext.Provider value={{ items, itemCount, subtotal, addItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
