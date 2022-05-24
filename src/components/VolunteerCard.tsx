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

export type VolunteerCardProps = {
  volunteerName: string;
  description: string;
  image: string;
  startDate: Date;
  endDate: Date;
  maxVolunteers: number;
  currentVolunteers: number;
};

const VolunteerCard: React.FC<VolunteerCardProps> = ({
  volunteerName,
  description,
  image,
  startDate,
  endDate,
  maxVolunteers,
  currentVolunteers,
}) => {
  const percentage = (current: number) => (current / maxVolunteers) * 100;

  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={volunteerName}
      />
      <CardContent>
        <Typography component="div">
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {volunteerName}
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
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          {currentVolunteers} / {maxVolunteers}
        </Typography>
        {currentVolunteers >= maxVolunteers ||
        endDate.getTime() > Date.now() ? (
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
        value={percentage(currentVolunteers)}
      />
    </Card>
  );
};

export default VolunteerCard;
