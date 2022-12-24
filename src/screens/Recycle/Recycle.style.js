import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  categoriesFlatlistContainer: {
    height: screenWidth * 0.35,
    width: screenWidth,
  },
  subCategoriesFlatListContainer: {
    height: screenWidth * 0.1,
  },
  mapCategories: {
    flexDirection: "row",
    flexWrap: "wrap",

    height: screenHeight * 0.22,
  },
  mapSubCategories: {
    flexDirection: "row",
    flexWrap: "wrap",

    height: screenHeight * 0.18,
  },
  item: {
    width: "20%", // Adjust this value to change the size of the items
    aspectRatio: 1, // Keep the items square
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
    width: screenWidth * 0.9,
    padding: 5,
    alignSelf: "center",
  },
  categoryText: { fontSize: 6, color: "rgba(39, 130, 100,1)" },
  subCategoryText: { fontSize: 10, color: "rgba(39, 130, 100,1)" },
});

export default styles;

/*borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },*/
