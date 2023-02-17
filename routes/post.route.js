const express = require("express");
const { createPost } = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/post", createPost);

module.exports = postRouter;
