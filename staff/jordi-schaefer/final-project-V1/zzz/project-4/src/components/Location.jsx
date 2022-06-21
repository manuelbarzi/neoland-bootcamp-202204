import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Geolocation from 'react-native-geolocation-service';




const Location = () => {

   const [lat, setLat] = useState(null)
   const [lng, setLng] = useState(null)

   useEffect(() => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLat=(latitude)
          setLng=(longitude)
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }, []);


   return (
      <View style={styles.container}>
          <Text>latitude: {lat}</Text>
          <Text>longitude: {lng}</Text>
      </View>
   )

}

export default Location


const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#F5FCFF"
   },
   welcome: {
     fontSize: 20,
     textAlign: "center",
     margin: 10
   },
   instructions: {
     textAlign: "center",
     color: "#333333",
     marginBottom: 5
   }
 });