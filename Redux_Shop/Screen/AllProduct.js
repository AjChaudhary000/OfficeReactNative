import { View, Text, StyleSheet, FlatList, Dimensions, ImageBackground, TouchableOpacity ,ActivityIndicator} from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../Redux/productSlice'
import Icon from 'react-native-vector-icons/MaterialIcons';
const AllProduct = (props) => {
    const limitValue = 3
    const [isLimit,setIsLimit] = React.useState(0);
    React.useEffect(()=>{
        setIsLimit(isLimit + limitValue)
        props.getAllProducts(isLimit);
    },[])
   
    const onEndReachedItemHandle = ()=>{

        setIsLimit(isLimit + limitValue);
        props.getAllProducts(isLimit);
    }
    const handleListFooterComponent = ()=>{
        return(
        (props.productLoading)?(
        <View style={{alignItems:'center' }}>
        <ActivityIndicator size={60} color={"red"}/>
    </View>):null
        )
    }
    const renderItemList = (item) => {
        return (
            <TouchableOpacity activeOpacity={0.80} style={styles.listBox} onPress={() => {props.navigation.navigate("ProductDetails",{id:item.item.id}) }} >

                <ImageBackground source={{ uri: item.item.image }} style={styles.productImage} resizeMode="cover">
                    <View style={styles.favoriteIcon}>
                    <Icon name="favorite" size={30} fontWeight={"bold"} color={"#2492c9"} onPress={() => { }} />
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

            </TouchableOpacity>)
    }
    return (

        <View style={styles.container}>
            <FlatList data={props.productList} 
            renderItem={renderItemList}  
            onEndReached={onEndReachedItemHandle}
            onEndReachedThreshold={0.2}
            ListFooterComponent={handleListFooterComponent}
            keyExtractor={(item)=>item.id} style={{marginBottom:80}}/>
        </View>
    )
}
const useSelector = (state) => {
    return {
        productList: state.product.list,
        productLoading: state.product.loading,
        productError: state.product.errorMessage
    };
}
const useDispatch = (dispatch) => {
    return {
        getAllProducts: (limit)=>dispatch(getAllProducts(limit)),
    };
}
export default connect(useSelector,useDispatch)(AllProduct);
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
        fontSize: 18,
        color:'black'
    },
    favoriteIcon: {
        alignSelf: 'flex-end',

    },
    productDescription: {
        fontSize: 12,
        color:'black'
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
        backgroundColor: '#2492c9',
        borderRadius: 10,
        justifyContent: 'center'
    }
})