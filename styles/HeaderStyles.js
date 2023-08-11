import {StyleSheet} from "react-native";

export const Styles = StyleSheet.create({
    //   header
    header: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: "white",
    },
    //   header Top
    headerView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerViewImgAndText: {
      flexDirection: "row",
      gap: 10,
    },
    headerImg: {
      height: 30,
      width: 30,
      backgroundColor: "gray",
      paddingHorizontal: 4,
      paddingVertical: 4,
      borderRadius: 50,
    },
    headerTextDeliver: {
      fontSize: 10,
      fontWeight: "bold",
      color: "gray",
    },
    headerTextLocation: {
      fontWeight: "bold",
      flexDirection: "row",
      alignItems: "center",
    },
    //   header search
    searchView: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    searchBar: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#E6E6EC",
      paddingHorizontal: 10,
    },
    searchIcon: {},
    searchInput: {
      //    backgroundColor:'#ccc',
      paddingVertical: 5,
      paddingHorizontal: 5,
    },
  });
  