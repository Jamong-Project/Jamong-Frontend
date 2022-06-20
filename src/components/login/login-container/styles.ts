import styled from "@emotion/styled";
import { centerChildStyle } from "../../../styles/common";

export const LoginItemContainer = styled.div`
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  ${centerChildStyle};
`;

export const LoginHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 432px;
  justify-content: center;
  margin-bottom: 16px;
`;

export const RegisterContainer = styled.div`
  display: flex;
  margin: auto 0 0 auto;
  align-items: baseline;
`;

export const HeaderText = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
`;
