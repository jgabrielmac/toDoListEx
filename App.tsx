import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./src/navigation";
import { AuthProvider } from "./src/contexts/auth";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <RootNav />
        </AuthProvider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
