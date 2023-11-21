const express = require("express");
const { newView, allView } = require("../controllers/view.controller");
const viewRouter = express.Router();

viewRouter.post("/new", newView);
viewRouter.get("/", allView);

module.exports = viewRouter;