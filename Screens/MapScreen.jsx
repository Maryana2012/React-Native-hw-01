import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";



export default function MapScreen({route}) {
//  const posts = useSelector(state => state.posts.posts);
  console.log(route);
  const { location } = route.params;
//  const location = posts.some((post)=>{pos})
 
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
          coordinate={{"latitude": location.latitude, "longitude": location.longitude}}
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

