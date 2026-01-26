import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <View className="items-center justify-center">
          <AuthFormHeader title="Register" subtitle="Create your account" />

          <AppInputController
            leftIcon="person-outline"
            label="NOME"
            control={control}
            name="name"
            placeholder="Your name"
          />

          <AppInputController
            leftIcon="call-outline"
            label="TELEFONE"
            control={control}
            name="phone"
            placeholder="(99) 99999-9999"
          />

          <Text className="text-base mt-5 font-bold text-gray-500">Access</Text>

          <AppInputController
            leftIcon="mail-outline"
            label="E-MAIL"
            control={control}
            name="email"
            placeholder="mail@example.com"
          />

          <AppInputController
            leftIcon="lock-closed-outline"
            label="SENHA"
            control={control}
            name="password"
            placeholder="Your password"
            secureTextEntry
          />

          <AppInputController
            leftIcon="lock-closed-outline"
            label="CONFIRMAR SENHA"
            control={control}
            name="confirmPassword"
            placeholder="Confirm your password"
            secureTextEntry
          />

          <TouchableOpacity onPress={() => onSubmit()}>
            <Text>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
