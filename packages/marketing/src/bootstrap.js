import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

console.log("Hello from the JavaScript!");

export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el);
  }
}
