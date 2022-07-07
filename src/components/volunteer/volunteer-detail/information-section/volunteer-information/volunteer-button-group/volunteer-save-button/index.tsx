import { Button, Icon } from "@mui/material";
import React from "react";

const VolunteerSaveButton = () => {
  return (
    <Button variant="outlined" sx={{ height: "48px" }}>
      <Icon>favorite_border</Icon>
    </Button>
  );
};

export default VolunteerSaveButton;
