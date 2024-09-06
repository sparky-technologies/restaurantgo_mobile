import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import { router } from "expo-router";
import { changePassword, ChangePasswordPayload } from "@/api/user";
import CustomErrorModal from "@/components/CustomErrorModal";

type Props = {};

const PasswordChange = (props: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [form, setForm] = useState({
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const handleSavePssword = () => {
    const passwordChange = async () => {
      setLoading(true);
      const response = await changePassword(form);
      console.log(response);
      if (response.status === "sucess") {
        setShowModal(true);
        setLoading(false);
      } else {
        setLoading(false);
        setShowErrorModal(true);
        setErrorMessage(response.message);
      }
    };
    passwordChange();
  };
  const handleDone = () => {
    router.push("/profile");
  };
  const handleClose = () => {
    setShowErrorModal(false);
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
            onChangeText={(password) =>
              setForm({
                ...form,
                password,
              })
            }
          />
          <InputField
            label="Retype New Password"
            placeholder="ayojsuu33"
            icon={secureTextEntry ? icons.eyes : icons.eyeOpen}
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
          />
        </View>

        <View className="mt-5  flex justify-center items-center mb-10">
          <CustomButton
            title="Save"
            loading={loading}
            handlePress={handleSavePssword}
          />
        </View>
        <CustomModal
          title="Successful"
          showModal={showModal}
          text="Your password has been successfully changed!"
          handleDone={handleDone}
          btnTitle="Continue"
        />
        <CustomErrorModal
          btnTitle="Close"
          title="Failed"
          showModal={showErrorModal}
          handleDone={handleClose}
          text={errorMessage}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordChange;
