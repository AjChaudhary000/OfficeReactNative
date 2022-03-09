import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import MytaskData from '../Contents/MytaskData'

export const getAllTask = createAsyncThunk(
    'task/getAllTask',
    async(_,{getState})=>{
        return MytaskData;
    }
);
export const TaskSlice = createSlice({
    name:'task',
    initialState:{
        AllTask:[],
        loading:true
    },
    reducers:{},
    extraReducers:{
        [getAllTask.fulfilled]:(state,action)=>{
          state.AllTask = action.payload
          state.loading = false
        },
        [getAllTask.pending]:(state,action)=>{
            state.loading = true
          }
    }
});
export default TaskSlice.reducer;