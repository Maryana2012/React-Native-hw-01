import { View, StyleSheet, TextInput, 
    Text, Button, Image, TouchableOpacity, KeyboardAvoidingView, 
    Platform, TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native"
// import { useFonts } from 'expo-font';
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default LoginScreen = () => {
  

    const screenHeight = Dimensions.get("window").height;

    return (
     <View style={styles.container}>
         <View
          style={[styles.innerContainer, { height: (screenHeight * 2) / 3 }]}>
         
         <View style={styles.box}>
            <TouchableOpacity style={styles.buttonClose}>
                <MaterialIcons name='close' size={22} color="#000" style={styles.iconClose}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialIcons name="logout" size={24} color="#000" style={ styles.iconExit}/>
            </TouchableOpacity> 
         </View>

         <Text style={styles.title}>Name</Text>
         <View style={styles.mainContent}></View>
          
          

        </View>



     </View>
          
    )
}
const styles = StyleSheet.create({

    // container: {
    //     //   flex: 1,
    
    //     width: "100%",
    //     alignItems: "center",
    //     justifyContent: "space-around",
    //     padding: 24,
    //     borderRadius: 25,
    //     borderBottomLeftRadius: 0,
    //     borderBottomRightRadius: 0,
    //     backgroundColor: "#fff",
    //     position: "absolute",
    //     // position: "relative",
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     fontFamily: "Roboto-Regular",
    //   },
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        // height: 549,
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
    innerContainer:{
        width:'100%',
        alignItems:'center'
    },
 
    box: {
        position: 'absolute',
        top: '-30%',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        // backgroundColor: 'blue',
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
        top:80,
        left:105,
        backgroundColor:'orange',
        borderRadius:50,
    },

    iconExit:{
        position:'absolute',
        top:80,
        left: 210,
    },
    title: {
        fontFamily: 'Roboto-Medium',
        // fontWeight: 500,
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
    footer: {
      width: '100%',
        height: 60,
        padding: 11,
        borderTopColor: 'orange',
        borderTopWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    button: {
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