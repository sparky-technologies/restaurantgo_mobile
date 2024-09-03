import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import Nav from "@/components/Nav";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomButton from "@/components/CustomButton";

type Props = {};

const FundAccountTransfer = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const handleCheckPayment = () => {
    console.log("checking payment");
  };
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Nav title="Bank Transfer" />
      <View className="p-6">
        <View className="w-[310px] h-[192] rounded-md border-[1px] border-primary">
          <View className="p-3 flex flex-col">
            {/* Account name */}
            <View className="flex flex-col">
              <Text className="font-StratosBold text-[20px]">Account Name</Text>
              <Text className="font-StratosMedium text-[15px]">
                Example Account
              </Text>
            </View>
            {/* Account Number */}
            <View className="flex flex-col">
              <Text className="font-StratosBold text-[20px]">
                Account Number
              </Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="font-StratosMedium text-[15px]">
                  1234567890
                </Text>
                <TouchableOpacity>
                  <FontAwesome5 name="copy" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            {/* Bank Name */}
            <View className="flex flex-col">
              <Text className="font-StratosBold text-[20px]">Bank Name</Text>
              <Text className="font-StratosMedium text-[15px]">
                Example Bank
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-2">
          <Text className="font-StratosLight text-primary text-[13px]">
            Account expires in 30 mins
          </Text>
        </View>

        <View className="mt-[80px]">
          <CustomButton
            title="I've Paid"
            handlePress={handleCheckPayment}
            loading={loading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FundAccountTransfer;
