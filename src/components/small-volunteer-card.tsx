/* eslint-disable react/destructuring-assignment */
import styled from "@emotion/styled";
import { Card, CardMedia } from "@mui/material";
import React from "react";
import { VolunteerGetType } from "../@types";

const CardContainer = styled.div`
  position: relative;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0px;
  left: 16px;
  color: white;
  z-index: 1;
`;

export type SmallVolunteerCardProps = {
  cardItem: VolunteerGetType;
};

const SmallVolunteerCard = ({ cardItem }: SmallVolunteerCardProps) => {
  return (
    <Card elevation={0} sx={{ width: 345, margin: "16px" }}>
      <CardContainer>
        <CardContent>
          <h2>{cardItem.title}</h2>
        </CardContent>
        <CardMedia
          component="img"
          height="200"
          image={cardItem.picture?.url}
          alt="volunteer"
          sx={{ filter: "brightness(0.7)" }}
        />
      </CardContainer>
    </Card>
  );
};

export default SmallVolunteerCard;
