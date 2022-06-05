import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { VolunteerCardItem } from "../models";

export type VolunteerCardProps = {
  volunteer: VolunteerCardItem;
};

const VolunteerCard: React.FC<VolunteerCardProps> = ({ volunteer }) => {
  const percentage = (current: number) =>
    (current / volunteer.maximumPerson) * 100;

  return (
    <Card sx={{ width: "100%", maxWidth: 345 }} variant="outlined">
      <CardMedia
        component="img"
        height="150"
        image={volunteer.picture}
        alt={volunteer.title}
      />
      <CardContent>
        <Typography component="div">
          {volunteer.applicationDate.toLocaleDateString()} -{" "}
          {volunteer.volunteerDate.toLocaleDateString()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {volunteer.title}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          {volunteer.currentVolunteers} / {volunteer.maximumPerson}
        </Typography>
        {volunteer.currentVolunteers >= volunteer.maximumPerson ||
        volunteer.volunteerDate.getTime() > Date.now() ? (
          <Button variant="contained" disableElevation>
            신청하기
          </Button>
        ) : (
          <Button variant="contained" disabled>
            종료
          </Button>
        )}
      </CardActions>
      <LinearProgress
        variant="determinate"
        value={percentage(volunteer.currentVolunteers)}
      />
    </Card>
  );
};

export default VolunteerCard;
