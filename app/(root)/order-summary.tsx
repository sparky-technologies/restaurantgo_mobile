import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import { Href, router } from "expo-router";

type Props = {};

const RedDot = () => (
  <View className="flex flex-row items-center justify-center h-[20px] w-[20px] bg-red-500 rounded-full shadow-md"></View>
);

const OrderSummary = (props: Props) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const itemTotal = 7000;
  const deliveryFee = 300;
  const grandTotal = itemTotal + deliveryFee;
  const [checkedMode, setCheckedMode] = React.useState("Instant");
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const handleDone = () => {
    setShowModal(false);
    router.push("/(root)/(tabs)/home" as Href);
  };
  const handlePaymentModeSelect = (mode: string) => {
    setCheckedMode(mode);
    setForm({
      ...form,
      payment_mode: mode,
    });
  };
  const [form, setForm] = React.useState({
    address_id: selectedValue,
    payment_mode: checkedMode,
  });
  const handleOrderSubmit = () => {
    // handle order submission logic
    console.log(form);
    console.log("Order submitted");
    setShowModal(true);
  };
  return (
    <SafeAreaView>
      <Nav title="Order Summary" />
      <View className="p-6">
        <View className="flex flex-row justify-between mb-3">
          <Text className="text-[18px] font-StratosSemiBold">Item's Total</Text>
          <Text className="text-[18px] font-StratosSemiBold">{itemTotal}</Text>
        </View>
        <View className="flex flex-row mb-3 justify-between">
          <Text className="text-[18px] font-StratosSemiBold">
            Delivery Price
          </Text>
          <Text className="text-[18px] font-StratosSemiBold">
            {deliveryFee}
          </Text>
        </View>
        <View className="w-full h-[2px] bg-slate-900"></View>
        <View className="my-4 flex flex-row justify-between">
          <Text className="text-[18px] font-StratosSemiBold">Grand Total</Text>
          <Text className="text-[18px] font-StratosSemiBold">{grandTotal}</Text>
        </View>

        <View className="my-4">
          <Text className="text-[16px] font-StratosSemiBold">
            Select your address
          </Text>
          <View className="rounded-[8px] my-3 border-[1px] border-primary">
            <Picker
              selectedValue={selectedValue}
              className="w-full h-[46px]"
              onValueChange={(itemValue, itemIndex) => {
                setForm({
                  ...form,
                  address_id: itemValue,
                });
                setSelectedValue(itemValue);
              }}
            >
              <Picker.Item label="Address 1" value="Address 1" />
              <Picker.Item label="Address 2" value="Address 2" />
              <Picker.Item label="Address 3" value="Address 3" />
            </Picker>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-[22px] font-StratosBold">
            Select Payment Mode
          </Text>
          <View className="flex mt-5 flex-col">
            <View className="flex flex-row justify-start">
              <TouchableOpacity
                onPress={() => handlePaymentModeSelect("Instant")}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-[10px] border-[1px] border-primary"
              >
                {checkedMode === "Instant" ? <RedDot /> : null}
              </TouchableOpacity>
              <View className="flex justify-center items-center">
                <Text className="text-[20px] font-StratosBold ml-4">
                  Payment from Wallet
                </Text>
              </View>
            </View>
            <View className="my-4 flex flex-row justify-start">
              <TouchableOpacity
                onPress={() => handlePaymentModeSelect("Delivery")}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-[10px] border-[1px] border-primary"
              >
                {checkedMode === "Delivery" ? <RedDot /> : null}
              </TouchableOpacity>
              <View className="flex justify-center items-center">
                <Text className="text-[20px] font-StratosBold ml-4">
                  Payment on Delivery
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-5">
          <CustomButton
            title="Checkout"
            loading={loading}
            handlePress={handleOrderSubmit}
          />
        </View>
        <CustomModal
          btnTitle="Continue"
          title="Payment Successful"
          text="Thanks for choosing us!, order will reach you in few minutes"
          showModal={showModal}
          handleDone={handleDone}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderSummary;
