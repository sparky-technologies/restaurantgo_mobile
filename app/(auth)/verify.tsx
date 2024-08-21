import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OtpInput from "@/components/OtpInput";
import CustomButton from "@/components/CustomButton";

type Props = {};

const Verification = (props: Props) => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [loading, setLoading] = useState(false);
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
    </SafeAreaView>
  );
};

export default Verification;
