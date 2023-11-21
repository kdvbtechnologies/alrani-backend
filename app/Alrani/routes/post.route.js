const express = require("express");
const { newPost, allPost, updateInfos } = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/new", newPost);
postRouter.get("/", allPost);
postRouter.put("/update/:id", updateInfos);

module.exports = postRouter;