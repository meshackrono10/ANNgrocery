import React, { useRef } from "react";
import "./Header.css";
import { useStateValue } from "./stateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchValue from "./search";
import { useHistory, Link } from "react-router-dom";

function Header({ setSearch }) {
  //state
  const searchValueTearm = useRef("");
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  //fuctions
  const addToCart = () => {
    history.push("/bascket");
  };
  const backToHome = () => {
    history.push("/");
  };
  const backToSearch = () => {
    history.push("/search");
  };
  const loginPage = () => {
    history.push("/SignIn");
  };
  const searchFood = () => {
    setSearch(searchValueTearm.current.value);
  };

  return (
    <div className="Header">
      <div className="header_nav">
        <h1 onClick={backToHome}>Grocery</h1>
      </div>
      <div className="header_search">
        <input
          ref={searchValueTearm}
          id="name"
          onChange={searchFood}
          type="text"
          placeholder="search..."
          onClick={backToSearch}
        />
      </div>
      <div className="header_cart" onClick={addToCart}>
        <ShoppingBasketIcon />
        <span>{basket?.length}</span>
      </div>
      <div className="header_lineOne"></div>

      <div onClick={loginPage} className="header_signin">
        <button>sign in</button>
        <button>sign up</button>
      </div>
      <div className="nav_menu">
        {/* <span>{showMenu ? image : image1}</span> */}
      </div>
    </div>
  );
}

export default Header;
