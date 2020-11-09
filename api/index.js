const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//CONNECTS TO DATABASE
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to database :)");
});

//GET REQUESTS FOR BLOG POSTS
const posts = require("./routes/posts");
app.use("/api/posts", posts);

if (process.env.PRODUCTION === "True") {
    console.log("React Site Deployed");

    app.use(express.static("./build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./build", "index.html"));
    });
}

app.listen(port, () => {
    console.log("Server live at: " + port);
});
