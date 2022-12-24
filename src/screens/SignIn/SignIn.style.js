import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    height: 40,
    borderColor: "rgba(39, 130, 100,1)",
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
    width: screenWidth * 0.9,
    padding: 5,
  },
  button: {
    backgroundColor: "rgba(39, 130, 100,1)",
    padding: 10,
    margin: 10,
    borderRadius: 50,
  },
  image: { width: screenWidth * 0.5, height: screenHeight * 0.25 },
});

export default styles;
