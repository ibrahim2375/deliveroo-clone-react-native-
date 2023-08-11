import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
//components
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={Styles.viewHandler}>
      {/* -------------Header------------ */}
      <Header />
      {/* -------------body------------ */}
      <ScrollView>
        {/* catigries */}
        <Categories />
        {/* featured rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="paid placement from our partiner"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discount"
          description="paid placement from our partiner"
        />
        <FeaturedRow
          id="3"
          title="Offer Near You"
          description="paid placement from our partiner"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  viewHandler: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
