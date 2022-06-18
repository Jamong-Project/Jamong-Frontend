import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeaderContainer = styled.nav<{ showBackground: boolean }>`
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  -webkit-transition: background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  ${(props) =>
    props.showBackground &&
    css`
      background-color: white;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    `}
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 16px;
`;

export const HeaderItemWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationItem = styled.li`
  display: inline-block;
  padding: 0px 16px;
`;
