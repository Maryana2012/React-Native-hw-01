
import { View, StyleSheet, TextInput, Image, Text, Button } from "react-native"
import { useFonts } from 'expo-font';

export default RegistrationScreen = () => {
    // console.log('hello');
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf')
        
    })
     if (!fontsLoaded) {
    return null;
  }
    return (
        <View style={styles.container} >
            <View style={styles.box}></View>
           <Text style={styles.title}> Реєстрація</Text>
            <TextInput style={ styles.input} />
           <TextInput style={ styles.input}/>
            <TextInput style={styles.input} />    
            <Button title='Зареєстуватися' style={styles.button} />
            <Text style={styles.text}>Вже є акаунт? Увійти </Text>
            <View style={styles.divEnd}></View>
        </View>
        
    )

    }
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
    // left: 0,
        right: 0,
        width: "100%",
        height: 549,
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 92,
        borderRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#FFFFFF",
    },
    // box: {
    //     width: 120,
    //     height: 120,
    //     background: '#F6F6F6',
    //     borderRadius: 16,

    // },
    title: {
        fontFamily: 'Roboto-Medium',
        fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        textAlign: 'center',
        marginBottom: 32,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        padding: 16,
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 16,
    },
    button: {
        width: '100%',
        height: 51,
        padding:16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
    },
    text: {
        fontFamily: 'Roboto-Medium',
        fontWeight: 400,
        fontSize: 16,
        marginBottom: 66,
        
    },
    divEnd: {
        width: 134,
        height: 5,
        backgroundColor: 'blue',
        marginBottom:8,
    }
    
   
  
})