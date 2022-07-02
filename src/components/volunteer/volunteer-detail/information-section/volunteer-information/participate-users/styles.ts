/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";

export const ParticipateUsersContainer = styled.div<{ hasChild: boolean }>`
  border: 1px solid ${(props) => props.theme.colors.divider};
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  max-height: 100px;
  margin-bottom: 16px;
  gap: 8px;
  overflow-y: scroll;
  align-content: ${({ hasChild }) => (hasChild ? "flex-start" : "center")};
  justify-content: ${({ hasChild }) => (hasChild ? "flex-start" : "center")};
`;

export const EmptyParticipateText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryGray};
`;
