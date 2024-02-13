import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./storage/store";
import Header from "./components/Header";
import ContactSection from "./components/ContactsSection";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <BrowserRouter>
        <Header itemCount={3} />
        <div style={{ margin: "126px 0 0 0" }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ContactSection />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
