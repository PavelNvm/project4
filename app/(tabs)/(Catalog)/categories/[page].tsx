"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter } from 'expo-router';
import TakeProductsLine from '@/app/components/TakeProductsLine'
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { View, TouchableOpacity } from 'react-native'
import { getNameOfCategoryById } from '@/app/utils/usefulFunctions'


export default function () {
    const router = useRouter();

    const { subCategory } = useLocalSearchParams();

    let subCats = categories.find(i => i.id === subCategory)?.subcats;

    var subCategories: Category[] = [];

    subCategories = subCats !== undefined ? subCats : [];

    return (
        <View style={{ flex: 1 }}>
            <TakeProductsLine router={router} categoryId={subCategory as string}></TakeProductsLine>
            <CategoryList categories={subCategories} router={router} parentLink="./"></CategoryList>
        </View>
    )
}