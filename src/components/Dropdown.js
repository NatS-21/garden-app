import React, { useState } from "react";
import colors from "../assets/colors";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrowDown.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/icons/arrowUp.svg";

const Dropdown = ({ options, width, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyles = {
    width: width || "100%",
    padding: "8px 16px",
    borderRadius: "6px",
    border: `1px solid ${colors.grayDivider}`,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  };

  const listItemContainerStyles = {
    width: `calc(${width || "100%"} + 32px)`,
    background: colors.white,
    borderRadius: "6px",
    flexDirection: "column",
    position: "absolute",
    zIndex: 1000,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    marginTop: "2px",
    padding: "16px 0",
    display: "flex",
    gap: "4px",
  };

  const listItemStyles = {
    padding: "0 16px",
    width: "100%",
    cursor: "pointer",
  };

  const textStyle = {
    color: colors.txtGray,
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    lineHeight: "20.16px",
    wordWrap: "break-word",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div>
      <div style={dropdownStyles} onClick={toggleDropdown}>
        <div style={{ ...textStyle, color: colors.txtBlack }}>{selected}</div>
        <div style={{ width: "20px", height: "20px" }}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </div>
      {isOpen && (
        <div style={listItemContainerStyles}>
          {options.map((item, index) => (
            <div
              key={index}
              style={{
                ...listItemStyles,
                ...{
                  color: item === selected ? colors.txtBlack : colors.txtGray,
                },
              }}
              onClick={() => handleItemClick(item)}
            >
              <div
                style={{
                  ...textStyle,
                  color: item === selected ? colors.txtBlack : colors.txtGray,
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
