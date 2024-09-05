import { baseUrl } from "@/constants";
import { getData } from "@/lib/storage";

export const getUserDetails = async () => {
  try {
    const tokenData = await getData("token");
    const parsedToken = JSON.parse(tokenData);
    const token = parsedToken.value;
    const response = await fetch(`${baseUrl}/users/user-info`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
