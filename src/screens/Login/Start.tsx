import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';

const Start = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/background.png')}
      />
      {!login ? (
        <>
          <View style={styles.viewTitle}>
            <Animatable.Text
              style={styles.title}
              useNativeDriver
              animation={!login ? 'fadeInRightBig' : 'fadeOutRightBig'}
              delay={500}
              duration={1500}>
              Bienvenido a Smart Entry
            </Animatable.Text>
          </View>
          <View style={{flex: 1}} />
          <Animatable.View
            useNativeDriver
            animation={!login ? 'fadeInUp' : 'fadeOutUp'}
            delay={500}
            duration={1500}
            style={styles.box}>
            <View style={styles.card} />
            <Text style={styles.cardTitle}>Inicia sesión</Text>
            <Text style={styles.text}>
              Explora la gran expericia de estar seguro con un clic
            </Text>
            <TouchableOpacity
            testID='setLoginButton'
              style={styles.send}
              onPress={() => setLogin(true)}>
              <Text style={styles.sendText}>Login</Text>
            </TouchableOpacity>
          </Animatable.View>
          <View style={{flex: 0.3}} />
        </>
      ) : (
        <Login />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    left: -10,
    width: '108%',
    height: '100%',
    position: 'absolute',
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 8,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: '80%',
    borderRadius: 20,
    backgroundColor: '#97A9F6',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderColor: '#EBEBF5',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  text: {
    width: '80%',
    fontSize: 18,
    color: '#EBEBF5',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  send: {
    width: '60%',
    height: 50,
    backgroundColor: '#97A9F6',
    borderRadius: 20,
    borderColor: '#EBEBF5',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    fontSize: 25,
    color: '#EBEBF5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Start;
