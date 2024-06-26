import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
        <Toaster richColors position="top-center" />
        <App />
    </BrowserRouter>
);
