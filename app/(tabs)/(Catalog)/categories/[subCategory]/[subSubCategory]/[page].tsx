"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter as router } from 'expo-router';
import TakeProductsLine from '@/app/components/TakeProductsLine'
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { View, TouchableOpacity } from 'react-native'


export default function(){
    const { subCategory: subCategoryId, subSubCategory: subSubCategoryId } = useLocalSearchParams();

    const subCat = categories.find(i=>i.id===subCategoryId)?.subcats;

    let subSubCats : Category[] = [];
  
    if(subCat!==undefined)
    {
        
        // поиск подподкатегорий у подкатегории
        let subSubCatsArray = subCat.find(i=>i.id===subSubCategoryId)?.subcats

        subSubCats = subSubCatsArray !== undefined ? subSubCatsArray : [];
    }

    return(
        <View style={{flex : 1}}>
            <TakeProductsLine categoryId={subSubCategoryId as string} router={router()}></TakeProductsLine>
            <CategoryList categories={subSubCats} parentLink='./' router={router()} ></CategoryList>
            </View>
    )
}