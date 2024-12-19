import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams, useRouter as router } from 'expo-router';
import ProductList from '@/app/components/ProductList';
import { categories } from '@/app/data/categories';
import { products } from '@/app/data/products';
import {ScrollView} from 'react-native';
import { getNameOfProductById, getNameOfCategoryById } from '@/app/utils/usefulFunctions';

export default function(){
    const { page: categoryId } = useLocalSearchParams();

    const productsByCategoryId = products.filter(i => i.categoryIds.includes(categoryId.toString()));

    let subSubCategories = categories.filter(cat => cat.depth == 2);

    let titleName: string|undefined;

    return( 
            <ProductList products={productsByCategoryId}></ProductList>
)}