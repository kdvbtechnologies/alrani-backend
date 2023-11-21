const express = require("express");
const conversationRouter = express.Router();
const { newConversation, allConversation, updateConversation, } = require("../controllers/conversation.controller");

conversationRouter.post("/new", newConversation);
conversationRouter.get("/", allConversation);
conversationRouter.put("/update/:id", updateConversation);

module.exports = conversationRouter;
