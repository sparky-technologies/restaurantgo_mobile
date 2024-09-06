import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { icons } from "@/constants";
import CustomButton from "./CustomButton";

const CARD_WIDTH = Dimensions.get("screen").width * 0.5;

type Props = {
  name: string;
  price: string;
  image: ImageSourcePropType;
  loading: boolean;
  addToCart: any;
};

const FoodCard = ({ name, price, image, loading, addToCart }: Props) => {
  return (
    <View className="w-[150px] rounded-[8px]" style={styles.card}>
      <Image source={image} resizeMode="cover" />
      <View className="h-[30%] flex flex-col relative mb-2 my-2">
        <View className="">
          <Text className="font-StratosLight text-[14px]">{name}</Text>
        </View>
        <View className="absolute bottom-0">
          <Text className="font-StratosBold mb-2 text-[12px]">
            Price: ₦{price}
          </Text>
        </View>
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

const styles = StyleSheet.create({
  card: {
    height: CARD_WIDTH,
    // overflow: "hidden",
    marginBottom: 15,
  },
});

export default FoodCard;
