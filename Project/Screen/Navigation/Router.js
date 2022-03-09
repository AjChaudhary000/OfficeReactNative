import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../Login'
import Drawers from './Drawer'
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
   <NavigationContainer >
       <Stack.Navigator >
           <Stack.Screen name='Login' component={Login}  options={{headerShown:false}}/>
           <Stack.Screen name='Drawers' component={Drawers}  options={{headerShown:false}}/>
       </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Router