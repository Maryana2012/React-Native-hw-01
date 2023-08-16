import { View, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/auth/operations";
import { getAllPosts, getAllComments } from "../redux/posts/operation";
import { FlatList } from "react-native-gesture-handler";


export default function PostScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const email = useSelector(state =>  state.auth.email);
    const login = useSelector(state => state.auth.login);
    const photoUser = useSelector(state => state.auth.photo);
    const posts = useSelector(state => state.posts.posts);  
 
    
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    const renderItem = ({item}) => 
         (  <View style={styles.postsContainer}>
             <Image source={{ uri: item.photo }} style={styles.containerPhoto} />
                     <Text >{item.photoName}</Text>
                     <View style={styles.containerImageSubscribe}>
            <TouchableOpacity onPress={() => {navigation.navigate("Comments", { photo: item.photo, idPost: item.idPost })}}>                         
                           <Ionicons name="chatbubble-outline" size={24} />
                          </TouchableOpacity>
                            <View style={styles.containerLocation}>
                            <TouchableOpacity>
                             <Ionicons name="location-outline" size={24} />
                          </TouchableOpacity>    
                           <TouchableOpacity onPress={() => { navigation.navigate("Map", {location: item.location}) }}>
                                <Text style={styles.text}>{item.locationName}</Text>  
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публікації</Text>
            </View>
            <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={24} color="#000" style={ styles.imageExit}/>
            </TouchableOpacity>
            
            <View style={styles.mainContent}>
                <View style={styles.containerProfile} >
                    <Image source={{ uri: photoUser }} style={styles.imageProfile} />
                    <View style={styles.containerProfileText}>
                    <Text style={styles.text}> {login} </Text>
                    <Text style={styles.text}> {email} </Text>
                    </View>
            </View>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.idPost}
                contentContainerStyle={styles.postsContainer}
                showsVerticalScrollIndicator={true}/>
           
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
        height: '100%',
        alignItems: "center",
        // justifyContent: "space-around",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // backgroundColor: "#FFFFFF",
        backgroundColor: 'blue',
        paddingLeft: 16,
        paddingRight:16
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
        top: -35,
        left: 150,
        zIndex:10  
    },
    mainContent: {
        width: "100%",
        // height: 200,
        // justifyContent: 'center',
        // alignItems:"center"
        textAlign:"center"
    },
    postsContainer: {
        flexDirection:"column"
    },
    imageProfile: {
        width: 60, 
        height: 60,
        borderColor: 'orange',
        borderRadius: 10
    },
    containerProfile: {
        flexDirection: "row",
        marginTop: 20,
        // marginLeft:20
      
    },
    containerProfileText: {
        flexDirection: "column",
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: "flex-start"
    },
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
        // color: '#212121',
        textAlign: 'center',
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
    }
})