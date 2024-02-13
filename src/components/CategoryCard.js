import React from "react";
import styles from "../assets/styles";
import API_BASE_URL from "../apiConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cardStyles = {
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0)",
  transition: "background-color 0.5s ease",
};

const cardHoverStyles = {
  background: "rgba(0,0,0,0.3)",
};

const imageStyles = {
  width: "100%",
  height: "350px",
  objectFit: "cover",
  borderRadius: "12px",
  overflow: "hidden",
};

const CategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const imageUrl = `${API_BASE_URL}${category.image}`;

  const handleCardClick = () => {
    navigate(`/products?categoryId=${category.id}`);
  };

  return (
    <div
      style={{
        ...styles.flexVertical,
        gap: "1em",
        textAlign: "center",
        ...cardStyles,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div style={{ ...imageStyles, position: "relative" }}>
        <img
          src={imageUrl}
          alt={category.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{ ...overlayStyles, ...(isHovered ? cardHoverStyles : {}) }}
        ></div>
      </div>
      <div style={{ ...styles.textBlack, ...styles.textMedium }}>
        {category.title}
      </div>
    </div>
  );
};

export default CategoryCard;
