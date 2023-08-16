import { View, StyleSheet,Text,Image, TouchableOpacity, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { remove } from "../redux/auth/operations";
import { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";


export default ProfileScreen = () => {
    const screenHeight = Dimensions.get("window").height;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const login = useSelector((state) => state.auth.login);
    const photo = useSelector((state) => state.auth.photo);
    const idUser = useSelector((state) => state.auth.id);
    const country = useSelector(state => state.posts.posts.country);
    
   
    const posts = useSelector(state => state.posts.posts);
  console.log(idUser);    
    const filteredPosts = posts.filter((post) => { return post.idOwner === idUser });

    console.log(posts);

    const renderItem = ({item}) => 
         (  <View style={styles.postsContainer}>
             <Image source={{ uri: item.photo }} style={styles.containerPhoto} />
                     <Text >{item.photoName}</Text>
                     <View style={styles.containerImageSubscribe}>
            <TouchableOpacity onPress={() => {navigation.navigate("Comments", { photo: item.photo, idPost: item.idPost })
            }}>                         
                           <Ionicons name="chatbubble-outline" size={24} />
                          </TouchableOpacity>
                            <View style={styles.containerLocation}>
                            <TouchableOpacity>
                             <Ionicons name="location-outline" size={24} />
                          </TouchableOpacity>    
                           <TouchableOpacity onPress={() => { navigation.navigate("Map", {location: item.location}) }}>
                                <Text style={styles.text}>{item.country}</Text>  
                          </TouchableOpacity>
                        </View>
                     </View>  
              </View >
            )

    const handleLogout = () => {
        dispatch(remove());
        navigation.navigate("Login")
    }

    return (
        <View style={styles.containerBG}>
            <Image source={require('../images/Photo.png')}
                   resizeMode="cover"
                   imageStyle={styles.image} />
             
            <View style={styles.container}>
              <View style={[styles.innerContainer, { height: (screenHeight * 2) / 3 }]}>
              <View style={styles.box}>
                <Image source={{ uri: photo }} style={styles.userImg} />
                          <TouchableOpacity style={styles.buttonClose}>
                               <Ionicons name='close-outline' size={22} color="#000" style={styles.iconClose}/>
                             </TouchableOpacity>        
               </View>
                   
                    <TouchableOpacity onPress={handleLogout}>
                      <Ionicons name="log-out-outline" size={24} color="#000" style={ styles.iconExit}/>
                    </TouchableOpacity> 
                
                    <Text style={styles.title}>{ login }</Text>
                    <View style={styles.mainContent}></View>
                     <FlatList data={filteredPosts}
                               renderItem={renderItem}
                               keyExtractor={(item) => item.idPost}
                               contentContainerStyle={styles.postsContainer}
                               showsVerticalScrollIndicator={true} />



          
            </View>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
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
    containerBG:{
        position:'relative',
        alignItems:'center',
        width:"100%",
        flex: 1,
    },
    innerContainer:{
        width:'100%',
        alignItems:'center'
    },
     image: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
        },
    box: {
        position: 'absolute',
        top: '-30%',
        width: 120,
        height: 120,
        // backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    userImg: {
       position: 'absolute',
        top: 0,
       left:0,
       width: 120,
       height: 120,
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
        height:25,
        top:60,
        left:105,
        backgroundColor:'orange',
        borderRadius:50,
    },

    iconExit:{
        position:'absolute',
        top:-90,
        left:140,
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        color: '#212121',
        textAlign: 'center',
        marginBottom: 32,
    },
    mainContent: {
        width: "100%",
        // height:350,  
        textAlign:'center'
    }, 
     postsContainer: {
        flexDirection:"column"
    },
     containerPhoto: {
        position:"relative",
        width:360,
        height:245,
        // backgroundColor: "orange",
        // marginLeft:15,
        borderRadius:10,
        marginTop: 25,
        marginBottom:10
    }, 
     containerImageSubscribe: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "space-between",
        alignItems:"center"
    },
     containerLocation: {
        flexDirection:"row",
        justifyContent: "flex-end",
        alignItems:"center",
    },
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
        // color: '#212121',
        textAlign: 'center',
    },
})