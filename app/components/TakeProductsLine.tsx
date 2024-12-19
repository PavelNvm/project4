import React from "react"
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { Router } from "expo-router"
import { productStyles } from "../styles/productStyles"

interface TakeProductsLineProps{
    router: Router,
    categoryId: string,
}

const TakeProductsLine: React.FC<TakeProductsLineProps> = ({categoryId, router}) => {
    return(
        <TouchableOpacity onPress={() => { router.push( {
            pathname: `./products/[page]` as string,
            params: { 
                page: categoryId,
            },
          }  )}} style={productStyles.product}>
            <Text>TAKE PRODUCTS</Text>
        </TouchableOpacity>
    )
}

export default TakeProductsLine;