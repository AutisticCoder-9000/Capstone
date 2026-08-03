import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

interface Item {
  image: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
}

interface Props {
  item: Item;
  onQuantity: (quantity: number) => void;
}

const money = (price: number) => `₹${price.toLocaleString('en-IN')}`;
export default function CartItem({ item, onQuantity }: Props) { return <View style={styles.row}><Image source={{ uri: item.image }} style={styles.image}/><View style={styles.info}><Text numberOfLines={2} style={styles.name}>{item.name}</Text><Text style={styles.price}>{money(item.price)}</Text><Text style={styles.stock}>{item.stock} available</Text><View style={styles.controls}><Pressable onPress={() => onQuantity(item.quantity - 1)}><Ionicons name="remove-circle-outline" size={27} color={colors.primary}/></Pressable><Text style={styles.quantity}>{item.quantity}</Text><Pressable disabled={item.quantity >= item.stock} onPress={() => onQuantity(item.quantity + 1)} style={item.quantity >= item.stock && styles.disabled}><Ionicons name="add-circle-outline" size={27} color={colors.primary}/></Pressable><Pressable onPress={() => onQuantity(0)} style={styles.remove}><Ionicons name="trash-outline" size={18} color="#A54A40"/></Pressable></View></View></View>; }
const styles = StyleSheet.create({row:{flexDirection:'row',padding:10,borderWidth:1,borderColor:colors.border,borderRadius:10,backgroundColor:'#fff',marginBottom:10},image:{width:86,height:86,borderRadius:7,backgroundColor:'#E7EFED'},info:{flex:1,marginLeft:11},name:{fontSize:14,fontWeight:'800',color:colors.text},price:{fontSize:14,fontWeight:'800',color:colors.text,marginTop:3},stock:{fontSize:10,color:colors.success,marginTop:2},controls:{flexDirection:'row',alignItems:'center',gap:10,marginTop:7},quantity:{fontSize:15,fontWeight:'800',color:colors.text},remove:{marginLeft:'auto'},disabled:{opacity:.35}});
