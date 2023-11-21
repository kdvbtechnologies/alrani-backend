const express = require("express");
const messageRouter = express.Router();
const { newMessage, allMessage } = require("../controllers/message.controller");

messageRouter.post("/new", newMessage);
messageRouter.get("/", allMessage);

module.exports = messageRouter;