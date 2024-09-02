import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { Stack } from "expo-router";

type Props = {};

const Address = (props: Props) => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Nav title="Address" />
    </SafeAreaView>
  );
};

export default Address;
