const express = require("express");
const {
  createComment,
  allComment,
  updateComment,
} = require("../controllers/comment.controller");
const commentRouter = express.Router();

commentRouter.post("/create", createComment);
commentRouter.get("/", allComment);
commentRouter.put("/update/:id", updateComment);

module.exports = commentRouter;
