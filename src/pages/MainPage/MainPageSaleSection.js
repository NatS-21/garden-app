import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../storage/actions";
import styles from "../../assets/styles";
import NavButton from "../../components/NavButton";
import colors from "../../assets/colors";
import ProductCard from "../../components/ProductCard";

const MainPageSaleSection = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsOnSale = products.filter(
    (product) => product.discont_price != null
  );

  return (
    <div style={{ ...styles.flexVertical, padding: "40px", gap: "2em" }}>
      <div style={styles.flexHorizontal}>
        <h2 style={styles.sectionHeader}>Sale</h2>
        <div
          style={{
            backgroundColor: colors.grayDivider,
            height: "1px",
            width: "100%",
            margin: "0 0 0 2em",
          }}
        ></div>
        <NavButton to={"/products?discountedOnly=true"}>All sales</NavButton>
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
          productsOnSale
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        )}
      </div>
    </div>
  );
};

export default MainPageSaleSection;
