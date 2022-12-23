import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
    width: screenWidth * 0.9,
    padding: 5,
  },
  button: {
    backgroundColor: "#00b894",
    padding: 10,
    margin: 10,
    borderRadius: 50,
  },
});

export default styles;
