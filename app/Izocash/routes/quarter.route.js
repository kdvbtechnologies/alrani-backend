const express = require("express");
const quarterRouter = express.Router();
const { saveQuarter, allQuarter, updateInfos } = require("../controllers/quarter.controller");

quarterRouter.post("/save", saveQuarter);
quarterRouter.get("/", allQuarter);
quarterRouter.put("/update/:id", updateInfos);

module.exports = quarterRouter;
