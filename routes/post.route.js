const express = require("express");
const {
  createPost,
  allPost,
  onePost,
} = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.post("/all", allPost);
postRouter.post("/one", onePost);

module.exports = postRouter;
