import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { useRouteStore } from "@/store";

type Props = {};

const SignUp = (props: Props) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setRoute } = useRouteStore();
  const handleSignUp = () => {
    setLoading(true);
    setRoute("sign-up");
    console.log("Form Submitted!");
    console.log(form);
    router.push("/(auth)/verify");
    setLoading(false);
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
