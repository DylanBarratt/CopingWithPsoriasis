import React, { Component } from "react";
import renderMarkup from "react-render-markup";
import axios from "axios";
import { FacebookShareButton, FacebookIcon, RedditShareButton, RedditIcon, TwitterShareButton, TwitterIcon } from "react-share";
import "./css/style.scss";

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = { post: [] };
    }

    componentDidMount() {
        axios
            .get("api/posts/post/" + this.props.match.params.id)
            .then((response) => {
                this.setState({ post: response.data });
            })
            .catch((error) => {
                window.location = "/404";
                console.log(error);
            });
    }

    videoEmpty(link) {
        if (link === "https://www.youtube.com/embed/undefined") {
            if (this.state.post.image === "undefined") {
                return <img src="../16.jpg" alt={this.state.post.title}></img>;
            } else {
                return <img src={"/thumbs/" + this.state.post.image + ".jpg"} alt={this.state.post.title}></img>;
            }
        } else {
            return (
                <div id="videoContainer">
                    <iframe
                        title={this.state.post.title}
                        src={this.state.post.videoLink}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }
    }

    render() {
        //const shareUrl = window.location.href;
        const shareUrl = "https://copingwithpsoriasis.com/post/" + this.props.match.params.id;

        return (
            <main className="postMain">
                <div className="title">
                    <h1>{this.state.post.title}</h1>

                    <h2>{this.state.post.category}</h2>
                    <h4>{this.state.post.date}</h4>
                    <br />
                    <div id="shareButtons">
                        <FacebookShareButton url={shareUrl} quote={this.state.post.title}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>

                        <RedditShareButton url={shareUrl} quote={this.state.post.title}>
                            <RedditIcon size={32} round />
                        </RedditShareButton>

                        <TwitterShareButton url={shareUrl} quote={this.state.post.title}>
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                    </div>
                    <h3>{this.state.post.description}</h3>
                </div>

                <div>{this.videoEmpty(this.state.post.videoLink)}</div>

                <div className="postBody">{renderMarkup(this.state.post.postBody)}</div>
            </main>
        );
    }
}
