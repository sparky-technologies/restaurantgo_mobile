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

export const useRouteStore = create<StoreProps>((set) => ({
  route: "sign-up",
  setRoute: ({ route }: { route: string }) => {
    set(() => ({
      route: route,
    }));
  },
}));

export const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  setUser: ({ user }: { user: any }) => {
    set(() => ({
      user: user,
    }));
  },
}));

export const useEmailStore = create<EmailStoreProps>((set) => ({
  email: "",
  setEmail: ({ email }: { email: string }) => {
    set(() => ({
      email: email,
    }));
  },
}));
