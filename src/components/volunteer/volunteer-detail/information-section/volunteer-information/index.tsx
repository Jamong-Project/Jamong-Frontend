import React from "react";
import { VolunteerGetDetailType } from "volunteer-type";
import { Divider } from "@mui/material";
import { getFullDateString } from "../../../../../utils";
import ParticipateUsers from "./participate-users";
import {
  DateContainer,
  DateInfoItem,
  DateItem,
  TitleContainer,
  VolunteerInformationContainer,
} from "./styles";
import VolunteerButtonGroup from "./volunteer-button-group";

export type VolunteerInformationProps = {
  volunteer: VolunteerGetDetailType;
};

const VolunteerInformation = ({ volunteer }: VolunteerInformationProps) => {
  return (
    <VolunteerInformationContainer>
      <TitleContainer>{volunteer.title}</TitleContainer>
      <Divider />
      <DateContainer>
        <DateItem>
          <DateInfoItem>신청 시작일 - </DateInfoItem>
          {getFullDateString(volunteer.applicationDate)}
        </DateItem>
        <DateItem>
          <DateInfoItem>봉사 시작일 - </DateInfoItem>
          {getFullDateString(volunteer.volunteerDate)}
        </DateItem>
      </DateContainer>
      <ParticipateUsers users={volunteer.applicants} />
      <VolunteerButtonGroup />
    </VolunteerInformationContainer>
  );
};

export default VolunteerInformation;
