import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const initialState = ['2+2','3+3'];
const INITIAL_STATE = []

function history(state = initialState, action) {
  if (action.type === "ADD_HISTORY") {
    return [...state, action.payload];
  }
  if (action.type === "CLEAR_HISTORY") {
    return INITIAL_STATE
  }

  return state;
}

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const store = createStore(
  history,
  composeEnhancers()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
