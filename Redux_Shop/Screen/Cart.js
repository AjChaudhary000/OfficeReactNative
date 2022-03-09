import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { getAllCart } from '../Redux/cartSlice';
import { getAllProductByIds } from '../Redux/productSlice';
const Cart = (props) => {
  React.useEffect(() => {
    props.getAllCart(1)
  }, [])

  if (props.cartLoading) {
    return (
      <View style={{ ...styles.container, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={100} color={"red"} />
      </View>
    );
  }
  const getCartProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
   // console.log(product);
    return await product;
  }
  const cartProductList = (item) => {

    const productDetail = getCartProduct(item.item.productId);
    console.log(productDetail)
    return (
      <TouchableOpacity>

        <Text></Text>
      </TouchableOpacity>
    );
  }
  const renderItemHandle = (item) => {

    return (
      <TouchableOpacity style={styles.cartList}>
        <Text>{new Date(item.item.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Text>
        <FlatList data={item.item.products} renderItem={cartProductList} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList data={props.cartList} renderItem={renderItemHandle} />
    </View>
  )
}
const useSelector = (state) => {
  return {
    cartList: state.cart.list,
    cartLoading: state.cart.cartLoading,

  };
}
const useDispatch = (dispatch) => {
  return {
    getAllCart: (userId) => dispatch(getAllCart(userId)),

  };
}
export default connect(useSelector, useDispatch)(Cart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cartList: {
    width: Dimensions.get('screen').width - 40,
    height: 300,
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: 'black',
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    borderRadius: 15,
    elevation: 6,
    padding: 20
  }
});