// ProductList.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../interfaces/Product';
import ProductCard from './ProductCard';
import { Stack } from 'expo-router';

interface ProductListProps {
    products: Product[];
    title?:string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title: titleName }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const renderProduct = ({ item }: { item: Product }) => (
        <TouchableOpacity onPress={() => setSelectedProduct(item)} style={styles.product}>
            <Text style={styles.productName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
            />
            {selectedProduct && (
                <ProductCard
                    product={selectedProduct}
                    visible={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
            <Stack.Screen options={{title:titleName}}></Stack.Screen>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    product: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    productName: {
        fontSize: 18,
    },
});

export default ProductList;