import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";

type Props = {};

const Home = (props: Props) => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = 23000;
  const handleAddFundsPress = () => {
    console.log("Funds Added");
  };
  const handleShowBalancePress = () => {
    setShowBalance(!showBalance);
  };
  return (
    <SafeAreaView className="p-6">
      <Header />
      <View className="flex flex-row items-center justify-between">
        <View className="mt-5 flex flex-col">
          <Text className="text-[16px] font-StratosMedium">Welcome, Ayo</Text>
          <View className="mt-2 flex flex-row">
            <Text>{showBalance ? balance : "********"}</Text>
            <TouchableOpacity className="mx-4" onPress={handleShowBalancePress}>
              <Image
                source={showBalance ? icons.eyeOpen : icons.eyes}
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-2">
          <CustomButton
            title="Add Funds"
            loading={false}
            handlePress={handleAddFundsPress}
            width={90}
            height={40}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
