import React from "react";
import { styles } from "../assets/styles";
import { ReactComponent as InstaIcon } from "../assets/icons/ic-instagram.svg";
import { ReactComponent as WhatsAppicon } from "../assets/icons/ic-whatsapp.svg";
import IconButton from "./IconButton";
import colors from "../assets/colors";

const ContactSection = () => {
  const centerLatitude = 55.713487;
  const centerLongitude = 37.631757;
  const zoomLevel = 16;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
    centerLongitude - 0.01
  }%2C${centerLatitude - 0.01}%2C${centerLongitude + 0.01}%2C${
    centerLatitude + 0.01
  }&layer=mapnik&marker=${centerLatitude}%2C${centerLongitude}`;

  const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "40px",
  };

  const cardContainerStyles = {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    gridTemplateRows: "auto auto",
    gridGap: "2em",
  };

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "2em",
    gap: "1em",
    backgroundColor: colors.cardGray,
    borderRadius: "6px",
  };

  const iconStyles = {
    marginRight: "10px",
  };

  const mapStyles = {
    border: "none",
    borderRadius: "6px",
    overflow: "hidden",
    height: "300px",
    gridColumn: "1 / -1",
  };

  return (
    <div style={sectionStyles}>
      <div style={{ ...styles.sectionHeader, ...styles.textBlack }}>
        Contact
      </div>
      <div style={cardContainerStyles}>
        <div style={cardStyles}>
          <div style={{ ...styles.textGray, ...styles.textMedium }}>Phone</div>
          <div style={{ ...styles.textLarge, ...styles.textBlack }}>
            +7 (499) 350-66-04
          </div>
        </div>
        <div style={{ ...cardStyles }}>
          <div style={{ ...styles.textGray, ...styles.textMedium }}>
            Socials
          </div>
          <div style={{ display: "flex" }}>
            <IconButton Icon={InstaIcon} style={iconStyles} />
            <IconButton Icon={WhatsAppicon} style={iconStyles} />
          </div>
        </div>
        <div style={cardStyles}>
          <div style={{ ...styles.textGray, ...styles.textMedium }}>
            Address
          </div>
          <div style={{ ...styles.textLarge, ...styles.textBlack }}>
            Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
          </div>
        </div>
        <div style={cardStyles}>
          <div style={{ ...styles.textGray, ...styles.textMedium }}>
            Working Hours
          </div>
          <div style={{ ...styles.textLarge, ...styles.textBlack }}>
            24 hours a day
          </div>
        </div>
      </div>
      <iframe title="location-map" src={mapSrc} style={mapStyles} />
    </div>
  );
};

export default ContactSection;
