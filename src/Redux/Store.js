import {
    legacy_createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
// applyMiddleware کاربرد
//  توسط این میتوانیم از میدلور های دیگر استفاده کنیم

import { productListReducer, productDetailReducer, } from './Reducer/ProductReducer'
import { cartReducer } from './Reducer/CartReducer'
const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
});
const cartItemsFromLocalStorage = localStorage
    .getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [];
const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    }
};

const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;