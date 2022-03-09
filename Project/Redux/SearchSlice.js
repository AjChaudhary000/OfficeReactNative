import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export const getSearchString = createAsyncThunk(
    'search/getSearchString',
    async(searchText,{getState})=>{
        return await searchText;
    }
);
export const SearchSlice = createSlice({
    name:"search",
    initialState:{
        searchText:""
        
    },
    reducers:{},
    extraReducers:{
        [getSearchString.fulfilled]:(state,action)=>{
            state.searchText=action.payload
        },
        [getSearchString.pending]:(state,action)=>{
            
        }
    }
});
export default SearchSlice.reducer;