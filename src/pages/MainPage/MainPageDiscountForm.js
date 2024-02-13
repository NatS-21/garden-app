import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendSale } from "../../storage/actions";
import Input from "../../components/Input";
import firstOrderImage from "../../assets/images/first-order.png";
import ButtonBanner from "../../components/ButtonBanner";
import styles from "../../assets/styles";
import colors from "../../assets/colors";

const MainPageDiscountForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const saleData = {
      name: name,
      phone: phoneNumber,
      email: email,
    };
    setEmail("");
    setName("");
    setPhoneNumber("");
    dispatch(sendSale(saleData));
  };

  return (
    <div style={{ width: "100%", padding: "40px", boxSizing: "border-box" }}>
      <div
        style={{
          ...styles.flexVertical,
          paddingTop: "2em",
          paddingLeft: "2em",
          paddingRight: "2em",
          background: "linear-gradient(261deg, #0B710B 0%, #339933 100%)",
          borderRadius: 12,
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            ...styles.sectionHeader,
            color: colors.white,
          }}
        >
          5% off on the first order
        </div>
        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            gap: "2em",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            alignItems: "end",
          }}
        >
          <img src={firstOrderImage} alt="Discount offer" />
          <form
            onSubmit={handleSubmit}
            style={{ ...styles.flexVertical, gap: 32, paddingBottom: "2em" }}
          >
            <div style={{ ...styles.flexVertical, gap: "1em", width: "100%" }}>
              <Input
                type="mediumTransparent"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="mediumTransparent"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                type="mediumTransparent"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <ButtonBanner type="submit">Get a discount</ButtonBanner>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPageDiscountForm;
