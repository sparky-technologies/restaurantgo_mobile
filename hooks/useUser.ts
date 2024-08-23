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

  return { getUser, user };
};
