import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "../src/index";

const title = "React with Webpack and Babel";

ReactDOM.render(
  <div>
    {title}
    <MyComponent />
  </div>,
  document.getElementById("app")
);
