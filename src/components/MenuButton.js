import React, { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../assets/colors";

const menuButtonStyles = {
  justifyContent: "center",
  alignItems: "center",
  display: "inline-flex",
  cursor: "pointer",
  textDecoration: "none",
};

const menuButtonTextStyles = {
  color: colors.txtBlack,
  fontSize: "20px",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "500",
  lineHeight: "26px",
  wordWrap: "break-word",
  textDecoration: "none",
};

const MenuButton = ({ children, to }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dynamicMenuButtonTextStyles = {
    ...menuButtonTextStyles,
    color: isHovered ? colors.green : colors.txtBlack,
  };

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {" "}
      <div
        style={menuButtonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={dynamicMenuButtonTextStyles}>{children}</div>
      </div>
    </Link>
  );
};

export default MenuButton;
