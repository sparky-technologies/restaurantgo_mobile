import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import { Href, router } from "expo-router";
import CustomErrorModal from "@/components/CustomErrorModal";
import { useOtpStore } from "@/store";
import { resetChangePassword } from "@/api/auth";

type Props = {};

const ChangePassword = (props: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const { otp } = useOtpStore();
  const [form, setForm] = useState({
    reset_token: otp,
    password1: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleErrorDone = () => {
    setShowErrorModal(false);
  };
  const handleSavePassword = () => {
    // implement save password api request
    const forgotPassword = async () => {
      const response = await resetChangePassword(form);
      if (response.status === "success") {
        console.log("Password reset successfully!");
        setSuccessMessage("Password reset successfully!");
        setShowModal(true);
      } else {
        setErrorMessage("Failed to reset password. Please try again.");
        setShowErrorModal(true);
      }
    };
    forgotPassword();
    console.log("Password Changed");
  };

  const handleSuccessDone = () => {
    setShowModal(false);
    router.push("/(auth)/login" as Href);
  };

  return (
    <SafeAreaView className="p-6">
      <View className="flex justify-start flex-col">
        <Text className="text-[24px] font-StratosBold">New Password</Text>
        <Text className="font-StratosLight text-[13px]">
          Make it your new beginning
        </Text>
      </View>

      <View className="mt-4">
        <InputField
          label="New Password"
          secureTextEntry={secureTextEntry}
          setSecureTextEntry={setSecureTextEntry}
          icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
          placeholder="ayojsuu33"
          onChangeText={(password1) =>
            setForm({
              ...form,
              password1,
            })
          }
        />
        <InputField
          label="Retype New Password"
          secureTextEntry={secureTextEntry}
          setSecureTextEntry={setSecureTextEntry}
          icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
          placeholder="aseerrrrr"
          onChangeText={(password2) =>
            setForm({
              ...form,
              password2,
            })
          }
        />
      </View>

      <View className="mt-10">
        <CustomButton
          loading={loading}
          title="Save Password"
          handlePress={handleSavePassword}
        />
        <CustomModal
          showModal={showModal}
          btnTitle="Continue"
          handleDone={handleSuccessDone}
          text={successMessage}
          title="Success"
        />
        <CustomErrorModal
          btnTitle="Close"
          showModal={showErrorModal}
          handleDone={handleErrorDone}
          text="Failed"
          title={errorMessage}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
