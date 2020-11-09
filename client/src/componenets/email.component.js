import React, { Component } from "react";

import "./css/email.css";
import "./css/slim-10_7.css";

export default class Header extends Component {
    render() {
        return (
            <div id="mc_embed_signup">
                <form
                    action="https://copingwithpsoriasis.us10.list-manage.com/subscribe/post?u=00532c517a5fb076f5ddaf9ad&amp;id=05e5cc8d49"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                >
                    <div id="mc_embed_signup_scroll">
                        <label htmlFor="mce-EMAIL">
                            Get Post Updates
                            <span role="img" aria-label="Smile">
                                😊
                            </span>
                        </label>
                        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email address" required></input>
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                            <input type="text" name="b_00532c517a5fb076f5ddaf9ad_05e5cc8d49" tabIndex="-1" defaultValue="" />
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
