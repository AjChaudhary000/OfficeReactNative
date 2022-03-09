import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AllProduct from '../Screen/AllProduct';
import Order from '../Screen/Order';
import MyProduct from '../Screen/MyProduct';
import Colors from '../Contents/Colors';
const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
   <Tab.Navigator screenOptions={{headerStyle:{backgroundColor:Colors.primaryColor}}}>
       <Tab.Screen name='Product' component={AllProduct} />
       <Tab.Screen name='Order' component={Order}/>
       <Tab.Screen name='MyProducts' component={MyProduct}/>
   </Tab.Navigator>
  )
}

export default TabBar