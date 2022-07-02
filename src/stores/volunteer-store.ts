import create from "zustand";
import { VolunteerGetDetailType } from "volunteer-type";

export type VolunteerStoreType = {
  volunteer?: VolunteerGetDetailType;
  setVolunteer: (volunteer?: VolunteerGetDetailType) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const useVolunteerStore = create<VolunteerStoreType>((set) => ({
  volunteer: undefined,
  setVolunteer: (volunteer) => set({ volunteer }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useVolunteerStore;
