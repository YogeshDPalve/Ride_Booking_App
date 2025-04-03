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
