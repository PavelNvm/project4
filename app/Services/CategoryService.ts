import { Category } from "../interfaces/Category";


export const getCategoriesDepthZero = async()=>{
    const response = await fetch('https://localhost:7090/getCategoriesDepthZero')   
   
    let mappedResponse: Category[] = await response.json();
    
    return mappedResponse;
}