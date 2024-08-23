import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView className="p-6">
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
