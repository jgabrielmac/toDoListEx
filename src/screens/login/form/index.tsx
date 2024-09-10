import { Animated, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Input from "../../../components/input";
import { useForm } from "react-hook-form";

export interface NameProps {
  userName: string;
}

export default function LoginForm({
  onSubmit,
  height,
}: {
  onSubmit: (e: NameProps) => void;
  height: Animated.Value;
}): JSX.Element {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { userName: "" } });

  return (
    <Animated.View style={[styles.container, { height }]}>
      <Input
        control={control}
        name="userName"
        rules={{
          required: {
            value: true,
            message: "Campo obrigatório",
          },
          minLength: {
            value: 3,
            message: "Nome muito pequeno",
          },
        }}
        label="Digite seu nome"
        errors={errors}
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.loginButtonContainer}
      >
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
