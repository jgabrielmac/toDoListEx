import { StyleSheet } from "react-native";
import constants from "../../constants";

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FBFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FBFFFF",
    paddingTop: constants.window.height / 3.9,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 21,
    fontWeight: "bold",
    lineHeight: 45,
  },
  absoluteContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "flex-end",
    height: "100%",
  },
});

export default styles;
