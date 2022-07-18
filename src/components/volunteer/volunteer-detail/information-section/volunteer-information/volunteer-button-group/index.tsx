import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { ButtonContainer } from "./styles";
import VolunteerApplyButton from "./volunteer-apply-button";
import VolunteerSaveButton from "./volunteer-save-button";

const VolunteerButtonGroup = () => {
  const location = useLocation();
  const postId = useMemo(() => location.pathname.split("/")[2], [location]);

  return (
    <ButtonContainer>
      <VolunteerApplyButton postId={postId} />
      <VolunteerSaveButton postId={postId} />
    </ButtonContainer>
  );
};

export default VolunteerButtonGroup;
