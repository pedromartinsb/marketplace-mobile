import { useRef, useState } from "react";
import { BlurEvent, FocusEvent, TextInput } from "react-native";
import { colors } from "../../../styles/colors";

interface AppInputViewModelProps {
  isError?: boolean;
  isDisabled?: boolean;
  error?: string;
  secureTextEntry?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: BlurEvent) => void;
  mask?: (text: string) => string | void;
  onChangeText?: (text: string) => string | void;
  value?: string;
}

export const useAppInputViewModel = ({
  isError,
  isDisabled,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: AppInputViewModelProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleWrapperPress = () => {
    inputRef.current?.focus();
  };

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const getIconColor = () => {
    if (isError) return colors.danger;
    if (isFocused) return colors["purple-base"];
    if (value) return colors["purple-base"];
    return colors.gray["200"];
  };

  const handleTextChange = (text: string) => {
    if (mask) {
      const maskedText = mask(text);
      onChangeText?.(maskedText ?? text);
    } else {
      onChangeText?.(text);
    }
  };

  return {
    getIconColor,
    handlePasswordToggle,
    handleWrapperPress,
    handleFocus,
    handleBlur,
    showPassword,
    handleTextChange,
    isFocused,
  };
};
