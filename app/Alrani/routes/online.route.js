const express = require("express");
const { newOnline, allOnline } = require("../controllers/online.controller");
const onlineRouter = express.Router();

onlineRouter.post("/new", newOnline);
onlineRouter.get("/", allOnline);

module.exports = onlineRouter;
