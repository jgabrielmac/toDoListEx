import Entypo from "@expo/vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FlatList, TouchableOpacity, View } from "react-native";
import Header from "../../components/header";
import Input from "../../components/input";
import ListItem from "../../components/listItem";
import ConfigModal from "../../components/modal";
import { useAuth } from "../../contexts/auth";
import styles from "./styles";

interface ListItemProps {
  id: number;
  note: string;
  checked: boolean;
}

export default function HomeScreen(): JSX.Element {
  const { backgroundColorStorage } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { note: "" } });
  const [showModal, setShowModal] = useState(false);

  const [list, setList] = useState<ListItemProps[]>([]);

  const onSubmit = async (data: { note: string }) => {
    await setList([
      ...list,
      {
        id: list.length > 0 ? list[list.length - 1].id + 1 : 0,
        note: data.note,
        checked: false,
      },
    ]);
    reset();
  };
  const colorCondition = backgroundColorStorage.substring(1, 2) === "0";

  return (
    <View
      style={{
        backgroundColor: backgroundColorStorage,
        flex: 1,
      }}>
      <Header setShowModal={setShowModal} />
      <View style={{ width: "90%", alignSelf: "center" }}>
        <View style={styles.inputContainer}>
          <View style={{ flex: 1 }}>
            <Input
              shadow
              control={control}
              name="note"
              rules={{
                required: {
                  value: true,
                  message: "Campo obrigatório",
                },
              }}
              placeholder="Escreva sua tarefa"
              errors={errors}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{
              marginLeft: 21,
              marginTop: 10,
            }}>
            <Entypo
              name="squared-plus"
              size={39}
              color={colorCondition ? "#FFF" : "#000"}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          contentContainerStyle={{
            backgroundColor: "#FBFFFF",
            borderRadius: 7,
            marginVertical: 12,
          }}
          data={list}
          renderItem={({ item }) => (
            <ListItem item={item} list={list} setList={setList} />
          )}
        />
        <ConfigModal showModal={showModal} setShowModal={setShowModal} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
