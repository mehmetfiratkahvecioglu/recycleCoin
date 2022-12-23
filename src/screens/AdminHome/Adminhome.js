import { View, Text } from "react-native";
import React from "react";

import Page from "../../components/Page/Page";
import styles from "./AdminHome.style";

const AdminHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Page
        name={"Approve"}
        onPress={() => {
          navigation.navigate("Approve");
        }}
      />
      <Page
        name={"User Space"}
        onPress={() => {
          navigation.navigate("UserSpace");
        }}
      />
    </View>
  );
};

export default AdminHome;
