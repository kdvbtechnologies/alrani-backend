const express = require("express");
const collaboratorRouter = express.Router();
const { newCollaborator, allCollaborator, updateInfos } = require("../controllers/collaborator.controller");

collaboratorRouter.post("/new", newCollaborator);
collaboratorRouter.get("/", allCollaborator);
collaboratorRouter.put("/update/:id", updateInfos);

module.exports = collaboratorRouter;