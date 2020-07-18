import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.less";
import "./components/Dashboard/dashboard.less";
import "./components/DashboardHome/dashboardHome.less";
import "./components/Product/product.less";
const title = "React with Webpack and Babel";
import { Provider } from "react-redux";
import store from "./store/store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
