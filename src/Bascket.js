import React from "react";
import { Button } from "@material-ui/core";
import "./Bascket.css";
import { useStateValue } from "./stateProvider";
import Checkout from "./Checkout";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Bascket() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="bascket">
      <div className="basket_top">
        <div className="basket_header">
          <div className="basket_title">
            <h1>Fell free to shop again</h1>
            <Button
              onClick={() => history.push("/")}
              variant="contained"
              color="primary"
            >
              BACK HOME
            </Button>
          </div>
          <div className="header_headerLeft">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal({basket.length} items)
                    <strong>{value}</strong>
                  </p>
                  <small className="subtotal_gift">
                    <input type="checkbox" />
                    This order contains a gift
                  </small>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button>Procced to Checkout</button>
          </div>
        </div>

        <div className="basket_items">
          {basket.map((item) => (
            <Checkout
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
              button={item.button}
              style={{ margin: "20px" }}
            />
          ))}
        </div>
      </div>

      <div className="basket_covid">
        <h1>Are you Updated About COVID-19</h1>
        <button className="covid_button">KNOW MORE</button>
        <p>stay home stay safe</p>
      </div>
    </div>
  );
}

export default Bascket;
