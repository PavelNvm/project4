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

const CreateLink = (category: Category, parentLink: string): string => {
    let result: string;
    if (category.depth == 2) {
        result = ("./products/[childlink]");
    }
    else {
        result = (parentLink + "/[childlink]/page");
    }
    console.log(result);
    return result;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, parentLink, router }) => {

    const renderCategory = ({ item }: { item: Category }) => (
        <TouchableOpacity onPress={() => {
            router.push({
                pathname: CreateLink(item, parentLink),
                params: {
                    childlink: item.id,
                },
            })
        }} style={categoryStyles.category}>
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
