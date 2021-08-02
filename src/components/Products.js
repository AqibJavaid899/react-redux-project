import React, {useEffect} from 'react'
import Product from './Product'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setAllProducts} from '../redux/actions/productActions'

const Products = () => {
    const dispatch = useDispatch()

    const getProductsFromAPI = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error) => console.log("Errors are : ", error))
        dispatch(setAllProducts(response.data))
    }

    useEffect(() => {
        getProductsFromAPI()
    })

    return (
        <div className='ui grid container'>
            <Product />
        </div>
    )
}

export default Products
