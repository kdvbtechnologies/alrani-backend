const express = require("express");
const stockRouter = express.Router();
const { saveAmount, allAmount } = require("../controllers/stock.controller");

stockRouter.post("/saveAmount", saveAmount);
stockRouter.get("/", allAmount);

module.exports = stockRouter;
