const express = require("express");
const toolRouter = express.Router();
const { activateTool, allTool, updateInfos } = require("../controllers/tool.controller");

toolRouter.post("/activate", activateTool);
toolRouter.get("/", allTool);
toolRouter.put("/update/:id", updateInfos);

module.exports = toolRouter;
