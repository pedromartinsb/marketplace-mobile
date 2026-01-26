import { Text, TouchableOpacity, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { router } from "expo-router";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
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

          <AppButton
            className="mt-6"
            rightIcon="arrow-forward"
            onPress={onSubmit}
          >
            Login
          </AppButton>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base mb-6 text-gray-300">
            Ainda não tem uma conta?
          </Text>
          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/register")}
          >
            Registro
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
};
