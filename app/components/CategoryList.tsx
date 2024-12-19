
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../interfaces/Category';
import { Link, Stack, useRouter, Router } from 'expo-router';
import { productStyles } from '../styles/productStyles';
import { categoryStyles } from '../styles/categoryStyles';

interface CategoryListProps {
    categories: Category[];
    parentLink: string;
    router: Router;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, parentLink, router }) => {
    
    const renderCategory = ({ item }: { item: Category }) => (
        <TouchableOpacity onPress={() => { router.push( {
            pathname: item.depth == 2 ? (`./products/[childlink]`) as string : (parentLink + '/[childlink]/page') as string,
            params: { 
              childlink: item.id,
             },
          }  )}} style={categoryStyles.category}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={categoryStyles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default CategoryList;
