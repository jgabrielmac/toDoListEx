import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alingItems: "center",
  },
  container: {
    minHeight: 220,
    alignItems: "center",
    marginHorizontal: 50,
    padding: 18,
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },
  closeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  saveContainer: {
    backgroundColor: "#DCDCDC",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 5,
    height: 40,
    marginVertical: 12,
  },
  exitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingLeft: 8,
    borderColor: "red",
    borderWidth: 1,
    width: 80,
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 5,
    height: 40,
    marginTop: 6,
  },
});

export default styles;
