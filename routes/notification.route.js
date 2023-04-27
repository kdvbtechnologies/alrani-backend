const express = require("express");
const {
  createNotification,
  allNotification,
  oneNotification,
  deleteNotification,
  updateNotification,
} = require("../controllers/notification.controller");
const notificationRouter = express.Router();

notificationRouter.post("/create", createNotification);
notificationRouter.get("/", allNotification);
notificationRouter.get("/:id", oneNotification);
notificationRouter.delete("/delete/:id", deleteNotification);
notificationRouter.put("/update/:id", updateNotification);

module.exports = notificationRouter;
