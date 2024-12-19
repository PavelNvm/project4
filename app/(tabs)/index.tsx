// App.tsx
import React from "react";
import { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Button } from "react-native";
import { Product } from "../interfaces/Product";
import { getProductsasd } from "../Services/ProductService";
import { Category } from "../interfaces/Category";
import { Link } from "expo-router";

const categories: Category[] = [];

const Index = () => {
  return (
    <View style={styles.container}>
      <Link href="./about" style={styles.button}>
        Go to About screen
      </Link>
      <Link href="../Category/[page]" style={styles.button}>
        Catalog</Link>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

export default Index;
