import React from "react";
import colors from "../assets/colors";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import MenuButton from "./MenuButton";
import BasketButton from "./BacketButton";
import { Link } from "react-router-dom";

const Header = ({ itemCount }) => {
  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 40px",
    background: colors.white,
    borderBottom: `1px solid ${colors.grayDivider}`,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  const logoStyles = {
    width: "70px",
    height: "70px",
  };

  const menuStyles = {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  };

  const navItems = [
    { name: "Main Page", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "All products", path: "/products" },
    { name: "All sales", path: "/products?discountedOnly=true" },
  ];

  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <LogoIcon />
        </Link>
      </div>
      <nav style={menuStyles}>
        {navItems.map((item, index) => (
          <MenuButton key={index} to={item.path}>
            {item.name}
          </MenuButton>
        ))}
      </nav>
      <BasketButton />
    </header>
  );
};

export default Header;
