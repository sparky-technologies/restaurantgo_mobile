import { useState, useEffect } from "react";
import { getData } from "@/lib/storage";

interface User {
  email: string;
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  var userData: User = { email: "ayobamidele006@gmail.com" };

  const getUser = async (key: string) => {
    try {
      const data = await getData(key);
      if (data) {
        userData = {
          email: data,
        };
      } else {
        console.log(data);
        // TODO: change this later, this is for dev
        userData = { email: "ayobamidele006@gmail.com" };
        setUser((prev) => ({
          ...prev,
          ...{ email: "ayobamidele006@gmail.com" },
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser("user");
  }, []);

  console.log(user);
  return { getUser, user };
};
