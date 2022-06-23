import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ACCESS_TOKEN_KEY: string = "access_token";

const NaverAuth = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash.includes(ACCESS_TOKEN_KEY)) {
      window.localStorage.setItem(
        ACCESS_TOKEN_KEY,
        location.hash.split("=")[1].split("&")[0] ?? "none",
      );
    }
  }, []);

  return (
    <div>
      <h1>Auth Complete!</h1>
      <h2>
        This page is temporary success site. The token will be sended to the
        server.
      </h2>
      <p>{location.hash}</p>
      <button
        type="button"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NaverAuth;
