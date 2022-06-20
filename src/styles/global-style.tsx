import { css, Global } from "@emotion/react";

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

  * {
    font-family: "Kanit", "Noto Sans KR", sans-serif;
  }

  body {
    margin: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
