import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export const getAllCart = createAsyncThunk(
    'cart/getAllCart',
    async(userId,{getState})=>{
        const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
        const cart = await response.json();
        return cart;
    }
);
export const cartSlice = createSlice({
    name:'cart',
    initialState:{
    list:[],
    cartLoading:false,
    },
    reducers:{},
    extraReducers:{
        [getAllCart.fulfilled]:(state,action)=>{
            state.list=action.payload,
            state.cartLoading= false
        },
        [getAllCart.pending]:(state,action)=>{
            state.cartLoading= true
        }
    }
});
export default cartSlice.reducer;