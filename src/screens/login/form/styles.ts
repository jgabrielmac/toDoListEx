import { StyleSheet } from "react-native";
import constants from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F28C28",
    justifyContent: "flex-end",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: constants.window.width / 5,
  },
  loginButtonContainer: {
    backgroundColor: "#FBFFFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginVertical: 12,
    marginBottom: 100,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default styles;
