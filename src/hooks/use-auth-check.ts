import { useEffect, useRef } from "react";
import { ACCESS_TOKEN_STORAGE_KEY } from "../constants/string";
import useLoginStore from "../stores/login-store";
import Client from "../utils/client";

const useAuthCheck = (): boolean => {
  const loginInfo = useRef<boolean>(false);
  const { setUser, setIsLoggedIn, isLoggedIn, user } = useLoginStore();

  useEffect(() => {
    if (!isLoggedIn || !user) return;

    Client.post("/login", {
      token: localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY),
    })
      .then((res) => {
        setUser(res.data);
        loginInfo.current = true;
      })
      .catch(() => {
        setUser(undefined);
        setIsLoggedIn(false);
        loginInfo.current = false;
        localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
        alert("로그인 만료");
      });
  }, []);

  return loginInfo.current;
};

export default useAuthCheck;
