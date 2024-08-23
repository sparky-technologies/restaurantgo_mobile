import { useState, useEffect } from "react";
import { getData } from "@/lib/storage";

interface User {
  email: string;
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async (key: string) => {
    try {
      const data = await getData(key);
      if (data) {
        return data;
      } else {
        // TODO: change this later, this is for dev
        return "ayobamidele006@gmail.com";
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   useEffect(() => {
  //     getUser("key").then((email) => {
  //       console.log(email);
  //       setUser({ email: email as string });
  //     });
  //   }, []);

  //   useEffect(() => {
  //     console.log(user);
  //   }, [user]);

  //   console.log(user);
  return { getUser };
};
