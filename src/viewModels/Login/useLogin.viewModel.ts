import { useForm } from "react-hook-form";
import { LoginFormData, loginScheme } from "./login.scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../../shared/queries/auth/use-login.mutation";
import { useUserStore } from "../../shared/store/user-store";

export const useLoginViewModel = () => {
  const { user } = useUserStore();
  console.log("Current user in useLoginViewModel:", user);
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (useFormData) => {
    const userData = await loginMutation.mutateAsync(useFormData);
    console.log("User logged in:", userData);
  });

  return { control, onSubmit };
};
