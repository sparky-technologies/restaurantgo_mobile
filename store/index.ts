import { create } from "zustand";

interface StoreProps {
  route: string;
  setRoute: any;
}

interface UserStoreProps {
  user: any;
  setUser: any;
}

interface EmailStoreProps {
  email: string;
  setEmail: any;
}

interface OtpStore {
  otp: string;
  setOTP: (otp: string) => void;
}

export const useRouteStore = create<StoreProps>((set) => ({
  route: "sign-up",
  setRoute: (route: string) => {
    set({ route });
  },
}));

export const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  setUser: (user: any) => {
    set({ user: user });
  },
}));

export const useEmailStore = create<EmailStoreProps>((set) => ({
  email: "",
  setEmail: (email: string) => {
    set({ email });
  },
}));

export const useOtpStore = create<OtpStore>((set) => ({
  otp: "",
  setOTP: (otp: string) => {
    set({ otp });
  },
}));
