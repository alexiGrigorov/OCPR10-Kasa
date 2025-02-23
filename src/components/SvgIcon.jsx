import { cloneElement } from "react";

const SvgIcon = ({ svg, color, className = "" }) => {
  const coloredSvg = cloneElement(svg, { fill: color });
  return <div className={className}>{coloredSvg}</div>;
};

export default SvgIcon;
