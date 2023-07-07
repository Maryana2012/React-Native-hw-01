import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function CreatePostScreen() {
  
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity >
                 <Ionicons name="arrow-back-outline" size={24} color="#000"/>
              </TouchableOpacity>
              <Text style={styles.title}>Створити публікацію</Text>
            </View>
            
            <View style={styles.mainContent}>
                <View style={styles.main_photo}></View>
                   <TouchableOpacity>
                     <View style={styles.photoButton}>
                       <Ionicons name="camera-outline" size={30} color="#000" style={styles.photoIcon}/>
                     </View>
                  </TouchableOpacity>                   

                <Text style={styles.text}>Завантажте фото</Text>
            
                <TextInput placeholder="Назва..." style={styles.input}/>

                <MaterialIcons name="location-on" size={24} color="#000" style={styles.locationIcon}/>
                <TextInput placeholder="Місцевість..." style={styles.inputLocation}/>
             
                <TouchableOpacity style={styles.button} >
                       <Text style={styles.buttonText}>Опублікувати</Text>
                </TouchableOpacity>
            </View>     


            <View style={styles.footer}>
               
                <TouchableOpacity style={styles.buttonDelete}>
                   <MaterialIcons name="delete" size={24} color="#000"/>
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
        height: 100,
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
        width: 50,
        height:50,
        backgroundColor:'red',
        borderRadius: 50,
        top: -150,
        left: 170,
    },
    photoIcon:{
      position:"absolute",
      top: 7,
      left:9,
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