import { useState, useEffect } from "react";
import { getData } from "@/lib/storage";
import { useUserStore, useTokenStore } from "@/store";

interface User {
  email: string;
}

export const useUser = () => {
  const { user, setUser } = useUserStore();
  const { token, setToken } = useTokenStore();

  const getUser = async (key: string) => {
    try {
      const data = await getData(key);
      console.log("This is the token data: ", data);
      if (data) {
        const now = Date.now();
        const parsedData = JSON.parse(data);
        console.log(now, parsedData.expiresAt);
        if (parseInt(parsedData.expiresAt) > now) {
          console.log("I got here!");
          setToken(parsedData.value);
        }
        console.log("This is the data: ", data);
      } else {
        console.log(data);
        // TODO: change this later, this is for dev
        setUser(null);
        setToken(null);
        // setUser({ email: "ayobamidele006@gmail.com" } as User);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { getUser, token };
};
