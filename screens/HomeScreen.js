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
