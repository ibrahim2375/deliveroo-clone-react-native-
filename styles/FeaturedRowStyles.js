import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  rowHeaderView: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  rowHeaderViewTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowHeaderViewTitle: {
    fontWeight: "bold",
  },
  rowHeaderViewDescription: {
    fontSize: 12,
    color: "#ccc",
  },
});
