import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../styles/colors';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchBar({ value, onChange }: Props) { return <View style={styles.wrap}><Ionicons name="search-outline" color={colors.muted} size={20}/><TextInput value={value} onChangeText={onChange} placeholder="Search household products" placeholderTextColor="#829596" style={styles.input}/>{!!value && <Pressable onPress={() => onChange('')}><Ionicons name="close-circle" color={colors.muted} size={19}/></Pressable>}</View>; }
const styles = StyleSheet.create({ wrap:{height:46,backgroundColor:'#fff',borderRadius:8,borderWidth:1,borderColor:colors.border,paddingHorizontal:12,alignItems:'center',flexDirection:'row',gap:8},input:{flex:1,color:colors.text,fontSize:14} });
