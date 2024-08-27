import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";

type Props = {};

const PasswordChange = (props: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSavePssword = () => {
    console.log("Password Changed");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Nav title="Change Password" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="p-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex">
          <InputField
            label="Current Password"
            placeholder="ayojsuu33"
            icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
          />
          <InputField
            label="New Password"
            placeholder="ayojsuu33"
            icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
          />
          <InputField
            label="Retype New Password"
            placeholder="ayojsuu33"
            icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
          />
        </View>

        <View className="mt-5 mb-10">
          <CustomButton
            title="Save"
            loading={loading}
            handlePress={handleSavePssword}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordChange;
