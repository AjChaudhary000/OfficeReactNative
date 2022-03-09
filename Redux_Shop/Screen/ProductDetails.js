import { View, Text ,StyleSheet,TouchableOpacity,ImageBackground,ActivityIndicator} from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import { getProductDetails } from '../Redux/productSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ProductDetails = (props) => {
    React.useEffect(()=>{
        props.getProductDetails(props.route.params.id)
        props.navigation.setOptions({

            headerRight:()=>(<Icon name="favorite" size={30} fontWeight={"bold"} color={"white"} onPress={() => { }} />)
        })
    },[]);
    if(props.productLoading){
        return(
            <View style={{...styles.container,alignItems:'center',justifyContent:"center"}}>
        <ActivityIndicator size={60} color={"red"}/>
    </View>
        )
    }
  return (
    <View style={styles.container}>
    <ImageBackground style={styles.productImage} source={{ uri: props.productDetail.image }}>
    </ImageBackground>
    <Text style={styles.productCategory}>{props.productDetail.category}</Text>
    <Text style={styles.productTitle}>{props.productDetail.title}</Text>
    <Text style={styles.productDescription}>{props.productDetail.description}</Text>
    <View style={styles.Price}>
      <View style={{ flexDirection: 'row', flex: 2 }}>
        <Text style={styles.productPrice}> ${props.productDetail.price}</Text>
        <Text style={styles.OldPrice}> ${props.productDetail.price + 200}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity activeOpacity={0.70} style={styles.AddToCartBtn}>
          <Text >Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}
 const useSelector = (state) =>{
return{
    productDetail:state.product.productDetailList,
    productLoading:state.product.loading
}
 }
 const useDispatch = (dispatch) =>{
return{
    getProductDetails:(id)=>dispatch(getProductDetails(id))
}
 }
export default connect(useSelector,useDispatch)(ProductDetails);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      overflow: 'hidden',
      padding: 20
    },
    productImage: {
      width: '100%',
      height: 250,
      borderRadius: 10
    },
    productTitle: {
      fontWeight: 'bold',
      paddingTop: 10,
      fontSize: 20,
      color: 'black',
    },
    productCategory: {
      fontSize: 15,
      paddingTop: 10,
      fontWeight: 'bold',
      color: 'red'
    },
    productDescription: {
      fontSize: 15,
      paddingTop: 10,
      color: 'black',
    },
    Price: {
  
      flexDirection: 'row',
      paddingTop: 20,
      flex: 1,
  
    },
    OldPrice: {
      fontSize: 18,
      letterSpacing: 1,
      color: 'black',
      textDecorationLine: 'line-through'
    },
    AddToCartBtn: {
      alignItems: 'center',
      width: 100,
      height: 45,
      backgroundColor: '#2492c9',
      borderRadius: 10,
      justifyContent: 'center'
    },
    productPrice: {
      fontSize: 18,
      letterSpacing: 1,
      color: 'red',
    },
  });