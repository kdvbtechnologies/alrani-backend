const express = require("express");
const accountRouter = express.Router();
const { createAccount, allAccount } = require("../controllers/account.controller");

accountRouter.post("/create", createAccount);
accountRouter.get("/", allAccount);

module.exports = accountRouter;
