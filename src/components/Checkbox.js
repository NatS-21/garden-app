import React from "react";
import colors from "../assets/colors";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";

const checkboxStyles = {
  width: "36px",
  height: "36px",
  borderRadius: "6px",
  border: `1px solid ${colors.grayDivider}`,
  cursor: "pointer",
};

const checkboxActiveStyles = {
  ...checkboxStyles,
  background: colors.green,
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

const indicatorStyles = {
  paddingTop: "6px",
  paddingBottom: "7px",
  paddingLeft: "4px",
  paddingRight: "4px",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const checkmarkStyles = {
  width: "24px",
  height: "24px",
};

const Checkbox = ({ checked, onChange }) => {
  const toggleCheckbox = () => {
    if (onChange) onChange(!checked);
  };

  return (
    <div
      style={checked ? checkboxActiveStyles : checkboxStyles}
      onClick={toggleCheckbox}
    >
      {checked && (
        <div style={indicatorStyles}>
          <CheckIcon style={checkmarkStyles} />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
