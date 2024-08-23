import { create } from "zustand";

interface StoreProps {
  route: string;
  setRoute: any;
}

export const useRouteStore = create<StoreProps>((set) => ({
  route: "sign-up",
  setRoute: ({ route }: { route: string }) => {
    set(() => ({
      route: route,
    }));
  },
}));

export const useUserStore = create<any>((set) => ({
  user: null,
  setUser: ({ user }: { user: any }) => {
    set(() => ({
      user: user,
    }));
  },
}));
