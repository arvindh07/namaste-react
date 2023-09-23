import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("h1", {}, "Hello World from ReactJS! changed!!");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);