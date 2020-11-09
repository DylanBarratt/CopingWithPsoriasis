import React from "react";

import "./css/app.scss";

function App() {
    return (
        <main className="aboutMeMain main">
            <div className="frame">
                <img src="./profilePic.jpg" alt="logo" />
            </div>

            <h1>About Me</h1>
            <br />
            <p>
                I’ve had psoriasis since childhood – for over thirty years – and I am also a Consultant Clinical Psychologist. This is not another ‘Cure for
                Psoriasis’ website. Like you, I would love to discover a cure but in the mean time, I need to learn to live with my condition.
                <br />
                <br />
                For many years I’ve worked with people living with chronic illness, from heart failure to cystic fibrosis, and I’ve learned a lot about how to
                cope with poor health and appearance differences.
                <br />
                <br />
                I’ve created this blog to share my experience as a clinician as well as someone with psoriasis. I hope it will help you to cope too.
                <br />
                <br />
                Check out my academic publications <a href="https://www.researchgate.net/profile/Catherine_Oleary8">here</a>
            </p>
        </main>
    );
}

export default App;
