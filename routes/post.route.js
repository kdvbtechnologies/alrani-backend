const express = require("express");
const {
  createPost,
  allPost,
  onePost,
} = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.get("/", allPost);
postRouter.get("/:id", onePost);

module.exports = postRouter;
