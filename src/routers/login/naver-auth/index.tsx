import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const ACCESS_TOKEN_KEY: string = "access_token";

const NaverAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash.includes(ACCESS_TOKEN_KEY)) {
      window.localStorage.setItem(
        ACCESS_TOKEN_KEY,
        location.hash.split("=")[1].split("&")[0] ?? "none",
      );
    }

    navigate("/");
  }, []);

  return <div />;
};

export default NaverAuth;
