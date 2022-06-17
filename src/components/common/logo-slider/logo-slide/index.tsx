import React from "react";

export const LOGO_MARGIN_WIDTH: number = 8;

export type LogoSlideProps = {
  src: string;
};

const LogoSlide = ({ src }: LogoSlideProps) => {
  return (
    <img
      alt={src}
      src={src}
      width={100}
      height={100}
      style={{ margin: `0px ${LOGO_MARGIN_WIDTH}px` }}
    />
  );
};

export default LogoSlide;
