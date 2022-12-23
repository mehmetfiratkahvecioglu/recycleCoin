import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./Page.style";

const Page = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Page;
