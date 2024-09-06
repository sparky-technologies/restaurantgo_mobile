import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { router, Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomButton from "@/components/CustomButton";
import ReactNativeModal from "react-native-modal";
import { icons } from "@/constants";

type Props = {};

const Address = (props: Props) => {
  const addresses = [
    {
      id: 1,
      name: "Home",
      address: "123 Main St, City, State, ZIP",
      state: "New York",
      city: "Brookln",
    },
    {
      id: 2,
      name: "Work",
      address: "456 Park Ave, City, State, ZIP",
      state: "California",
      city: "San Francisco",
    },
    {
      id: 3,
      name: "School",
      address: "789 Oak St, City, State, ZIP",
      state: "Texas",
      city: "Houston",
    },
  ];
  const handleEdit = (id: any) => {
    router.push(`/address/${id}`);
  };
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const handleDelete = (id: any) => {
    setId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    console.log(id);
    console.log("deleting");
  };
  const [showModal, setShowModal] = useState(false);

  const cancelModal = () => {
    setShowModal(false);
  };
  const AddressCard = ({ item }: any) => (
    <View className="w-full my-3 relative p-4 h-[122px] bg-white shadow-md">
      <View className="flex flex-col">
        <Text className="text-[20px] mb-2 font-StratosMedium">
          {item.address}
        </Text>
        <Text className="text-[15px] font-StratosLight">
          {item.city}-{item.state}
        </Text>
      </View>
      <View className="flex mb-3 mx-3 absolute right-0 bottom-0 flex-row justify-end items-center">
        <View className="flex flex-row gap-2">
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Feather name="trash" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEdit(item.id)}>
            <FontAwesome name="pencil" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Nav title="Address" />
      <View className="p-6">
        {addresses.map((item) => (
          <AddressCard key={item.id} item={item} />
        ))}
        <View className="mt-10 flex justify-center items-center">
          <CustomButton
            loading={false}
            title="Add New Address"
            handlePress={() => router.push("/address/add")}
          />
        </View>
      </View>
      <ReactNativeModal
        isVisible={showModal}
        onDismiss={() => setShowModal(false)}
      >
        <View className="flex justify-start p-6 flex-col bg-white rounded-2xl min-h-[100px]">
          <View className="flex flex-row p-1 justify-end">
            <TouchableOpacity onPress={cancelModal}>
              <Image source={icons.cancel} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-[22px] mb-3 font-StratosBold">Delete</Text>
            <Text className="text-[12px] font-StratosMedium">
              Are you sure you want to delete this address? This action cannot
              be undone.
            </Text>
          </View>
          <View className="mt-10 flex flex-row justify-between items-center">
            <CustomButton
              title="Cancel"
              loading={false}
              handlePress={cancelModal}
              width={113}
              height={49}
              textSize="18"
            />
            <CustomButton
              title="Delete"
              loading={loading}
              handlePress={handleConfirmDelete}
              width={113}
              height={49}
              textSize="18"
            />
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default Address;
