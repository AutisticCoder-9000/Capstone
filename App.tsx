import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { CartProvider } from './src/context/CartContext';
import { ProductProvider } from './src/context/ProductContext';
import AppNavigator from './src/navigation/AppNavigator';
export default function App() { return <ProductProvider><CartProvider><StatusBar style="dark"/><AppNavigator/></CartProvider></ProductProvider>; }
