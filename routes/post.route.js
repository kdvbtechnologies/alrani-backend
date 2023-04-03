const express = require("express");
const {
  createPost,
  allPost,
  onePost,
  updatePost,
  publierVideo,
} = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.get("/", allPost);
postRouter.get("/:id", onePost);
postRouter.put("/update/:id", updatePost);
postRouter.post("/publierVideo", publierVideo);

module.exports = postRouter;
