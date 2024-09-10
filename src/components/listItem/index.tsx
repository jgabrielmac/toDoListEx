import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface ListItemProps {
  id: number;
  note: string;
  checked: boolean;
}

export default function ListItem({
  item,
  list,
  setList,
}: {
  item: ListItemProps;
  list: ListItemProps[];
  setList: (data: ListItemProps[]) => void;
}): JSX.Element {
  const [isChecked, setIsChecked] = useState(item.checked);

  const onCheck = () => {
    const newList = [...list];
    const findItem =
      newList.length > 0 && newList.find((obj) => obj.id === item.id);
    if (findItem) {
      findItem.checked = !isChecked;
      setIsChecked(!isChecked);
    }
    setList(newList);
  };

  const onDelete = () => {
    const newList = list.filter((deleteItem) => deleteItem.id !== item.id);
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.noteBox}>
        <Text
          style={{
            width: "70%",
            textDecorationLine: isChecked ? "line-through" : "none",
          }}
        >
          {item.note}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            style={styles.iconCheck}
            value={isChecked}
            onValueChange={onCheck}
          />
          <TouchableOpacity onPress={onDelete} style={styles.icon}>
            <Feather name="trash" size={27} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
