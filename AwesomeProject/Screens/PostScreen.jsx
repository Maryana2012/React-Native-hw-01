import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PostScreen() {
    return (        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публікації</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="log-out-outline" size={24} color="#000" style={ styles.imageExit}/>
            </TouchableOpacity>
            <View style={styles.mainContent}></View>            
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
        // backgroundColor: "#FFFFFF",
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
        top: -70,
        left: 150,
        zIndex:10  
    },
    mainContent: {
        width: "100%",
        height:550,  
    },
})