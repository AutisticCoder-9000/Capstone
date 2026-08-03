import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TextInputProps, View, StyleProp, TextStyle } from 'react-native';
import Header from '../components/common/Header';
import CustomButton from '../components/common/CustomButton';
import OrderSummary from '../components/cart/OrderSummary';
import { useCart } from '../context/CartContext';
import { validateCheckout } from '../utils/validators';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../styles/colors';
import { Screen } from '../types';

interface CheckoutValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pin: string;
}

interface FieldProps extends TextInputProps {
  label: string;
  error?: string;
}

function Field({ label, error, style, multiline, ...props }: FieldProps) {
  const inputStyles: StyleProp<TextStyle> = [
    styles.input,
    multiline && styles.textarea,
    error ? styles.errorInput : undefined,
    style,
  ];

  return <View style={styles.field}><Text style={styles.label}>{label}</Text><TextInput {...props} multiline={multiline} textAlignVertical={multiline ? 'top' : 'center'} style={inputStyles}/>{error && <Text style={styles.error}>{error}</Text>}</View>;
}

interface Props {
  navigate: (screen: Screen) => void;
  completeOrder: (delivery: CheckoutValues) => void;
}

export default function CheckoutScreen({ navigate, completeOrder }: Props) {
  const cart = useCart();
  const [values, setValues] = useState<CheckoutValues>({ name:'', email:'', phone:'', address:'', city:'', pin:'' });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutValues, string>>>({});
  const change = (key: keyof CheckoutValues, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const place = () => { const next = validateCheckout(values); setErrors(next); if (!Object.keys(next).length) completeOrder(values); };
  return <ScrollView style={globalStyles.screen}><Header title="Checkout" onBack={() => navigate('cart')}/><View style={globalStyles.content}><Text style={globalStyles.pageTitle}>Delivery details</Text><Text style={globalStyles.pageSubtitle}>Tell us where to deliver your order.</Text><View style={styles.form}><Field label="Full name" value={values.name} onChangeText={(value) => change('name', value)} error={errors.name}/><Field label="Email address" value={values.email} onChangeText={(value) => change('email', value.trim())} keyboardType="email-address" autoCapitalize="none" autoCorrect={false} error={errors.email}/><Field label="Mobile number" value={values.phone} onChangeText={(value) => change('phone', value.replace(/\D/g,'').slice(0,10))} keyboardType="phone-pad" error={errors.phone}/><Field label="Street address" value={values.address} onChangeText={(value) => change('address', value)} multiline error={errors.address}/><Field label="City" value={values.city} onChangeText={(value) => change('city', value)} error={errors.city}/><Field label="PIN code" value={values.pin} onChangeText={(value) => change('pin', value.replace(/\D/g,'').slice(0,6))} keyboardType="number-pad" error={errors.pin}/></View><OrderSummary subtotal={cart.subtotal}/><CustomButton title={`Place order · ₹${cart.subtotal.toLocaleString('en-IN')}`} onPress={place} style={styles.place}/><Text style={styles.note}>Demo checkout — payment information is not collected.</Text></View></ScrollView>;
}
const styles = StyleSheet.create({form:{marginTop:21},field:{marginBottom:14},label:{fontSize:13,fontWeight:'800',color:'#496566',marginBottom:6},input:{height:47,backgroundColor:'#fff',borderWidth:1,borderColor:'#C9D9D6',borderRadius:8,paddingHorizontal:12,color:colors.text,fontSize:15},textarea:{height:82,paddingTop:10},errorInput:{borderColor:'#B94A41'},error:{color:'#B94A41',fontSize:11,marginTop:4},place:{marginTop:14},note:{fontSize:12,color:colors.muted,textAlign:'center',marginTop:12}});
