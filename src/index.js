import React, { Fragment } from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers.js";

import Color from "./components/Color";
import RandomColor from "./components/RandomColor";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Fragment>
      <Color />
      <RandomColor />
    </Fragment>
  </Provider>,
  document.getElementById("main")
);
