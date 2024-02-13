import colors from "./colors";

export const styles = {
  sectionHeader: {
    fontSize: "64px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    lineHeight: "70.40px",
    wordWrap: "break-word",
  },
  textLarge: {
    fontSize: "40px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "600",
    lineHeight: "44px",
    wordWrap: "break-word",
  },
  textMedium: {
    fontSize: "20px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    lineHeight: "26px",
    wordWrap: "break-word",
  },
  textSmall: {
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    lineHeight: "20.80px",
    wordWrap: "break-word",
  },
  textBlack: {
    color: colors.black,
  },
  textWhite: {
    color: colors.white,
  },
  textGray: {
    color: colors.gray,
  },
  flexVertical: {
    display: "flex",
    flexDirection: "column",
  },
  flexHorizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  grid4Col: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    width: "100%",
  },
  grid5Col: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    width: "100%",
  },
};

export default styles;
