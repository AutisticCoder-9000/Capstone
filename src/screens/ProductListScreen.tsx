import React from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import RangeSlider from '../components/common/RangeSlider';
import Header from '../components/common/Header';
import SearchBar from '../components/common/SearchBar';
import ProductGrid from '../components/product/ProductGrid';
import { categories, maxProductPrice } from '../data/mockProducts';
import { useProducts } from '../context/ProductContext';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/colors';
import { Product, Screen, NavigateParams } from '../types';

interface Props {
  navigate: (screen: Screen, params?: NavigateParams) => void;
  addItem: (product: Product) => void;
}

export default function ProductListScreen({ navigate, addItem }: Props) {
  const p = useProducts();

  return (
    <View style={globalStyles.screen}>
      <Header title={p.activeCategory === 'All' ? 'Products' : p.activeCategory} onBack={() => navigate('categories')} onCart={() => navigate('cart')} />
      <ScrollView contentContainerStyle={globalStyles.content}>
        <SearchBar value={p.query} onChange={p.setQuery} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
          {['All', ...categories.map((c) => c.name)].map((name) => (
            <Pressable key={name} onPress={() => p.setActiveCategory(name)} style={[styles.chip, p.activeCategory === name && styles.activeChip]}>
              <Text style={[styles.chipText, p.activeCategory === name && styles.activeText]}>{name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.filter}>
          <Text style={styles.filterText}>Maximum price</Text>
          <Text style={styles.maxLabel}>₹{p.maxPrice}</Text>
          <RangeSlider
            style={styles.slider}
            value={p.maxPrice}
            minimumValue={0}
            maximumValue={maxProductPrice}
            step={50}
            onValueChange={(v: number) => p.setMaxPrice(Math.round(v))}
          />

          <View style={styles.availability}>
            <Text style={styles.filterText}>In-stock items only</Text>
            <Switch value={p.availableOnly} onValueChange={p.setAvailableOnly} trackColor={{ true: '#8FAFAD' }} thumbColor={p.availableOnly ? colors.primary : '#fff'} />
          </View>
        </View>

        <Text style={styles.count}>{p.products.length} products found</Text>

        {p.products.length ? (
          <ProductGrid products={p.products} onOpen={(product) => navigate('detail', { product })} onAdd={addItem} />
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No products found</Text>
            <Text style={styles.emptyCopy}>Try clearing your search or filters.</Text>
            <Pressable onPress={p.resetFilters}>
              <Text style={styles.reset}>Clear filters</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  chips: { gap: 8, paddingVertical: 14 },
  chip: { borderWidth: 1, borderColor: '#BED2D0', borderRadius: 18, paddingHorizontal: 12, paddingVertical: 8 },
  activeChip: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: 12, color: colors.primary, fontWeight: '700' },
  activeText: { color: '#fff' },
  filter: { backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, borderRadius: 9, padding: 12 },
  filterText: { fontSize: 13, fontWeight: '800', color: colors.text },
  maxLabel: { fontSize: 13, fontWeight: '800', color: colors.primary, marginTop: 6, marginBottom: 6 },
  slider: { width: '100%', height: 40, marginTop: 6 },
  availability: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, borderTopWidth: 1, borderColor: colors.border, paddingTop: 10 },
  count: { fontSize: 12, color: colors.muted, marginVertical: 12 },
  empty: { alignItems: 'center', paddingVertical: 55 },
  emptyTitle: { fontSize: 19, fontWeight: '800', color: colors.text },
  emptyCopy: { fontSize: 14, color: colors.muted, marginTop: 7 },
  reset: { color: colors.primary, fontWeight: '800', marginTop: 15 }
});
