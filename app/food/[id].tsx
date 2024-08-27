import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { data, icons } from "@/constants";
import BackButton from "@/components/BackButton";
import CustomButton from "@/components/CustomButton";
import Nav from "@/components/Nav";

type Props = {};

const FoodDetail = (props: Props) => {
  const params = useLocalSearchParams();
  const { id } = params;
  const idNumber = Number(id);
  const food = data.find((food) => food.id === idNumber);
  console.log(idNumber);
  console.log(food);
  const handleAddtoCart = () => {
    Alert.alert("Cart", "New item added to cart");
  };
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground source={food?.image} className="w-[100%] h-[358px]">
            <View className="p-2">
              <Nav title="Order" />
            </View>
          </ImageBackground>
        </View>

        <View className="mt-4 p-6">
          <View className="flex justify-center items-center">
            <Text className="text-2xl font-StratosBold">{food?.name}</Text>
          </View>
          <Text className="font-StratosBold my-4 text-[20px]">Description</Text>
          <Text className="text-[13px] font-StratosLight">
            {food?.description}
          </Text>
        </View>
        <View className="px-6">
          <Text className="font-StratosBold text-[18px]">Price</Text>
          <View className="flex flex-row justify-between items-center mt-2">
            <Text className="font-StratosMedium text-[16px]">Total</Text>
            <Text className="font-StratosMedium text-[16px]">
              ₦{food?.price}
            </Text>
          </View>
        </View>

        <View className="mt-6 flex flex-row items-center justify-center">
          <CustomButton
            title="Add to Cart"
            loading={false}
            handlePress={handleAddtoCart}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
