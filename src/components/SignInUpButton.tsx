import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;
  margin: 0px 16px 0px 8px;
`;

const SignInUpButton = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="text">로그인</Button>
      <Divider />
      <Button variant="outlined">회원가입</Button>
    </div>
  );
};

export default SignInUpButton;
