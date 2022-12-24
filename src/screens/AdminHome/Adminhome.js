import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Page from "../../components/Page/Page";
import styles from "./AdminHome.style";

const AdminHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          alignSelf: "center",
          color: "green",
        }}
      >
        Admin Sayfasına Hoşgeldiniz!
      </Text>
      <Page
        name={"Onay Sayfası"}
        onPress={() => {
          navigation.navigate("Approve");
        }}
      />
      <Page
        name={"Kullanıcı Uzayı"}
        onPress={() => {
          navigation.navigate("UserSpace");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            alignSelf: "center",
            marginTop: 50,
          }}
        >
          Çıkış Yapmak için Tıkla
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminHome;
