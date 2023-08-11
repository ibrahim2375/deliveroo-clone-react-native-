import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
//styles
import { Styles } from "../styles/ResturantCardStyles";
//icons
import { Ionicons } from "@expo/vector-icons";

const ResturantCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={Styles.resturantCard}>
      <Image style={Styles.resturantCardImg} source={{ uri: imageUrl }} />
      <View style={Styles.resturantCardInfo}>
        <Text style={Styles.resturantCardTitle}>{title}</Text>
        {/* info.rating */}
        <View style={Styles.resturantCardViewRating}>
          <Ionicons name="star" size={18} color="#00CCBC" />
          <Text style={Styles.resturantCardRatingText}>
            <Text style={Styles.resturantCardRatingNumber}>{rating}</Text> .{" "}
            {genre}
          </Text>
        </View>
        {/* info.address */}
        <View style={Styles.resturantCardViewAddress}>
          <Ionicons name="location-outline" size={18} color="black" />
          <Text style={Styles.resturantCardAddress}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
