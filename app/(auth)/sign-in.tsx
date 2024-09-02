import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { login, LoginPayload } from "@/api/auth";
import { storeData } from "@/lib/storage";

type Props = {};

const SignIn = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    const logUserIn = async () => {
      setLoading(true);
      try {
        const response = await login({
          email: form.email,
          password: form.password,
        } as LoginPayload);
        console.log(response);
        if (response.status === "success") {
          // set message
          setSuccessMessage(response.message);
          // store token to local storage
          storeData({
            key: "token",
            value: response.data.access_token,
            expiryTime: response.data.expires_in,
          });
          // Navigate to home screen
          router.push("/(root)/(tabs)/home");
        } else if (response.status_code === 400) {
          setErrors({
            email: response.message.email[0] || "",
            password: response.message.password[0] || "",
          });
        } else {
          const errors = response.message;
          console.log(errors);
          setErrorMessage(errors.error);
        }
      } catch (error) {
        console.error("Failed to log in", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    logUserIn();
  };
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  return (
    <SafeAreaView className="p-6">
      <View className="flex justify-start">
        <Text className="font-StratosBold text-[24px]">
          Hey Cheif! {"\n"}
          Good to see you again
        </Text>
      </View>
      <View className="mt-2">
        <InputField
          label={"Email"}
          placeholder="ayobami@yahoo.com"
          value={form.email}
          onChangeText={(email) =>
            setForm({
              ...form,
              email,
            })
          }
        />
        {errors.email && (
          <Text className="font-StratosSemiBold text-[10px] text-primary">
            {errors.email}
          </Text>
        )}
        <InputField
          label={"Password"}
          placeholder="somepassword"
          secureTextEntry={secureTextEntry}
          setSecureTextEntry={setSecureTextEntry}
          icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
          value={form.password}
          onChangeText={(password: string) =>
            setForm({
              ...form,
              password,
            })
          }
        />
        {errors.password && (
          <Text className="font-StratosSemiBold text-[10px] text-primary">
            {errors.password}
          </Text>
        )}
        <View className="flex flex-row justify-end">
          <Text className="font-Stratos">Forgot Password </Text>
          <Link href={"/(auth)/reset-password"}>
            <Text className="text-primary underline font-Stratos">
              Reset here
            </Text>
          </Link>
        </View>
        <View className="mt-4">
          <Text className="text-[12px] font-StratosSemiBold">
            {errorMessage && errorMessage}
          </Text>
        </View>
        <View className="mt-5">
          <View className="flex justify-center items-center">
            <CustomButton
              loading={loading}
              title="Login"
              handlePress={handleLogin}
            />
          </View>
          <View className="flex mt-2 flex-row justify-center">
            <Text className="font-Stratos">Don't have an account?, </Text>
            <Link href="/(auth)/sign-up">
              <Text className="text-primary underline font-Stratos">
                register
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
