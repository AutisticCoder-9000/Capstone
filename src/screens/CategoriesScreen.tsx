import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/common/Header';
import CategoryCard from '../components/product/CategoryCard';
import { categories } from '../data/mockProducts';
import { globalStyles } from '../styles/globalStyles';
import { NavigateParams, Screen } from '../types';

interface Props {
  navigate: (screen: Screen, params?: NavigateParams) => void;
}

export default function CategoriesScreen({ navigate }: Props) {
  return (
    <ScrollView style={globalStyles.screen}>
      <Header title="Categories" onCart={() => navigate('cart')} />
      <View style={[globalStyles.content, styles.content]}>
        <Text style={globalStyles.pageTitle}>Lifestyle categories</Text>
        <Text style={globalStyles.pageSubtitle}>Shop curated collections for style, travel, tech, and more.</Text>
        <View style={styles.grid}>
          {categories.map((category) => (
            <View key={category.id} style={styles.gridItem}>
              <CategoryCard
                category={category}
                onPress={() => navigate('products', { category: category.name })}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  content: {
    paddingBottom: 24
  },
  grid: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  gridItem: {
    width: '48.5%',
    marginBottom: 12
  }
});
