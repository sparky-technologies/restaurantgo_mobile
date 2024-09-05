import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import { icons, images, data } from "@/constants";
import FoodCard from "@/components/FoodCard";
import { Href, router } from "expo-router";
import ReactNativeModal from "react-native-modal";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getUserDetails } from "@/api/user";

type Props = {};

const Home = (props: Props) => {
  const [showBalance, setShowBalance] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(false);

  const fetchUser = async () => {
    setProfileLoading(true);
    const response = await getUserDetails();
    console.log(response);
    if (response.status === "success") {
      setProfileLoading(false);
      setUserDetails(response.data);
    } else {
      setProfileLoading(false);
      console.log(response.message);
    }
  };

  useEffect(() => {
    fetchUser();
    console.log(userDetails);
  }, []);
  const balance = 23000;
  const handleDone = () => {
    console.log("Done!");
    setShowModal(false);
  };
  const handleAddFundsPress = () => {
    console.log("Funds Added");
    setShowModal(true);
    // router.push("/(root)/fund-account-card" as Href);
  };
  const handleCardPress = () => {
    console.log("Card Selected");
    setShowModal(false);
    router.push("/(root)/fund-account-card" as Href);
  };
  const handleTransferPress = () => {
    console.log("Transfer Selected");
    setShowModal(false);
    router.push("/(root)/fund-account-transfer" as Href);
  };
  const handleShowBalancePress = () => {
    setShowBalance(!showBalance);
  };
  const cancelModal = () => {
    setShowModal(false);
  };
  const categories = [
    {
      name: "Pizza",
      icon: images.pizza,
      id: 1,
    },
    {
      name: "Burger",
      icon: images.bugger,
      id: 2,
    },
    {
      name: "Drinks",
      icon: images.drinks,
      id: 3,
    },
    {
      name: "Chicken",
      icon: images.chicken,
      id: 4,
    },
  ];
  return (
    <SafeAreaView className="p-6">
      <Header />
      <View className="flex flex-row items-center justify-between">
        {profileLoading ? (
          <ActivityIndicator size={25} color="#D33237" />
        ) : (
          <View className="mt-5 flex flex-col">
            <Text className="text-[16px] font-StratosMedium">
              Welcome, {userDetails && userDetails.username}
            </Text>
            <View className="mt-2 flex flex-row">
              <Text>
                {showBalance
                  ? userDetails && userDetails.wallet_balance
                  : "********"}
              </Text>
              <TouchableOpacity
                className="mx-4"
                onPress={handleShowBalancePress}
              >
                <Image
                  source={showBalance ? icons.eyeOpen : icons.eyes}
                  className="w-5 h-5"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View className="mt-2">
          <CustomButton
            title="Add Funds"
            loading={false}
            handlePress={handleAddFundsPress}
            width={90}
            height={40}
            textSize="11"
          />
        </View>
      </View>
      <View className="flex flex-row mt-4 justify-between">
        <View className="flex flex-row w-[260px] justify-start p-2 items-center relative bg-neutral-100 rounded-[20px] border-[1px] border-primary">
          <Image source={icons.search} className="w-6 h-6 ml-4" />
          <TextInput
            placeholder="Search for delicious meal around you"
            className="px-2 py-2 text-[11px] flex-1 font-Stratos"
          />
        </View>
        {/* TODO: Optimize this filter icon to button  */}
        <View className="flex flex-col ms-2">
          <Image source={icons.filter} />
          <Text className="text-sm font-StratosMedium text-center mt-2">
            Filter
          </Text>
        </View>
      </View>

      <View className="w-full mt-4 h-[134px]">
        <Image source={images.banner} resizeMode="contain" />
      </View>
      <View className="mt-4">
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Image
              source={item.icon}
              className="w-[72px] h-[48px] mr-2"
              resizeMode="contain"
              key={item.id}
            />
          )}
        />
      </View>
      <View className="flex flex-row my-3 justify-between">
        <Text className="text-[24px] font-StratosBold">Popular Foods</Text>
        <TouchableOpacity onPress={() => router.push("/search")}>
          <Text className="text-sm font-StratosMedium text-other">
            View all
          </Text>
        </TouchableOpacity>
      </View>
      {/* Food cards list */}
      <View className="mb-[50px]">
        <FlatList
          data={data}
          keyExtractor={(item) => item.id as any}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/food/${item.id}` as Href)}
              key={item.id}
            >
              <FoodCard
                name={item.name}
                price={item.price}
                loading={false}
                image={item.image}
                addToCart={() => console.log("Added to cart")}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <ReactNativeModal
        isVisible={showModal}
        onDismiss={() => setShowModal(false)}
      >
        <View className="flex justify-start flex-col bg-white rounded-2xl min-h-[100px]">
          <View className="flex flex-row p-2 justify-end">
            <TouchableOpacity onPress={cancelModal}>
              <Image source={icons.cancel} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-col px-3 py-2">
            <TouchableOpacity onPress={handleTransferPress}>
              <Text className="text-center text-[20px] font-StratosSemiBold">
                Bank Transfer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCardPress}>
              <Text className="text-center text-[20px] font-StratosSemiBold">
                Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default Home;
