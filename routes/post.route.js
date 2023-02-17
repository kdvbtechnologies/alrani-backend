const express = require("express");
const { createPost } = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/create", createPost);

module.exports = postRouter;
