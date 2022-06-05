import React from "react";
import { useLocation } from "react-router";

const NaverLogin = () => {
  const location = useLocation();

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

export default NaverLogin;
