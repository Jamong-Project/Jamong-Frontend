import styled from "@emotion/styled";

export const HomeVolunteerListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.waveColor};
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
`;

export const VolunteerCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  ${(props) => props.theme.mq.mobile} {
    flex-wrap: wrap;
  }
`;
