import { Card, CardMedia } from "@mui/material";
import React from "react";

const SmallVolunteerCard = () => {
  return (
    <Card sx={{ width: 345, margin: "16px" }}>
      <CardMedia
        component="img"
        height="200"
        image="https://source.unsplash.com/random"
        alt="volunteer"
      />
    </Card>
  );
};

export default SmallVolunteerCard;
