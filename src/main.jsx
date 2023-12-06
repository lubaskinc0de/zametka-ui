import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { App } from "./views/App.jsx";

import { Provider } from "react-redux";

import reduxStore from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={reduxStore}>
        <App></App>
    </Provider>
);
