import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import Page from "../../components/Page/Page";
import styles from "./Home.style";

import useStore from "../../store/useStore";

const Home = ({ navigation }) => {
  const userInfo = useStore((state) => state.userInfo);
  const pages = [
    {
      id: "0",
      name: "Geri Dönüşüm",
      imageSource: require("../../assets/images/recycle.jpeg"),
      onPress: () => {
        navigation.navigate("Recycle");
      },
    },
    {
      id: "1",
      name: "Coin Gönder",
      imageSource: require("../../assets/images/run.jpeg"),
      onPress: () => {
        navigation.navigate("Deposit");
      },
    },
    {
      id: "2",
      name: "Karbon Bilgileri",
      imageSource: require("../../assets/images/foot.jpeg"),
      onPress: () => {
        navigation.navigate("CarbonInfo");
      },
    },
    {
      id: "3",
      name: "Profil Sayfası",
      imageSource: require("../../assets/images/profil.jpeg"),
      onPress: () => {
        navigation.navigate("Profile");
      },
    },
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
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={"stretch"}
        source={require("../../assets/images/HomePageBackground.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Hoşgeldin {userInfo.isim} {userInfo.soyisim}!
          </Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Coin Miktarı : {userInfo.coinMiktari}
          </Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Karbon Miktari: {userInfo.karbonMiktari}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.mapPages}>
        {pages.map((item, index) => (
          <View style={styles.item} key={index}>
            <TouchableOpacity
              style={styles.pageContainer}
              onPress={item.onPress}
            >
              <ImageBackground
                source={item.imageSource}
                style={{ flex: 1 }}
                imageStyle={{ borderRadius: 12 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.pageText}>{item.name}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: 10,
          backgroundColor: "rgba(39, 130, 100,0.8)",
          borderRadius: 6,
          padding: 4,
          marginBottom: 15,
        }}
      >
        <Text style={styles.questionText}>
          Bugün doğaya ne kazandırmak istersin ?{" "}
        </Text>
      </View>
      <View style={styles.mapCategories}>
        {categories.map((item, index) => (
          <View style={styles.item2} key={index}>
            <TouchableOpacity
              style={styles.categoriesContainer}
              onPress={() => {}}
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
    </View>
  );
};

export default Home;
