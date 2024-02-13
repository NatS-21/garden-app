import React from "react";
import MainPageHead from "./MainPageHead";
import MainPageCategoriesSection from "./MainPageCategoriesSection";
import MainPageSaleSection from "./MainPageSaleSection";
import styles from "../../assets/styles";
import MainPageDiscountForm from "./MainPageDiscountForm";

const MainPage = () => {
  return (
    <div style={{ ...styles.flexVertical, gap: "2em" }}>
      <MainPageHead />
      <MainPageCategoriesSection />
      <MainPageDiscountForm></MainPageDiscountForm>
      <MainPageSaleSection />
    </div>
  );
};

export default MainPage;
