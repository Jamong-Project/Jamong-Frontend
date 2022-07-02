import React, { useMemo } from "react";
import { Avatar, Chip } from "@mui/material";
import { EmptyParticipateText, ParticipateUsersContainer } from "./styles";

export type ParticipateUsersProps = {
  users: User[];
};

const ParticipateUsers = ({ users }: ParticipateUsersProps) => {
  const hasChild = useMemo(() => users && users.length > 0, [users]);
  return (
    <ParticipateUsersContainer hasChild={hasChild}>
      {hasChild ? (
        users.map((user) => (
          <Chip
            avatar={<Avatar alt={user.naverId} src={user.profileImage} />}
            key={user.naverId}
            label={user.name}
          />
        ))
      ) : (
        <EmptyParticipateText>아직 지원자가 없어요..🥲</EmptyParticipateText>
      )}
    </ParticipateUsersContainer>
  );
};

export default ParticipateUsers;
