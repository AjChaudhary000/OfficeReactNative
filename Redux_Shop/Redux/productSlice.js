import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async (limit, { getState }) => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        const product = await response.json();
        return product;
    }
);
export const getProductDetails = createAsyncThunk(
    'product/getProductDetails',
    async (id, { getState }) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        
        return product;
    })

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
        loading: false,
        errorMessage: '',
        productDetailList: [],
       
    }, reducers: {},
    extraReducers: {
        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.list = action.payload;
        },
        [getAllProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getProductDetails.fulfilled]: (state, action) => {
            state.loading = false;
            state.productDetailList = action.payload;
        },
        [getProductDetails.pending]: (state, action) => {
            state.loading = true;
        },
        
        
    }
})
export default productSlice.reducer;