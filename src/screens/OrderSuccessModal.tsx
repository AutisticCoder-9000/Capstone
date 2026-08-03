import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/common/CustomButton';
import { colors } from '../styles/colors';

interface Order {
  id: string;
  total: number;
  delivery: any;
}

interface Props {
  order: Order | null;
  onClose: () => void;
}

export default function OrderSuccessModal({ order, onClose }: Props) { return <Modal visible={!!order} transparent animationType="fade"><View style={styles.shade}><View style={styles.modal}><View style={styles.check}><Text style={styles.checkText}>✓</Text></View><Text style={styles.title}>Your order is confirmed!</Text><Text style={styles.copy}>Thanks for shopping with MyShoppy. We will send delivery updates to your mobile number.</Text><View style={styles.box}><Text style={styles.label}>ORDER REFERENCE</Text><Text style={styles.id}>{order?.id}</Text><Text style={styles.total}>Cash on delivery · ₹{order?.total?.toLocaleString('en-IN')}</Text></View><CustomButton title="Continue shopping" onPress={onClose}/></View></View></Modal>; }
const styles = StyleSheet.create({shade:{flex:1,backgroundColor:'rgba(0,0,0,.35)',justifyContent:'center',padding:25},modal:{backgroundColor:'#fff',borderRadius:17,padding:24,alignItems:'center'},check:{width:82,height:82,borderRadius:41,backgroundColor:colors.success,alignItems:'center',justifyContent:'center'},checkText:{fontSize:42,color:'#fff'},title:{fontSize:22,fontWeight:'800',color:colors.text,textAlign:'center',marginTop:17},copy:{fontSize:14,lineHeight:20,color:colors.muted,textAlign:'center',marginTop:8},box:{backgroundColor:'#E8F1EF',padding:15,borderRadius:9,width:'100%',alignItems:'center',marginVertical:20},label:{fontSize:10,letterSpacing:1,fontWeight:'800',color:colors.muted},id:{fontSize:20,fontWeight:'800',color:colors.primary,marginVertical:4},total:{fontSize:13,fontWeight:'700',color:colors.text}});
