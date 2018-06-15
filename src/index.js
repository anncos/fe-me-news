import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import * as ducks from "./ducks";
import { reduxFetch } from "./utils";

// ducks.ui.reducer = { ui: rawReducer };

const rootReducer = combineReducers({
  ...ducks.ui.reducer,
  ...ducks.data.reducer
});

// Stolen from https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    // logger,
    reduxFetch
  )
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
