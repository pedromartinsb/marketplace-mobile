import { router } from "expo-router";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  useData,
  setUseData,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{useData.name}</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};
