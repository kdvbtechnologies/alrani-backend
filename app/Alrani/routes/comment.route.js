const express = require("express");
const { newComment, allComment, updateComment } = require("../controllers/comment.controller");
const commentRouter = express.Router();

commentRouter.post("/new", newComment);
commentRouter.get("/", allComment);
commentRouter.put("/update/:id", updateComment);

module.exports = commentRouter;
