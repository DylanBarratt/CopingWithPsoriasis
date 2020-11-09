import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import App from "./App";
import ScrollToTop from "./componenets/scrollToTop.component";

axios.defaults.baseURL = "https://copingwithpsoriasis.com/";

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById("root")
);
