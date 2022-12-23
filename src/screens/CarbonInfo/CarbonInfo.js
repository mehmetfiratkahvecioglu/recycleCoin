import { View, Text, FlatList } from "react-native";
import React from "react";

const carbonValues = [
  { id: "0", name: "şişe" },
  { id: "1", name: "şişe" },
  { id: "2", name: "şişe" },
  { id: "3", name: "şişe" },
  { id: "4", name: "şişe" },
  { id: "5", name: "şişe" },
];

const CarbonInfo = () => {
  return (
    <View>
      <FlatList
        data={carbonValues}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default CarbonInfo;
