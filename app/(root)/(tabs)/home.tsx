import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import { icons, images, data } from "@/constants";
import FoodCard from "@/components/FoodCard";
import { Href, router } from "expo-router";

type Props = {};

const Home = (props: Props) => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = 23000;
  const handleAddFundsPress = () => {
    console.log("Funds Added");
  };
  const handleShowBalancePress = () => {
    setShowBalance(!showBalance);
  };
  const categories = [
    {
      name: "Pizza",
      icon: images.pizza,
    },
    {
      name: "Burger",
      icon: images.bugger,
    },
    {
      name: "Drinks",
      icon: images.drinks,
    },
    {
      name: "Chicken",
      icon: images.chicken,
    },
  ];
  return (
    <SafeAreaView className="p-6">
      <Header />
      <View className="flex flex-row items-center justify-between">
        <View className="mt-5 flex flex-col">
          <Text className="text-[16px] font-StratosMedium">Welcome, Ayo</Text>
          <View className="mt-2 flex flex-row">
            <Text>{showBalance ? balance : "********"}</Text>
            <TouchableOpacity className="mx-4" onPress={handleShowBalancePress}>
              <Image
                source={showBalance ? icons.eyeOpen : icons.eyes}
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
        </View>
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

      <View className="w-full mt-5 h-[134px]">
        <Image source={images.banner} resizeMode="contain" />
      </View>
      <View className="mt-4">
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              source={item.icon}
              className="w-[72px] h-[48px] mr-2"
              resizeMode="contain"
            />
          )}
        />
      </View>
      <View className="flex flex-row my-4 justify-between">
        <Text className="text-[24px] font-StratosBold">Popular Foods</Text>
        <TouchableOpacity>
          <Text className="text-sm font-StratosMedium text-other">
            View all
          </Text>
        </TouchableOpacity>
      </View>
      {/* Food cards list */}
      <View className="mb-10">
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => router.push(`/food/${item.id}` as Href)}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
