import create from "zustand";

type User = {
  profileImage: string;
  name: string;
  role: string;
  email: string;
};

export type LoginStoreType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loginInfo: boolean) => void;
  user?: User;
  setUser: (user: User) => void;
};

const useLoginStore = create<LoginStoreType>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  user: undefined,
  setUser: (user) => set({ user }),
}));

export default useLoginStore;
