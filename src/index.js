import React from "react";
//import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceworker from "./service-worker";
import * as atatus from "atatus-spa";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
//import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));
const root = document.getElementById('root');
render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
