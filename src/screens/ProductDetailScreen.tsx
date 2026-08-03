import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/common/Header';
import CustomButton from '../components/common/CustomButton';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/colors';
import { Product, Screen, NavigateParams } from '../types';

interface Props {
  product: Product | null;
  navigate: (screen: Screen, params?: NavigateParams) => void;
  addItem: (product: Product) => void;
}

export default function ProductDetailScreen({ product, navigate, addItem }: Props) {
  if (!product) return null;

  return <ScrollView style={globalStyles.screen}>
    <Header title="Product details" onBack={() => navigate('products')} onCart={() => navigate('cart')}/>
    <Image source={{ uri: product.image }} style={styles.image}/>
    <View style={globalStyles.content}>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.meta}><Text style={styles.price}>₹{product.price.toLocaleString('en-IN')}</Text><Text style={styles.rating}>★ {product.rating} rating</Text></View>
      <Text style={styles.description}>{product.description}</Text>
      <View style={[styles.stock, !product.stock && styles.out]}><Text style={!product.stock && styles.outText}>{product.stock ? `✓ In stock — ${product.stock} available` : '× Currently unavailable'}</Text></View>
      <CustomButton title={product.stock ? 'Add to cart' : 'Currently unavailable'} disabled={!product.stock} onPress={() => addItem(product)}/>
      <Text style={styles.note}>Free delivery for this capstone demo order.</Text>
    </View>
  </ScrollView>;
}
const styles = StyleSheet.create({ image:{width:'100%',height:290,backgroundColor:'#E7EFED'},category:{fontSize:11,fontWeight:'800',color:colors.primary,textTransform:'uppercase',letterSpacing:1},name:{fontSize:25,lineHeight:31,fontWeight:'800',color:colors.text,marginTop:4},meta:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:12},price:{fontSize:24,fontWeight:'800',color:colors.text},rating:{fontSize:12,color:colors.warning,fontWeight:'800',backgroundColor:'#FFF3DA',padding:7,borderRadius:13},description:{fontSize:15,lineHeight:23,color:colors.muted,marginTop:22},stock:{backgroundColor:'#E7F3ED',borderRadius:8,padding:12,marginVertical:19},out:{backgroundColor:'#F8E8E6'},outText:{color:'#A54A40'},note:{fontSize:12,color:colors.muted,textAlign:'center',marginTop:12} });
