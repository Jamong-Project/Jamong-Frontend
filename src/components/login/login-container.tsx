import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const LoginItemContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginContainer = () => {
  return (
    <LoginItemContainer>
      <Logo width={42} height={42} />
      <Paper variant="outlined" sx={{ width: 400, height: 400 }}>
        <img src="/images/naver-login.png" alt="naver-login" height={52} />
      </Paper>
    </LoginItemContainer>
  );
};

export default LoginContainer;
