import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/common/Header';
import CustomButton from '../components/common/CustomButton';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';
import { useCart } from '../context/CartContext';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/colors';
import { Screen } from '../types';

interface Props {
  navigate: (screen: Screen) => void;
}

export default function CartScreen({ navigate }: Props) {
  const cart = useCart();
  return <View style={globalStyles.screen}>
    <Header title="Your cart" onBack={() => navigate('home')}/>
    {!cart.items.length ? <View style={styles.empty}><Text style={styles.icon}>🛒</Text><Text style={styles.title}>Your cart is empty</Text><Text style={styles.copy}>Add something useful for your home.</Text><CustomButton title="Browse products" onPress={() => navigate('products')} style={styles.browse}/></View> : <ScrollView contentContainerStyle={globalStyles.content}>{cart.items.map((item) => <CartItem key={item.id} item={item} onQuantity={(quantity) => cart.updateQuantity(item.id, quantity)}/>)}<OrderSummary subtotal={cart.subtotal}/><CustomButton title="Proceed to checkout" onPress={() => navigate('checkout')} style={styles.checkout}/></ScrollView>}
  </View>;
}
const styles = StyleSheet.create({empty:{flex:1,justifyContent:'center',alignItems:'center',padding:30},icon:{fontSize:58},title:{fontSize:21,fontWeight:'800',color:colors.text,marginTop:8},copy:{fontSize:14,color:colors.muted,marginTop:7},browse:{width:190,marginTop:18},checkout:{marginTop:14}});
