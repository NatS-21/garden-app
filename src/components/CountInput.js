import React, { useState } from "react";
import colors from "../assets/colors";
import styles from "../assets/styles";

const CountInput = ({ value, onValueChange }) => {
  const [count, setCount] = useState(value || 1);

  const handleIncrement = () => {
    const newValue = parseInt(count, 10) + 1;
    setCount(newValue);
    onValueChange(newValue);
  };

  const handleDecrement = () => {
    if (parseInt(count, 10) > 1) {
      const newValue = parseInt(count, 10) - 1;
      setCount(newValue);
      onValueChange(newValue);
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setCount(newValue);
    onValueChange(newValue);
  };

  return (
    <div
      style={{
        ...styles.flexHorizontal,
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: 58,
          height: 58,
          borderRadius: 6,
          border: `1px ${colors.grayDivider} solid`,
          background: colors.white,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
        }}
        onClick={handleDecrement}
      >
        <span style={{ fontSize: 24, userSelect: "none" }}>&minus;</span>
      </button>

      <input
        type="number"
        value={count}
        onChange={handleChange}
        style={{
          width: 96,
          height: 58,
          borderTop: `1px ${colors.grayDivider} solid`,
          borderBottom: `1px ${colors.grayDivider} solid`,
          textAlign: "center",
          fontSize: 20,
          lineHeight: "26px",
          fontWeight: "600",
          fontFamily: "Montserrat",
          color: colors.textBlack,
          outline: "none",
          borderLeft: "none",
          borderRight: "none",
          boxSizing: "border-box",
        }}
      />

      <button
        style={{
          width: 58,
          height: 58,
          borderRadius: 6,
          border: `1px ${colors.grayDivider} solid`,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          background: colors.white,
          cursor: "pointer",
        }}
        onClick={handleIncrement}
      >
        <span style={{ fontSize: 24, userSelect: "none" }}>+</span>
      </button>
    </div>
  );
};

export default CountInput;
