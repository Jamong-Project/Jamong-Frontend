import styled from "@emotion/styled";
import { centerChildStyle, widthLimitStyle } from "../../../styles/common";

export const VolunteerListContainer = styled.div(centerChildStyle);
export const VolunteerListWrapper = styled.div(widthLimitStyle);

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
