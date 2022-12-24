import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  imageBackground: {
    height: height * 0.22,
    width: width,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTextContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 4,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  headerText: { fontWeight: "bold", color: "rgba(39, 130, 100,1)" },
  mapPages: {
    flexDirection: "row",
    flexWrap: "wrap",

    height: height * 0.44,
  },
  item: {
    width: "50%", // Adjust this value to change the size of the items
    aspectRatio: 1, // Keep the items square
    alignItems: "center",
  },
  pageContainer: {
    height: height * 0.2,
    width: width * 0.43,
    margin: 5,
    backgroundColor: "white",

    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pageText: {
    fontWeight: "bold",
    color: "rgba(39, 130, 100,1)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  questionText: {
    fontWeight: "bold",
    color: "white",
  },
  mapCategories: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item2: {
    width: "20%", // Adjust this value to change the size of the items
    aspectRatio: 1, // Keep the items square
  },
  categoriesContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  categoryText: { fontSize: 6, color: "rgba(39, 130, 100,1)" },
});

export default styles;
