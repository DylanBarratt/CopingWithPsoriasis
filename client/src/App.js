import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css";

//pages
import Home from "./pages/home/home.component";
import AboutMe from "./pages/aboutMe/aboutMe.component";
import Disclaimer from "./pages/disclaimer/disclaimer.component";
import Category from "./pages/category/category.component";
import Post from "./pages/post/post.component";
import NoMatch from "./pages/404/404.component";

//components that go on every page
import Header from "./componenets/header.component";
import Subscribe from "./componenets/email.component";

function App() {
    return (
        <div>
            <Header></Header>
            <article>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/aboutMe" component={AboutMe}></Route>
                    <Route path="/category/:category" exact component={Category}></Route>
                    <Route path="/post/:id" component={Post}></Route>
                    <Route path="/disclaimer" component={Disclaimer}></Route>
                    <Route component={NoMatch}></Route>
                </Switch>
            </article>
            <Subscribe></Subscribe>
        </div>
    );
}

export default App;
