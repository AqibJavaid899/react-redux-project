import {combineReducers} from 'redux'
import { productsReducer, singleProductReducer } from './productReducer'

const allReducers = combineReducers({
    productStore: productsReducer,
    selectedProduct: singleProductReducer
})

export default allReducers