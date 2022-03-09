import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import cartSlice from './cartSlice';
import productSlice from './productSlice';
const store = configureStore({
    reducer:combineReducers({
    product:productSlice,
    cart:cartSlice,
    })
})
export default store;