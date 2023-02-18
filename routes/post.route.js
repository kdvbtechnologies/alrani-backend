const express = require("express");
const {
  createPost,
  allPost,
  onePost,
  updatePost,
} = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.get("/", allPost);
postRouter.get("/:id", onePost);
postRouter.put("/update/:id", updatePost);

module.exports = postRouter;
