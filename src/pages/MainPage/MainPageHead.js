import React from "react";
import Button from "../../components/Button";
import mainPageHeadImage from "../../assets/images/main-page-head.jpg";
import { useNavigate } from "react-router-dom";

const MainPageHead = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  };

  const containerStyles = {
    width: "100%",
    position: "relative",
    backgroundImage: `url(${mainPageHeadImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)",
  };

  const contentStyles = {
    maxWidth: "1360px",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "40px",
    display: "flex",
    position: "relative",
    zIndex: 2,
    padding: "80px 80px 210px 80px",
  };

  const titleStyles = {
    color: "white",
    fontSize: "96px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    lineHeight: "105.6px",
    wordWrap: "break-word",
  };

  return (
    <div style={containerStyles}>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <div style={titleStyles}>Amazing Discounts on Garden Products!</div>
        <Button onClick={handleButtonClick}>Check out</Button>
      </div>
    </div>
  );
};

export default MainPageHead;
