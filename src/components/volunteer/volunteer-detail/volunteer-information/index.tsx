import React from "react";
import { VolunteerGetDetailType } from "volunteer-type";
import { Button, Divider, Icon } from "@mui/material";
import { getFullDateString } from "../../../../utils";
import ParticipateUsers from "./participate-users";
import {
  ButtonContainer,
  DateContainer,
  DateInfoItem,
  DateItem,
  TitleContainer,
  VolunteerInformationContainer,
} from "./styles";

export type VolunteerInformationProps = {
  data: VolunteerGetDetailType;
};

const VolunteerInformation = ({ data }: VolunteerInformationProps) => {
  return (
    <VolunteerInformationContainer>
      <TitleContainer>{data.title}</TitleContainer>
      <Divider />
      <DateContainer>
        <DateItem>
          <DateInfoItem>신청 시작일 - </DateInfoItem>
          {getFullDateString(data.applicationDate)}
        </DateItem>
        <DateItem>
          <DateInfoItem>봉사 시작일 - </DateInfoItem>
          {getFullDateString(data.volunteerDate)}
        </DateItem>
      </DateContainer>
      <ParticipateUsers
        users={Array.from(Array(10).keys()).map((item: number) => ({
          id: item.toString(),
          name: `유저${item}`,
          image: "https://via.placeholder.com/150",
        }))}
      />
      <ButtonContainer>
        <Button
          variant="contained"
          sx={{ width: "100%", height: "48px", flexGrow: 1 }}
          disableElevation
        >
          지원하기
        </Button>
        <Button variant="outlined" sx={{ height: "48px" }}>
          <Icon>favorite_border</Icon>
        </Button>
      </ButtonContainer>
    </VolunteerInformationContainer>
  );
};

export default VolunteerInformation;
