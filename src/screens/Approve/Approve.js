import { View, Text, FlatList } from "react-native";
import React from "react";

const carbonValues = [
  { id: "0", name: "yusuf 5 şişe" },
  { id: "1", name: "kamil 2 şişe " },
  { id: "2", name: "hasan 4 cam" },
  { id: "3", name: "bora 5 dam" },
];

const Approve = () => {
  return (
    <View>
      <FlatList
        data={carbonValues}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Approve;
