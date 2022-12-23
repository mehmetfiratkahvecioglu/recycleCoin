import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  categoriesContainer: {
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
  },
  item: {
    width: "20%", // Adjust this value to change the size of the items
    aspectRatio: 1, // Keep the items square
    backgroundColor: "gray",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
    width: screenWidth * 0.9,
    padding: 5,
  },
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
