import React, { Component } from "react";
import axios from "axios";

import PostCard from "../../componenets/postCard.component";

import "./css/style.scss";

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = { posts: [], category: "" };

        this.searchPosts = this.searchPosts.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.category === "*") {
            axios
                .get("/api/posts")
                .then((response) => {
                    this.setState({ posts: response.data });
                    this.setState({ category: "All Posts" });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios
                .get("/api/posts/categories/" + this.props.match.params.category)
                .then((response) => {
                    this.setState({ posts: response.data });
                    this.setState({ category: this.state.posts[0].category });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    createPosts() {
        console.log(this.state.posts);

        return this.state.posts.map((currentPost) => {
            return <PostCard post={currentPost} key={currentPost._id} />;
        });

        // var postCards = [];

        // for (var i = 0; i < this.state.posts.length; i++) {
        //     var currentPost = this.state.posts[i];
        //     postCards.push(<PostCard post={currentPost} key={currentPost._id} />);
        // }

        // return postCards;
    }

    searchPosts() {
        const searchValue = document.getElementById("searchBox").value.toLowerCase();

        //used to stop iframes from playing while hidden
        const iframes = document.getElementsByClassName("iframe");
        for (var i = 0; i < iframes.length; i++) {
            const ele = iframes[i];
            var srcV = ele.src;

            ele.src = srcV;
        }

        this.state.posts.forEach((element) => {
            const ele = document.getElementById(element.title);
            if (!element.title.toLowerCase().includes(searchValue)) {
                ele.classList.add("hidden");
            } else {
                ele.classList.remove("hidden");
            }
        });
    }

    render() {
        return (
            <main className="postsMain">
                <h1>{this.state.category}</h1>
                <form
                    className="categoryControls"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input type="text" placeholder="Search Post Titles" id="searchBox" onChange={this.searchPosts}></input>
                </form>

                <div id="postCardGrid">{this.createPosts()}</div>
            </main>
        );
    }
}
