import React, { createContext, useContext, useMemo, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { maxProductPrice, mockProducts } from '../data/mockProducts';
import type { Product } from '../types';

interface ProductContextType {
  products: Product[];
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  availableOnly: boolean;
  setAvailableOnly: Dispatch<SetStateAction<boolean>>;
  resetFilters: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);
  const [availableOnly, setAvailableOnly] = useState(false);

  const products = useMemo(
    () =>
      mockProducts.filter(
        (product) =>
          `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase()) &&
          (activeCategory === 'All' || product.category === activeCategory) &&
          product.price <= maxPrice &&
          (!availableOnly || product.stock > 0)
      ),
    [query, activeCategory, maxPrice, availableOnly]
  );

  const resetFilters = () => {
    setQuery('');
    setActiveCategory('All');
    setMaxPrice(maxProductPrice);
    setAvailableOnly(false);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        query,
        setQuery,
        activeCategory,
        setActiveCategory,
        maxPrice,
        setMaxPrice,
        availableOnly,
        setAvailableOnly,
        resetFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};
