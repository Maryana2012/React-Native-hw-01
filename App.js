import 'react-native-gesture-handler';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import PostScreen from './Screens/PostScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CreatePostScreen from './Screens/CreatePostScreen';
import CommentsScreen from './Screens/CommentsScreen';
import MapScreen from './Screens/MapScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config'

export default function App() {
  const MainStack = createStackNavigator();
  const [fontsLoaded] = useFonts({'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')})

     if (!fontsLoaded) { return null;}

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
         <MainStack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
           <MainStack.Screen name='Registration' component={RegistrationScreen}/>
           <MainStack.Screen name='Login' component={LoginScreen}/>
           <MainStack.Screen name='Home'component={Home}/>
           <MainStack.Screen name='Post' component={PostScreen}/>
           <MainStack.Screen name='CreatePost' component={CreatePostScreen}/>
           <MainStack.Screen name='Comments' component={CommentsScreen}/>
           <MainStack.Screen name='Profile' component={ProfileScreen} /> 
           <MainStack.Screen name='Map' component={MapScreen}/>
         </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
