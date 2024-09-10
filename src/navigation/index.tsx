import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { RootStackParamList } from "./types";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import { useAuth } from "../contexts/auth";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNav() {
  const { userName, loadingCompleted } = useAuth();
  const colorScheme = useColorScheme();
  if (loadingCompleted) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={"Login"}>
        {userName ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </ThemeProvider>
  );
}

export default RootNav;
