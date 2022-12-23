import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
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

const subCategories = [
  { id: "0", name: "Kristal" },
  { id: "1", name: "Şişe" },
  { id: "2", name: "Bardak" },
];

const Recycle = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const [inputName, setInputName] = React.useState();

  return (
    <View style={styles.container}>
      <View style={styles.mapCategories}>
        {categories.map((item, index) => (
          <View style={styles.item} key={index}>
            <TouchableOpacity
              style={styles.categoriesContainer}
              onPress={() => {
                setSelectedCategory(item.name);
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Text>{selectedCategory}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", width: 50, alignSelf: "center" }}
        onPress={() => {
          setSubCategories([
            { id: "0", name: "Kristal" },
            { id: "1", name: "Şişe" },
            { id: "2", name: "Bardak" },
          ]);
        }}
      >
        <Text>DEVAM</Text>
      </TouchableOpacity>
      {subCategories.length > 0 && (
        <View style={styles.mapCategories}>
          {subCategories.map((item, index) => (
            <View style={styles.item} key={index}>
              <TouchableOpacity
                style={styles.categoriesContainer}
                onPress={() => {
                  setSelectedSubCategory(item.name);
                }}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      <Text>{selectedSubCategory}</Text>

      {selectedSubCategory && (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setInputName}
            value={inputName}
            placeholder={`${selectedSubCategory} Miktarını Giriniz: `}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "lightgreen",
              width: 100,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text>ONAYLA</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Recycle;

/*
Cam plastik kagit pil alüminyum 
demir  Ahşap beton textil elektronik */
