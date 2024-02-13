import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchProduct, addToCart } from "../../storage/actions";
import styles from "../../assets/styles";
import API_BASE_URL from "../../apiConfig";
import colors from "../../assets/colors";
import Button from "../../components/Button";
import CountInput from "../../components/CountInput";
import { useState } from "react";

const discountTagStyles = {
  backgroundColor: colors.green,
  color: colors.white,
  ...styles.textMedium,
  padding: "4px 8px",
  borderRadius: "6px",
};

const priceStyles = {
  ...styles.textBlack,
  ...styles.sectionHeader,
};

const oldPriceStyles = {
  textDecoration: "line-through",
  ...styles.textGray,
  ...styles.textLarge,
};

const ProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  const query = new URLSearchParams(location.search);
  const productId = query.get("id");

  const product = useSelector((state) => state.product.product[0]);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [productId, dispatch]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        display: "grid",
        gridTemplateColumns: "4fr 3fr",
        gap: "2em",
        gridTemplateRows: "minmax(100px, 60vh)",
      }}
    >
      {product && (
        <>
          <img
            src={`${API_BASE_URL}${product.image}`}
            alt={product.title}
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
          <div style={{ ...styles.flexVertical, gap: "2em" }}>
            <h2 style={{ ...styles.textLarge, ...styles.textBlack }}>
              {product.title}
            </h2>
            <div
              style={{
                ...styles.flexHorizontal,
                gap: "2em",
              }}
            >
              {product.discont_price && (
                <span style={priceStyles}>${product.discont_price}</span>
              )}
              <span
                style={product.discont_price ? oldPriceStyles : priceStyles}
              >
                ${product.price}
              </span>
              {product.discont_price && (
                <div style={discountTagStyles}>
                  -
                  {Math.round(
                    ((product.price - product.discont_price) / product.price) *
                      100
                  )}
                  %
                </div>
              )}
            </div>
            <div style={{ ...styles.flexHorizontal, gap: "2em" }}>
              <CountInput
                value={quantity}
                onValueChange={handleQuantityChange}
              />
              <Button style={{ width: "100%" }} onClick={handleAddToCart}>
                Add to cart
              </Button>
            </div>
            <div style={{ ...styles.flexVertical, gap: "1em" }}>
              <h3 style={{ ...styles.textMedium, ...styles.textBlack }}>
                Description
              </h3>
              <span style={{ ...styles.textSmall, ...styles.textBlack }}>
                {product.description}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
