export type VolunteerGetType = {
  id: string;
  title: string;
  picture: {
    url: string;
  };
  volunteerDate: number;
  applicationDate: number;
  maximumPeople: number;
  currentPeople: number;
};
