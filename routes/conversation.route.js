const express = require("express");
const {
  createConversation,
  allConversation,
  oneConversation,
  updateConversation,
  deleteConversation,
} = require("../controllers/conversation.controller");
const conversationRouter = express.Router();

conversationRouter.post("/create", createConversation);
conversationRouter.get("/", allConversation);
conversationRouter.get("/:id", oneConversation);
conversationRouter.put("/update/:id", updateConversation);
conversationRouter.delete("/delete/:id", deleteConversation);

module.exports = conversationRouter;
