// CategoriesSection.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../storage/actions";
import styles from "../../assets/styles"; // Adjust the import path as needed
import CategoryCard from "../../components/CategoryCard";
import NavButton from "../../components/NavButton";
import colors from "../../assets/colors";

const MainPageCategoriesSection = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div style={{ ...styles.flexVertical, padding: "40px", gap: "2em" }}>
      <div style={styles.flexHorizontal}>
        <h2 style={{ ...styles.sectionHeader, ...styles.textBlack }}>
          Categories
        </h2>
        <div
          style={{
            backgroundColor: colors.grayDivider,
            height: "1px",
            width: "100%",
            margin: "0 0 0 2em",
          }}
        ></div>
        <NavButton to={"/categories"}>All categories</NavButton>
      </div>
      <div
        style={{
          ...styles.grid4Col,
          gap: "2em",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          categories
            .slice(0, 4)
            .map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
        )}
      </div>
    </div>
  );
};

export default MainPageCategoriesSection;
