import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { router, Stack } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";

type Props = {};

const Add = (props: Props) => {
  const [form, setForm] = useState({
    state: "",
    city: "",
    address: "",
  });
  const handleDone = () => {
    router.back();
  };
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSaveAddress = () => {
    setLoading(true);
    console.log("Address saved");
    console.log(form);
    setShowModal(true);
    setLoading(false);
  };
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Nav title="Add New Address" />

      <View className="p-6">
        <View className="my-4">
          <Text className="text-[16px] font-StratosSemiBold">
            Select your state
          </Text>
          <View className="rounded-[8px] my-3 border-[1px] border-primary">
            <Picker
              selectedValue={form.state}
              className="w-full h-[46px]"
              onValueChange={(itemValue, itemIndex) => {
                setForm({
                  ...form,
                  state: itemValue,
                });
              }}
            >
              <Picker.Item label="Lagos" value="Lagos" />
            </Picker>
          </View>
        </View>
        <View className="my-2">
          <Text className="text-[16px] font-StratosSemiBold">
            Select your city
          </Text>
          <View className="rounded-[8px] my-3 border-[1px] border-primary">
            <Picker
              selectedValue={form.city}
              className="w-full h-[46px]"
              onValueChange={(itemValue, itemIndex) => {
                setForm({
                  ...form,
                  city: itemValue,
                });
              }}
            >
              <Picker.Item label="Island" value="Island" />
            </Picker>
          </View>
        </View>
        <View>
          <Text className="text-[16px] font-StratosSemiBold">
            Enter your address
          </Text>
          <View className="rounded-[8px] my-3 border-[1px] border-primary">
            <TextInput
              numberOfLines={4}
              value={form.address}
              onChangeText={(address) => setForm({ ...form, address })}
              placeholder="123 Main St"
              className="w-full px-2 h-[100px]"
            />
          </View>
        </View>

        <View className="mt-10">
          <CustomButton
            title="Save"
            loading={loading}
            handlePress={handleSaveAddress}
          />
        </View>
        <CustomModal
          btnTitle="Continue"
          showModal={showModal}
          handleDone={handleDone}
          text="Address saved successfully"
          title="Success"
        />
      </View>
    </SafeAreaView>
  );
};

export default Add;
