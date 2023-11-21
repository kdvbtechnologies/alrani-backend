const express = require("express");
const { createModule, allModule } = require("../controllers/module.controller");
const moduleRouter = express.Router();

moduleRouter.post("/create", createModule);
moduleRouter.get("/", allModule);

module.exports = moduleRouter;
