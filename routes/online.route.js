const express = require("express");
const { createOnline, allOnline } = require("../controllers/online.controller");
const onlineRouter = express.Router();

onlineRouter.post("/create", createOnline);
onlineRouter.get("/", allOnline);

module.exports = onlineRouter;
