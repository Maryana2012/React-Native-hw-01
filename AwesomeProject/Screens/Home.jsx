import { View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "./PostScreen";
import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();
export default Home = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) =>( {
                headerShown: false,
                tabBarStyle: route.name === 'CreatePost' ? { display: 'none' } : {},
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "CreatePost") {
                        iconName = "add-outline";
                    } else if (route.name === "Post") {
                        iconName = "grid-outline";
                    } else if (route.name === "Profile") {
                        iconName = "person-outline";
                    }
                    return (
                        <View  style={[styles.iconContainer,
                                       focused && styles.activeIconContainer]}>
                             < Ionicons name={iconName} size={size} color={focused ? styles.activeIcon.color : styles.notActiveIcon.color} />
                        </View>
                       )
                }       
            })}>
            <Tabs.Screen name="Post"
                options={{ tabBarLabel: () => null }}
                component = {PostScreen} />
            <Tabs.Screen name="CreatePost"
                options={{ tabBarLabel: () => null }}
                component={CreatePostScreen}
            />
            <Tabs.Screen name="Profile"
                options={{ tabBarLabel: () => null }}
                component={ProfileScreen}
            />  
        </Tabs.Navigator>   
    )
}
const styles = StyleSheet.create({
      notActiveIcon: {
        color: 'orange',
      },
      activeIcon: {
        color: 'blue',
    },
      
    iconContainer: {
        display: "flex",
        flexDirection:"row",
      justifyContent: "space-around",
      alignItems: 'center',
    //   height: 100
    },
    activeIconContainer: {
      backgroundColor: '#FF6C00',
      width: 70,
      height: 40,
      borderRadius: 50,
    },
    // divEnd: {
    //     width: 134,
    //     height: 5,
    //     backgroundColor: 'orange',
        
    //     marginBottom: 8,
    // }
   
})

