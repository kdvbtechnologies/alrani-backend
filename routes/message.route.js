const express = require("express");
const {
  createMessage,
  allMessage,
} = require("../controllers/message.controller");
const messageRouter = express.Router();

messageRouter.post("/create", createMessage);
messageRouter.get("/", allMessage);

module.exports = messageRouter;
