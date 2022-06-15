import { useCallback, useEffect } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

const useNaverLogin = (color: string, type: number, height: number) => {
  const initializedNaverLogin = useCallback(() => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_OAUTH_CLIENT_ID,
      callbackUrl: "http://localhost:3000/naver-auth",
      isPopup: false,
      loginButton: {
        color,
        type,
        height,
      },
    });
    naverLogin.init();
  }, [color, type, height]);

  useEffect(() => {
    initializedNaverLogin();
  }, [initializedNaverLogin]);
};

export default useNaverLogin;
