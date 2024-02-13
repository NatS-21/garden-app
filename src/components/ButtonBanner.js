import React, { useState } from "react";
import colors from "../assets/colors";

const buttonStyles = {
  width: "100%",
  padding: "16px 32px",
  borderRadius: "6px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  display: "inline-flex",
  border: "none",
  backgroundColor: colors.white,
  cursor: "pointer",
  transition: "background-color 0.2s",
  boxSizing: "border-box",
};

const buttonTextStyles = {
  flex: "1",
  textAlign: "center",
  color: colors.black,
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "26px",
  wordWrap: "break-word",
};

const ButtonBanner = ({ children, onClick, type = "button" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const dynamicStyles = {
    ...buttonStyles,
    backgroundColor: isActive
      ? colors.lightGray
      : isHovered
      ? colors.black
      : colors.white,
    color: isActive ? colors.green : isHovered ? colors.white : colors.black,
  };

  const dynamicButtonTextStyles = {
    ...buttonTextStyles,
    color: isActive ? colors.green : isHovered ? colors.white : colors.black,
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
      <div style={dynamicButtonTextStyles}>{children}</div>
    </button>
  );
};

export default ButtonBanner;
