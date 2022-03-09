import { View,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import{Avatar,Title,Text} from 'react-native-paper'
import {DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer'
const DrawerContent = (props) => {
  return (
   <View style={styles.Drawer}>
        <DrawerContentScrollView {...props}>
                <View style={styles.profile}>
                <Avatar.Image  style={{backgroundColor:'white'}} 
                   source={{
                       uri:'https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png'}}/>
                <View>
                    <Title style={{letterSpacing:1}}>Arjun</Title>
                    <Text>+91 9106614742</Text>
                </View>
                </View>
                <View style={styles.drawerItem}>
                    <DrawerItem label={"MyTask"} />
                    <DrawerItem label={"Add Task"} />
                    <DrawerItem label={"Support"} />
                </View>
        </DrawerContentScrollView>
   </View>
  )
}

export default DrawerContent
const styles = StyleSheet.create({
Drawer:{
    flex:1,
    backgroundColor:'#c4a529',
},
profile:{
   height:150,
   justifyContent:'center',
   marginHorizontal:20
},
drawerItem:{
    height:Dimensions.get('screen').height - 150,
    backgroundColor:'white',
}
});