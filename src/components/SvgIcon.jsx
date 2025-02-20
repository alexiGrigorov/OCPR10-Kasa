import React from "react";

const SvgIcon = ({ svg, color, className = "" }) => {
  const coloredSvg = React.cloneElement(svg, { fill: color });
  return <div className={className}>{coloredSvg}</div>;
};

export default SvgIcon;
