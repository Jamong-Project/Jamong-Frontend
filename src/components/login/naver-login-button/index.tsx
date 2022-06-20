import React from "react";

const START_WITH_NAVER = "네이버로 시작하기";

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  border: "none",
  padding: "0.6em 1em",
  borderRadius: "0.25em",
  backgroundColor: "#03C75B",
  color: "white",
  cursor: "pointer",
};

export type NaverLoginButtonProps = {
  width: number | string;
  height: number | string;
  onClick: () => void;
};

const NaverLoginButton = ({
  width,
  height,
  onClick,
}: NaverLoginButtonProps) => {
  return (
    <button
      type="button"
      style={{ ...buttonStyle, width, height }}
      onClick={onClick}
    >
      <img
        src="/images/naver-login.png"
        alt="naver-login"
        style={{ height, marginRight: "0.7em" }}
      />
      <span style={{ fontWeight: "bold" }}>{START_WITH_NAVER}</span>
    </button>
  );
};

export default NaverLoginButton;
