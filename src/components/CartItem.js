import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../storage/actions";
import Button from "./Button";
import CountInput from "./CountInput";
import API_BASE_URL from "../apiConfig";
import colors from "../assets/colors";
import styles from "../assets/styles";
import { ReactComponent as XMarkIcon } from "../assets/icons/xmark.svg";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateCartItem(item.id, newQuantity));
  };

  const handleRemoveClick = () => {
    dispatch(removeFromCart(item.id));
  };

  const priceStyles = {
    ...styles.textBlack,
    ...styles.textLarge,
  };

  const oldPriceStyles = {
    textDecoration: "line-through",
    ...styles.textGray,
    ...styles.textMedium,
  };

  return (
    <div
      style={{
        width: "100%",
        height: "180px",
        borderRadius: 12,
        border: `1px ${colors.grayDivider} solid`,
        ...styles.flexHorizontal,
        overflow: "hidden",
      }}
    >
      <img
        style={{
          borderTopLeftRadius: 12,
          borderRight: `1px ${colors.grayDivider} solid`,
          objectFit: "cover",
          height: "180px",
          width: "200px",
        }}
        src={`${API_BASE_URL}${item.image}`}
        alt={item.title}
      />
      <div
        style={{
          padding: "2rem",
          ...styles.flexVertical,
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            width: "100%",
            ...styles.flexHorizontal,
          }}
        >
          <span
            style={{
              ...styles.textBlack,
              ...styles.textMedium,
            }}
          >
            {item.title}
          </span>
          <button
            onClick={handleRemoveClick}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <XMarkIcon />
          </button>
        </div>
        <div
          style={{
            ...styles.flexHorizontal,
            gap: "2rem",
          }}
        >
          <CountInput
            value={item.quantity}
            onValueChange={handleQuantityChange}
          />
          <div
            style={{
              ...styles.flexHorizontal,
              gap: 16,
            }}
          >
            <div style={priceStyles}>
              ${(item.discont_price || item.price) * item.quantity}
            </div>
            {item.discont_price && (
              <div style={oldPriceStyles}>${item.price * item.quantity}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
