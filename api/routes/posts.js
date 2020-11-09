const express = require("express");
const router = express.Router();

const post = require("../models/postSchema");

router.route("/").get((req, res) => {
    post.find()
        .then((posts) => res.json(posts))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/post/:id").get((req, res) => {
    post.findById(req.params.id)
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/categories/:category").get((req, res) => {
    post.find({ categoryNoSpaces: req.params.category.replace(/\s/g, "").toLowerCase() })
        .then((posts) => res.json(posts))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
