import { View, Text } from "react-native";
import BackButton from "./BackButton";

interface NavProps {
  title: string;
}

const Nav = ({ title }: NavProps) => (
  <View className="flex flex-row justify-between items-center p-6">
    <BackButton />
    <Text className="font-StratosSemiBold text-[20px]">{title}</Text>
    <View></View>
  </View>
);

export default Nav;
