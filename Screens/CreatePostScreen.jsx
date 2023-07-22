import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image} from "react-native";
import { Ionicons} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

export default function CreatePostScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState(null);
    const [locationName, setLocationName] = useState(null);
    const [location, setLocation] = useState(null);
    const navigation = useNavigation();
    
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    
    useEffect(() => {
        (async () => {
         const { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            console.log("Permission to access location was denied");
         }
      
         const location = await Location.getCurrentPositionAsync({});
         const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
         };
         setLocation(coords);
        })();
    }, []);
    
    if (hasPermission === null) {return <View /> }
    if (hasPermission === false) { return <Text>No access to camera</Text> }

    const data = photo && photoName && locationName;

    const handleMakePhoto = async ()=>{
       if (cameraRef) {
         const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setPhoto(uri)
        } 
    }
    
    const handleCreatePublish = () => {
        if (data) {
            navigation.navigate("Post",
            {location: location,
                photo: photo,
                photoName: photoName,
                locationName: locationName});
            setPhotoName("");
            setLocationName("");
            setPhoto("");
            // console.log("photo: ", photo);
            // console.log("PhotoName: ", photoName);
            // console.log("LocationName: ", locationName);
        } else {
            console.log("Please, fill all fields");
            return;
        }
    }

    const handleClearFields = () => {
        setLocationName(null);
        setPhoto(null);
        setPhotoName(null);
        // console.log("PhotoName: ", photoName);
        // console.log("LocationName: ", locationName);
    }
    
    console.log("photo: ", photo);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => { navigation.navigate("Post") }} >
                 <Ionicons name="arrow-back-outline" size={24} color="#000"/>
              </TouchableOpacity>
              <Text style={styles.title}>Створити публікацію</Text>
            </View>
            

            <View style={styles.mainContent}>

                <Camera style={styles.main_photo}
                 type={type}
                 ref={setCameraRef}>
                    {photo && <Image source={{ uri: photo }} style={styles.imageDone} />}
                    <TouchableOpacity style={styles.photoButton} onPress={handleMakePhoto}>
                        <Ionicons name="camera-outline" size={24} color="#000" style={styles.photoIcon}/>
                    </TouchableOpacity>   
                </Camera>
                            
                <Text style={styles.text}>
                    {photo ? "Редагувати фото" : "Завантажте фото"}
                </Text>
            
                
                <TextInput placeholder="Назва..."
                    style={styles.input}
                    value={photoName}
                    onChangeText={(text)=>setPhotoName(text)}
                />

                <Ionicons name="location-outline" size={24} color="#000" style={styles.locationIcon}/>
                <TextInput placeholder="Місцевість..."
                    style={styles.inputLocation}
                    value={locationName}
                    onChangeText={(text) => setLocationName(text)} />
             
                <TouchableOpacity
                    // style={styles.button}
                      style={[styles.button, !data && styles.buttonDisabled]}
                    onPress={handleCreatePublish}>
                    <Text style={styles.buttonText}>Опублікувати</Text>
                </TouchableOpacity>
            </View>     


            <View style={styles.footer}>
               
                <TouchableOpacity style={styles.buttonDelete} onPress={handleClearFields}>
                   <Ionicons name="trash-outline" size={24} color="#000"/>
                </TouchableOpacity>
            </View>

            <View style={styles.divEnd}></View>
           
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
        justifyContent: "space-around",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'blue'
    },
    header: {
        width: '100%',
        height: 80,
        padding: 11,
        borderBottomColor: 'orange',
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: "bold",
        fontSize: 17,
        textAlign: 'center',
        color:"#212121", 
        marginRight: 100,
    },
    
    mainContent: {
        width: "100%",
        height:550,  
    },
    main_photo:{
        position:"relative",
        width:343,
        height:240,
        backgroundColor: "orange",
        marginLeft:25,
        borderRadius:10,
        marginTop:20,
    },
    photoButton:{
        position:'absolute',
        width: 40,
        height:40,
        backgroundColor:'red',
        borderRadius: 50,
        top: 100,
        left: 150,
        zIndex:12
    },
    photoIcon:{
      position:"absolute",
      top: 7,
      left:8,
      zIndex:10
    },
    imageDone: {
        position:"absolute",
        width: "100%",
        height: "100%",
        // zIndex:15
    },
    text:{
      fontSize:16,
      fontWeight:400,
      marginLeft:25,
      marginTop:5,
    },
 
    input:{
      width: 343,
      height: 50,
      backgroundColor: 'blue',
      padding: 16,
      borderBottomColor: 'tomato',
      borderBottomWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      marginBottom: 16,
      marginLeft:25,
    },
    inputLocation:{
        width: 343,
        height: 50,
        backgroundColor: 'blue',
        padding: 16,
        borderBottomColor: 'tomato',
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom: 20,
        marginLeft:25,
        paddingLeft:30,
    },

    locationIcon:{
       position:"absolute",
       top: 360,
       left:25,
       zIndex:10,
    },
    button:{
        width: 343,
        height: 51,
        padding:16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
        marginLeft:25,
    },
    buttonDisabled: {
       backgroundColor: "#ccc",
       opacity: 0.5,
  },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
    },
    footer: {
      width: '100%',
        height: 60,
        padding: 11,
      
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    buttonDelete: {
        width: 70,
        height: 40,
        backgroundColor: "#FF6C00",
        borderRadius: 20,
        alignItems: "center",
        justifyContent:"center"
     },
    divEnd: {
        width: 134,
        height: 5,
        backgroundColor: '#212121',
        marginBottom: 8,
    }
})