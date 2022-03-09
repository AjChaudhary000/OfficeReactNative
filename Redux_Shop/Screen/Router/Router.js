import { View, Text } from 'react-native'
import React from 'react'
import TabBar from './TabBar'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../ProductDetails';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
   <NavigationContainer>
       <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#2492c9'}}}>
           <Stack.Screen  name='TabBar' component={TabBar} options={{headerShown:false}}/>
           <Stack.Screen  name='ProductDetails' component={ProductDetails} />
       </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Router