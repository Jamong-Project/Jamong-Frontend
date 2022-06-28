import styled from "@emotion/styled";
import { centerChildStyle, widthLimitStyle } from "../../../../styles/common";

export const InformationSectionContainer = styled.section`
  ${centerChildStyle};
  margin-bottom: 16px;
`;

export const InformationSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
  ${(props) => props.theme.mq.tablet} {
    flex-wrap: wrap;
  }

  ${widthLimitStyle};
`;
