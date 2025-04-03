import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage, storage } from "./storage";

type CustomLocation = {
  lattitude: number;
  longitude: number;
  address: string;
  heading: number;
} | null;

interface RiderStoreProps {
  user: any;
  location: CustomLocation;
  onDuty: boolean;
  setUser: (data: any) => void;
  setOnDuty: (data: boolean) => void;
  setLocation: (data: CustomLocation) => void;
  clearData: () => void;
}

export const useRiderStore = create<RiderStoreProps>()(
  persist(
    (set) => ({
      user: null,
      location: null,
      onDuty: false,
      setUser: (data) => set({ user: data }),
      setLocation: (data) => set({ location: data }),
      setOnDuty: (data) => set({ onDuty: data }),
      clearData: () => set({ user: null, location: null, onDuty: false }),
    }),
    {
      name: "rider-store",
      partialize: (state) => ({
        user: state.user, 
      }),
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
