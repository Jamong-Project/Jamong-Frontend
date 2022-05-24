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
    (current / volunteer.maxVolunteers) * 100;

  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardMedia
        component="img"
        height="150"
        image={volunteer.image}
        alt={volunteer.volunteerName}
      />
      <CardContent>
        <Typography component="div">
          {volunteer.startDate.toLocaleDateString()} -{" "}
          {volunteer.endDate.toLocaleDateString()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {volunteer.volunteerName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {volunteer.description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          {volunteer.currentVolunteers} / {volunteer.maxVolunteers}
        </Typography>
        {volunteer.currentVolunteers >= volunteer.maxVolunteers ||
        volunteer.endDate.getTime() > Date.now() ? (
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
