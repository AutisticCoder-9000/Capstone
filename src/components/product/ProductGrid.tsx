import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface Props {
  products: Product[];
  onOpen: (product: Product) => void;
  onAdd: (product: Product) => void;
}

export default function ProductGrid({ products, onOpen, onAdd }: Props) {
  return <View style={styles.grid}>{products.map((product) => <ProductCard key={product.id} product={product} onOpen={onOpen} onAdd={onAdd}/>)}</View>;
}
const styles = StyleSheet.create({ grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'} });
