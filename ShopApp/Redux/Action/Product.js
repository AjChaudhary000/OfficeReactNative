export const getAllProduct = () =>{
    return  async dispatch =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
           return  dispatch({type:"getAllProduct",list:json})   
        });
       
    };
};
export const getProductByIds = (id) =>{
    let isloading = false;
    return  async dispatch =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            if(res.ok === true){
                isloading=true;
            }else{
                isloading= false
            }
           return res.json()})
        .then(json => {
           return dispatch({type:"getProductByIds",list:json,loading:isloading})   
        });
       
    };
};