"use client"
import { ScrollView, View } from 'react-native'
import { useLocalSearchParams, usePathname, Stack, useRouter } from 'expo-router';
import CategoryList from '@/app/components/CategoryList';
import { NavigationOptions } from 'expo-router/build/global-state/routing';
import { getCategoriesDepthZero } from '@/app/Services/CategoryService';
import { Category } from '@/app/interfaces/Category';
import { useEffect, useState } from "react";



//Depth = 0
export default function () {
    const router = useRouter();    
    const[categories,setCategories] = useState<Category[]>([]);
    useEffect(()=>{
        const getEntries = async()=>{
            const categories = await getCategoriesDepthZero();
            setCategories(categories);
        }
        getEntries();
    },[])
    
    return (
        <ScrollView>
            <CategoryList categories={categories} parentLink='./categories' router={router}></CategoryList>
            <Stack.Screen options={{title:"Каталог"}} ></Stack.Screen>
        </ScrollView>
    )
}