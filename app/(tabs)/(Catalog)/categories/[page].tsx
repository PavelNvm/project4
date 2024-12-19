"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter } from 'expo-router';
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';
import { Category } from '@/app/interfaces/Category';
import { View, TouchableOpacity } from 'react-native'
import  {getNameOfCategoryById} from '@/app/utils/usefulFunctions'

//Depth = 1
export default function(){
    const router = useRouter();

    const { subCategory } = useLocalSearchParams();

     //  Category/4d49d696-39c6-4f26-abde-7dd21ae50563/page
     const pathName = usePathname();
        
     //  [Category,  4d49d696-39c6-4f26-abde-7dd21ae50563, page]
     const pathNameSplitted = pathName.split('/');

    let subCats = categories.find(i=>i.id===subCategory)?.subcats;

    var subCategories:Category[]=[];
    
    subCategories = subCats !== undefined ? subCats : [];

    let titleName = categories !== undefined ? getNameOfCategoryById(pathNameSplitted[pathNameSplitted.length-2], categories) : "";

    return(
        <View style={{flex : 1}}>
            <TouchableOpacity onPress={() => router.push({
                pathname:'./products/[page]',
                params:{
                    page:subCategory,
                }
                })}>TAKE PRODUCTS
            </TouchableOpacity>
            <CategoryList categories={subCategories} router={router} parentLink='./' title={titleName}></CategoryList>
            </View>
        )
}