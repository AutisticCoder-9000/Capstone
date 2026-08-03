import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

interface Props {
  subtotal: number;
}

const money = (price: number) => `₹${price.toLocaleString('en-IN')}`;
export default function OrderSummary({ subtotal }: Props) { return <View style={styles.box}><View style={styles.row}><Text>Subtotal</Text><Text>{money(subtotal)}</Text></View><View style={styles.row}><Text>Delivery</Text><Text style={styles.free}>FREE</Text></View><View style={styles.total}><Text>Total payable</Text><Text>{money(subtotal)}</Text></View></View>; }
const styles = StyleSheet.create({box:{backgroundColor:'#fff',borderWidth:1,borderColor:colors.border,borderRadius:9,padding:14},row:{flexDirection:'row',justifyContent:'space-between',marginBottom:10},total:{borderTopWidth:1,borderColor:colors.border,paddingTop:12,marginTop:3,flexDirection:'row',justifyContent:'space-between'},free:{color:colors.success,fontWeight:'800'},rowText:{color:colors.muted},text:{color:colors.text},totalText:{fontSize:17,fontWeight:'800',color:colors.text}});
