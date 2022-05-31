import React from "react";

export type LogoSlideProps = {
  src: string;
};

const LogoSlide = ({ src }: LogoSlideProps) => {
  return <img alt={src} src={src} width={300} height={200} />;
};

export default LogoSlide;
