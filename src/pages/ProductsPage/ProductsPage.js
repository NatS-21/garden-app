import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchCategoryProducts } from "../../storage/actions";
import styles from "../../assets/styles";
import ProductCard from "../../components/ProductCard";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, loading, error } = useSelector((state) => state.products);
  const categoryProducts = useSelector(
    (state) => state.categoryProducts.category
  );
  const categoryInfo = useSelector((state) => state.categoryProducts.category);

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("by default");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("categoryId");
    const isDiscountedOnly = queryParams.get("discountedOnly") === "true";

    setDiscountedOnly(isDiscountedOnly);

    if (categoryId) {
      dispatch(fetchCategoryProducts(categoryId));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, location.search]);

  const sortOptions = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high",
  ];

  const getFilteredAndSortedProducts = () => {
    const activeProducts = categoryInfo ? categoryProducts.data : products;

    let filtered = activeProducts.filter((product) => {
      const price = product.discont_price || product.price;
      return (
        (!discountedOnly || product.discont_price) &&
        (!priceFrom || price >= parseFloat(priceFrom)) &&
        (!priceTo || price <= parseFloat(priceTo))
      );
    });

    return filtered.sort((a, b) => {
      switch (sortOrder) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "price: high-low":
          return (b.discont_price || b.price) - (a.discont_price || a.price);
        case "price: low-high":
          return (a.discont_price || a.price) - (b.discont_price || b.price);
        default:
          return 0;
      }
    });
  };

  return (
    <div style={{ ...styles.flexVertical, padding: "40px", gap: "40px" }}>
      <h2 style={{ ...styles.sectionHeader, ...styles.textBlack }}>
        {categoryInfo ? categoryInfo.category.title : "All products"}
      </h2>
      <div style={{ ...styles.flexHorizontal, gap: "40px" }}>
        <div style={{ ...styles.flexHorizontal, gap: "1em" }}>
          <span style={{ ...styles.textMedium, ...styles.textBlack }}>
            Price
          </span>
          <Input
            type="small"
            placeholder="from"
            inputType="number"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
          />
          <Input
            type="small"
            placeholder="to"
            inputType="number"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
          />
        </div>
        <div style={{ ...styles.flexHorizontal, gap: "1em" }}>
          <span style={{ ...styles.textMedium, ...styles.textBlack }}>
            Discounted items
          </span>
          <Checkbox
            checked={discountedOnly}
            onChange={(e) => setDiscountedOnly(!discountedOnly)}
          />
        </div>
        <div style={{ ...styles.flexHorizontal, gap: "1em" }}>
          <span style={{ ...styles.textMedium, ...styles.textBlack }}>
            Sorted
          </span>
          <Dropdown
            options={sortOptions}
            width="200px"
            selected={sortOrder}
            onSelect={setSortOrder}
          />
        </div>
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
          getFilteredAndSortedProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
