import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Bascket from "./Bascket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchValue from "./search";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,       
} from "@material-ui/core";
import SignIn from "./SignIn";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/search">
            <Header setSearch={setSearch} />
            <SearchValue />
          </Route>
          <Route path="/bascket">
            <Header />
            <Bascket />
          </Route>

          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
