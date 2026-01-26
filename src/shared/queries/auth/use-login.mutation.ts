import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth.service";
import { LoginHttpParams } from "../../interfaces/http/login";
import { useUserStore } from "../../store/user-store";

export const useLoginMutation = () => {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => login(userData),
    onSuccess: (response) => {
      setSession(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
};
