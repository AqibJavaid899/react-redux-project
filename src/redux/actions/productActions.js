import {actionTypes} from '../constants/actionTypes'
import apiRequest from '../apiRequest/apiRequest'

// Defining the Asynchronous Action Creator to work with Redux Thunk
export const fetchProducts = () => async (dispatch) => {
        // Fetching the data from the API
        const response = await apiRequest.get('/products')
        dispatch({type: actionTypes.FETCH_PRODUCTS, payload: response.data})
}

// Defining the Asynchronous Action Creator to work with Redux Thunk
export const fetchProduct = (id) => async (dispatch) => {
    // Fetching the data from the API
    const response = await apiRequest.get(`/products/${id}`)
    dispatch({type: actionTypes.FETCH_PRODUCT, payload: response.data})
}


// This action will destroy the previous selected item 
export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    }
}