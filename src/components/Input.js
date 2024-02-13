import React from "react";
import colors from "../assets/colors";
import styles from "../assets/styles";

const inputStyles = {
  medium: {
    width: "100%",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    background: colors.white,
    borderRadius: 6,
    border: `1px ${colors.grayDivider} solid`,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    display: "inline-flex",
    boxSizing: "border-box",
  },
  mediumTransparent: {
    width: "100%",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 6,
    border: `1px white solid`,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    display: "inline-flex",
    boxSizing: "border-box",
    color: colors.white,
  },
  small: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 6,
    border: `1px ${colors.grayDivider} solid`,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    display: "inline-flex",
    boxSizing: "border-box",
    background: colors.white,
  },
};

const textStyle = {
  ...styles.textMedium,
};

const smallTextStyle = {
  ...styles.textSmall,
};

const Input = ({
  type = "small",
  placeholder,
  value,
  onChange,
  inputType = "text",
}) => {
  const style = inputStyles[type] || inputStyles.medium;
  const textStyling = type === "small" ? smallTextStyle : textStyle;

  const inputElementStyle = {
    ...textStyling,
    background: "transparent",
    border: "none",
    width: "100%",
    outline: "none",
    color: type === "mediumTransparent" ? colors.white : "inherit",
  };

  const inputClassName =
    type === "mediumTransparent" ? "transparent-input-placeholder" : "";

  return (
    <div style={style}>
      <input
        type={inputType}
        style={inputElementStyle}
        className={inputClassName}
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
