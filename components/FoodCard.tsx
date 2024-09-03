import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { icons } from "@/constants";
import CustomButton from "./CustomButton";

type Props = {
  name: string;
  price: string;
  image: ImageSourcePropType;
  loading: boolean;
  addToCart: any;
};

const FoodCard = ({ name, price, image, loading, addToCart }: Props) => {
  return (
    <View className="w-[149px] h-[208px] rounded-[8px]">
      <Image source={image} resizeMode="cover" />
      <View className="flex flex-col my-2">
        <Text className="font-StratosLight text-[14px]">{name}</Text>
        <Text className="font-StratosBold mb-2 text-[12px]">
          Price: ₦{price}
        </Text>
        <Image source={icons.stars} resizeMode="contain" />
      </View>
      {/* Add to cart Button */}
      <CustomButton
        title="Add to cart"
        loading={loading}
        handlePress={addToCart}
        width={102}
        height={30}
        textSize="11"
      />
    </View>
  );
};

export default FoodCard;
