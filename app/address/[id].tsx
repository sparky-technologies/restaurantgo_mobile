import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { router, Stack, useLocalSearchParams } from "expo-router";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";

type Props = {};

const EditAddress = (props: Props) => {
  // get aaddress id from para
  const params = useLocalSearchParams();
  const { id } = params;
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newAddr, setNewAddr] = useState("");
  const handleEdit = () => {
    setShowModal(true);
    console.log("editing address");
  };
  const handleDone = () => {
    console.log(id);
    console.log(newAddr);
    console.log("Done editing");
    setShowModal(false);
    router.back();
  };
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Nav title="Edit Address" />
      <ScrollView
        className="p-6"
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={true}
      >
        <View className="flex-grow">
          <InputField
            label="Old Address"
            multiline={true}
            placeholder="Some where in lagos"
            numberOfLines={5}
            editable={false}
            textAlignVertical="top"
          />
          <InputField
            label="New Address"
            multiline={true}
            placeholder="Some where in lagos"
            numberOfLines={5}
            value={newAddr}
            onChangeText={(value) => setNewAddr(value)}
            textAlignVertical="top"
          />

          <View className="my-12">
            <CustomButton
              loading={loading}
              title="Edit"
              handlePress={handleEdit}
            />

            <CustomModal
              showModal={showModal}
              btnTitle="Continue"
              handleDone={handleDone}
              title="Success"
              text="Your address has been successfully edited!"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAddress;
