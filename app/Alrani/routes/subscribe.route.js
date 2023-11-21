const express = require("express");
const subscribeRouter = express.Router();
const { newSubscriber, allSubscriber, updateInfos } = require("../controllers/subscribe.controller");

subscribeRouter.post("/new", newSubscriber);
subscribeRouter.get("/", allSubscriber);
subscribeRouter.put("/update/:id", updateInfos);

module.exports = subscribeRouter;