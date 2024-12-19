"use client"
import { ScrollView, View } from 'react-native'
import { useLocalSearchParams, usePathname, Stack, useRouter } from 'expo-router';
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { NavigationOptions } from 'expo-router/build/global-state/routing';


export default function () {

    const { category } = useLocalSearchParams();

    const pathName = usePathname()

    const router = useRouter();

    return (
        <View>
            <CategoryList categories={categories} parentLink="./categories" router={router}></CategoryList>
            <Stack.Screen options={{ title: "Catalog" }} ></Stack.Screen>
        </View>
    )
}