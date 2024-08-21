import { Text, View } from "react-native";
import { useUser } from "@/hooks/useUser";
import { Href, Redirect } from "expo-router";

export default function Index() {
  const {user, getUser} = useUser();
  if (user) {
    return <Redirect href={"/(root)/(tabs)/home" as Href}/>
  }
  return <Redirect href={"/(auth)/sign-in" as Href}/>
}
