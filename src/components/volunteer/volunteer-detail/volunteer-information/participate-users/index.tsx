import React from "react";
import styled from "@emotion/styled";
import { Avatar, Chip } from "@mui/material";

const ParticipateUsersContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.divider};
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  max-height: 200px;
  margin-bottom: 16px;
  gap: 8px;
  overflow-y: scroll;
`;

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
