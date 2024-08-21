import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";

interface Props {
  otp: string[];
  setOtp: (otp: string[]) => void;
}

type InputRef = React.RefObject<HTMLInputElement>;

const OtpInput = ({ otp, setOtp }: Props) => {
  const inputRefs: InputRef[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text && index < 4 - 1) {
      inputRefs[index + 1].current?.focus();
    } else if (!text && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };
  return (
    <View className="flex m-auto items-center flex-row gap-2 justify-around">
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index] as any}
          maxLength={1}
          keyboardType="numeric"
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          className="w-[72] h-[57] border-[1px] border-primary text-center text-xl rounded-[10px] flex items-center font-StratosBold outline-none"
        />
      ))}
    </View>
  );
};

export default OtpInput;
