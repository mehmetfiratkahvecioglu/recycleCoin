import { View, Text } from "react-native";
import React from "react";

import Page from "../../components/Page/Page";
import styles from "./Home.style";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Page
        name={"Recycle Page"}
        onPress={() => {
          navigation.navigate("Recycle");
        }}
      />
      <Page
        name={"Deposit Page"}
        onPress={() => {
          navigation.navigate("Deposit");
        }}
      />
      <Page
        name={"Carbon Information Page"}
        onPress={() => {
          navigation.navigate("Info");
        }}
      />
      <Page
        name={"Profile"}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
    </View>
  );
};

export default Home;
