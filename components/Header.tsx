import { View, Text, Image } from "react-native";
import { icons, images } from "@/constants";

type Props = {};

const Header = (props: Props) => {
  return (
    <View className="flex flex-row justify-between items-center">
      <Image source={images.profile} resizeMode="contain" />
      <Image source={icons.bell} resizeMode="contain" />
    </View>
  );
};

export default Header;
