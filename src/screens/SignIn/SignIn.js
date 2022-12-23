import React, { useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./SignIn.style";

import axios from "axios";
import useStore from "../../store/useStore";

const bears = useStore((state) => state.bears);

const SignIn = ({ navigation }) => {
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [token, setToken] = React.useState();

  const handleSignIn = () => {
    console.log("çalışıyor");
    axios
      .post("http://192.168.1.34:3000/api/users/giris", {
        email: name,
        sifre: password,
      })
      .then(function (response) {
        console.log(response.data.token);
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (token) {
      navigation.navigate("Home");
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SingUp");
        }}
      >
        <Text>
          Hesabın yok mu ?{" "}
          <Text style={{ color: "green", fontWeight: "bold" }}> Kayıt ol </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
