import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OtpInput from "@/components/OtpInput";
import CustomButton from "@/components/CustomButton";
import ReactNativeModal from "react-native-modal";
import { images } from "@/constants";
import { Href, router } from "expo-router";
import { useRouteStore, useEmailStore } from "@/store";
import CustomModal from "@/components/CustomModal";
import { verifyOtp, VerifyOTP, resendOtp, ResendOTPPayload } from "@/api/auth";
import CustomErrorModal from "@/components/CustomErrorModal";

type Props = {};

const Verification = (props: Props) => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { route } = useRouteStore();
  const { email } = useEmailStore();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otpResendMsg, setOtpResendMsg] = useState("");
  const [waitTime, setWaitTime] = useState(0);

  useEffect(() => {
    if (waitTime > 0) {
      const timer = setInterval(() => {
        setWaitTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [waitTime]);
  const handleClose = () => {
    setShowErrorModal(false);
  };
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
  const otpVerify = async (payload: VerifyOTP) => {
    try {
      setLoading(true);
      const response = await verifyOtp(payload);
      if (response.status === "success") {
        setSuccessMessage(response.message);
        setShowModal(true);
        setLoading(false);
      } else {
        setErrorMessage(response.message);
        setShowErrorModal(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    const otpResend = async (pl: ResendOTPPayload) => {
      try {
        console.log(email);
        setWaitTime(60);
        const response = await resendOtp(pl);
        if (response.status === "success") {
          setOtpResendMsg(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const payload: ResendOTPPayload = {
      email: email,
    };
    otpResend(payload);
  };
  const handleOtpSubmit = () => {
    // TODO: implement otp submit
    const formattedOtp = otp.join("");
    const payload = {
      otp: formattedOtp,
      email: email,
    };
    otpVerify(payload);
  };
  return (
    <SafeAreaView className="p-6">
      <View>
        <Text className="text-[24px] font-StratosBold">Verify your email</Text>
      </View>
      <View className="mt-10">
        <OtpInput otp={otp} setOtp={setOtp} />
      </View>
      <View className="flex flex-row mt-3 justify-end">
        <TouchableOpacity
          onPress={waitTime <= 0 ? handleResendOtp : (null as any)}
        >
          <Text className="text-primary font-StratosMedium text-[14px]">
            Resend Otp{" "}
            {waitTime > 0 ? (
              <Text className="text-[12px] font-StratosLight text-gray-900">
                in {waitTime} seconds
              </Text>
            ) : (
              ""
            )}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="my-3">
        <Text className="text-[12px] font-StratosSemiBold">
          {otpResendMsg && otpResendMsg}
        </Text>
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
        text={successMessage}
        btnTitle="Continue"
        handleDone={handleDone}
      />
      <CustomErrorModal
        showModal={showErrorModal}
        text={errorMessage}
        title="Failed"
        handleDone={handleClose}
        btnTitle="Close"
      />
    </SafeAreaView>
  );
};

export default Verification;
