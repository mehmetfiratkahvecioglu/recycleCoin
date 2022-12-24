import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CarbonInfo.style";
const carbonValues = [
  { id: "0", name: "şişe" },
  { id: "1", name: "şişe" },
  { id: "2", name: "şişe" },
  { id: "3", name: "şişe" },
  { id: "4", name: "şişe" },
  { id: "5", name: "şişe" },
];

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

const CarbonInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const [inputName, setInputName] = React.useState();
  const [selectedCategoryforPost, setselectedCategoryforPost] =
    React.useState();
  const [getResponse, setGetResponse] = useState([]);

  useEffect(() => {}, []);
  return (
    <View>
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
                    setGetResponse(response.data);
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

      <FlatList
        data={getResponse}
        renderItem={({ item }) => (
          <View>
            <Text>{item.turu}</Text>
            <Text>{item.karbonDegeri}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CarbonInfo;

/*axios

                    .get(`http://192.168.1.47:3000/api/kategoriler/${item.get}`)
                    .then(function (response) {
                      console.log(response.data);
                      setSubCategories(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                    */
