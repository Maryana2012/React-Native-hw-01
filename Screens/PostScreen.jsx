import { View, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useEffect, useState } from "react";


export default function PostScreen() {
    const navigation = useNavigation();
    const { params } = useRoute();
    console.log(params);
    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState(null);
    useEffect(() => {
        if (params) {
            const { location, locationName, photo, photoName } = params;
            setLocation(location);
            setLocationName(locationName);
            setPhoto(photo);
            setPhotoName(photoName);
        } else {return}
    }, [params])
    console.log(params);
    console.log(location);
    console.log(photo);
    console.log(photoName);
    console.log(locationName);

    return (        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публікації</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="log-out-outline" size={24} color="#000" style={ styles.imageExit}/>
            </TouchableOpacity>
            
            <View style={styles.mainContent}>
                <View style={styles.containerProfile} >
                    <Image source={require('../images/Photo.png')} style={styles.imageProfile} />
                    <View style={styles.containerProfileText}>
                      <Text style={styles.text}> Логін</Text>
                      <Text style={styles.text}> Пошта</Text>
                    </View>
                </View>

                {params && 
                <View>
                    <Image source={{ uri: photo }} style={styles.containerPhoto}/>
                    <Text >{photoName}</Text>
                    <View style={styles.containerImageSubscribe}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Comments") }}>                         
                           <Ionicons name="chatbubble-outline" size={24} />
                         </TouchableOpacity>
                        <View style={styles.containerLocation}>
                           <Ionicons name="location-outline" size={24} />
                           <TouchableOpacity onPress={() => { navigation.navigate("Map", {location:location}) }}>
                               <Text style={styles.text}>{locationName}</Text>  
                           </TouchableOpacity>
                        </View>

                    </View>  
                    
                </View>
}
 
            </View> 
         
        </View>
    )
}
const styles = StyleSheet.create({
   
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        height: '100%',
        alignItems: "center",
        // justifyContent: "space-around",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // backgroundColor: "#FFFFFF",
        backgroundColor: 'blue',
        paddingLeft: 16,
        paddingRight:16
    },
    header: {
        width: '100%',
        height: 80,
        padding: 11,
        borderBottomColor: 'orange',
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: "bold",
        fontSize: 17,
        textAlign: 'center',
        color:"#212121", 
    },
    imageExit: {
        position: "absolute",
        top: -35,
        left: 150,
        zIndex:10  
    },
    mainContent: {
        width: "100%",
        // height: 200,
        // justifyContent: 'center',
        // alignItems:"center"
    },
    imageProfile: {
        width: 60, 
        height: 60,
        borderColor: 'orange',
        borderRadius: 10
    },
    containerProfile: {
        flexDirection: "row",
        marginTop: 20,
        // marginLeft:20
      
    },
    containerProfileText: {
        flexDirection: "column",
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: "flex-start"
    },
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
        // color: '#212121',
        textAlign: 'center',
    },
    containerPhoto: {
        position:"relative",
        width:360,
        height:245,
        backgroundColor: "orange",
        // marginLeft:15,
        borderRadius:10,
        marginTop: 25,
        marginBottom:10
    },
    containerImageSubscribe: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "space-between",
        alignItems:"center"
    },
    containerLocation: {
        flexDirection:"row",
        justifyContent: "flex-end",
        alignItems:"center",
    }
})