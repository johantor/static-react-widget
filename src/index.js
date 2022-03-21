import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";

const WidgetAreas = document.querySelectorAll(".pocwidget");

WidgetAreas.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    Div
  );
});
