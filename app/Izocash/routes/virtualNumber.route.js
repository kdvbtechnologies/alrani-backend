const express = require("express");
const virtualNumberRouter = express.Router();
const { saveVirtualNumber, allVirtualNumber } = require("../controllers/virtualNumber.controller");

virtualNumberRouter.post("/save", saveVirtualNumber);
virtualNumberRouter.get("/", allVirtualNumber);

module.exports = virtualNumberRouter;
