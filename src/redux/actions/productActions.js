import {actionTypes} from '../constants/actionTypes'

// Passing all the Products as a Payload to the productsReducer
export const setAllProducts = (allProducts) => {
    return {
        type: actionTypes.SET_ALL_PRODUCTS,
        payload: allProducts
    }
}

// Passing Single Selected Product as a Payload to singleProductReducer
export const getSelectedProduct = (product) => {
    return {
        type: actionTypes.GET_SELECTED_PRODUCT,
        payload: product
    }
}

// This action will destroy the previous selected item 
export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    }
}