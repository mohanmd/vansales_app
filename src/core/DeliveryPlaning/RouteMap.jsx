import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import  MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width : '100%',
      minHeight: '60vh',
    },
  });
export default function RouteMap(props) {
  
  return (
    <div>
        {/* <View style={styles.container}> */}
            <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
                latitude: 37.78825,
                longitude: -122.4324, 
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }} > </MapView>

        {/* </View> */}
    </div>
  );
}
