import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/header.scss";

export default class Header extends Component {
    //shows and hides modal
    openNav() {
        const nav = document.getElementById("nav");
        const burger = document.getElementById("burger");
        const header = document.getElementById("header");

        nav.classList.toggle("navShow");
        burger.classList.toggle("change");
        header.classList.toggle("change");
    }

    closeNav() {
        window.location.reload();
        this.openNav();
    }

    render() {
        return (
            <header id="header">
                <div id="title">
                    <Link to="/">
                        <h1>Coping With Psoriasis</h1>
                        <h2>Tips from a psychologist with psoriasis</h2>
                    </Link>
                </div>

                <div id="burger" className="burgerContainer" onClick={this.openNav}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div id="nav">
                    <div id="navContent">
                        <ul>
                            <li onClick={this.openNav}>
                                <Link to="/">Home</Link>
                            </li>
                            <li onClick={this.openNav}>
                                <Link to="/aboutMe">About Me</Link>
                            </li>
                            <li onClick={this.closeNav}>
                                <Link to="/category/emotionalimpact">Emotional Impact</Link>
                            </li>
                            <li onClick={this.closeNav}>
                                <Link to="/category/waystocope">Ways To Cope</Link>
                            </li>
                            {/*<li onClick={this.openNav}>
                                <Link to="/eBook">Download E-book</Link>
                            </li> */}
                            <li onClick={this.openNav}>
                                <Link to="/disclaimer">Disclaimer</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
