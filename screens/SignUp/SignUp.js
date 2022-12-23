import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./SignUp.style";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [mail, setMail] = React.useState();
  const [surName, setSurname] = React.useState();
  const handleSignIn = () => {
    console.log("çalışıyor");
    axios
      .post("http://192.168.1.34:3000/api/users", {
        isim: name,
        soyisim: surName,
        email: mail,
        sifre: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surName}
        placeholder="SurName"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder="e-Mail Adress"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SingIn");
        }}
      >
        <Text>
          Zaten hesabın var mı ?
          <Text style={{ color: "green", fontWeight: "bold" }}>
            {" "}
            Giriş yap{" "}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
