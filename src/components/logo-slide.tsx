import React from "react";

export type LogoSlideProps = {
  src: string;
};

const LogoSlide = ({ src }: LogoSlideProps) => {
  return <img alt={src} src={src} height={100} style={{ margin: "0px 8px" }} />;
};

export default LogoSlide;
