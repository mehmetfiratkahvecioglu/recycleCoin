import React, { useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import styles from "./SignIn.style";

import axios from "axios";
import useStore from "../../store/useStore";

const SignIn = ({ navigation }) => {
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [token, setToken] = React.useState();
  const [isAdmin, setIsAdmin] = React.useState();

  const changeUserInfo = useStore((state) => state.changeUserInfo);
  const changeUserToken = useStore((state) => state.changeUserToken);

  const handleSignIn = () => {
    axios
      .post("http://192.168.1.47:3000/api/users/giris", {
        email: name,
        sifre: password,
      })
      .then(function (response) {
        setIsAdmin(response.data.user.isAdmin);
        setToken(response.data.token);
        changeUserInfo(response.data.user);
        changeUserToken(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (token) {
      console.log();
      if (isAdmin) {
        navigation.navigate("AdminHome");
      } else {
        navigation.navigate("Home");
      }
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/recycle.jpeg")}
      />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="E-mail adresinizi giriniz"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Şifrenizi giriniz"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Giriş Yap </Text>
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
