import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useUserStore } from "../../shared/store/user-store";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    const mutationResponse =
      await userRegisterMutation.mutateAsync(registerData);
    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
    console.log("Registered user:", user);
  });

  return {
    control,
    errors,
    onSubmit,
  };
};
