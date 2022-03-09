import React from "react";
import {
  SafeAreaView,
  View,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Text
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
const App = () => {
  const [location,setlocation] = React.useState({
    latitude:0.0,
    longitude:0.0
   });
  React.useEffect(()=>{
    if(Platform.OS =='android'){
      AndroidPerMissionGranted();
      }else{
        if(Platform.OS === 'ios'){
          Geolocation.requestAuthorization();
        }
      }
  },[])
  const GeolocationFetch = async()=>{

    Geolocation.getCurrentPosition(
      (position) => {
      
        setlocation({...location,latitude:position.coords.latitude,longitude:position.coords.longitude})
        },(err)=>console.log(err), {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});  
       const response = await fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
         location.latitude +
          ',' +
          location.longitude +
          '&key=' +
          'AIzaSyDXyJ1qShRDsCSKTHAEaBQsRo6XpraE8uc',
      );
      const data= await response.json();
      console.log(data);
  }
 const AndroidPerMissionGranted = async() =>{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'ReactNativeCode Location Permission',
        message: 'ReactNativeCode App needs access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    
    } else {
       Alert.alert("Location Permission Not Granted");
    }
  } catch (err) {
    console.log(err)
  }
 }
  return (
    <View style={{flex:1}}>
      <MapView
         showsUserLocation={true}
         style={{flex:1}}
         zoomEnabled={true}
         scrollEnabled={true}
         showsBuildings={true}
        // showsMyLocationButton={true}
        provider={"google"}
        region={{ 
        latitude:parseFloat(location.latitude),
        longitude:parseFloat(location.longitude),
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
        }}  
      >
        { console.log("my address",location)}
        <Marker
          coordinate={{latitude: parseFloat(location.latitude),
            longitude:parseFloat(location.longitude)}}
            title={"Aj"}
        />
       <Marker
          coordinate={{latitude: 21.179576873890575,
            longitude: 72.80177060238033}}
            title={"navsari"}
        />
         <MapViewDirections
    origin={{latitude: parseFloat(location.latitude),
      longitude:parseFloat(location.longitude)}}
    destination={{latitude: 21.179576873890575,
      longitude: 72.80177060238033}}
    apikey={"AIzaSyDXyJ1qShRDsCSKTHAEaBQsRo6XpraE8uc"}
  />
      </MapView>
      <TouchableOpacity style={{position:'absolute',bottom:50,margin:20,right:20}} onPress={GeolocationFetch}>
            <Text>Location</Text>
        </TouchableOpacity>
    </View>
  )
}

export default App;