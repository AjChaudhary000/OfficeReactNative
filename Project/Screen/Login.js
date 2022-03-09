import { View, Text,StyleSheet,TextInput, TouchableOpacity,Modal} from 'react-native'
import React from 'react'

const Login = (props) => {
    const [isvisible,setIsVisible] = React.useState(false);
  return (
    <View style={styles.container}>
         <Modal  visible={isvisible}>
             <View style={styles.modal}>
                <Text>My Data</Text>
                <TouchableOpacity style={styles.helpbtn} onPress={()=>setIsVisible(false)}>
            <Text style={{textAlign:'center',fontSize:20,color:'white'}}>close</Text>
        </TouchableOpacity>
             </View>
         </Modal>
     <View style={styles.box}>
         <TextInput placeholder='enter The User Name ' placeholderTextColor={"grey"} style={styles.input}/>
     </View>
     <View style={styles.box}>
         <TextInput placeholder='enter The Password Name 'placeholderTextColor={"grey"} style={styles.input}/>
     </View>
     <View style={styles.box}>
        <TouchableOpacity style={styles.btn}  onPress={()=>props.navigation.navigate("Drawers")}>
            <Text style={{textAlign:'center',fontSize:20,color:'white'}}>Login</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.help}>
     <TouchableOpacity style={styles.helpbtn} onPress={()=>setIsVisible(true)}>
            <Text style={{textAlign:'center',fontSize:20,color:'white'}}>Help</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Login
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:'100%',
        height:45,
        paddingHorizontal:10,
        marginVertical:20
    },
    input:{
       
        height:'100%',
        borderWidth:3,
        borderRadius:10,
        padding:10
    },
    btn:{
        width:'50%',
        height:'100%',
        backgroundColor:'orange',
        alignSelf:'center',
        justifyContent:"center",
        borderRadius:10
    },
    help:{
        position:'absolute',
        bottom:50,
        right:30,
       
    },
    helpbtn:{
        backgroundColor:"red",
        padding:5,
        borderRadius:10,
        paddingHorizontal:10
    },
    modal:{
       
        flex:1,
       
        justifyContent:'center',
        alignItems:'center'
    }
});