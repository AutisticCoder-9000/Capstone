import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories, mockProducts } from '../data/mockProducts';
import Header from '../components/common/Header';
import CustomButton from '../components/common/CustomButton';
import CategoryCard from '../components/product/CategoryCard';
import ProductGrid from '../components/product/ProductGrid';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/colors';
import { Product, Screen, NavigateParams } from '../types';

const heroShopping = require('../../assets/images/hero-shopping.png');

interface Props {
  navigate: (screen: Screen, params?: NavigateParams) => void;
  addItem: (product: Product) => void;
}

const trendingCollections = [
  { id: 'trending', label: 'Trending now', category: categories[0], categoryName: categories[0].name },
  { id: 'clearance', label: 'Clearance sale', category: categories[1], categoryName: categories[1].name },
  { id: 'new-arrivals', label: 'New arrivals', category: categories[2], categoryName: categories[2].name },
  { id: 'best-sellers', label: 'Best sellers', category: categories[3], categoryName: categories[3].name },
];

export default function HomeScreen({ navigate, addItem }: Props) {
  return (
    <ScrollView style={globalStyles.screen}>
      <Header onCart={() => navigate('cart')} />
      <ImageBackground
        source={heroShopping}
        style={styles.hero}
        imageStyle={styles.heroImage}
      >
        <View style={styles.heroShade} />
        <View style={styles.heroContent}>
          <Text style={styles.eyebrow}>YOUR HOME, SIMPLIFIED</Text>
          <Text style={styles.heroTitle}>Everything your home needs.</Text>
          <Text style={styles.heroCopy}>Household essentials, thoughtfully selected for everyday living.</Text>
          <CustomButton title="Shop now" onPress={() => navigate('products')} />
        </View>
      </ImageBackground>

      <View style={globalStyles.content}>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={globalStyles.sectionTitle}>Trending collections</Text>
            <Text style={styles.sectionCopy}>Fresh home deals and curated selections for every room.</Text>
          </View>
          <Text onPress={() => navigate('products')} style={styles.link}>See all</Text>
        </View>

        <View style={styles.categories}>
          {trendingCollections.map((item) => (
            <View key={item.id} style={styles.categoryItem}>
              <CategoryCard
                category={{ ...item.category, name: item.label }}
                onPress={() => navigate('products', { category: item.categoryName })}
              />
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={globalStyles.sectionTitle}>Featured products</Text>
          <Text onPress={() => navigate('products')} style={styles.link}>See all</Text>
        </View>

        <ProductGrid products={mockProducts.slice(0, 4)} onOpen={(product) => navigate('detail', { product })} onAdd={addItem} />
      </View>
    </ScrollView>
  );
}
const styles=StyleSheet.create({hero:{height:330,justifyContent:'flex-end'},heroImage:{resizeMode:'cover'},heroShade:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(21,54,55,.38)'},heroContent:{padding:24},eyebrow:{color:'#DCEDEB',fontSize:11,fontWeight:'800',letterSpacing:1},heroTitle:{fontSize:32,lineHeight:40,fontWeight:'800',color:'#fff',maxWidth:300,marginTop:8},heroCopy:{fontSize:14,lineHeight:22,color:'#E8F3F2',marginTop:10,maxWidth:300},sectionHeader:{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',marginTop:24,marginBottom:12},sectionCopy:{color:colors.muted,fontSize:13,lineHeight:18,marginTop:6,maxWidth:220},link:{color:colors.primary,fontSize:13,fontWeight:'800'},categories:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'},categoryItem:{width:'48.5%',marginBottom:12}});
