"use client"
import { ScrollView, View } from 'react-native'
import { useLocalSearchParams, usePathname, Stack, useRouter as router } from 'expo-router';
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';

export default function () {
    const { category } = useLocalSearchParams();

    return (
        <View>
            <CategoryList categories={categories} parentLink='./categories' router={router()} ></CategoryList>
            <Stack.Screen options={{title:"Catalog"}} ></Stack.Screen>
        </View>
    )
}