import { Text, View } from "react-native";
import { useUser } from "@/hooks/useUser";
import { Href, Redirect } from "expo-router";
import { useState, useEffect } from "react";

export default function Index() {
  // const [user, setUser] = useState<User | null>(null);
  const { getUser, user } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    getUser("user");
    setMounted(true);
  }, [mounted]);
  if (!mounted) return;
  if (user) {
    return <Redirect href={"/(root)/(tabs)/home" as Href} />;
  }
  return <Redirect href={"/(auth)/welcome" as Href} />;
}
