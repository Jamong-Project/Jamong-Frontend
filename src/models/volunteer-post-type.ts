export type VolunteerPostType = {
  title: string;
  content: string;
  volunteerDate: number;
  applicationDate: number;
  maximumPeople: number;
  currentPeople?: number;
};
