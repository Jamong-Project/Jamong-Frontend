import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useLoginStore from "../../../../../../../stores/login-store";
import useVolunteerStore from "../../../../../../../stores/volunteer-store";
import Client from "../../../../../../../utils/client";

const VOLUNTEER_BUTTON_CIRCULAR_PROGRESS_SIZE: number = 20;

const VolunteerApplyButton = () => {
  const { isLoggedIn, user } = useLoginStore();
  const { volunteer } = useVolunteerStore();

  const [userApplicationState, setUserApplicationState] = useState<
    "init" | "available" | "applied" | "loggedOut"
  >("init");

  const location = useLocation();
  const postId = useMemo(() => location.pathname.split("/")[2], [location]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      setUserApplicationState("loggedOut");
      return;
    }

    if (!volunteer || !user) return;

    const applicantsId: String[] = volunteer.applicants.map(
      ({ naverId }) => naverId,
    );

    setUserApplicationState(
      applicantsId.includes(user.naverId) ? "applied" : "available",
    );
  }, [volunteer, user, isLoggedIn]);

  const handleClick = () => {
    if (!user) return;

    Client.post(`/v1/volunteers/${postId}/apply`, {
      email: user.email,
    }).then(() => {
      navigate(0);
      alert("지원 완료!");
    });
  };

  return (
    <Button
      variant="contained"
      sx={{ width: "100%", height: "48px", flexGrow: 1 }}
      onClick={handleClick}
      disableElevation
      disabled={!isLoggedIn || !user || userApplicationState !== "available"}
    >
      {
        {
          available: "지원하기",
          applied: "지원 완료",
          init: (
            <CircularProgress
              color="inherit"
              size={VOLUNTEER_BUTTON_CIRCULAR_PROGRESS_SIZE}
            />
          ),
          loggedOut: "로그인 필요",
        }[userApplicationState]
      }
    </Button>
  );
};

export default VolunteerApplyButton;
