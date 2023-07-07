
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default RegistrationScreen = () => {
        const [login, setLogin]=useState('');
        const [email, setEmail]=useState('');
        const [parol, setParol] = useState('');
        const [keyboardOpen, setKeyboardOpen] = useState(false);
        const navigation = useNavigation();
 
        const handleRegistration = () =>{
            if(!login || !email || !parol ){
                console.log('Please, fill all fields ');
                return
            }   
            console.log('Login:', login )
            console.log('Email:', email )
            console.log('Parol:', parol )
            setLogin('');
            setEmail('');
            setParol('');

            if(navigation){navigation.navigate("Home")}
        }

    const keyboardDidShow = () => { setKeyboardOpen(true);};
    const keyboardDidHide = () => {setKeyboardOpen(false);};
   
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return (
        <View style={styles.containerBG}> 
        <Image source={require('../images/Photo.png')}
        resizeMode="cover"
        imageStyle={styles.image} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <KeyboardAvoidingView  
             behavior={Platform.OS == "ios" ? "padding" : "height"}
             keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}
             style={styles.container}
             >   
            <View style={styles.box}></View>
            {/* <Image source={ require('../images/add.png')} style={styles.imagePlus} /> */}
            <TouchableOpacity style={styles.buttonPlus}>
                <Ionicons name="add-circle-outline" size={30} color="orange" style={ styles.imagePlus}/>
            </TouchableOpacity>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input}
                       placeholder="Логін"
                       value={login}
                       onChangeText={text => setLogin(text)}/>
            <TextInput style={styles.input} 
                       placeholder="Адреса електронної пошти"
                       value={email}
                       onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.input} 
                       placeholder="Пароль"
                       value={parol}
                       onChangeText={text => setParol(text)}/> 

            {!keyboardOpen && (<>
                    <TouchableOpacity style={styles.button}
                              onPress={handleRegistration}>
                          <Text style={styles.buttonText}>Зареєструватися</Text>
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                    <Text style={styles.text}>Вже є акаунт? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                           <Text style={styles.text}>Увійти</Text>  
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
        top:-4,
        left:-1
    },
    buttonPlus:{
        position:'absolute',
        width:26,
        height:25,
        top:0,
        left:240,
        backgroundColor:'orange',
        borderRadius:50,
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
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 16,
        fontSize: 16,
    },
    button: {
        width: 343,
        height: 51,
        padding:16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
        marginTop: 27,

        
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
        // marginBottom: 66,
    },
     textContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 66,

    },
    divEnd: {
        width: 134,
        height: 5,
        backgroundColor: '#212121',
        marginBottom:8,
    }
    
   
  
})