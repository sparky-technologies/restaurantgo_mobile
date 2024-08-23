import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OtpInput from "@/components/OtpInput";
import CustomButton from "@/components/CustomButton";
import ReactNativeModal from "react-native-modal";
import { images } from "@/constants";
import { Href, router } from "expo-router";
import { useRouteStore } from "@/store";
import CustomModal from "@/components/CustomModal";

type Props = {};

const Verification = (props: Props) => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { route } = useRouteStore();
  const handleDone = () => {
    console.log(route);
    setShowModal(false);
    if (route === "sign-up") {
      // push to login page
      router.push("/(auth)/sign-in");
    } else {
      // else push to change password page
      // TODO: create this screen
      router.push("/(auth)/change-password" as Href);
    }
  };
  const handleOtpSubmit = () => {
    // TODO: implement otp submit
    setShowModal(true);
    console.log("Otp Submitted");
    console.log(otp.join(""));
  };
  return (
    <SafeAreaView className="p-6">
      <View>
        <Text className="text-[24px] font-StratosBold">Verify your email</Text>
      </View>
      <View className="mt-10">
        <OtpInput otp={otp} setOtp={setOtp} />
      </View>
      <View className="mt-[50px]">
        <CustomButton
          title="Submit"
          loading={loading}
          handlePress={handleOtpSubmit}
        />
      </View>
      <CustomModal
        showModal={showModal}
        title="Successful"
        text="You have successfully verified your email. You can now proceed to
            login"
        btnTitle="Continue"
        handleDone={handleDone}
      />
    </SafeAreaView>
  );
};

export default Verification;
