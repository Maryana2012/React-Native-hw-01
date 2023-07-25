import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, 
         Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

export default function CreatePostScreen() {
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState(null);
    const [locationName, setLocationName] = useState(null);
    const [location, setLocation] = useState(null);

    const navigation = useNavigation();
    const data = photo && photoName && locationName;
  
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

    useEffect(() => {
         (async () => {
           const { status } = await Camera.requestCameraPermissionsAsync();
           await MediaLibrary.requestPermissionsAsync();
           setHasPermission(status === 'granted');
         })();
    }, []);
    


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { setKeyboardOpen(true) })
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { setKeyboardOpen(false); });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        }
    }, []);

      
    if (hasPermission === null) {return <View /> }
    if (hasPermission === false) { return <Text>No access to camera</Text> }

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
                locationName: locationName
                });
            
            setLocationName(null);
            setPhotoName(null);
            setPhoto(null);
        } else {
            console.log("Please, fill all fields");
            return;
        }
    }

    const handleClearFields = () => {
        setLocationName(null);
        setPhoto(null);
        setPhotoName(null);
    }
    
    return (
        <View style={styles.container}>
            
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <KeyboardAvoidingView  
             behavior={Platform.OS == "ios" ? "padding" : "height"}
             keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 0}
             style={styles.container}>  
                    
            <View style={styles.header}>
              <TouchableOpacity onPress={() => { navigation.navigate("Post") }} >
                 <Ionicons name="arrow-back-outline" size={24} color="#000"/>
              </TouchableOpacity>
              <Text style={styles.title}>Створити публікацію</Text>
            </View>
            

            <View style={styles.mainContent}>

                <Camera type={type} ref={setCameraRef} style={styles.cameraContainer}>
                    <View style={styles.photoView}>
                        {photo && (
                            <View style={styles.photoContainer}>
                                <Image source={{ uri: photo }} style={{ width: "100%", height: "100%" }} />
                            </View>)}
                      <TouchableOpacity style={styles.photoButton} onPress={handleMakePhoto}>
                         <Ionicons name="camera-outline" size={24} color="#000" style={styles.photoIcon}/>
                      </TouchableOpacity>   
                    </View>
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
                
                {!keyboardOpen && (<>           
                <TouchableOpacity style={[styles.button, !data && styles.buttonDisabled]}
                    onPress={handleCreatePublish}>
                    <Text style={styles.buttonText}>Опублікувати</Text>
                </TouchableOpacity>
                        </>)}
            </View>     

            {!keyboardOpen && (<>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonDelete} onPress={handleClearFields}>
                   <Ionicons name="trash-outline" size={24} color="#000"/>
                </TouchableOpacity>
            </View>
            <View style={styles.divEnd}></View>
            </>
           )}

             </KeyboardAvoidingView>  
            </TouchableWithoutFeedback>  
        </View>
    )
    }
    
const styles = StyleSheet.create({
    container: {
        flex:1,
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        height: '100%',
        alignItems: "center",
        justifyContent: "space-around",
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
        flex: 1,
        width: "100%",
        height:550,  
    },
   
    photoButton:{
        position:'absolute',
        width: 40,
        height:40,
        backgroundColor:'red',
        borderRadius: 50,
        top: 100,
        left: 150,
        zIndex:20
    },
    photoIcon:{
      position:"absolute",
      top: 7,
      left:8,
      zIndex:10
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
    },
    cameraContainer: {
        position: "relative",
        width:343,
        height:240,
        marginLeft:25,
        borderRadius:20,
        marginTop:20,
    },
    photoView: {
        flex: 1,
        borderRadius:20,
        backgroundColor: "transparent",
        justifyContent: "flex-end",
    },


})