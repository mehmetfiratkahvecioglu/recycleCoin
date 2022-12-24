import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useStore from "../../store/useStore";

import axios from "axios";
const carbonValues = [
  { id: "0", name: "yusuf" },
  { id: "1", name: "kamil" },
  { id: "2", name: "hasan" },
  { id: "3", name: "bora" },
  { id: "4", name: "sdfdsf" },
  { id: "5", name: "xxxx" },
];

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
      <Text>İsim: {item.isim}</Text>
      <Text>Soyisim: {item.soyisim}</Text>
      <Text>Nick: {item.userName}</Text>
      <Text>E-Mail: {item.email}</Text>
      <Text>Karbon Miktarı: {item.karbonMiktari}</Text>
      <Text>Coin Miktarı: {item.coinMiktari}</Text>
      <Text>SHA256 Adresi: {item.sha}</Text>
      <Text></Text>
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
