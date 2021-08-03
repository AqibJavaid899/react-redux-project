import React, {useEffect} from 'react'
import Product from './Product'
import {useDispatch} from 'react-redux'
import {fetchProducts} from '../redux/actions/productActions'

const Products = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className='ui grid container'>
            <Product />
        </div>
    )
}

export default Products
