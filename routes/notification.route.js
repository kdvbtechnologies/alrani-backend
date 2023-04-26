const express = require("express");
const {
  createNotification,
  allNotification,
  oneNotification,
  deleteNotification,
} = require("../controllers/notification.controller");
const notificationRouter = express.Router();

notificationRouter.post("/create", createNotification);
notificationRouter.get("/", allNotification);
notificationRouter.get("/:id", oneNotification);
notificationRouter.delete("/delete/:id", deleteNotification);

module.exports = notificationRouter;
