import { useMutation } from "@tanstack/react-query";
import { uploadAvatar } from "../../services/auth.service";
import { Toast } from "toastify-react-native";

export const useUploadAvatarMutatin = () => {
  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (data) => {
      console.log("Avatar uploaded successfully:", data);
    },
    onError: (error) => {
      console.error("Error uploading avatar:", error);
      Toast.error("Erro ao enviar foto de perfil. Tente novamente.");
    },
  });

  return mutation;
};
