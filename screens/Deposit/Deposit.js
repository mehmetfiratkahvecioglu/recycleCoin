import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./Deposit.style";
const Deposit = () => {
  const [coinNumber, setCoinNumber] = React.useState();
  const [iban, setIban] = React.useState();
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
      <TouchableOpacity style={styles.button}>
        <Text>Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Deposit;
