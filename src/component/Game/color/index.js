import React from "react";

const Color = ({ colorName, text }) => {
  return <h1 style={{ color: colorName }}>{text}</h1>;
};

export default Color;
