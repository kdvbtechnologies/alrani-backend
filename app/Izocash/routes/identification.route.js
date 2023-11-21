const express = require("express");
const identificationRouter = express.Router();
const { saveInfos, allInfos } = require("../controllers/identification.controller");

identificationRouter.post("/save", saveInfos);
identificationRouter.get("/", allInfos);

module.exports = identificationRouter;
