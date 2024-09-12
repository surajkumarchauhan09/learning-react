//In React the most common name of Javascript file is App.js
import { createRoot } from "react-dom/client";
import App from "./App"; // whatever you have exported from Your App.js file you can import them like this.
import React from "react";

const root = createRoot(document.querySelector("#root"));
// root.render("Suraj Kumar")//you can pass string in this render method
//The most common component in React is app component
root.render(<App />);



