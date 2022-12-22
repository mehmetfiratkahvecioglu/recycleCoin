import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./SignUp.style";

const SignUp = ({ navigation }) => {
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [mail, setMail] = React.useState();
  const handleSignIn = () => {
    /* role == "Normal"
      ? navigation.navigate("Home")
      : navigation.navigate("AdminHome");
      */
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
    </View>
  );
};

export default SignUp;
