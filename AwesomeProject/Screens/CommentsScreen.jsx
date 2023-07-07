import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CommentsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity >
                 <Ionicons name="arrow-back-outline" size={24} color="#000"/>
              </TouchableOpacity>
              <Text style={styles.title}>Коментарі</Text>
            </View>
            
            <View style={styles.mainContent}>
                
            </View>     
               
             <TextInput style={styles.input}
              placeholder="Коментувати..."/>  
            <TouchableOpacity style={styles.buttonArrowUp}>
                <Ionicons name="arrow-up-outline" size={24} color="#000"/>
            </TouchableOpacity>
         

           
           
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
        marginRight: 140,
    },
    
    mainContent: {
        width: "100%",
        height:550,  
    },

    text:{
      fontSize:16,
      fontWeight:400,
      marginLeft:25,
      marginTop:5,
    },
 
    input:{
        position:'relative',
      width: 343,
      height: 50,
      backgroundColor: 'blue',
      padding: 16,
      borderColor: 'tomato',
      borderWidth: 1,
    //   borderTopWidth: 0,
    //   borderLeftWidth: 0,
    //   borderRightWidth: 0,
      borderRadius: 20,
      marginBottom: 16,
    //   marginLeft:25,
    },
     
    buttonArrowUp: {
        position:'absolute',
        bottom:40,
        right:35,
        width: 34,
        height: 34,
        backgroundColor: "#FF6C00",
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center"
     },
   
})