import { View, Text} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen';
import TopTabBar from './TopTabBar';
import Colors from '../../Contents/Colors';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const Drawers = () => {


  return (
    <Drawer.Navigator 
    drawerContent={props =><DrawerContent {...props} />}
     screenOptions={{
       headerStyle:{backgroundColor:Colors.primaryColor,borderBottomWidth:0},
     headerTintColor:Colors.fontColor}}>
        <Drawer.Screen name='My Task' component={TopTabBar} />
    </Drawer.Navigator>
  )
}

export default Drawers