import { Image, Text, View } from "react-native";

interface AuthFormHeaderProps {
  title: string;
  subtitle: string;
}

export const AuthFormHeader = ({ title, subtitle }: AuthFormHeaderProps) => {
  return (
    <View className="items-center mb-8">
      <Image
        source={require("../../../assets/images/logo2.png")}
        resizeMode="contain"
        className="w-[140px] h-[120px]"
      />

      <Text className="text-3xl font-bold mb-3 text-gray-500 text-center">
        {title}
      </Text>

      <Text className="text-base text-gray-300 text-center">{subtitle}</Text>
    </View>
  );
};
