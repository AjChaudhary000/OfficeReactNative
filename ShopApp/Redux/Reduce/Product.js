

const initialState = {
    AllProductData: [],
    ProductDetails:[],
    loading:false
}

const ProductReduce = (state = initialState, action) => {
    switch (action.type) {
        case "getAllProduct": {
           return {...state,
            AllProductData:action.list}
        }
        case "getProductByIds": {
            return {...state,
            ProductDetails:action.list,
            loading:action.loading
            }
         }
        default:
            return "Invalid Option Selected ..."
    }
}
export default ProductReduce;