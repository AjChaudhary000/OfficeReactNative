import { View, Text,FlatList } from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import { getAllTask } from '../Redux/TaskSlice'
const HomeScreen = (props) => {
  console.log(props.AllTask)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
      
    </View>
  )
}
const mapStateToProps = (state)=>{
  return{
    SearchString:state.search.searchText,
    AllTask:state.task.AllTask,
    loading:state.task.loading
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    getAllTask:dispatch(getAllTask())
  }
  }
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)