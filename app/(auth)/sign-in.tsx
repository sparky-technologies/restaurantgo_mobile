import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";

type Props = {};

const SignIn = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    console.log("Login Form submitted");
    console.log(form);
    router.push("/(root)/(tabs)/home");
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
        <View className="flex flex-row justify-end">
          <Text className="font-Stratos">Forgot Password </Text>
          <Link href={"/(auth)/reset-password"}>
            <Text className="text-primary underline font-Stratos">
              Reset here
            </Text>
          </Link>
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
