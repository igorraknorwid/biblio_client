import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Cards from "./store/cards";
import Years from "./store/years";
import "./styles/index.scss";

interface State {
  cards: Cards;
  years: Years;
}

export const cards = new Cards();
export const years = new Years();

export const Context = createContext<State>({
  cards,
  years,
});

ReactDOM.render(
  <Context.Provider
    value={{
      cards,
      years,
    }}
  >
    <Router>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById("root"),
);
