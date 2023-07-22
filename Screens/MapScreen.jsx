import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps"; 


export default function MapScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  console.log(params);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: 48.2848388,
          longitude: 25.9554525,
          latitudeDelta: 10.5,
          longitudeDelta: 10.5,
        }}
          mapType="standard"
          minZoomLevel={10}>
        <Marker
          title="I am here"
          coordinate={{"latitude": params.location.latitude, "longitude": params.location.longitude}}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
});

