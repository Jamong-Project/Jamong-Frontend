import React from "react";

export type HeaderTopSpaceProps = {
  height?: number | string;
};

const HeaderTopSpace = ({ height }: HeaderTopSpaceProps) => {
  return <div style={{ height }} />;
};

HeaderTopSpace.defaultProps = {
  height: "70px",
};

export default HeaderTopSpace;
