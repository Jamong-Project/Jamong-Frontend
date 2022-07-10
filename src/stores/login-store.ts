import create from "zustand";

type User = {
  naverId: string;
  profileImage: string;
  name: string;
  role: string;
  email: string;
};

export type LoginStoreType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLogin: boolean) => void;
  user?: User;
  setUser: (user?: User) => void;
};

const useLoginStore = create<LoginStoreType>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
  user: undefined,
  setUser: (user) => set({ user }),
}));

export default useLoginStore;
