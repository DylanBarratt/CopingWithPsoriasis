import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function App() {
    return (
        <main className="notFoundMain">
            <div>
                <h1>
                    <center>
                        We are really sorry but this page doesn't exist :( <br /> It may come in the future!
                    </center>
                </h1>
                <br />
                <h2>
                    <center>
                        Please navigate back to the home page using the header or by clicking <Link to="/">here</Link>
                    </center>
                </h2>
            </div>
        </main>
    );
}

export default App;
