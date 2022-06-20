import styled from "@emotion/styled";
import { centerChildStyle, widthLimitStyle } from "../../../styles/common";

export const FooterContainer = styled.div`
  padding: 40px 16px;
  background-color: rgb(39, 38, 44);
  color: white;
  z-index: 10;
  ${centerChildStyle};
`;

export const FooterWrapper = styled.div`
  ${widthLimitStyle};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
