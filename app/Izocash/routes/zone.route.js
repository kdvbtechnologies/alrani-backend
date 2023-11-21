const express = require("express");
const zoneRouter = express.Router();
const { saveZone, allZone, updateInfos } = require("../controllers/zone.controller");

zoneRouter.post("/save", saveZone);
zoneRouter.get("/", allZone);
zoneRouter.put("/update/:id", updateInfos);

module.exports = zoneRouter;
