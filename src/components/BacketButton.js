import React from "react";
import colors from "../assets/colors";
import { ReactComponent as BasketIcon } from "../assets/icons/backet.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BasketButton = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const basketButtonStyles = {
    height: "100%",
    paddingLeft: "4px",
    justifyContent: "flex-end",
    alignItems: "center",
    display: "inline-flex",
    position: "relative",
    cursor: "pointer",
  };

  const basketIconStyles = {
    width: "44px",
    height: "48px",
  };

  const itemCountStyles = {
    width: "26px",
    height: "26px",
    left: "0",
    top: "7px",
    position: "absolute",
    background: colors.green,
    borderRadius: "9999px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const itemTextStyle = {
    textAlign: "center",
    color: colors.white,
    fontSize: "12px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "600",
    lineHeight: "10.80px",
    wordWrap: "break-word",
  };

  return (
    <Link to={"/cart"} style={{ textDecoration: "none" }}>
      <div style={basketButtonStyles}>
        <div style={basketIconStyles}>
          <BasketIcon />
        </div>
        {cartItems.length > 0 && (
          <div style={itemCountStyles}>
            <div style={itemTextStyle}>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BasketButton;
