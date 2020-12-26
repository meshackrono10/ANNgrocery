import { Button } from "@material-ui/core";
import React, { useRef } from "react";
import "./Products.css";
import { useStateValue } from "./stateProvider";

function Product({ title, image, price, id, button }) {
  const [state, dispatch] = useStateValue();
  const searchValue = useRef("");
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        id: id,
        button: button,
      },
    });
  };
  return (
    <div className="products">
      <div className="product">
        <h2>{title}</h2>
        <img className="product_img" src={image} alt="image" />
        <p>{price}</p>
        <div className="button">
          <Button onClick={addToBasket} variant="contained" color="primary">
            {button}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
