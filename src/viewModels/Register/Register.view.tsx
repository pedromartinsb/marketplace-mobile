import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { AppButton } from "../../shared/components/AppButton";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
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

        <AppButton className="mt-6" onPress={onSubmit}>
          Registrar
        </AppButton>

        <View className="mt-16">
          <Text className="text-base text-gray-300 mb-6">
            Já possui uma conta?
          </Text>
          <AppButton variant="outlined" onPress={() => router.push("/login")}>
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
