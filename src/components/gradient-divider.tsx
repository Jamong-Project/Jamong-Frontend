import React from "react";

export type GradientDividerProps = {
  topColor: string;
  bottomColor: string;
};

const GradientDivider = ({ topColor, bottomColor }: GradientDividerProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        background: `linear-gradient(to bottom, ${topColor}, ${bottomColor})`,
      }}
    />
  );
};

export default GradientDivider;
