import { View, Text } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
const MyTask = (props) => {
    
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
      <Text>MyTask</Text>
      <Text>{props.SearchString}</Text>
    </View>
  )
}
const mapStateToProps = (state)=>{
  return{
    SearchString:state.search.searchText,
  }
}
export default  connect(mapStateToProps)(MyTask)