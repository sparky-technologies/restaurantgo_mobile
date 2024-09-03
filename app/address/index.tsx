import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { router, Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomButton from "@/components/CustomButton";

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

  const handleDelete = (id: any) => {
    console.log("Deleting");
  };
  const AddressCard = ({ item }: any) => (
    <View className="w-[311px] my-3 relative p-4 h-[122px] bg-white shadow-md">
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
        <View className="mt-10">
          <CustomButton
            loading={false}
            title="Add New Address"
            handlePress={() => router.push("/address/add")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Address;
