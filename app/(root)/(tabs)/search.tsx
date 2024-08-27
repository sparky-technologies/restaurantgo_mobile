import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { icons, data } from "@/constants";
import FoodCard from "@/components/FoodCard";
import { router } from "expo-router";

type Props = {};

const Search = (props: Props) => {
  const cats = ["Restaurants", "Meals", "Drinks", "Pizza", "Burger", "Chicken"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleCategoryPress = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <SafeAreaView>
      <Nav title="Search" />
      <View className="px-6">
        <View className="flex flex-row w-full justify-start p-1 items-center relative bg-neutral-100 rounded-[20px] border-[1px] border-primary">
          <Image source={icons.search} className="w-6 h-6 ml-4" />
          <TextInput
            placeholder="Search for delicious meal around you"
            className="px-2 py-2 text-[11px] flex-1 font-Stratos"
          />
        </View>
        {/* Category list */}
      </View>
      <View className="p-6">
        <FlatList
          data={cats}
          keyExtractor={(item) => item}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              className={`${activeIndex === index ? "bg-primary " : "bg-transparent border-gray-400 border-[1px]"} rounded-[4px] mr-2`}
              onPress={() => handleCategoryPress(index)}
            >
              <View>
                <Text
                  className={`text-[12px] text-center px-4 py-2 font-Stratos ${
                    activeIndex === index ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {item}
                </Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
      {/* Product list */}
      <View className="my-3 flex pl-2 flex-row items-center justify-center">
        <View>
          {loading ? (
            <ActivityIndicator size={25} color="#D33237" />
          ) : data.length > 0 ? (
            <FlatList
              data={data}
              numColumns={2}
              keyExtractor={(item) => item.id as any}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => router.push(`/food/${item.id}`)}
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
          ) : (
            <Text className="text-lg font-JakartaBold text-primary ml-2">
              Showing 1-12 of 24 results
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
