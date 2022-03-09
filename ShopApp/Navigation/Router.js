import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import TabBar from './Tab'
import Colors from '../Contents/Colors';
import ProductDetails from '../Screen/ProductDetails';
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:Colors.primaryColor}}}>
        <Stack.Screen name="TabBar" component={TabBar} options={{headerShown:false}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router