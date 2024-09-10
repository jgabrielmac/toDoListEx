import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 9,
    marginVertical: 7,
    flex: 1,
  },
  icon: {
    marginRight: 5,
  },
  noteBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    paddingLeft: 9,
    paddingVertical: 12,
    borderRadius: 9,
  },
  iconCheck: { height: 25, width: 25, borderColor: "#000", marginRight: 5 },
});

export default styles;
