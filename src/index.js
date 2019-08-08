import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "material-design-lite/dist/material";
import "material-design-lite/material.min.css";
import RootComponent from "./components/Root";
// import ParamsExample from "./components/ParamsExample";

ReactDOM.render(<RootComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
