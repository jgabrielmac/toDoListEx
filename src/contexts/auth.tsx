import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProviderData {
  children: JSX.Element;
}
interface AuthContextData {
  userName: string;
  backgroundColorStorage: string;
  loadingCompleted: boolean;
  reload: boolean;
  setReload: (data: boolean) => void;
  onExit: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderData> = ({ children }) => {
  const [backgroundColorStorage, setbackgroundColorStorage] =
    useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [loadingCompleted, setLoadingCompleted] = useState<boolean>(true);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const userNameStorage = await AsyncStorage.getItem("userName");
        const colorOnStorage = await AsyncStorage.getItem("backgroundColor");
        if (userNameStorage && colorOnStorage) {
          setUserName(userNameStorage);
          setbackgroundColorStorage(colorOnStorage);
          setLoadingCompleted(false);
        } else throw Error;
      } catch (e) {
        setUserName("");
        setbackgroundColorStorage("");
        setLoadingCompleted(false);
      }
    };
    loadStorageData();
  }, [reload]);

  async function onExit() {
    setLoadingCompleted(true);
    await AsyncStorage.clear();
    setUserName("");
    setbackgroundColorStorage("");
    setLoadingCompleted(false);
  }

  return (
    <AuthContext.Provider
      value={{
        userName,
        loadingCompleted,
        backgroundColorStorage,
        reload,
        setReload,
        onExit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
