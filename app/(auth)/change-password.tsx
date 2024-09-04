import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import { Href, router } from "expo-router";
import CustomErrorModal from "@/components/CustomErrorModal";

type Props = {};

const ChangePassword = (props: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleErrorDone = () => {
    setShowErrorModal(false);
  };
  const handleSavePssword = () => {
    setShowModal(true);
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
        />
        <InputField
          label="Retype New Password"
          secureTextEntry={secureTextEntry}
          setSecureTextEntry={setSecureTextEntry}
          icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
          placeholder="aseerrrrr"
        />
      </View>

      <View className="mt-10">
        <CustomButton
          loading={loading}
          title="Save Password"
          handlePress={handleSavePssword}
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
