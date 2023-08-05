import { View, StyleSheet, TextInput,Text,Image, TouchableOpacity, KeyboardAvoidingView, 
         Platform, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { loginUser } from '../redux/auth/operations';
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../config";
import Notiflix from "notiflix";

export default LoginScreen = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
 useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { setKeyboardOpen(true) })
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { setKeyboardOpen(false); });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        }
    }, []);   
    

    const handleLogin = async () => {
          if(!email || !password ){
              console.log('Please, fill all fields');
              return
        }   
        const isAuth = await fetchSignInMethodsForEmail(auth, email);
        console.log(isAuth);
        if (isAuth.length === 0) {
            alert("Такого користувача не існує, Вам необхідно зареєструватись");
            setEmail('');
            setPassword('');
            navigation.navigate("Registration")
            return
        }
        dispatch(loginUser({email, password}))

        setEmail('');
        setPassword('');
        
        if (navigation) {navigation.navigate("Home")}
    }

return (<View style={styles.containerBG}>
         <Image source={require('../images/Photo.png')}
               resizeMode="cover"
               imageStyle={styles.image} />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <KeyboardAvoidingView  
             behavior={Platform.OS == "ios" ? "padding" : "height"}
             keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}
             style={styles.container}>   
             
           <View style={styles.box}></View>
           <TouchableOpacity style={styles.buttonPlus}>
                <Ionicons name="add-circle-outline" size={30} color="orange" style={ styles.imagePlus}/>
           </TouchableOpacity>

           
            <Text style={styles.title}>Увійти</Text>
         
            <TextInput style={styles.input} 
                       placeholder="Адреса електронної пошти"
                       value={email}
                       onChangeText={text=>setEmail(text)}
                       />
            <TextInput style={styles.input} 
                      placeholder="Пароль"
                      value={password}
                      onChangeText={text=>setPassword(text)} />  
            
            {!keyboardOpen && (
                <>
                  <TouchableOpacity style={styles.button} onPress={handleLogin}>
                       <Text style={styles.buttonText}>Увійти</Text>
                  </TouchableOpacity>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>Немає акаунта? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("Registration") }}>
                       <Text style={styles.text}>Зареєструватися</Text>  
                    </TouchableOpacity>
                  </View>
                  <View style={styles.divEnd}></View>
            </>)}
            </KeyboardAvoidingView>  
            </TouchableWithoutFeedback>  
            </View>      
    )
}
const styles = StyleSheet.create({
    containerBG:{
       position:'relative',
       alignItems:'center',
       width:"100%",
       flex: 1,
    },
    image: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
        },
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
    containerKeyboard:{
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
    buttonPlus:{
        position:'absolute',
        width:26,
        height:25,
        top:0,
        left:240,
        backgroundColor:'orange',
        borderRadius: 50,
    },
    imagePlus: {
        position: 'absolute',  
        top:-4,
        left: -1,
    },
    title: {
        fontFamily: 'Roboto-Medium',
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
        fontSize: 16,
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 132,
    },
    divEnd: {
        width: 134,
        height: 5,
        backgroundColor: '#212121',
        marginBottom:8,
    } 
})