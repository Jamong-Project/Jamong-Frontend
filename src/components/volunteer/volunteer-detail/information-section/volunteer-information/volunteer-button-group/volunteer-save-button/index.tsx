import React, { useEffect, useState } from "react";
import { Button, Icon } from "@mui/material";
import useLoginStore from "../../../../../../../stores/login-store";
import useVolunteerStore from "../../../../../../../stores/volunteer-store";
import Client from "../../../../../../../utils/client";

export type VolunteerSaveButtonProps = {
  postId: string;
};

const VolunteerSaveButton = ({ postId }: VolunteerSaveButtonProps) => {
  const { isLoggedIn, user } = useLoginStore();
  const { volunteer } = useVolunteerStore();

  const [userSaveState, setUserSaveState] = useState<
    "init" | "available" | "saved" | "loggedOut"
  >("init");

  useEffect(() => {
    if (!isLoggedIn || !user) {
      setUserSaveState("loggedOut");
      return;
    }

    if (!volunteer) return;

    const favoriteUsers: String[] = volunteer.favoriteUsers.map(
      ({ naverId }) => naverId,
    );

    setUserSaveState(
      favoriteUsers.includes(user.naverId) ? "saved" : "available",
    );
  }, [volunteer, user, isLoggedIn]);

  const handleClick = () => {
    if (!user) return;

    Client.post(`/v1/volunteers/${postId}/favorites`, {
      email: user.email,
    })
      .then(() => {
        if (userSaveState === "init" || userSaveState === "loggedOut") return;

        setUserSaveState((prev) => (prev === "saved" ? "available" : "saved"));
      })
      .catch((e) => console.log(e));
  };

  return (
    <Button
      variant="outlined"
      sx={{ height: "48px" }}
      disabled={userSaveState !== "available" && userSaveState !== "saved"}
      onClick={handleClick}
    >
      <Icon>
        {userSaveState === "available" ? "favorite_border" : "favorite"}
      </Icon>
    </Button>
  );
};

export default VolunteerSaveButton;
