import React from "react";
import ReactDOM from "react-dom";
import Arrival from "./containers/ArrivalZones";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Arrival />
  </Provider>,

  document.getElementById("root")
);
