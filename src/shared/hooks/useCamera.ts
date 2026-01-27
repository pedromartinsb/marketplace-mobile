import * as ImagePicker from "expo-image-picker";
import { useCallback, useState } from "react";
import { Toast } from "toastify-react-native";

export const useCamera = (pickerOptions: ImagePicker.ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false);

  const requestCameraPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      const currentStatus = status === "granted";

      if (!currentStatus) {
        Toast.info(
          "Permissão para acessar a câmera negada. Por favor, habilite nas configurações do dispositivo.",
          "top",
        );
      }

      return currentStatus;
    } catch (error) {
      Toast.error("Erro ao solicitar permissão para a câmera.", "top");
      return false;
    }
  }, []);

  const openCamera = useCallback(async (): Promise<string | null> => {
    setIsLoading(true);
    try {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        return null;
      }

      const result = await ImagePicker.launchCameraAsync(pickerOptions);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto capturada com sucesso!", "top");
        return result.assets[0].uri;
      }
      return null;
    } catch (error) {
      Toast.error("Erro ao abrir a câmera.", "top");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    requestCameraPermission,
    openCamera,
  };
};
