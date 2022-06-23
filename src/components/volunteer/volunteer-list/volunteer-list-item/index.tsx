import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { VolunteerGetType } from "volunteer-type";
import { timestampToDate } from "../../../../utils";

const VOLUNTEER_DATE: string = "봉사 날짜";
const APPLICATION_DATE: string = "신청 날짜";

const titleStyle = {
  height: "48px",
  lineHeight: "24px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: "bold",
  marginBottom: "16px",
};

const dateStyle = {
  fontSize: "14px",
};

export type VolunteerListItemProps = {
  volunteer: VolunteerGetType;
};
const VolunteerListItem: React.FC<VolunteerListItemProps> = ({ volunteer }) => {
  const percentage = (current: number) =>
    (current / volunteer.maximumPeople) * 100;

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "345px",
        textDecoration: "none",
      }}
      variant="outlined"
      component={Link}
      to={`/volunteer/${volunteer.id}`}
    >
      <CardMedia
        component="img"
        height="150"
        image={volunteer.picture?.url}
        alt={volunteer.title}
      />
      <CardContent>
        <Typography gutterBottom component="div" sx={titleStyle}>
          {volunteer.title}
        </Typography>
        <Typography component="div" sx={dateStyle}>
          <span style={{ fontWeight: "bold" }}>{VOLUNTEER_DATE}: </span>
          {timestampToDate(volunteer.volunteerDate).toLocaleDateString()}
        </Typography>
        <Typography component="div" sx={dateStyle}>
          <span style={{ fontWeight: "bold" }}>{APPLICATION_DATE}: </span>
          {timestampToDate(volunteer.applicationDate).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <LinearProgress
          sx={{ flexGrow: 1 }}
          variant="determinate"
          value={percentage(volunteer.currentPeople)}
        />
        <Typography
          sx={{
            marginLeft: "8px",
            fontSize: "12px",
            color: "var(--color-primary-text)",
          }}
        >
          {volunteer.currentPeople} / {volunteer.maximumPeople}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default VolunteerListItem;
