import styled from "@emotion/styled";

export const VolunteerListContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  align-items: center;
  width: 100%;
`;

export const CardBox = styled.div`
  display: flex;
  justify-content: center;
`;
