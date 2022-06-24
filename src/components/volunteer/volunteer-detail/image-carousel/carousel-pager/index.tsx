import styled from "@emotion/styled";
import React from "react";

const CarouselPagerContainer = styled.div<{ hasBackground: boolean }>`
  display: inline-flex;
  padding: 8px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.hasBackground && props.theme.colors.transparentBlack};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: white;
`;

export type CarouselPagerProps = {
  maximumPages: number;
  currentPages: number;
  hasBackground?: boolean;
};

const CarouselPager = ({
  maximumPages,
  currentPages,
  hasBackground,
}: CarouselPagerProps) => {
  return (
    <CarouselPagerContainer hasBackground={hasBackground!}>
      {`${currentPages} / ${maximumPages}`}
    </CarouselPagerContainer>
  );
};

CarouselPager.defaultProps = {
  hasBackground: true,
};

export default CarouselPager;
