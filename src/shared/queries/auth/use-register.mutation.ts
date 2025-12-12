import { useMutation } from "@tanstack/react-query";
import { RegisterHttpParams } from "../../interfaces/http/register";

import * as authService from "../../services/auths.service";

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      authService.register(userData),
    onSuccess: (response) => console.log("Registration successful", response),
    onError: (error) => console.error("Registration failed", error),
  });

  return mutation;
};
