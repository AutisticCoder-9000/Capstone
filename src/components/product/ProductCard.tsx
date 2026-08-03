import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../common/CustomButton';
import { colors } from '../../styles/colors';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface Props {
  product: Product;
  onOpen: (product: Product) => void;
  onAdd: (product: Product) => void;
}

const money = (price: number) => `₹${price.toLocaleString('en-IN')}`;
export default function ProductCard({ product, onOpen, onAdd }: Props) {
  const cart = useCart();
  const inCart = cart.items.some((item) => item.id === product.id);
  const canAdd = product.stock > 0;
  const buttonTitle = !canAdd ? 'Unavailable' : inCart ? 'Added to cart' : 'Add to cart';

  return (
    <Pressable onPress={() => onOpen(product)} style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.category}>{product.category}</Text>
        <Text numberOfLines={2} style={styles.name}>{product.name}</Text>
        <View style={styles.meta}>
          <Text style={styles.price}>{money(product.price)}</Text>
          <Text style={styles.rating}>★ {product.rating}</Text>
        </View>
        <Text style={[styles.stock, !product.stock && styles.unavailable]}>{product.stock ? `${product.stock} in stock` : 'Unavailable'}</Text>
        <CustomButton
          title={buttonTitle}
          disabled={!canAdd}
          onPress={() => onAdd(product)}
          style={[styles.button, inCart && canAdd && styles.addedButton]}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: { width: '48%', backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, borderRadius: 12, overflow: 'hidden', marginBottom: 16 },
  image: { width: '100%', height: 140, backgroundColor: '#E8EFED' },
  body: { padding: 14 },
  category: { fontSize: 10, color: colors.primary, fontWeight: '800', textTransform: 'uppercase' },
  name: { minHeight: 44, color: colors.text, fontSize: 15, fontWeight: '800', lineHeight: 20, marginTop: 6 },
  meta: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  price: { fontSize: 16, fontWeight: '800', color: colors.text },
  rating: { fontSize: 11, color: colors.warning, fontWeight: '700' },
  stock: { fontSize: 12, color: colors.success, marginTop: 8 },
  unavailable: { color: '#A54A40' },
  button: { height: 40, marginTop: 12 },
  addedButton: { backgroundColor: colors.success },
  buttonText: { fontSize: 13 },
});
