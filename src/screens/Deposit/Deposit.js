import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import axios from "axios";
import styles from "./Deposit.style";
import useStore from "../../store/useStore";

const Deposit = () => {
  const [coinNumber, setCoinNumber] = React.useState();
  const [iban, setIban] = React.useState();

  const userToken = useStore((state) => state.userToken);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setCoinNumber}
        value={coinNumber}
        placeholder="Coin Sayısını giriniz"
      />
      <TextInput
        style={styles.input}
        onChangeText={setIban}
        value={iban}
        placeholder="Sha256 adresini giriniz"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          axios
            .patch(
              `http://192.168.1.47:3000/api/users/transfer/${iban}`,
              {
                gonderilenCoin: parseInt(coinNumber),
              },
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
        }}
      >
        <Text>Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Deposit;
