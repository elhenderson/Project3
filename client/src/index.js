import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import 'mdbreact/dist/css/mdb.css';

document.querySelector("#rCw").setAttribute('style', 'display:none');
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
