import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendOrder, clearCart } from "../../storage/actions";
import styles from "../../assets/styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import NavButton from "../../components/NavButton";
import colors from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem";

const CartPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !phoneNumber || !email) {
      alert("Please fill in all fields.");
      return;
    }
    const orderData = {
      items: cartItems.map(({ id, quantity }) => ({ id, quantity })),
      customer: {
        name,
        phone: phoneNumber,
        email,
      },
    };
    dispatch(sendOrder(orderData));
    setOrderPlaced(true);
    dispatch(clearCart()); // Очищаем корзину
    // Очищаем форму
    setName("");
    setPhoneNumber("");
    setEmail("");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * (item.discont_price || item.price),
    0
  );

  const sectionHeader = (
    <div style={styles.flexHorizontal}>
      <h2
        style={{
          ...styles.sectionHeader,
          whiteSpace: "nowrap",
          ...styles.textBlack,
        }}
      >
        Shopping cart
      </h2>
      <div
        style={{
          backgroundColor: colors.grayDivider,
          height: "1px",
          width: "100%",
          margin: "0 0 0 2em",
        }}
      ></div>
      <NavButton to={"/products"}>Back to the store</NavButton>
    </div>
  );

  const successPopup = (
    <>
      {orderPlaced && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "20px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            zIndex: "1001",
            padding: "100vmax",
          }}
        >
          <div
            style={{
              backgroundColor: colors.green,
              padding: "2rem",
              borderRadius: "12px",
              ...styles.flexHorizontal,
              gap: "1rem",
              width: "484px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                ...styles.flexVertical,
                gap: "1.5rem",
              }}
            >
              <h2 style={{ ...styles.textWhite, ...styles.textLarge }}>
                Congratulations!
              </h2>
              <p style={{ ...styles.textWhite, ...styles.textMedium }}>
                Your order has been successfully placed on the website. A
                manager will contact you shortly to confirm your order.
              </p>
            </div>
            <button
              onClick={() => setOrderPlaced(false)}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: colors.white,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ ...styles.flexVertical, gap: "40px", padding: "40px" }}>
        {sectionHeader}
        <div
          style={{
            ...styles.flexVertical,
            gap: "2em",
            position: "relative",
            alignItems: "flex-start",
          }}
        >
          <p styles={{ ...styles.textBlack, ...styles.textMedium }}>
            Looks like you have no items in your basket currently.
          </p>
          <Button
            onClick={() => {
              navigate("/products");
            }}
          >
            Continue Shopping
          </Button>
        </div>
        {successPopup}
      </div>
    );
  }

  return (
    <div style={{ ...styles.flexVertical, gap: "2em", padding: "40px" }}>
      {sectionHeader}
      <div
        style={{
          ...styles.flexHorizontal,
          alignItems: "start",
          gap: "2em",
        }}
      >
        <div style={{ ...styles.flexVertical, gap: "1em", flex: 5 }}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div
          style={{
            ...styles.flexVertical,
            gap: "2em",
            padding: "2em",
            background: colors.lightGray,
            borderRadius: "12px",
            flex: 3,
          }}
        >
          <div style={{ ...styles.flexVertical }}>
            <h3
              style={{
                ...styles.textBlack,
                ...styles.textLarge,
                marginBottom: "1em",
              }}
            >
              Order details
            </h3>
            <p style={{ ...styles.textGray, ...styles.textLarge }}>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
              items
            </p>
            <div
              style={{
                ...styles.flexHorizontal,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ ...styles.textGray, ...styles.textLarge }}>Total</p>
              <p style={{ ...styles.textBlack, ...styles.sectionHeader }}>
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{ ...styles.flexVertical, gap: 32 }}
          >
            <div style={{ ...styles.flexVertical, gap: "1em", width: "100%" }}>
              <Input
                type="medium"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="medium"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                type="medium"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit">Order</Button>
          </form>
        </div>
      </div>
      {successPopup}
    </div>
  );
};

export default CartPage;
