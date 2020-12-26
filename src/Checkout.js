import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "./stateProvider";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";

function Checkout({ title, image, price, button, id }) {
  const [state, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout">
      <div className="checkout_header"></div>
      <div className="checkour_container">
        <img src={image} alt="image" />
        <div className="chectout_info">
          <h2>{title}</h2>
          <p>{price}</p>
          <Button onClick={removeFromCart} variant="contained" color="primary">
            Remove From Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
