/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";
import { centerChildStyle, widthLimitStyle } from "../../../../styles/common";

export const CommentSectionContainer = styled.section`
  ${centerChildStyle};
  margin: 16px 0;
`;

export const CommentSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  ${(props) => props.theme.mq.tablet} {
    flex-wrap: wrap;
  }

  ${widthLimitStyle};
`;
