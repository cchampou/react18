import { renderToString } from "react-dom/server.js";
import { createElement } from "react";
import MyInput from "./src/useId/index.js";

console.log(renderToString(createElement(MyInput)));