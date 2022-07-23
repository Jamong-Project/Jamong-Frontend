import React from "react";
import styled from "@emotion/styled";
import { Avatar, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useInput } from "../../../../../hooks/use-input";
import useLoginStore from "../../../../../stores/login-store";
import Client from "../../../../../utils/client";

const CommentInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;

  ${({ theme }) => theme.mq.mobile} {
    flex-direction: column;
    gap: 0px;
  }
`;

const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const CommentInput = () => {
  const { isLoggedIn, user } = useLoginStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const comment = useInput("");

  const handleSubmit = () => {
    if (!user || !isLoggedIn) return;

    Client.post(`/v1/volunteers/${id}/comments`, {
      content: comment,
      email: user.email,
    }).then(() => {
      navigate(0);
    });
  };

  return (
    <CommentInputContainer>
      <TextInputContainer>
        <Avatar
          style={{ width: "56px", height: "56px" }}
          src={user?.profileImage}
        />
        <TextField
          label="댓글 작성"
          fullWidth
          value={comment.value}
          onChange={comment.onChange}
        />
      </TextInputContainer>
      <Button
        style={{ minWidth: "200px" }}
        variant="contained"
        disableElevation
        disabled={!isLoggedIn || !user || comment.value.length === 0}
        onClick={handleSubmit}
      >
        등록
      </Button>
    </CommentInputContainer>
  );
};

export default CommentInput;
