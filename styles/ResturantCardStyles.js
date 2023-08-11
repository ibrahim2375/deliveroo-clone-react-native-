import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  resturantCard: {
    marginRight: 15,
    marginTop: 10,
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
  },
  resturantCardImg: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
  resturantCardInfo: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  resturantCardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  resturantCardViewRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 5,
  },
  resturantCardRatingText: {
    fontSize: 12,
    color: "gray",
  },
  resturantCardRatingNumber: {
    color: "#00CCBC",
  },
  resturantCardViewAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  resturantCardAddress: {
    color: "gray",
    fontSize: 12,
  },
});
