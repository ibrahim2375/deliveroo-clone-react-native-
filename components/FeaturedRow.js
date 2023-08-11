import { View, Text } from "react-native";
import React from "react";
//icons
import { Feather } from "@expo/vector-icons";
//styles
import { Styles } from "../styles/FeaturedRowStyles";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
       {/* Row Header */}
      <View style={Styles.rowHeaderView}>
        <View style={Styles.rowHeaderViewTop}>
          <Text style={Styles.rowHeaderViewTitle}>{title}</Text>
          <Feather name="arrow-right" size={24} color="#00CCBC" />
        </View>
        <Text style={Styles.rowHeaderViewDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default FeaturedRow;
