import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import PostScreen from './Screens/PostScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Image source={require('./images/Photo.png')}
        resizeMode="cover"
        imageStyle={styles.image} />
      <RegistrationScreen/>
      {/* <LoginScreen/> */}
      {/* <PostScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    position: 'absolute',
    //  zIndex: -1,
    justifyContent: 'center',
    width: '100%',
    height:'100%',
    },
});
