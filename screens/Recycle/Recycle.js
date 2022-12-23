import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./Recycle.style";
import axios from "axios";

//static sha
const sha = "f905030c3f419fbe6a51a0a3b241f6cfb8858db77a0a9c91d7446159a369af92";
const email = "mehmetfirat0707@hotmail.com";

const categories = [
  { id: "0", name: "Cam", get: "camTurleri", post: "camlar" },
  { id: "1", name: "Plastik", get: "plastikTurleri", post: "plastikler" },
  { id: "2", name: "Kağıt", get: "kagitTurleri", post: "kagitlar" },
  { id: "3", name: "Pil", get: "pilTurleri", post: "piller" },
  { id: "4", name: "Alüminyum", get: "aluminyumTurleri", post: "aluminyumlar" },
  { id: "5", name: "Demir", get: "demirTurleri", post: "demirler" },
  { id: "6", name: "Ahşap", get: "ahsapTurleri", post: "ahsaplar" },
  { id: "7", name: "Beton", get: "betonTurleri", post: "betonlar" },
  { id: "8", name: "Tekstil", get: "tekstilTurleri", post: "tekstiller" },
  {
    id: "8",
    name: "Elektronik",
    get: "elektronikTurleri",
    post: "elektronikler",
  },
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
  const [selectedCategoryforPost, setselectedCategoryforPost] =
    React.useState();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.mapCategories}>
          {categories.map((item, index) => (
            <View style={styles.item} key={index}>
              <TouchableOpacity
                style={styles.categoriesContainer}
                onPress={() => {
                  setSelectedCategory(item.name);
                  setselectedCategoryforPost(item);
                  console.log("get isteği buradan atılacak");
                  axios

                    .get(`http://192.168.1.34:3000/api/kategoriler/${item.get}`)
                    .then(function (response) {
                      console.log(response.data);
                      setSubCategories(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Text>{selectedCategory}</Text>

        {subCategories.length > 0 && selectedCategory && (
          <View style={styles.mapCategories}>
            {subCategories.map((item, index) => (
              <View style={styles.item} key={index}>
                <TouchableOpacity
                  style={styles.categoriesContainer}
                  onPress={() => {
                    setSelectedSubCategory(item.turu);
                  }}
                >
                  <Text>{item.turu}</Text>
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
              keyboardType="numeric"
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
              onPress={() => {
                axios
                  .post(
                    `http://192.168.1.34:3000/api/${selectedCategoryforPost.post}`,
                    {
                      sha: sha,
                      email: email,
                      tur: selectedSubCategory,
                      miktar: inputName,
                    }
                  )
                  .then(function (response) {
                    console.log(response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                setSelectedCategory();
                setSelectedSubCategory();
                setInputName();
              }}
            >
              <Text>ONAYLA</Text>
            </TouchableOpacity>

            <Text>{selectedCategoryforPost.post}</Text>
            <Text>{selectedSubCategory}</Text>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Recycle;

/*
Cam plastik kagit pil alüminyum 
demir  Ahşap beton textil elektronik */
