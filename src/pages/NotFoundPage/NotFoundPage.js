import React from "react";
import NotFoundImage from "../../assets/images/404.png";
import styles from "../../assets/styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const notFoundStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    textAlign: "center",
    gap: "32px",
    padding: "80px 0",
  };

  const imageStyles = {
    maxWidth: "690px",
  };

  return (
    <div style={notFoundStyles}>
      <div>
        <img src={NotFoundImage} alt="404 NotFound" style={imageStyles} />
      </div>
      <div style={{ gap: "16px" }}>
        <div style={{ ...styles.sectionHeader, ...styles.textBlack }}>
          Page Not Found
        </div>
        <p
          style={{
            ...styles.textMedium,
            ...styles.textGray,
            maxWidth: "660px",
          }}
        >
          We're sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
      </div>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
