import styled from "@emotion/styled";
import { ArrowBackIos } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const LOGIN_TEXT = "간편하게 예약하는\n자몽 봉사";

const LoginItemContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 432px;
  justify-content: center;
  margin-bottom: 16px;
`;

const RegisterContainer = styled.div`
  display: flex;
  margin: auto 0 0 auto;
  align-items: baseline;
`;

const RegisterText = styled.span`
  font-size: 12px;
`;

const LoginContainer = () => {
  const navigate = useNavigate();

  return (
    <LoginItemContainer>
      <LoginHeader>
        <Logo width={42} height={42} />
        <IconButton
          sx={{ position: "absolute", left: 0 }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIos />
        </IconButton>
      </LoginHeader>
      <Paper
        variant="outlined"
        sx={{
          width: 400,
          height: 240,
          display: "flex",
          flexDirection: "column",
          padding: "24px 16px",
        }}
      >
        <h2 style={{ whiteSpace: "pre-line", marginTop: 0 }}>{LOGIN_TEXT}</h2>
        <Link to="/" style={{ margin: "16px auto 0 auto" }}>
          <img src="/images/naver-login.png" alt="naver-login" height={48} />
        </Link>
        <RegisterContainer>
          <RegisterText>아직 아이디가 없나요?</RegisterText>
          <RegisterText
            style={{
              color: "var(--color-primary)",
              fontWeight: "bold",
              marginLeft: "4px",
            }}
          >
            회원가입
          </RegisterText>
        </RegisterContainer>
      </Paper>
    </LoginItemContainer>
  );
};

export default LoginContainer;
