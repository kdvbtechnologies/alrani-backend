const express = require("express");
const replyRouter = express.Router();
const { newReply, allReply, updateReply } = require("../controllers/reply.controller");

replyRouter.post("/new", newReply);
replyRouter.get("/", allReply);
replyRouter.put("/update/:id", updateReply);

module.exports = replyRouter;
