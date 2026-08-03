import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

interface Category {
  image: number;
  icon: string;
  name: string;
}

interface Props {
  category: Category;
  onPress: () => void;
}

export default function CategoryCard({ category, onPress }: Props) {

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <ImageBackground source={category.image} style={styles.image} imageStyle={styles.round} resizeMode="cover">
        <View style={styles.shade} />
        <View style={styles.content}>
          <Ionicons name={category.icon as React.ComponentProps<typeof Ionicons>['name']} size={20} color="#fff" />
          <Text style={styles.name}>{category.name}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { width: '100%', height: 122, borderRadius: 14, overflow: 'hidden', borderWidth: 1, borderColor: '#E8EFEF' },
  image: { width: '100%', height: '100%' },
  round: { borderRadius: 14 },
  shade: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(16, 46, 50, 0.2)' },
  content: { flex: 1, justifyContent: 'center', padding: 16, paddingLeft: 16 },
  name: { fontSize: 14, fontWeight: '800', color: '#fff', lineHeight: 18 }
});
