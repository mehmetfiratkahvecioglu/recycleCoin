import { View, Text, FlatList } from "react-native";
import React from "react";
import axios from "axios";
const carbonValues = [
  { id: "0", name: "yusuf" },
  { id: "1", name: "kamil" },
  { id: "2", name: "hasan" },
  { id: "3", name: "bora" },
  { id: "4", name: "sdfdsf" },
  { id: "5", name: "xxxx" },
];

const UserSpace = () => {
  return (
    <View>
      <FlatList
        data={carbonValues}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default UserSpace;
