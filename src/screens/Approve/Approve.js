import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Approve.style";
import useStore from "../../store/useStore";

import axios from "axios";

const carbonValues = [
  { id: "0", name: "yusuf 5 şişe" },
  { id: "1", name: "kamil 2 şişe " },
  { id: "2", name: "hasan 4 cam" },
  { id: "3", name: "bora 5 dam" },
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

const subCategories = [
  { id: "0", name: "Kristal" },
  { id: "1", name: "Şişe" },
  { id: "2", name: "Bardak" },
];

const Approve = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const [selectedCategoryforPost, setselectedCategoryforPost] =
    React.useState();

  const [requests, setRequests] = useState([]);
  const [isTouched, setIsTouched] = useState(false);

  const userToken = useStore((state) => state.userToken);

  console.log("Tokenn:", userToken);

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "white",
        margin: 5,
        borderRadius: 12,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{item.email}</Text>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
          {item.miktar} adet {item.tur}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          borderRadius: 12,
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "green", padding: 10, borderRadius: 12 }}
          onPress={() => {
            axios
              .patch(
                `http://192.168.1.47:3000/api/users/${item.userName}`,
                {
                  karbonMiktari: item.toplamKarbon,
                },
                {
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                }
              )
              .then(function (response) {
                console.log("başarılı", item.userName, item.toplamKarbon);
                console.log(response.data);
                console.log("id", item._id);
              })
              .catch(function (error) {
                console.log(error);
              });

            axios

              .delete(
                `http://192.168.1.47:3000/api/${selectedCategoryforPost?.post}/${item._id}`,
                {
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                }
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

            setIsTouched(!isTouched);
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "white" }}>
            ONAYLA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 12,
          }}
          onPress={() => {
            axios

              .delete(
                `http://192.168.1.47:3000/api/${selectedCategoryforPost?.post}/${item._id}`,
                {
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                }
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

            setIsTouched(!isTouched);
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "white" }}>
            REDDET
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    axios

      .get(`http://192.168.1.47:3000/api/${selectedCategoryforPost?.post}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setRequests(response.data);
        setSubCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [isTouched]);
  console.log("camlarrr: ", selectedCategoryforPost?.post);
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

                  .get(`http://192.168.1.47:3000/api/${item.post}`, {
                    headers: {
                      Authorization: `Bearer ${userToken}`,
                    },
                  })
                  .then(function (response) {
                    console.log(response.data);
                    setRequests(response.data);
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
      <View style={{ height: 450 }}>
        <FlatList data={requests} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Approve;
