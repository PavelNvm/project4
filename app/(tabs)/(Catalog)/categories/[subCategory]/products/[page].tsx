import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams } from 'expo-router';
import ProductList from '@/app/components/ProductList';
import { categories } from '@/app/data/categories';
import { products } from '@/app/data/products';

export default function(){

    const { page: categoryId } = useLocalSearchParams();
   
    const productsByCategoryId = products.filter(i => i.categoryIds.includes(categoryId.toString()));

    let subSubCategories = categories.filter(cat => cat.depth == 2);

    let titleName: string|undefined;

    return( 
            <ProductList products={productsByCategoryId}></ProductList>
)}