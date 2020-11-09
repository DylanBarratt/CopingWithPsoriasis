import React from "react";

import "./css/app.css";

function App() {
    return (
        <main className="disclaimerMain">
            <img src="./disclaimerPic.jpg" alt="disclaimerImage"></img>
            <p>
                <b>Disclaimer:</b> This blog is not intended to replace professional expert medical advice. The opinions expressed are my own and based on my
                experience as a clinical psychologist as well as someone who has psoriasis. <br />
                <br />
                Always consult your GP or healthcare advisor if you are concerned about your physical or psychological health.
            </p>
        </main>
    );
}

export default App;
