import React, { Component } from "react";
import axios from "axios";

import PostCard from "../../componenets/postCard.component";

import "./css/app.scss";

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = { post1: [] };
    }

    componentDidMount() {
        axios
            .get("/api/posts/")
            .then((response) => {
                var posts = response.data;
                var post = posts[posts.length - 1];

                this.setState({ post1: post });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    createPosts() {
        return (
            <div className="recentPost">
                <PostCard post={this.state.post1} key={this.state.post1._id} className="postCard" />
            </div>
        );
    }

    render() {
        return (
            <main className="homeMain">
                <div className="one">
                    <div className="videoWrapper">
                        <iframe
                            src="https://www.youtube.com/embed/wjM68PeAW_A"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                            title="WelcomeVideo"
                        ></iframe>
                    </div>

                    <div className="descriptiveText">
                        <h1>Coping With Psoriasis</h1>
                        <p>
                            Living with psoriasis is hard. <br />
                            If you’re struggling to cope, you’ve come to the right place.
                        </p>
                    </div>
                </div>

                <hr style={{ width: "80%", marginLeft: "10%", opacity: "0.4" }} />

                <div className="two">
                    <div id="homePosts">
                        <h1>My Most Recent Post </h1>
                        <br />
                        {this.createPosts()}
                    </div>
                </div>
            </main>
        );
    }
}
