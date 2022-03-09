import {combineReducers,createStore,applyMiddleware} from 'redux'
import ProductReduce from '../Reduce/Product'
import thunk from 'redux-thunk'
 const rootReduce = combineReducers({
     Product:ProductReduce
 })
 const store = createStore(rootReduce,applyMiddleware(thunk));
 export default store;