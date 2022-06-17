import { ArrowBackIos } from "@mui/icons-material";
import { Paper, IconButton, Modal, Button } from "@mui/material";
import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import useNaverLogin from "../../../hooks/use-naver-login";
import NaverLoginButton from "../naver-login-button";
import {
  HeaderText,
  LoginHeader,
  LoginItemContainer,
  RegisterContainer,
} from "./styles";

const LOGIN_TEXT = "간편하게 예약하는\n자몽 봉사";

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
  const naverLoginRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleNaverLogin = useCallback(() => {
    if (naverLoginRef.current) {
      (naverLoginRef.current.children[0] as HTMLButtonElement).click();
    }
  }, []);
  useNaverLogin("green", 5, 48);

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
          <div
            ref={naverLoginRef}
            id="naverIdLogin"
            style={{ display: "none" }}
          />
          <NaverLoginButton
            width="100%"
            height="60px"
            onClick={handleNaverLogin}
          />
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
          <NaverLoginButton
            width="240px"
            height="48px"
            onClick={handleNaverLogin}
          />
          <Button
            variant="outlined"
            sx={{ height: "48px", marginTop: "8px" }}
            onClick={handleCloseModal}
          >
            취소
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default LoginContainer;
