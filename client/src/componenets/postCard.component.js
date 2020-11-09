import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/postCard.scss";

function Preview(props) {
    if (props.props.videoLink === "https://www.youtube.com/embed/undefined") {
        if (props.props.image === "undefined") {
            return <img src="../16.jpg" alt={props.props.title}></img>;
        } else {
            return <img src={"/thumbs/" + props.props.image + ".jpg"} alt={props.props.title}></img>;
        }
    } else {
        return (
            <iframe
                className="iframe"
                src={props.props.videoLink}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                title={props.props.title}
            ></iframe>
        );
    }
}

export default class PostCard extends Component {
    render() {
        return (
            <Link to={"/post/" + this.props.post._id} className="link" id={this.props.post.title}>
                <div className="postCard">
                    <div className="postPreview">
                        <Preview props={this.props.post}></Preview>
                    </div>
                    <div className="postCardText">
                        <h2>{this.props.post.title}</h2>
                        <p>{this.props.post.description}</p>
                    </div>
                </div>
            </Link>
        );
    }
}
