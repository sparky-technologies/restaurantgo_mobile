import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useRouteStore } from "@/store";
import { resetPassword } from "@/api/auth";
import CustomErrorModal from "@/components/CustomErrorModal";
import { useEmailStore } from "@/store";

type Props = {};

const ResetPassword = (props: Props) => {
  const [form, setForm] = useState({
    email: "",
  });
  const { setEmail } = useEmailStore();
  const { setRoute } = useRouteStore();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setShowErrorMessage] = useState("");
  const handleErrorDone = () => {
    setShowErrorModal(false);
  };

  const handleResetButtonPress = () => {
    // TODO: api request reset password
    setLoading(true);
    const passwordReset = async () => {
      const response = await resetPassword(form);
      if (response.status === "success") {
        setLoading(false);
        console.log("Password reset successfully!");
        setRoute("reset-password");
        setEmail(form.email);
        router.push("/(auth)/verify");
      } else {
        setLoading(false);
        setShowErrorMessage(response.message);
        setShowErrorModal(true);
      }
    };
    passwordReset();
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
        <View className="flex justify-center items-center">
          <CustomButton
            loading={loading}
            title="Reset Password"
            handlePress={handleResetButtonPress}
          />
        </View>

        <View>
          <CustomErrorModal
            showModal={showErrorModal}
            btnTitle="Close"
            handleDone={handleErrorDone}
            text={errorMessage}
            title="Failed"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
