import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
// import { useFonts } from 'expo-font';
import { MaterialIcons } from "@expo/vector-icons";

export default function PostScreen() {
    // const [fontsLoaded] = useFonts({
    //     'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        
    // })
    //   if (!fontsLoaded) {return null;}

    return (<>
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публікації</Text>
            </View>

            <TouchableOpacity>
                <MaterialIcons name="logout" size={24} color="#000" style={ styles.imageExit}/>
            </TouchableOpacity>
              
            
            <View style={styles.mainContent}></View>
          
            <View style={styles.footer}>
            {/* <MaterialIcons name="view_cozy" size={24} color="#000" />  */}
              <TouchableOpacity>
                <Image source={require('../images/grid.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <MaterialIcons name="add" size={24} color="#000" /> 
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialIcons name="person" size={24} color="#000" /> 
              </TouchableOpacity>
               
            </View>
             <View style={styles.divEnd}></View>
           
        </View>
        </>
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
        // paddingLeft: 16,
        // paddingRight: 16,
        // paddingTop: 92,
        // borderRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // backgroundColor: "#FFFFFF",
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
        top: -50,
        left: 150,
        // width: 24,
        // height: 24,
        zIndex:10  
    },

    mainContent: {
        width: "100%",
        height:550,  
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