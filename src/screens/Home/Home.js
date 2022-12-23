import { View, Text } from "react-native";
import React from "react";

import Page from "../../components/Page/Page";
import styles from "./Home.style";

import useStore from "../../store/useStore";

const Home = ({ navigation }) => {
  const userInfo = useStore((state) => state.userInfo);
  return (
    <View style={styles.container}>
      <Text>
        {userInfo.isim}
        {userInfo.soyisim}
        {userInfo.coinMiktari}
      </Text>
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
          navigation.navigate("CarbonInfo");
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
