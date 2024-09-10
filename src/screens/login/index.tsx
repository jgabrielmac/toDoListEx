import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Animated, Text, View } from "react-native";
import constants from "../../constants";
import { useAuth } from "../../contexts/auth";
import LoginForm, { NameProps } from "./form";
import styles from "./styles";

export default function LoginScreen(): JSX.Element {
  const { reload, setReload } = useAuth();

  const expanted = async () => {
    await Animated.timing(height, {
      useNativeDriver: false,
      toValue: constants.window.height,
      duration: 450,
    }).start();
    return true;
  };
  const height = useRef(
    new Animated.Value(constants.window.height / 2.3)
  ).current;

  const onSubmit = async (data: NameProps) => {
    await AsyncStorage.setItem("backgroundColor", "#F28C28");
    await AsyncStorage.setItem("userName", data.userName);
    expanted().then(() => setTimeout(() => setReload(!reload), 500));
  };

  return (
    <View style={styles.safeAreaStyle}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Sua lista personalizada</Text>
        <Text style={[styles.welcomeText, { fontSize: 38 }]}>
          Seja Bem-Vindo!
        </Text>
      </View>
      <View style={styles.absoluteContainer}>
        <LoginForm onSubmit={onSubmit} height={height} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
