import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { images } from "@/constants";
import CartItemCard from "@/components/CartItemCard";
import CustomButton from "@/components/CustomButton";
import { Href, router } from "expo-router";

type Props = {};

const Checkout = (props: Props) => {
  const [total, setTotal] = useState(0);
  const handleUpdate = () => {
    console.log("Updating quantity");
  };
  const calculateTotal = (data: any) => {
    let total = 0;
    data.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const handleCheckout = () => {
    console.log("Checkout initiated");
    router.push("/(root)/order-summary" as Href);
  };
  const cart = useMemo(
    () => [
      {
        name: "Pounded Yam & Egusi Soup",
        price: "4.25",
        image: images.food1,
        description:
          "A delicious and hearty soup made from pounded yam and egusi. It's perfect for a quick breakfast or snack.",
        category: "Soup",
        rating: 4.5,
        id: 1,
        quantity: 2,
      },
      {
        name: "Grilled Chicken Salad",
        price: "8.95",
        image: images.food2,
        description:
          "A flavorful and healthy chicken salad with tomatoes, cucumbers, olives, and a dressing made with grilled chicken breast.",
        category: "Salad",
        rating: 4.8,
        id: 2,
        quantity: 1,
      },
      {
        name: "Grilled Chicken Salad",
        price: "8.95",
        image: images.food2,
        description:
          "A flavorful and healthy chicken salad with tomatoes, cucumbers, olives, and a dressing made with grilled chicken breast.",
        category: "Salad",
        rating: 4.8,
        id: 2,
        quantity: 1,
      },
      {
        name: "Grilled Chicken Salad",
        price: "8.95",
        image: images.food2,
        description:
          "A flavorful and healthy chicken salad with tomatoes, cucumbers, olives, and a dressing made with grilled chicken breast.",
        category: "Salad",
        rating: 4.8,
        id: 2,
        quantity: 1,
      },
      {
        name: "Grilled Chicken Salad",
        price: "8.95",
        image: images.food2,
        description:
          "A flavorful and healthy chicken salad with tomatoes, cucumbers, olives, and a dressing made with grilled chicken breast.",
        category: "Salad",
        rating: 4.8,
        id: 2,
        quantity: 1,
      },
      {
        name: "Grilled Chicken Salad",
        price: "8.95",
        image: images.food2,
        description:
          "A flavorful and healthy chicken salad with tomatoes, cucumbers, olives, and a dressing made with grilled chicken breast.",
        category: "Salad",
        rating: 4.8,
        id: 2,
        quantity: 1,
      },
      {
        name: "Grilled Chicken Salad",
        price: "8.95",
        image: images.food2,
        description:
          "A flavorful and healthy chicken salad with tomatoes, cucumbers, olives, and a dressing made with grilled chicken breast.",
        category: "Salad",
        rating: 4.8,
        id: 2,
        quantity: 1,
      },
    ],
    [],
  );

  useEffect(() => {
    setTotal(calculateTotal(cart));
  }, [cart]);
  console.log(total);
  return (
    <SafeAreaView className="flex-1">
      <Nav title="Cart" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="p-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-grow mb-8">
          {cart.map((item, index) => (
            <CartItemCard
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              handleUpdate={handleUpdate}
            />
          ))}
        </View>
      </ScrollView>
      <View className="p-6">
        <View className="flex flex-row justify-between">
          <Text className="font-StratosMedium text-[20px]">Total</Text>
          <Text className="font-StratosBold text-[20px]">₦{total}</Text>
        </View>
        <View className="my-5">
          <CustomButton
            title="Continue"
            loading={false}
            handlePress={handleCheckout}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
