import React from "react";
import ReactDOMClient from "react-dom/client";
import { DashboardBilling } from "./screens/DashboardBilling";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DashboardBilling />);
