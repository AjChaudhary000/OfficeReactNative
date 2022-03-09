import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import SearchSlice from './SearchSlice'
import TaskSlice from './TaskSlice'
const store = configureStore({
    reducer: combineReducers({
        search: SearchSlice,
        task: TaskSlice,
    })
})
export default store;