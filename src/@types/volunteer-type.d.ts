declare module "volunteer-type" {
  declare type VolunteerGetType = {
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

  declare type VolunteerPostType = {
    title: string;
    content: string;
    volunteerDate: number;
    applicationDate: number;
    maximumPeople: number;
    currentPeople?: number;
  };
}
