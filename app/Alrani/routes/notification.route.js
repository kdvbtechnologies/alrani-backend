const express = require("express");
const notificationRouter = express.Router();
const { newNotification, allNotification, updateInfos } = require("../controllers/notification.controller");

notificationRouter.post("/new", newNotification);
notificationRouter.get("/", allNotification);
notificationRouter.put("/update/:id", updateInfos);

module.exports = notificationRouter;