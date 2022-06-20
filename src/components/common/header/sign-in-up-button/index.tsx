import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "./styles";

const SignInUpButton = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="text" component={Link} to="/login">
        로그인
      </Button>
      <Divider />
      <Button variant="outlined">회원가입</Button>
    </div>
  );
};

export default SignInUpButton;
