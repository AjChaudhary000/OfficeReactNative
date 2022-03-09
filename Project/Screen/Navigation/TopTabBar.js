import { View, Text, TouchableOpacity, TextInput,AsyncStorage} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../HomeScreen';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MyTask from '../myTask';
import Colors from '../../Contents/Colors';
import {connect} from 'react-redux'
import { getSearchString } from '../../Redux/SearchSlice';
const Tab = createMaterialTopTabNavigator();
const TopTabBar = (props) => {
    const [searchText, setSearchText] = React.useState('');
    const [searchBox, setSearchBox] = React.useState(false)
    React.useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                searchBox?
                (<TouchableOpacity style={{ marginRight: 20 }} onPress={() =>{ setSearchBox(false);setSearchText('')}}>
                    <Icon name="close" size={30} color={Colors.fontColor} />
                </TouchableOpacity>)
                :(<TouchableOpacity style={{ marginRight: 20 }} onPress={() => setSearchBox(true)}>
                <Icon name="search" size={30} color={Colors.fontColor} />
            </TouchableOpacity>)
            ),
        })
        searchBox?
    props.navigation.setOptions({
        headerTitle: () => (
            <TextInput
                style={{ borderBottomWidth: 1, width: 250, borderBottomColor: Colors.fontColor, color: 'white', padding: 5 }}
                placeholder={"Enter The Serach Text"}
                onChangeText={(val) => setSearchText(val)}
               
            />
        )
    }):
    props.navigation.setOptions({
        headerTitle: () => (
            <View>
           <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>{props.route.name}</Text>
           </View>
        )
    })
    ;
    
    }, [props,searchBox,setSearchBox,setSearchText]);
    React.useEffect(()=>{
        props.getSearchString(searchText); 
    },[props,searchText])
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor:Colors.primaryColor }, tabBarLabelStyle: { color:Colors.fontColor } }}>
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="MyTask" component={MyTask} />
        </Tab.Navigator>
    )
}
const mapDispatchToProps =(dispatch)=>{
return{
    getSearchString:(data)=>dispatch(getSearchString(data))
}
}
const mapStateToProps = (state)=>{
    return{
        SearchString:state.search.searchText,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopTabBar)