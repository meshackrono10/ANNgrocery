import React, { useState, useEffect, useRef } from "react";
import "./Search.css";
import Home from "./Home";
import { useCombobox } from "downshift";

const SearchValue = () => {
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://api/v1/cookbooks/COOKBOOK_NAME")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  console.log("data");
  return (
    <div className="App">
      <div className="map_function"></div>
      <Home />
    </div>
  );
};

export default SearchValue;
