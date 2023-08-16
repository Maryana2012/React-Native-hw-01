import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, FlatList, RefreshControl,Keyboard, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useEffect,useCallback } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../redux/posts/operation";
import { nanoid } from "@reduxjs/toolkit";
import moment from 'moment';

export default function CommentsScreen({ route }) {
    
    const { photo, idPost } = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const [comment, setComment] = useState(null);
    const comments = useSelector(state => state.posts.comments);
    const photoOwner = useSelector(state => state.auth.photo);
    const idUser = useSelector(state => state.auth.id);
    const currentDate = moment().format('DD MMMM, YYYY');
    const currentTime = moment().format('HH:mm');
    const createdDate = new Date().getTime();
    const [isRefreshing, setIsRefreshing] = useState(false);
  
    const firebaseConfig = {
      apiKey:"AIzaSyCiJv3C7j-CKatpBa817fMB-JSkMwaAJQw",
      authDomain:"my-app-react-native-c6114.firebaseapp.com",
      projectId: "my-app-react-native-c6114",
      storageBucket: "my-app-react-native-c6114.appspot.com",
      messagingSenderId: "935547738830",
      appId: "1:935547738830:web:949dd36609b66ec1e70e9f",
      measurementId: "G-HWERD5KYRC"
    };
    
   
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
  
    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch]);
 
    const handleRefresh = useCallback(() => {
       setIsRefreshing(true);
       dispatch(getAllComments());
       setIsRefreshing(false);
    }, [dispatch]);
    
   
     useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { setKeyboardOpen(true) })
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { setKeyboardOpen(false); });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        }
     }, []); 
    
    const handleCreateComment = async () => {
        await addDoc(collection(db, "comments"), {
            comment: comment,
            idComment: nanoid(),
            creatingDate: currentDate,
            creatingTime: currentTime,
            photoOwner: photoOwner,
            idOwner: idUser,
            idPost: idPost,
            currentDate: createdDate,
        });
        setComment("");
    }

    const CommentsRenderItem = ( {idUser, photoOwner, comment, creatingDate, creatingTime, idOwner} ) => {
        let containerCommentStyle ='';
        let containerDateStyle = '';
        let containerCommentTextStyle = '';
        let userImgStyle = '';

        if (idUser === idOwner) {
                containerCommentStyle = styles.containerCommentOwner;
                containerDateStyle = styles.containerDateOwner;
                containerCommentTextStyle = styles.containerCommentTextOwner;
                userImgStyle = styles.userImgOwner;
        } else {
                containerCommentStyle = styles.containerComment;
                containerDateStyle = styles.containerDate;
            containerCommentTextStyle = styles.containerCommentText;
            userImgStyle = styles.userImg;
            }
        return  (
        <View style={containerCommentStyle}>
            <Image source={{ uri: photoOwner }} style={userImgStyle}/>
            <View style={containerCommentTextStyle}>
                 <Text>{comment}</Text>
                 <View style={containerDateStyle}>
                    <Text style={ styles.textDate }>{creatingDate}|{ creatingTime}</Text>
                 </View>
            </View>
        </View >
            )
     }
    
    return (
    
<View style={styles.container}>

            <View style={styles.header}>
              <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                 <Ionicons name="arrow-back-outline" size={24} color="#000"/>
              </TouchableOpacity>
              <Text style={styles.title}>Коментарі</Text>
            </View>
            
                <View style={styles.mainContent}>
                 {!keyboardOpen && 
                <Image source={{ uri: photo }} style={styles.containerPhoto} /> }
                </View>   

             <FlatList
                data={comments.filter((comment)=>{return comment.idPost === idPost})}
                renderItem={({ item }) => (<CommentsRenderItem idUser={idUser}
                photoOwner={item.photoOwner} comment={item.comment} creatingDate={item.creatingDate} creatingTime={ item.creatingTime} idOwner={item.idOwner} />)}
                keyExtractor={(item) => item.idComment}
                contentContainerStyle={styles.postsContainer}
                showsVerticalScrollIndicator={false}
                refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
                />    
               
             <TextInput style={styles.input}
                    placeholder="Коментувати..."
                    value={comment}
                    onChangeText={text=>setComment(text)}/>  
            <TouchableOpacity style={styles.buttonArrowUp}>
                <Ionicons name="arrow-up-outline" size={24} color="#000" onPress={handleCreateComment}/>
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
        paddingLeft: 16,
        paddingRight:16,
        alignItems: "center",
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
    },
    containerPhoto: {
        position:"relative",
        width:360,
        height:245,
        borderRadius: 10,
        marginTop: 15,
        marginBottom:32
    },
    containerComment: {
        display: "flex",
        flexDirection: "row",
        marginBottom:24,
    },
    containerCommentOwner: {
        display: "flex",
        flexDirection: "row-reverse",
        marginBottom: 24,
    },
    containerCommentText: {
        display: "flex",
        width: 300,
        backgroundColor: "orange",
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        borderColor: "white",
        padding: 16,         
    },
     containerCommentTextOwner: {
        display: "flex",
        width: 300,
        backgroundColor: "orange",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        borderColor: "white",
        padding: 16,         
    },
    containerDate: {
        marginTop: 8,
        marginLeft:140  
    },
    containerDateOwner: {
        marginTop: 8,
    },
    userImg: {
        width: 28,
        height: 28,
        borderRadius: 50,
        marginRight:16
    },
     userImgOwner: {
        width: 28,
        height: 28,
        borderRadius: 50,
        marginLeft:16
    },
    text:{
      fontSize:24,
      fontWeight:400,
    //   marginLeft:25,
    //   marginTop:5,
    },
    textDate: {
        fontSize: 12,
        fontWeight: 400,
        color:"blue"
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
      borderRadius: 40,
      marginBottom: 16,
    //   marginLeft:25,
    },
     
    buttonArrowUp: {
        position:'absolute',
        bottom:25,
        right:33,
        width: 34,
        height: 34,
        backgroundColor: "#FF6C00",
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center"
     },
   
})