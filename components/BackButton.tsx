import { icons } from "@/constants";
import { router } from "expo-router";
import { TouchableOpacity, View, Image } from "react-native";

const BackButton = () => (
  <TouchableOpacity onPress={() => router.back()}>
    <View className="w-[34px] h-[34px] border-[1px] flex justify-center items-center rounded-full  border-primary">
      <Image source={icons.leftArrow} resizeMode="contain" />
    </View>
  </TouchableOpacity>
);

export default BackButton;
