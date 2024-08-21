import { useState } from "react";
import { getData } from "@/lib/storage";

interface User {
    email: string;
}

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    const getUser = async (key: string) =>{
        const data = await getData(key);
        if (data) {
            setUser({email: data});
        } else {
            setUser(null);
        }
    }
    getUser("user");
    return { user, getUser };
}
