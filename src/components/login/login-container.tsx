import styled from "@emotion/styled";
import { ArrowBackIos } from "@mui/icons-material";
import { Paper, IconButton, Modal, Button } from "@mui/material";
import React, { useCallback } from "react";
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

const HeaderText = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
`;

const registerTextStyle = {
  fontSize: "12px",
};

const modalStyle = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const LoginContainer = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <>
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
          <HeaderText style={{ whiteSpace: "pre-line" }}>
            {LOGIN_TEXT}
          </HeaderText>
          <Link
            to="/"
            style={{
              height: "48px",
              margin: "16px 0",
              backgroundColor: "#03C75B",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="/images/naver-login.png" alt="naver-login" height={48} />
          </Link>
          <RegisterContainer>
            <span style={registerTextStyle}>아직 아이디가 없나요?</span>
            <Button
              sx={{
                ...registerTextStyle,
                color: "var(--color-primary)",
                fontWeight: "bold",
              }}
              onClick={handleOpenModal}
            >
              회원가입
            </Button>
          </RegisterContainer>
        </Paper>
      </LoginItemContainer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper variant="outlined" sx={modalStyle}>
          <HeaderText>자몽 회원가입</HeaderText>
          <Link to="/">
            <img src="/images/naver-login.png" alt="naver-login" height={48} />
          </Link>
          <Button variant="outlined" sx={{ height: "48px" }}>
            취소
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default LoginContainer;
