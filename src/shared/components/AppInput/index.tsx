import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { appInputVariants, AppInputVariantsProps } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { useAppInputViewModel } from "./useAppInputViewModel";

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  value,
  isError,
  secureTextEntry = false,
  onBlur,
  onFocus,
  onChangeText,
  mask,
  error,
  isDisabled,
  ...textInputProps
}) => {
  const {
    getIconColor,
    handlePasswordToggle,
    handleWrapperPress,
    handleFocus,
    handleBlur,
    showPassword,
    handleTextChange,
    isFocused,
  } = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isDisabled,
    isError: !!error,
    secureTextEntry,
    mask,
    onChangeText,
    value,
  });

  const styles = appInputVariants({
    isFocused,
    isDisabled,
    isError: !!error,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons
          color={getIconColor()}
          className="mr-3"
          size={22}
          name={leftIcon}
        />

        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={handleTextChange}
          value={value}
          secureTextEntry={showPassword}
          className={styles.input()}
          {...textInputProps}
        />

        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons
              color={getIconColor()}
              size={22}
              name={showPassword ? "eye-outline" : "eye-off-outline"}
            />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons
            className="ml-2"
            name="alert-circle-outline"
            size={16}
            color="#DC2626"
          />{" "}
          {error}
        </Text>
      )}
    </View>
  );
};
