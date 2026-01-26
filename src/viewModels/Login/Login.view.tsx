import { Text, TouchableOpacity, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { router } from "expo-router";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          title="Login"
          subtitle="Welcome back! Please login to your account."
        />

        <AppInputController
          control={control}
          name="email"
          label="E-MAIL"
          leftIcon="mail-outline"
          placeholder="mail@example.com"
        />

        <AppInputController
          control={control}
          name="password"
          label="SENHA"
          leftIcon="lock-closed-outline"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
};
