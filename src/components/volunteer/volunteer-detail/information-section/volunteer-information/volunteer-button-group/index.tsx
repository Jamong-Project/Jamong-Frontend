import React from "react";
import { ButtonContainer } from "./styles";
import VolunteerApplyButton from "./volunteer-apply-button";
import VolunteerSaveButton from "./volunteer-save-button";

const VolunteerButtonGroup = () => {
  return (
    <ButtonContainer>
      <VolunteerApplyButton />
      <VolunteerSaveButton />
    </ButtonContainer>
  );
};

export default VolunteerButtonGroup;
