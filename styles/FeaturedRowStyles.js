import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  rowHeaderView: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  rowHeaderViewTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowHeaderViewTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  rowHeaderViewDescription: {
    fontSize: 12,
    color: "gray",
  },
});
