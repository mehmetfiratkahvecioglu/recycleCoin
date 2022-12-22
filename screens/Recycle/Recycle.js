import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./Recycle.style";

const categories = [
  { id: "0", name: "Cam" },
  { id: "1", name: "Plastik" },
  { id: "2", name: "Kağıt" },
  { id: "3", name: "Pil" },
  { id: "4", name: "Alüminyum" },
  { id: "5", name: "Demir" },
  { id: "6", name: "Ahşap" },
  { id: "7", name: "Beton" },
  { id: "8", name: "Tekstil" },
  { id: "8", name: "Elektronik" },
];

const RenderCategories = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoriesContainer} onPress={onPress}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const Recycle = () => {
  const [category, setCategory] = useState();
  return (
    <View style={styles.container}>
      <Text>{category}</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <RenderCategories
            item={item}
            onPress={() => {
              setCategory(item.name);
            }}
          />
        )}
        numColumns={5}
      />
    </View>
  );
};

export default Recycle;

/*
Cam plastik kagit pil alüminyum 
demir  Ahşap beton textil elektronik */
