import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
    paddingBottom: 100,
  },
  image: { width: screenWidth * 0.5, height: screenHeight * 0.25 },
  headerTextContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 4,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  headerText: { fontWeight: "bold", color: "rgba(39, 130, 100,1)" },
});

export default styles;
