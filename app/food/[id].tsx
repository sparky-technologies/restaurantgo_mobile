import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams } from "expo-router";
import { data, icons } from "@/constants";
import BackButton from "@/components/BackButton";

type Props = {};

const FoodDetail = (props: Props) => {
  const params = useLocalSearchParams();
  const { id } = params;
  const idNumber = Number(id);
  const food = data[idNumber];
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
            <View className="flex flex-row justify-between items-center p-10">
              <BackButton />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
