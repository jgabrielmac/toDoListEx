import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/auth";
import styles from "./style";

export default function Header({
  setShowModal,
}: {
  setShowModal: (data: boolean) => void;
}): JSX.Element {
  const { userName, backgroundColorStorage } = useAuth();

  const colorCondition =
    backgroundColorStorage.substring(1, 2) === "0" ||
    backgroundColorStorage.substring(1, 3) === "11";

  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 12,
        paddingBottom: -12,
      }}>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <StatusBar
          barStyle={colorCondition ? "light-content" : "dark-content"}
        />
        <Text
          style={{
            fontSize: 16,
            color: colorCondition ? "#FFF" : "#000",
          }}>
          Suas notas, <Text style={{ fontWeight: "bold" }}>{userName}</Text>
        </Text>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Ionicons
            name="settings-sharp"
            size={32}
            color={colorCondition ? "#FFF" : "#000"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.divider,
          { backgroundColor: colorCondition ? "#FFF" : "#8A8A8A" },
        ]}
      />
    </SafeAreaView>
  );
}
