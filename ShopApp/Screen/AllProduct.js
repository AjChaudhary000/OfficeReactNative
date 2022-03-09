import { View, Text, StyleSheet, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { getAllProduct } from '../Redux/Action/Product'
import { Directions } from 'react-native-gesture-handler'
import Colors from '../Contents/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
const AllProduct = (props) => {

  const renderItemList = (item) => {
    return (
      <TouchableOpacity activeOpacity={0.80} style={styles.listBox} onPress={()=>{props.navigation.navigate("ProductDetails",{id:item.item.id})}} >

        <ImageBackground source={{ uri: item.item.image }} style={styles.productImage} resizeMode="cover">
          <View style={styles.favoriteIcon}>
            {/* <Icon name="favorite-border" size={30} color={Colors.primaryColor} onPress={() => { }} /> */}
          </View>
        </ImageBackground>
        <Text style={styles.productTitle}>{item.item.title}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>{item.item.description}</Text>
        <View style={styles.Price}>
          <View style={{ flexDirection: 'row', flex: 2 }}>
            <Text style={styles.productPrice}> ${item.item.price}</Text>
            <Text style={styles.OldPrice}> ${item.item.price + 200}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity activeOpacity={0.70} style={styles.AddToCartBtn}>
              <Text >Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList data={props.ProductList} renderItem={renderItemList} />
    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    ProductList: state.Product.AllProductData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProduct: dispatch(getAllProduct())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    overflow: 'hidden'
  },
  listBox: {
    width: Dimensions.get('screen').width - 40,
    marginHorizontal: 20,
    marginVertical: 10,

    backgroundColor: "white",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 6,
    padding: 20
  },
  productImage: {
    width: '100%',
    height: 200,

  },
  productTitle: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 18
  },
  favoriteIcon: {
    alignSelf: 'flex-end',

  },
  productDescription: {
    fontSize: 12
  },
  productPrice: {
    fontSize: 18,
    letterSpacing: 1,
    color: 'red',
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
  }
})