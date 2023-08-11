import {StyleSheet,View, Text, Image, TextInput } from "react-native";
import React from "react";
//icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
//Styles
import {Styles} from '../styles/HeaderStyles'
const Header = () => {
  return (
    <View style={Styles.header}>
      <View style={Styles.headerView}>
        <View style={Styles.headerViewImgAndText}>
          <Image
            style={Styles.headerImg}
            source={{
              uri: "https://th.bing.com/th/id/R.581eb679a50357ed30ad0d7544081ec6?rik=54dcWNzgeTMHEg&pid=ImgRaw&r=0",
            }}
          />
          <View>
            <Text style={Styles.headerTextDeliver}>Deliver Now!</Text>
            <View style={Styles.headerTextLocation}>
              <Text>Current Location</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color="#00CCBC"
              />
            </View>
          </View>
        </View>
        <Ionicons name="person-outline" size={24} color="#00CCBC" />
      </View>
      {/* Search */}
      <View style={Styles.searchView}>
        <View style={Styles.searchBar}>
          <AntDesign name="search1" size={24} color="gray" />
          <TextInput
            style={Styles.searchInput}
            placeholder="Resturants and Cuisines"
            keyboardType="default"
          />
        </View>
        <Ionicons name="md-filter-outline" size={24} color="#00CCBC" />
      </View>
    </View>
  );
};

export default Header;
// const Styles = StyleSheet.create({
//     //   header
//     header: {
//       paddingHorizontal: 10,
//       paddingVertical: 5,
//       backgroundColor: "white",
//     },
//     //   header Top
//     headerView: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     headerViewImgAndText: {
//       flexDirection: "row",
//       gap: 10,
//     },
//     headerImg: {
//       height: 30,
//       width: 30,
//       backgroundColor: "gray",
//       paddingHorizontal: 4,
//       paddingVertical: 4,
//       borderRadius: 50,
//     },
//     headerTextDeliver: {
//       fontSize: 10,
//       fontWeight: "bold",
//       color: "gray",
//     },
//     headerTextLocation: {
//       fontWeight: "bold",
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     //   header search
//     searchView: {
//       marginTop: 10,
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "space-between",
//       gap: 10,
//     },
//     searchBar: {
//       flex: 1,
//       flexDirection: "row",
//       alignItems: "center",
//       backgroundColor: "#E6E6EC",
//       paddingHorizontal: 10,
//     },
//     searchIcon: {},
//     searchInput: {
//       //    backgroundColor:'#ccc',
//       paddingVertical: 5,
//       paddingHorizontal: 5,
//     },
//   });
  