import { View, StyleSheet, TextInput, Text, Button, Image, TouchableOpacity } from "react-native"
import { useFonts } from 'expo-font';

export default LoginScreen = () => {
        const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        
    })
     if (!fontsLoaded) {
    return null;
  }
    return (
        <View style={styles.container} >
            <View style={styles.box}></View>
            <Image source={ require('../images/add.png')} style={styles.imagePlus} />
            <Text style={styles.title}>Увійти</Text>
         
            <TextInput style={styles.input} placeholder="Адреса електронної пошти"/>
            <TextInput style={styles.input} placeholder="Пароль" />  
            
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Немає акаунта? Зареєстуватися </Text>
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
    box: {
        position: 'absolute',
        top: '-13%',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        // backgroundColor: 'blue',
        borderRadius: 16,

    },
    imagePlus: {
        position: 'absolute',  
        right: 125,
    },
    title: {
        fontFamily: 'Roboto-Medium',
        // fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        textAlign: 'center',
        marginBottom: 32,
    },
    input: {
        width: '100%',
        height: 50,
        // backgroundColor: '#F6F6F6',
        backgroundColor: 'tomato',
        borderRadius: 8,
        padding: 16,
        // borderColor: '#E8E8E8',
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 16,
    },
    button: {
        width: 343,
        height: 51,
        padding:16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
    },
     buttonText: {
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
    },
    text: {
        fontFamily: 'Roboto-Medium',
        // fontWeight: 400,
        fontSize: 16,
        marginBottom: 132,
    },
    divEnd: {
        width: 134,
        height: 5,
        backgroundColor: '#212121',
        marginBottom:8,
    }
    
   
  
})