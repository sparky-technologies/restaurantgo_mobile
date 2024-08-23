import { Text, View } from "react-native";
import { useUser } from "@/hooks/useUser";
import { Href, Redirect } from "expo-router";
import { useState, useEffect } from "react";
import { getData } from "@/lib/storage";

interface User {
  email: string;
}
export default function Index() {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  const getUser = async (key: string) => {
    try {
      const data = await getData(key);
      if (data) {
        console.log("This is the data: ", data);
        setUser({ email: data });
      } else {
        console.log(data);
        // TODO: change this later, this is for dev
        // setUser(null);
        setUser({ email: "ayobamidele006@gmail.com" } as User);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser("user");
    setMounted(true);
  });
  if (!mounted) return;
  console.log(user);
  if (user) {
    return <Redirect href={"/(root)/(tabs)/home" as Href} />;
  }
  return <Redirect href={"/(auth)/welcome" as Href} />;
}
