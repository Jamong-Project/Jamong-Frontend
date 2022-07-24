/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";

export const CarouselPagerContainer = styled.div<{ hasBackground: boolean }>`
  display: inline-flex;
  padding: 8px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.hasBackground && props.theme.colors.transparentBlack};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: white;
`;
