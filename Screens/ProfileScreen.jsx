import { View, StyleSheet,Text,Image, TouchableOpacity, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default ProfileScreen = () => {
    const screenHeight = Dimensions.get("window").height;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // const [photoProfile, setPhotoProfile] = useState(null)
    const login = useSelector((state) => state.user.login);
    const photo = useSelector((state) => state.user.photo);

    const handleLogout = () => {
        dispatch(remove());
        navigation.navigate("Login")
    }

    return (
        <View style={styles.containerBG}>
            <Image source={require('../images/Photo.png')}
                   resizeMode="cover"
                   imageStyle={styles.image} />
             
            <View style={styles.container}>
              <View style={[styles.innerContainer, { height: (screenHeight * 2) / 3 }]}>
              
                    <Image source={{ uri: photo }} style={styles.box} />
                    <TouchableOpacity style={styles.buttonClose}>
                      <Ionicons name='close-outline' size={22} color="#000" style={styles.iconClose}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogout}>
                      <Ionicons name="log-out-outline" size={24} color="#000" style={ styles.iconExit}/>
                    </TouchableOpacity> 
                
                    <Text style={styles.title}>{ login }</Text>
              <View style={styles.mainContent}></View>
          
            </View>
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
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 92,
        borderRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // backgroundColor: "#FFFFFF",
        backgroundColor:'blue'
    },
    containerBG:{
        position:'relative',
        alignItems:'center',
        width:"100%",
        flex: 1,
    },
    innerContainer:{
        width:'100%',
        alignItems:'center'
    },
     image: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
        },
    box: {
        position: 'absolute',
        top: '-30%',
        width: 120,
        height: 120,
        // backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    iconClose: {
        position: 'absolute',  
        top: 0,
        left:0,
        zIndex:10
    },

    buttonClose:{
        position:'absolute',
        width:24,
        height:24,
        top:-90,
        left:230,
        backgroundColor:'orange',
        borderRadius:50,
    },

    iconExit:{
        position:'absolute',
        top:-90,
        left:140,
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        color: '#212121',
        textAlign: 'center',
        marginBottom: 32,
    },
    mainContent: {
        width: "100%",
        height:350,  
        textAlign:'center'
    },  
})