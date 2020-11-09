const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    categoryNoSpaces: { type: String, required: true },
    description: { type: String, required: true },
    videoLink: { type: String, required: true },
    image: { type: String, required: true },
    postBody: { type: String, required: true },
    date: { type: String, required: true },
});

const post = mongoose.model("posts", postSchema);

module.exports = post;
