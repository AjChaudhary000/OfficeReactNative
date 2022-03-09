import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { getProductByIds } from '../Redux/Action/Product'
import Colors from '../Contents/Colors'
const ProductDetails = (props) => {
  React.useEffect(() => {
    props.getProductByIds(props.route.params.id);
    setIsLoading(props.loading)
  }, []);
  const [isLoading,setIsLoading] = React.useState(false);
  console.log(props.route.params);
  console.log(props);
  
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.productImage} source={{ uri: props.ProductDetails.image }}>
      </ImageBackground>
      <Text style={styles.productCategory}>{props.ProductDetails.category}</Text>
      <Text style={styles.productTitle}>{props.ProductDetails.title}</Text>
      <Text style={styles.productDescription}>{props.ProductDetails.description}</Text>
      <View style={styles.Price}>
        <View style={{ flexDirection: 'row', flex: 2 }}>
          <Text style={styles.productPrice}> ${props.ProductDetails.price}</Text>
          <Text style={styles.OldPrice}> ${props.ProductDetails.price + 200}</Text>
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
const mapStateToProps = (state) => {
  return {
    ProductDetails: state.Product.ProductDetails,
    loading: state.Product.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProductByIds: (id) => dispatch(getProductByIds(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
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
    fontSize: 20
  },
  productCategory: {
    fontSize: 15,
    paddingTop: 10,
    fontWeight: 'bold',
    color: 'red'
  },
  productDescription: {
    fontSize: 13,
    paddingTop: 10,
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
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    justifyContent: 'center'
  },
  productPrice: {
    fontSize: 18,
    letterSpacing: 1,
    color: 'red',
  },
});