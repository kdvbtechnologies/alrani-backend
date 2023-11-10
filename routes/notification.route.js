const express = require("express");
const {
  createNotification,
  allNotification,
  updateNotification,
} = require("../controllers/notification.controller");
const notificationRouter = express.Router();

notificationRouter.post("/create", createNotification);
notificationRouter.get("/", allNotification);
notificationRouter.put("/update/:id", updateNotification);

module.exports = notificationRouter;
