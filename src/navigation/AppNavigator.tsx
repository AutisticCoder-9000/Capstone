import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderSuccessModal from '../screens/OrderSuccessModal';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import { colors } from '../styles/colors';
import { Product } from '../types';

type Screen = 'home' | 'categories' | 'products' | 'detail' | 'cart' | 'checkout';

type NavigateParams = { category?: string; product?: Product };

interface BottomTabsProps {
  active: Screen;
  navigate: (screen: Screen) => void;
  count: number;
}

export default function AppNavigator() {
  const [screen, setScreen] = useState<Screen>('home');
  const [selected, setSelected] = useState<Product | null>(null);
  const [order, setOrder] = useState<{ id: string; total: number; delivery: any } | null>(null);
  const cart = useCart();
  const productState = useProducts();
  const navigate = (next: Screen, params: NavigateParams = {}) => {
    if (params.category) productState.setActiveCategory(params.category);
    if (params.product) setSelected(params.product);
    setScreen(next);
  };
  const addItem = (product: Product) => cart.addItem(product);
  const completeOrder = (delivery: any) => { setOrder({ id: `MS-${Date.now().toString().slice(-7)}`, total: cart.subtotal, delivery }); cart.clearCart(); };
  const closeOrder = () => { setOrder(null); setScreen('home'); productState.resetFilters(); };
  const screens: Record<Screen, React.ReactNode> = {
    home: <HomeScreen navigate={navigate} addItem={addItem} />,
    categories: <CategoriesScreen navigate={navigate} />,
    products: <ProductListScreen navigate={navigate} addItem={addItem} />,
    detail: <ProductDetailScreen product={selected} navigate={navigate} addItem={addItem} />,
    cart: <CartScreen navigate={navigate} />,
    checkout: <CheckoutScreen navigate={navigate} completeOrder={completeOrder} />
  };
  return <SafeAreaView style={styles.safe}>{screens[screen]}{['home','categories','products','cart'].includes(screen) && <BottomTabs active={screen} navigate={navigate} count={cart.itemCount}/>}<OrderSuccessModal order={order} onClose={closeOrder}/></SafeAreaView>;
}
function BottomTabs({ active, navigate, count }: BottomTabsProps) {
  const tabs: Array<[Screen, React.ComponentProps<typeof Ionicons>['name'], string]> = [
    ['home', 'home-outline', 'Home'],
    ['categories', 'grid-outline', 'Categories'],
    ['cart', 'cart-outline', 'Cart']
  ];
  return <View style={styles.tabs}>{tabs.map(([id, icon, label]) => <Pressable key={id} onPress={() => navigate(id)} style={styles.tabWrap}><Ionicons name={icon} size={22} color={active === id ? '#fff' : '#DDEBEB'} /><Text style={[styles.tabText, active === id && styles.activeText]}>{label}</Text>{id === 'cart' && count > 0 ? <View style={styles.badge}><Text style={styles.badgeText}>{count}</Text></View> : null}</Pressable>)}</View>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},tabs:{height:62,flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:colors.primary},tabWrap:{alignItems:'center',justifyContent:'center',width:90,height:62},tabText:{fontSize:10,color:'#DDEBEB',marginTop:2},activeText:{color:'#fff',fontWeight:'800'},badge:{position:'absolute',right:11,top:7,minWidth:16,height:16,justifyContent:'center',alignItems:'center',borderRadius:8,backgroundColor:colors.accent},badgeText:{fontSize:9,fontWeight:'800',color:'#fff'}});
