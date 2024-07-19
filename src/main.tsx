import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import HeaderContainer from "./containers/HeaderContainer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HeaderContainer />
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
