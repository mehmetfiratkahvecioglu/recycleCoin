import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Profile.style";
import useStore from "../../store/useStore";
const Profile = ({ navigation }) => {
  const userInfo = useStore((state) => state.userInfo);

  console.log(userInfo);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/profil.jpeg")}
      />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          İsim Soyisim:
          {""} {userInfo.isim} {userInfo.soyisim}
        </Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Kullanıcı Adı: {userInfo.userName}
        </Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Coin Miktarı: {userInfo.coinMiktari}
        </Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Karbon Miktari: {userInfo.karbonMiktari}
        </Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>E-Mail: {userInfo.email}</Text>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>SHA256: {userInfo.sha}</Text>
      </View>
      <View style={styles.headerTextContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={{ fontWeight: "bold", color: "black" }}>
            Çıkış Yapmak için Tıkla
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
