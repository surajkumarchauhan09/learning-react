import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const root = createRoot(document.querySelector("#root"));

root.render(<App/>);
// If you are not using useState method then you can pass this root from here and and use it where you want to use this


