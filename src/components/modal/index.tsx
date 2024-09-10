import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from "react-hook-form";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import Input from "../input";
import styles from "./styles";

export default function ConfigModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
}): JSX.Element {
  const { backgroundColorStorage, onExit, setReload, reload } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { backgroundColor: "" } });

  const onSubmit = async (data: { backgroundColor: string }) => {
    await AsyncStorage.setItem("backgroundColor", data?.backgroundColor);
    await setShowModal(!showModal);
    setReload(!reload);
  };

  return (
    <Modal animationType="slide" transparent visible={showModal}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.closeContainer}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
              }}>
              <AntDesign name="closecircle" size={27} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 21, fontWeight: "600", marginBottom: 18 }}>
            Configurações
          </Text>
          <Input
            control={control}
            name="backgroundColor"
            maxLength={7}
            rules={{
              required: {
                value: true,
                message: "Campo obrigatório",
              },
              pattern: {
                value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                message: "Código inválido",
              },
            }}
            label="Cor de fundo"
            activeOutlineColor="#DEDEDE"
            errors={errors}
          />
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.saveContainer}>
            <Text style={{ fontWeight: "bold" }}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onExit} style={styles.exitContainer}>
            <Text style={{ fontWeight: "bold" }}>Sair</Text>
            <Ionicons name="exit-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
