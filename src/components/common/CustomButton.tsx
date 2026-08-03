import React from 'react';
import { Pressable, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function CustomButton({ title, onPress, disabled, secondary, style }: Props) { return <Pressable disabled={disabled} onPress={onPress} style={[styles.button, secondary && styles.secondary, disabled && styles.disabled, style]}><Text style={[styles.text, secondary && styles.secondaryText]}>{title}</Text></Pressable>; }
const styles = StyleSheet.create({ button:{height:46,borderRadius:9,backgroundColor:colors.primary,alignItems:'center',justifyContent:'center'},text:{color:'#fff',fontSize:15,fontWeight:'800'},secondary:{backgroundColor:colors.softTeal,borderWidth:1,borderColor:'#B9D0CE'},secondaryText:{color:colors.primary},disabled:{opacity:.45} });
 