import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import PostScreen from './Screens/PostScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import CreatePostScreen from './Screens/CreatePostScreen';
import CommentsScreen from './Screens/CommentsScreen'
import { useFonts } from 'expo-font';
import ProfileScreen from './Screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


export default function App() {
  const MainStack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')})

     if (!fontsLoaded) { return null;}

  return (<>
   <NavigationContainer>
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen name='Registration' component={RegistrationScreen}/>
      <MainStack.Screen name='Login' component={LoginScreen}/>
      <MainStack.Screen name='Home' component={Home}/>
      <MainStack.Screen name='Post' component={PostScreen}/>
      <MainStack.Screen name='CreatePost' component={CreatePostScreen}/>
      {/* <MainStack.Screen name='Comments' component={CommentsScreen}/>
      <MainStack.Screen name='Profile' component={ProfileScreen}/> */}
    </MainStack.Navigator>
      {/* <RegistrationScreen/> */}
      {/* <LoginScreen/> */}
      {/* <PostScreen/> */}
      {/* <CreatePostScreen /> */}
      {/* <CommentsScreen/> */}
      {/* <ProfileScreen/> */}
      {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     alignItems: 'center',
//   },
//   image: {
//     flex: 1,
//     position: 'absolute',
//     justifyContent: 'center',
//     width: '100%',
//     height:'100%',
//     },
// });
