import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OtpInput from "@/components/OtpInput";
import CustomButton from "@/components/CustomButton";
import ReactNativeModal from "react-native-modal";
import { images } from "@/constants";
import { router } from "expo-router";

type Props = {};

const Verification = (props: Props) => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleDone = () => {
    setShowModal(false);
    router.push("/(auth)/sign-in");
  };
  const handleOtpSubmit = () => {
    // TODO: implement otp submit
    console.log("Otp Submitted");
    console.log(otp.join(""));
  };
  return (
    <SafeAreaView className="p-6">
      <View>
        <Text className="text-[24px] font-StratosBold">Verify your email</Text>
      </View>
      <View className="mt-8">
        <OtpInput otp={otp} setOtp={setOtp} />
      </View>
      <View className="mt-10">
        <CustomButton
          title="Submit"
          loading={loading}
          handlePress={handleOtpSubmit}
        />
      </View>
      <ReactNativeModal isVisible={showModal}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Image
            source={images.check}
            className="w-[110px] mx-auto h-[110px] my-5"
          />
          <Text className="text-2xl text-center font-StratosMedium">
            Successful!
          </Text>
          <Text className="text-base text-gray-400 font-Stratos-Light text-center mt-2">
            You have successfully verified your email. You can now proceed to
            login.
          </Text>
          <View className="p-4">
            <CustomButton
              title="Continue"
              handlePress={handleDone}
              loading={false}
              width={241}
              height={64}
            />
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default Verification;
