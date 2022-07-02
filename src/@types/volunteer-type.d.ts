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

  declare type VolunteerGetDetailType = {
    id: string;
    title: string;
    content: string;
    pictures: {
      url: string;
    }[];
    volunteerDate: number;
    applicationDate: number;
    maximumPeople: number;
    currentPeople: number;
    applicants: User[];
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
