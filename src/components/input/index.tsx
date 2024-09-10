import { Control, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import { mask } from "react-native-mask-text";
import { HelperText, TextInput } from "react-native-paper";

interface InputComponentProps {
  control: Control<any>;
  name: string;
  rules: Object;
  label?: string | undefined;
  placeholder?: string | undefined;
  activeOutlineColor?: string | undefined;
  maskProps?: string;
  maxLength?: number;
  shadow?: boolean;
  errors: any;
}

const Input: React.FC<InputComponentProps> = ({
  control,
  name,
  rules,
  label,
  placeholder,
  activeOutlineColor,
  errors,
  maskProps,
  shadow,
  maxLength,
}: InputComponentProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => {
        const maskedValue = mask(value, maskProps);
        return (
          <View style={{ width: "100%" }}>
            {label && (
              <Text style={{ fontSize: 16, fontWeight: "500" }}>{label}</Text>
            )}
            <TextInput
              style={
                shadow && {
                  shadowColor: "#171717",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 5,
                }
              }
              maxLength={maxLength}
              placeholder={placeholder}
              activeOutlineColor={activeOutlineColor || "#F28C28"}
              outlineStyle={{
                borderColor: errors[name]
                  ? "red"
                  : activeOutlineColor || "#FBFFFF",
              }}
              error={errors[name]}
              mode="outlined"
              value={maskProps ? maskedValue : value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {!!errors[name] && (
              <HelperText
                onPressIn={() => 2}
                onPressOut={() => 2}
                type="error"
                visible={!!errors[name]}
                style={{ textAlign: "center", marginBottom: 5, color: "red" }}>
                {errors[name]?.message}
              </HelperText>
            )}
          </View>
        );
      }}
    />
  );
};

export default Input;
