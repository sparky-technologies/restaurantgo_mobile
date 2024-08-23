import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useRouteStore } from "@/store";

type Props = {};

const ResetPassword = (props: Props) => {
  const [form, setForm] = useState({
    email: "",
  });
  const { setRoute } = useRouteStore();

  const handleResetButtonPress = () => {
    // TODO: api request reset password
    console.log("Reset Password");
    console.log(form);
    setRoute("reset-password");
    router.push("/(auth)/verify");
  };
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  return (
    <SafeAreaView className="p-6">
      <View className="flex justify-start flex-col">
        <Text className="text-[24px] font-StratosBold">Reset Password</Text>
        <Text className="font-StratosLight text-[13px]">
          It's your identity, protect it
        </Text>
      </View>
      <View className="mt-4">
        <InputField
          label={"Email"}
          placeholder="ayobami@dev.com"
          value={form.email}
          onChangeText={(email) =>
            setForm({
              ...form,
              email,
            })
          }
        />
      </View>
      <View className="mt-4">
        <CustomButton
          loading={loading}
          title="Reset Password"
          handlePress={handleResetButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
