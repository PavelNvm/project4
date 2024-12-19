"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter as router } from 'expo-router';
import TakeProductsLine from '@/app/components/TakeProductsLine'
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { View, TouchableOpacity } from 'react-native'

import  {getNameOfCategoryById} from '@/app/utils/usefulFunctions'

//Depth = 1

export default function(){
    const { subCategory } = useLocalSearchParams();

    let subCats = categories.find(i=>i.id===subCategory)?.subcats;

    var subCategories:Category[]=[];
    
    subCategories = subCats !== undefined ? subCats : [];

    return(
        <View style={{flex : 1}}>
            <TakeProductsLine categoryId={subCategory as string} router={router()}></TakeProductsLine>
            <CategoryList categories={subCategories} parentLink='./' router={router()}></CategoryList>
            </View>
        )
}