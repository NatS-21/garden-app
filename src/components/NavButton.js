import React, { useState } from "react";
import colors from "../assets/colors";
import { Link } from "react-router-dom";

const navButtonStyles = {
  height: "100%",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "8px",
  paddingBottom: "8px",
  borderRadius: "6px",
  border: `1px solid ${colors.grayDivider}`,
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  display: "inline-flex",
  cursor: "pointer",
};

const buttonTextStyles = {
  textAlign: "center",
  color: colors.txtGray,
  fontSize: "16px",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "500",
  lineHeight: "20.16px",
  whiteSpace: "nowrap",
};

const NavButton = ({ children, to }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const dynamicStyles = {
    ...navButtonStyles,
    background: isActive ? "none" : isHovered ? colors.lightGray : "none",
    color: isActive ? colors.black : colors.txtGray,
  };

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div
        style={dynamicStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
      >
        <div style={buttonTextStyles}>{children}</div>
      </div>
    </Link>
  );
};

export default NavButton;
