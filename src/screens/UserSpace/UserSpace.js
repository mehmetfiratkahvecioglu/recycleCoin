import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useStore from "../../store/useStore";

import axios from "axios";

const UserSpace = () => {
  const [users, setUSers] = useState([]);
  const userToken = useStore((state) => state.userToken);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "lightgreen",
        margin: 10,
        borderRadius: 12,
        padding: 10,
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

  return (
    <View>
      <FlatList data={users} renderItem={renderItem} />
    </View>
  );
};

export default UserSpace;
