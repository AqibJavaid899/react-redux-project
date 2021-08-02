import { Switch } from "react-router-dom";
import { actionTypes } from "../constants/actionTypes";


// Defined the initial value for the productsReducer's State
const initState = {
    products:[],
}

// Extending State with all the Products fetched from the API 
export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_ALL_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state
    }
}

// Extending State with the Single Product passed as a Payload
export const singleProductReducer = (state={}, action) => {
    switch (action.type) {
        case actionTypes.GET_SELECTED_PRODUCT:
            return {...state, ...action.payload}
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}