import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import Modal from "react-native-modal";
import axios from "axios";

const UserSpace = () => {
  const [users, setUSers] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const [clickedUser, setClickedUser] = useState("");
  const [requestNumber, setRequestNumber] = useState(0);
  const userToken = useStore((state) => state.userToken);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "lightgreen",
        margin: 10,
        borderRadius: 12,
        padding: 10,
      }}
      onPress={() => {
        axios

          .get(`http://192.168.1.47:3000/api/users`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then(function (response) {
            console.log(response.data);
            setRequestNumber(5);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log("tıklandı");
        setClickedUser(item.isim);
        toggleModal();
      }}
    >
      <Text style={{ fontWeight: "bold" }}>İsim: {item.isim}</Text>
      <Text style={{ fontWeight: "bold" }}>Soyisim: {item.soyisim}</Text>
      <Text style={{ fontWeight: "bold" }}>Nick: {item.userName}</Text>
      <Text style={{ fontWeight: "bold" }}>E-Mail: {item.email}</Text>
      <Text style={{ fontWeight: "bold" }}>
        Karbon Miktarı: {item.karbonMiktari}
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        Coin Miktarı: {item.coinMiktari}
      </Text>
      <Text style={{ fontWeight: "bold" }}>SHA256 Adresi: {item.sha}</Text>
    </TouchableOpacity>
  );

  const axiosFetchData = () => {
    axios

      .get(`http://192.168.1.47:3000/api/users`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setUSers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    axiosFetchData();
  }, []);
  //padding:50
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={users} renderItem={renderItem} />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",

            borderRadius: 12,
            alignSelf: "center",
            marginTop: 100,
            marginBottom: 200,
            padding: 50,
          }}
        >
          <Text style={{ fontWeight: "bold", margin: 10, color: "green" }}>
            {clickedUser} isimli kullanıcının istek Sayısı : {requestNumber}
          </Text>

          <Button title="Tamam" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default UserSpace;
