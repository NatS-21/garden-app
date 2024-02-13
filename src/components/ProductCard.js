import React, { useState } from "react";
import API_BASE_URL from "../apiConfig";
import colors from "../assets/colors";
import styles from "../assets/styles";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../storage/actions";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product?id=${product.id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    var quantity = 1;
    dispatch(addToCart({ ...product, quantity }));
  };

  const cardStyles = {
    ...styles.flexVertical,
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    boxSizing: "content-box",

    border: `1px ${colors.grayDivider} solid`,

    transition: "transform 0.2s",
  };

  const imageStyles = {
    height: "422px",
    objectFit: "cover",
    transition: "opacity 0.2s",
    borderBottom: `1px ${colors.grayDivider} solid`,
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: "422px",
    backgroundColor: isHovered ? "rgba(0, 0, 0, 0.2)" : "transparent",
    transition: "background-color 0.2s",
  };

  const discountTagStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: colors.green,
    color: colors.white,
    ...styles.textMedium,
    padding: "4px 8px",
    borderRadius: "6px",
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

  const buttonStyles = {
    position: "absolute",
    top: "350px",
    left: "1em",
    width: "calc(100% - 2em)",
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div style={overlayStyles}></div>

      <img
        src={`${API_BASE_URL}${product.image}`}
        alt={product.title}
        style={imageStyles}
      />
      {isHovered && (
        <Button style={buttonStyles} onClick={handleButtonClick}>
          Add to cart
        </Button>
      )}

      {product.discont_price && (
        <div style={discountTagStyles}>
          -
          {Math.round(
            ((product.price - product.discont_price) / product.price) * 100
          )}
          %
        </div>
      )}
      <div
        style={{
          ...styles.flexVertical,
          padding: "2em",
          gap: "1em",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ ...styles.textBlack, ...styles.textMedium }}>
          {product.title}
        </div>
        <div
          style={{
            ...styles.flexHorizontal,
            gap: "1em",
          }}
        >
          {product.discont_price && (
            <span style={priceStyles}>${product.discont_price}</span>
          )}
          <span style={product.discont_price ? oldPriceStyles : priceStyles}>
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
