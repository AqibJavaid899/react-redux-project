import {createStore, compose, applyMiddleware} from 'redux'
import allReducers from '../reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, {}, composeEnhancers(applyMiddleware(thunk)))


export default store