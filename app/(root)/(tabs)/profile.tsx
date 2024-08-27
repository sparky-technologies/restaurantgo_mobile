import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "@/components/Nav";
import { icons, images } from "@/constants";
import Index from "@/app";
import { Href, router } from "expo-router";

type Props = {};

const Profile = (props: Props) => {
  const profileContent = [
    {
      title: "Password",
      icon: icons.lock,
      route: "/password-change",
      description: "Change your default password once a month",
    },
    {
      title: "Help",
      icon: icons.help,
      route: "/help",
      description: "Contact support for any of your complaints",
    },
    {
      title: "Address",
      icon: icons.world,
      route: "/address",
      description: "Change and add your delivery address",
    },
    {
      title: "Logout",
      icon: icons.logout,
      route: "/(auth)/sign-in",
      description: "Logout from your account",
    },
  ];
  const handleProfileContentAction = (title: string, route: string) => {
    if (title !== "Logout") {
      router.push(route as Href);
    } else {
      Alert.alert("Log out", "Are you sure you want to log out?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            router.push(route as Href);
          },
        },
      ]);
    }
  };
  return (
    <SafeAreaView>
      <Nav title="Profile" />
      <View className="p-6">
        <View className="flex flex-col">
          <Image
            source={images.profile}
            className="w-[78px] h-[78px] rounded-full"
          />
          <Text className="mt-2 font-StratosSemiBold text-[20px]">
            Ayobami Alaran
          </Text>
          <Text className="text-[14px] font-Stratos">
            Ayobamidele006@gmail.com
          </Text>
        </View>
        {profileContent.map((item, Index) => (
          <TouchableOpacity
            onPress={() => handleProfileContentAction(item.title, item.route)}
          >
            <View className="flex flex-row items-center mt-6 relative">
              {/* Icon div */}

              <View className="mr-2">
                <Image className="" source={item.icon} resizeMode="contain" />
              </View>
              {/* content view */}
              <View className="flex flex-row flex-1">
                <View className="flex flex-col">
                  <Text className="text-[16px] text-primary font-Stratos">
                    {item.title}
                  </Text>
                  <Text className="text-[11px] font-StratosLight">
                    {item.description}
                  </Text>
                </View>
                {/* Arrow icons */}
                <View className="absolute right-0">
                  <Image
                    className=""
                    source={icons.rightArrow}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
