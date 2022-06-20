/* eslint-disable react/destructuring-assignment */
import { Card, CardMedia } from "@mui/material";
import React from "react";
import { VolunteerGetType } from "volunteer-type";
import { CardContainer, CardContent } from "./styles";

export type SmallVolunteerCardProps = {
  cardItem: VolunteerGetType;
};

const HomeVolunteerListItem = ({ cardItem }: SmallVolunteerCardProps) => {
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

export default HomeVolunteerListItem;
