import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../storage/actions";
import styles from "../../assets/styles";
import CategoryCard from "../../components/CategoryCard";

const CategoriesPage = () => {
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
        <h2 style={styles.sectionHeader}>Categories</h2>
      </div>
      <div
        style={{
          ...styles.grid5Col,
          gap: "2em",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
