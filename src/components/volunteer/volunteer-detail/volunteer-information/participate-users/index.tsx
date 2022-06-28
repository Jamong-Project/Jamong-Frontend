import React from "react";
import { Avatar, Chip } from "@mui/material";
import { ParticipateUsersContainer } from "./styles";

export type ParticipateUsersProps = {
  users: {
    id: string;
    name: string;
    image: string;
  }[];
};

const ParticipateUsers = ({ users }: ParticipateUsersProps) => {
  return (
    <ParticipateUsersContainer>
      {users.map((user) => (
        <Chip
          avatar={<Avatar alt={user.name} src={user.image} />}
          key={user.id}
          label={user.name}
        />
      ))}
    </ParticipateUsersContainer>
  );
};

export default ParticipateUsers;
