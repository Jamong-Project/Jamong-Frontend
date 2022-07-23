/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";
import { centerChildStyle, widthLimitStyle } from "../../../../styles/common";

export const CommentSectionContainer = styled.section`
  ${centerChildStyle};
  margin-bottom: 16px;
`;

export const CommentSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
  ${(props) => props.theme.mq.tablet} {
    flex-wrap: wrap;
  }

  ${widthLimitStyle};
`;
