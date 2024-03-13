import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../utils/Colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import axios from "axios";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Login = () => {
  const [username, setUsername] = useState("orlando@gmail.com");
  const [password, setPassword] = useState("12345");

  const navigation = useNavigation<homeScreenProp>();

  const handleLogin = async () => {
    
    await axios
      .post(`https://smart-entry-back.onrender.com/rest/v1/user/login`, {
        email: username,
        password: password,
      })
      .then(function (response) {
        console.log(response?.data?.status);
        if(response?.data?.status == 200){
          return navigation.navigate("MyTabs")
        }
      })
      .catch(function (error) {
        console.log(error?.message);
        return Alert.alert("Agrega correctamente las credenciales.")
      });
  };

  return (
    <>
      <View style={styles.viewTitle}>
        <Animatable.Text
          style={styles.title}
          useNativeDriver
          animation={"fadeInRightBig"}
          delay={500}
          duration={1500}
        >
          Iniciar sesión
        </Animatable.Text>
      </View>
      <Animatable.View
        useNativeDriver
        animation={"fadeInUp"}
        delay={500}
        duration={1500}
        style={styles.box}
      >
        <View style={styles.card} />
        <View style={styles.cardBorder} />
        <Text style={styles.cardTitle}>Ingresa tu usuario y contraseña</Text>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <TouchableOpacity
          testID="LoginButton"
          style={styles.send}
          onPress={() => handleLogin()}
        >
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5, 1]}
            colors={["#787DB3", "#505593", "#2B2F57"]}
            style={styles.sendLinear}
          >
            <Text style={styles.sendText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
      <View style={{ flex: 0.3 }} />
    </>
  );
};

const styles = StyleSheet.create({
  viewTitle: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: 1,
    fontFamily: Platform.select({ ios: "Helvetica", default: "serif" }),
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: COLORS.BACKGROUND,
    opacity: 0.4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderColor: "#EBEBF5",
    borderWidth: 2,
  },
  cardBorder: {
    width: "90%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderColor: "#EBEBF5",
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: 1,
    marginLeft: "10%",
    marginRight: "10%",
    textAlign: "center",
    fontFamily: Platform.select({ ios: "Helvetica", default: "serif" }),
  },
  viewInput: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "75%",
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 16,
  },
  send: {
    marginTop: 30,
    width: "60%",
    height: 50,
    backgroundColor: "#97A9F6",
    borderRadius: 20,
    borderColor: "#EBEBF5",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLinear: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderColor: "#EBEBF5",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sendText: {
    fontSize: 25,
    color: "#EBEBF5",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.select({ ios: "Helvetica", default: "serif" }),
  },
});

export default Login;
