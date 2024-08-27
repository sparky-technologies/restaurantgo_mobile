import { Tabs } from "expo-router";
import { ImageSourcePropType } from "react-native";
import { Image } from "react-native";
import { images, icons } from "@/constants";

interface TabIconProps {
  focused: boolean;
  source: ImageSourcePropType;
}

const TabIcon = ({ focused, source }: TabIconProps) => (
  <Image
    source={source}
    resizeMode="contain"
    tintColor={focused ? "#EB3134" : "#555555"}
    className={`"w-7 h-7"`}
  />
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#EB3134",
        headerShown: false,
        tabBarStyle: {
          height: 52,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
          marginTop: 0,
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused} source={icons.home} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused} source={icons.search} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused} source={icons.profileNav} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused} source={icons.checkout} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
