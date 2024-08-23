import { Text, View } from "react-native";
import { useUser } from "@/hooks/useUser";
import { Href, Redirect } from "expo-router";
import { useState, useEffect } from "react";

export default function Index() {
  const { getUser } = useUser();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const email = await getUser("user");
      console.log(email);
      setUser({ email: email });
    };
    fetchUser();
    console.log(user);
  });
  console.log(user);
  if (user) {
    return <Redirect href={"/(root)/(tabs)/home" as Href} />;
  }
  return <Redirect href={"/(auth)/welcome" as Href} />;
}
