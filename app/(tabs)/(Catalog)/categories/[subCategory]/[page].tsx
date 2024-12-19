"use client"
import { useLocalSearchParams, usePathname, Link, useRouter as router } from 'expo-router';
import TakeProductsLine from '@/app/components/TakeProductsLine'
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { View, TouchableOpacity, Text } from 'react-native'
import  {getNameOfCategoryById} from '@/app/utils/usefulFunctions'


export default function(){
    const { subCategory: subCategoryId } = useLocalSearchParams();

    let subCats = categories.find(i=>i.id===subCategoryId)?.subcats;

    var subCategories:Category[]=[];
    
    subCategories = subCats !== undefined ? subCats : [];

    return(
        <View style={{flex : 1}}>
            <TakeProductsLine categoryId={subCategoryId as string} router={router()}></TakeProductsLine>
            <CategoryList categories={subCategories}parentLink='./' router={router()}></CategoryList>
        </View>
        )
}