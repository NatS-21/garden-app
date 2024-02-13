import React, { useState } from "react";
import colors from "../assets/colors";

const buttonStyles = {
  padding: "16px 32px",
  borderRadius: "6px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  display: "inline-flex",
  border: "none",
  backgroundColor: colors.green,
  color: colors.white,
  cursor: "pointer",
  transition: "background-color 0.2s",
};

const buttonTextStyles = {
  flex: "1",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "26px",
  whiteSpace: "nowrap",
};

const Button = ({ children, onClick, style, type = "button" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const dynamicStyles = {
    ...buttonStyles,
    ...style,
    backgroundColor: isActive
      ? colors.white
      : isHovered
      ? colors.black
      : buttonStyles.backgroundColor,
    color: isActive
      ? colors.black
      : isHovered
      ? colors.white
      : buttonStyles.color,
    border: isActive ? `1px solid ${colors.black}` : buttonStyles.border,
  };

  return (
    <button
      style={dynamicStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      type={type}
    >
      <span style={buttonTextStyles}>{children}</span>
    </button>
  );
};

export default Button;
