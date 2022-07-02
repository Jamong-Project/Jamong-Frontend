/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";

export const ParticipateUsersContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.divider};
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  max-height: 200px;
  margin-bottom: 16px;
  gap: 8px;
  overflow-y: scroll;
`;
