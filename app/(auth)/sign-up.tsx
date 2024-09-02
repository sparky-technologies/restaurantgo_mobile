import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { useRouteStore, useEmailStore } from "@/store";
import { register, RegisterPayload } from "@/api/auth";
import CustomModal from "@/components/CustomModal";
import CustomErrorModal from "@/components/CustomErrorModal";

type Props = {};

const SignUp = (props: Props) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { setRoute } = useRouteStore();
  const { setEmail } = useEmailStore();

  const registerUser = async (payload: RegisterPayload) => {
    try {
      setLoading(true);
      const response = await register(payload);
      if (response.status === "success") {
        console.log("User registered successfully!");
        // Navigate to verification screen
        setEmail(payload.email);
        setRoute("sign-up");
        router.push("/(auth)/verify");
      } else if (response.status_code === 400) {
        console.log(response.message);
        const errors = response.message;
        setErrors({
          username: errors.username || "",
          email: errors.email || "",
          password: errors.password1 || "",
          confirmPassword: errors.password2 || "",
        });
        console.log("Error registering user:", response.message);
      } else {
        console.log("Error registering user:", response.status_code);
        setErrorMessage(response.message);
        setShowErrorModal(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleSignUp = () => {
    registerUser(form);
  };
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  return (
    <SafeAreaView className="p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-col justify-start">
          <Text className="font-StratosBold text-[24px]">
            Good Food is your {"\n"}friend, eat well!
          </Text>
          <Text className="text-[16px] font-Stratos">
            Welcome to Chicken Hut
          </Text>
        </View>
        <InputField
          label={"Username"}
          placeholder="Ayobami"
          value={form.username}
          onChangeText={(username) =>
            setForm({
              ...form,
              username,
            })
          }
        />
        {errors.username && (
          <Text className="font-StratosSemiBold text-[10px] text-primary">
            {errors.username}
          </Text>
        )}

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
        <InputField
          label={"Confirm Password"}
          placeholder="somepassword"
          secureTextEntry={secureTextEntry}
          setSecureTextEntry={setSecureTextEntry}
          icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
          value={form.confirmPassword}
          onChangeText={(password: string) =>
            setForm({
              ...form,
              confirmPassword: password,
            })
          }
        />
        {errors.confirmPassword && (
          <Text className="font-StratosSemiBold text-[10px] text-primary">
            {errors.confirmPassword}
          </Text>
        )}
        <View className="mt-8">
          <View className="flex items-center justify-center">
            <CustomButton
              title="Sign up"
              loading={loading}
              handlePress={handleSignUp}
            />
          </View>
          <View className="flex mt-2 flex-row justify-center">
            <Text className="font-Stratos">Already have an account?, </Text>
            <Link href="/(auth)/sign-in">
              <Text className="text-primary underline font-Stratos">Login</Text>
            </Link>
          </View>
        </View>
        <CustomErrorModal
          showModal={showErrorModal}
          btnTitle="Close"
          handleDone={() => setShowErrorModal(false)}
          text={errorMessage}
          title="Failed"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
