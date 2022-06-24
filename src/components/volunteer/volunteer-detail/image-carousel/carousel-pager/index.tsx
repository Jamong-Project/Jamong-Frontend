import React from "react";
import { CarouselPagerContainer } from "./styles";

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
