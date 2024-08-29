import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import { router } from "expo-router";

type Props = {};

const FundAccountCard = (props: Props) => {
  const [form, setForm] = useState({
    amount: "",
    card_number: "",
    expiry_month: "",
    expiry_year: "",
    pin: "",
    cvv: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleProceed = () => {
    // TODO: Implement card payment logic
    console.log("Proceed with payment");
    console.log(form);
    setShowModal(true);
  };

  const handleDone = () => {
    router.push("/(root)/(tabs)/home");
    setShowModal(false);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Nav title="Fund With Card" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        className="p-6 h-full"
      >
        <View className="flex">
          <View className="w-[311px] h-[202px] p-2 bg-[#03045E] rounded-[4px]">
            {/* Heading */}
            <View className="flex flex-row justify-between">
              <Text className="text-white">Debit</Text>
              <Image source={images.bankLogo} resizeMode="contain" />
            </View>
            {/* panel div */}
            <View className="flex mt-6 flex-row justify-between">
              <Image source={images.panel} resizeMode="contain" />
              <View></View>
            </View>
            {/* Card number section */}
            <View className="flex flex-row justify-between mt-2">
              <Text className="text-white font-StratosBold text-[24px]">
                1234
              </Text>
              <Text className="text-white font-StratosBold text-[24px]">
                1234
              </Text>
              <Text className="text-white font-StratosBold text-[24px]">
                1234
              </Text>
              <Text className="text-white font-StratosBold text-[24px]">
                1234
              </Text>
            </View>
            {/* Expiration section */}
            <View className="flex flex-row gap-3">
              <Text className="text-white font-StratosLight text-[12px]">
                VALID {"\n"}
                THRU
              </Text>
              <View className="flex justify-center items-center">
                <Text className="text-white font-StratosLight text-[14px]">
                  12 / 24
                </Text>
              </View>
            </View>
            <View className="flex flex-row mt-2 justify-between">
              <Text className="text-white font-StratosMedium text-[16px]">
                CIROMA CHINYERE ADEKUNLE
              </Text>
              <Image source={images.visa} resizeMode="contain" />
            </View>
          </View>
          {/* Inputs */}
          <View className="mt-4 flex flex-col">
            <InputField
              label="Amount"
              placeholder="2000"
              value={form.amount}
              onChangeText={(amount: string) => setForm({ ...form, amount })}
              keyboardType={"numeric"}
            />
            <InputField
              label="Card Number"
              placeholder="1234545666767"
              value={form.card_number}
              onChangeText={(card_number: string) =>
                setForm({ ...form, card_number: card_number })
              }
              keyboardType={"numeric"}
            />
            <InputField
              label="Expiry Month"
              placeholder="04"
              value={form.expiry_month}
              onChangeText={(expiry_month: string) =>
                setForm({ ...form, expiry_month: expiry_month })
              }
              keyboardType={"numeric"}
            />
            <InputField
              label="Expiry Year"
              placeholder="2024"
              value={form.expiry_year}
              onChangeText={(expiry_year: string) =>
                setForm({ ...form, expiry_year: expiry_year })
              }
              keyboardType={"numeric"}
            />
            <InputField
              label="CVV"
              placeholder="234"
              value={form.cvv}
              onChangeText={(cvv: string) => setForm({ ...form, cvv: cvv })}
              keyboardType={"numeric"}
            />
            <InputField
              label="PIN"
              placeholder="1234"
              value={form.pin}
              onChangeText={(pin: string) => setForm({ ...form, pin: pin })}
              keyboardType={"numeric"}
            />
          </View>
        </View>
        <View className="my-10">
          <CustomButton
            title="Proceed"
            loading={false}
            handlePress={handleProceed}
          />
        </View>
        <CustomModal
          showModal={showModal}
          btnTitle="Return Home"
          text="You've added money to your wallet and it is now time to buy our delicious meals, Let's server you!"
          handleDone={handleDone}
          title="Fund Successful"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FundAccountCard;
