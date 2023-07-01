import { 
    legacy_createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
// applyMiddleware کاربرد
//  توسط این میتوانیم از میدلور های دیگر استفاده کنیم

import {productListReducer} from './Reducer/Product/ProductReducer'
const reducer = combineReducers({
    productList: productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;