import React, { useState, useRef } from "react";
import "./Header.css";

function SearchBar() {
  return (
    <div className="header_search">
      <input type="text" placeholder="search..." />
    </div>
  );
}

export default SearchBar;
