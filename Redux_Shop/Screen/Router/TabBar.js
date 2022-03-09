import { View, Text } from 'react-native'
import React from 'react'
import AllProduct from '../AllProduct'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Cart';
import Favorite from '../Favorite';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#2492c9' },
     headerTintColor: 'white',
     tabBarShowLabel:false,
     tabBarStyle:{backgroundColor:'#2492c9',position:"absolute",bottom:0}
     }}>
      <Tab.Screen name='Product' component={AllProduct} options={{
        tabBarIcon: ({focused}) => (
          <Icon name="home" size={30} fontWeight={"bold"} color={
            focused?"white":'black'
          } />
        )
      }} />
      <Tab.Screen name='Cart' component={Cart} options={{
        tabBarIcon: ({focused}) => (
          <Icon name="shopping-cart" size={30} fontWeight={"bold"} color={
            focused?"white":'black'
          } />
        )
      }} />
      <Tab.Screen name='Favorite' component={Favorite} options={{
        tabBarIcon: ({focused}) => (
          <Icon name="favorite" size={30} fontWeight={"bold"} color={
            focused?"white":'black'
          } />
        )
      }} />
    </Tab.Navigator>
  )
}

export default TabBar