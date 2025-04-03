import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage, storage } from "./storage";

type CustomLocation = {
  lattitude: number;
  longitude: number;
  address: string;
} | null;

interface UserStorageProps {
  user: any;
  location: CustomLocation;
  outOfRange: boolean;
  setUser: (data: any) => void;
  setOutOfRange: (data: boolean) => void;
  setLocation: (data: CustomLocation) => void;
  clearData: () => void;
}

export const useUserStore = create<UserStorageProps>()(
  persist(
    (set) => ({
      user: null,
      location: null,
      outOfRange: false,
      setUser: (data) => set({ user: data }),
      setLocation: (data) => set({ location: data }),
      setOutOfRange: (data) => set({ outOfRange: data }),
      clearData: () => set({ user: null, location: null, outOfRange: false }),
    }),
    {
      name: "user-store",
      partialize: (state) => ({
        user: state.user,
      }),
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
