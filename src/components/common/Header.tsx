import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';
import { useCart } from '../../context/CartContext';

interface Props {
  title?: string;
  onBack?: () => void;
  onCart?: () => void;
}

export default function Header({ title, onBack, onCart }: Props) {
  const cart = useCart();
  const itemCount = cart.itemCount;
  return <View style={styles.header}>{onBack ? <Pressable onPress={onBack} hitSlop={12}><Ionicons name="arrow-back" size={24} color={colors.text}/></Pressable> : <Text style={styles.logo}>MyShoppy<Text style={{ color: colors.primary }}>.</Text></Text>}<Text numberOfLines={1} style={styles.title}>{title || ''}</Text>{onCart ? <Pressable onPress={onCart} style={styles.cart}><Ionicons name="cart-outline" size={26} color={colors.text}/>{itemCount > 0 && <View style={styles.badge}><Text style={styles.badgeText}>{itemCount}</Text></View>}</Pressable> : <View style={{ width: 24 }}/>}</View>;
}
const styles = StyleSheet.create({ header:{height:72,flexDirection:'row',alignItems:'center',paddingHorizontal:20,backgroundColor:'#fff',borderBottomWidth:1,borderColor:colors.border},logo:{fontSize:22,fontStyle:'italic',color:'#557477',minWidth:110},title:{flex:1,marginLeft:14,color:colors.text,fontSize:17,fontWeight:'800'},cart:{position:'relative',width:40,alignItems:'flex-end'},badge:{position:'absolute',right:0,top:-6,minWidth:16,height:16,borderRadius:8,alignItems:'center',justifyContent:'center',backgroundColor:colors.accent,paddingHorizontal:2},badgeText:{fontSize:10,fontWeight:'800',color:'#fff'} });
