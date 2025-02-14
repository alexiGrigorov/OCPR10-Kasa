import React from "react";

export default function Icon({ svg, width, color, ...rest }) {
  // Start with the original props from the SVG
  const newProps = {
    ...svg.props,
    ...rest, // Allows passing down additional props like className, etc.
  };

  // If the user explicitly sets `width`, override the SVG’s inherent width
  if (width !== undefined) {
    newProps.width = "100%";
    // newProps.height = "auto";
  }

  // If the user explicitly sets `color`, override the SVG’s inherent fill
  if (color !== undefined) {
    newProps.fill = color;
  }

  // Create a clone of the provided SVG with updated props
  const svgClone = React.cloneElement(svg, newProps);

  return <div style={{ width: width }}>{svgClone}</div>;
}
