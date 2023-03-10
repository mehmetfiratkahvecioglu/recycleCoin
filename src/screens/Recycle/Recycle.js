import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./Recycle.style";
import axios from "axios";
import useStore from "../../store/useStore";
//static sha

const categories = [
  {
    id: "0",
    name: "Cam",
    get: "camTurleri",
    post: "camlar",
    imageSource: require("../../assets/images/cam.png"),
  },
  {
    id: "1",
    name: "Plastik",
    get: "plastikTurleri",
    post: "plastikler",
    imageSource: require("../../assets/images/waterBottle.png"),
  },
  {
    id: "2",
    name: "Kağıt",
    get: "kagitTurleri",
    post: "kagitlar",
    imageSource: require("../../assets/images/paper2.png"),
  },
  {
    id: "3",
    name: "Pil",
    get: "pilTurleri",
    post: "piller",
    imageSource: require("../../assets/images/pil.png"),
  },
  {
    id: "4",
    name: "Alüminyum",
    get: "aluminyumTurleri",
    post: "aluminyumlar",
    imageSource: require("../../assets/images/alu.png"),
  },
  {
    id: "5",
    name: "Demir",
    get: "demirTurleri",
    post: "demirler",
    imageSource: require("../../assets/images/iron.webp"),
  },
  {
    id: "6",
    name: "Ahşap",
    get: "ahsapTurleri",
    post: "ahsaplar",
    imageSource: require("../../assets/images/tree.png"),
  },
  {
    id: "7",
    name: "Beton",
    get: "betonTurleri",
    post: "betonlar",
    imageSource: require("../../assets/images/beton.png"),
  },
  {
    id: "8",
    name: "Tekstil",
    get: "tekstilTurleri",
    post: "tekstiller",
    imageSource: require("../../assets/images/knit3.png"),
  },
  {
    id: "9",
    name: "Elektronik",
    get: "elektronikTurleri",
    post: "elektronikler",
    imageSource: require("../../assets/images/laptop2.png"),
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

  const userInfo = useStore((state) => state.userInfo);

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

                    .get(`http://192.168.1.47:3000/api/kategoriler/${item.get}`)
                    .then(function (response) {
                      console.log(response.data);
                      setSubCategories(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                <Image
                  style={{ width: 20, height: 20, tintColor: "green" }}
                  source={item.imageSource}
                />
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {subCategories.length > 0 && selectedCategory && (
          <View style={styles.mapSubCategories}>
            {subCategories.map((item, index) => (
              <View style={styles.item} key={index}>
                <TouchableOpacity
                  style={styles.categoriesContainer}
                  onPress={() => {
                    setSelectedSubCategory(item.turu);
                  }}
                >
                  <Text style={styles.subCategoryText} numberOfLines={1}>
                    {item.turu}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

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
                padding: 8,
              }}
              onPress={() => {
                axios
                  .post(
                    `http://192.168.1.47:3000/api/${selectedCategoryforPost.post}`,
                    {
                      sha: userInfo.sha,
                      email: userInfo.email,
                      userName: userInfo.userName,
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
              <Text style={{ fontWeight: "bold" }}>ONAYLA</Text>
            </TouchableOpacity>
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
